import { authAPI } from "../api/api";

const SET_USER_AUTH = 'SET_USER_AUTH';

let initialState = {
    id: null,
    email: null,
    login: null,
    logOn: false
}

const authReducer = (state = initialState, action) => {


    switch (action.type) {

        case SET_USER_AUTH: {

            return {
                ...state,
                ...action.data,
            }
        }
        default: return state;
    }
}
export const setUserAuth = (email, id, login, logOn) => ({ type: SET_USER_AUTH, data: { email, id, login, logOn } });


export const authorizationThank = () => (dispatch) => {
       return authAPI.getAuthorization().then(response => {
            let { email, id, login } = response.data.data;
            if (response.data.resultCode === 0) {
                dispatch(setUserAuth(email, id, login, true))
            }
        });
    }
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authorizationThank())
            }
        });
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserAuth(null, null, null, false))
            }
        });
    }   
}

export default authReducer;

