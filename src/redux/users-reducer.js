import { UsersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const ACTIVE_PAGE = 'ACTIVE_PAGE'
const IS_FETCHING = 'IS_FETCHING'
const IS_FOLLOWING = 'IS_FOLLOWING'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    curentPage: 1,
    isFetching: true,
    followingProgres: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        // подписаться
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return { ...el, followed: true }
                    }
                    return el;
                })
            }
        // Отписаться
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return { ...el, followed: false }
                    }
                    return el;
                })
            }

        }
        //  Добавить на страницу пользователей
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        //Выбранная страница
        case ACTIVE_PAGE: {
            return { ...state, curentPage: action.numberPage }
        }
        //  Запомнить общее количество пользователей
        case SET_TOTAL_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case IS_FETCHING: {
            return { ...state, isFetching: action.bool }
        }
        case IS_FOLLOWING: {
            return {
                ...state, followingProgres: action.isFetching
                    ? [...state.followingProgres, action.userId]
                    : state.followingProgres.filter(id => id != action.userId)
            }
        }
        default: return state;
    }
}
const followAC = (userId) => ({ type: FOLLOW, userId });
const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count });
export const activePage = (numberPage) => ({ type: ACTIVE_PAGE, numberPage });
export const fetching = (bool) => ({ type: IS_FETCHING, bool });
export const followingProgresAC = (isFetching, userId) => ({ type: IS_FOLLOWING, isFetching, userId });

export const getUsersThunkCreator = (curentPage, pageSize) => async (dispatch) => {
    dispatch(fetching(true));
    let data = await UsersAPI.getUsers(curentPage, pageSize)
    dispatch(setUsers(data.data.items));
    dispatch(setTotalCount(data.data.totalCount));
    dispatch(fetching(false));
}
export const follow = (userId) => async (dispatch) => {
    dispatch(followingProgresAC(true, userId));
    let response = await UsersAPI.followAPI(userId)
    if (response.data.resultCode === 0) {
        dispatch(followAC(userId));
        dispatch(followingProgresAC(false, userId));
    }
}
export const unfollow = (userId) => async (dispatch) => {
    
    dispatch(followingProgresAC(true, userId));
    let resultCode = await UsersAPI.unfollowAPI(userId)
    if (resultCode.data.resultCode === 0) {
        dispatch(unfollowAC(userId));
        dispatch(followingProgresAC(false, userId));
    }
}
export const onClickUsersPage = (numberPage, pageSize) => async (dispatch) => {
    
    dispatch(activePage(numberPage));
    dispatch(fetching(true));
    let data = await UsersAPI.getUsers(numberPage, pageSize)
    dispatch(setUsers(data.data.items));
    dispatch(fetching(false));
}
export default usersReducer;

