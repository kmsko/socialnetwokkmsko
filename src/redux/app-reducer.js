import { authAPI } from "../api/api";
import { authorizationThank } from "./auth-reducer";

const INITIALIZ = 'INITIALIZ';

let initialState = {
    itialazed: false,
}

const appReducer = (state = initialState, action) => {


    switch (action.type) {

        case INITIALIZ: {

            return {
                ...state,
                itialazed: true,
            }
        }
        default: return state;
    }
}
export const itialaizingAC = () => ({ type: INITIALIZ });


export const initialApp = () => (dispatch) => {
       let promise = dispatch(authorizationThank());
       promise.then(()=>{
           dispatch(itialaizingAC())
       })
}

export default appReducer;

