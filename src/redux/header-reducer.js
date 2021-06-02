
const SET_DAY_OR_NIGHT = 'SET_DAY_OR_NIGHT';

let initialState = {
   dayOrNight: false
}

const themReducer = (state = initialState, action) => {


    switch (action.type) {

        case SET_DAY_OR_NIGHT: {

            return {
                dayOrNight: action.bool
            }
        }
        default: return state;
    }
}
export const dayOrNighAC = (bool) => ({ type: SET_DAY_OR_NIGHT, bool});

export default themReducer;

