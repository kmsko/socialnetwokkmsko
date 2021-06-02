

const REFRESH_BAR = 'REFRESH-BAR';


let initialState = {
   activeURL: "",
}
const navBarReducer = (state = initialState, action) => {
    
    switch (action.type) {
  
        case REFRESH_BAR:
            return{...state, activeURL: action.activeURL}

        default: return state;
    }
}
export const refreshBarAC = (activeURL) => ({ type: 'REFRESH-BAR', activeURL })
export default navBarReducer;


