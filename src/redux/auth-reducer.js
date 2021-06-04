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


export const authorizationThank = () => async (dispatch) => {
    let response = await authAPI.getAuthorization()
    let { email, id, login } = response.data.data;
    if (response.data.resultCode === 0) {
        dispatch(setUserAuth(email, id, login, true))
    }

}
export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(authorizationThank())
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserAuth(null, null, null, false))
    }
}

export default authReducer;

