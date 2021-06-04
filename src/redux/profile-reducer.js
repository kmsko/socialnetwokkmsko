import { ProfileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const REFRESH_POST = 'REFRESH-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_PHOTO_PROFILE = 'SET_PHOTO_PROFILE';
const REFRESH_PROFILE = 'REFRESH-PROFILE'
const IS_FETCHING = 'IS_FETCHING'

let initialState = {
    myPosts: [],
    textPost: '',
    profile: null,
    status: "",
    myId: null,
    isFetching: true,
}

const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        // Создать и отправить пост
        case ADD_POST:
            let newPost = {
                id: 1,
                textPost: state.textPost,
                likeCount: 0
            }
            return {
                ...state,
                myPosts: [newPost, ...state.myPosts],
                textPost: ""
            }
        // Обновляет и отображает буквы в поле создания ПОСТА
        case REFRESH_POST:
            {
                return {
                    ...state,
                    textPost: action.post_text
                }
            }
        case SET_USER_PROFILE:
            {
                return { ...state, profile: action.profile }
            }
        case SET_USER_STATUS:
            {
                return { ...state, status: action.status }
            }
        case SET_PHOTO_PROFILE:
            {

                return { ...state, profile: { ...state.profile, photos: action.photoAva } }
            }
        case REFRESH_PROFILE:
            return { ...state, myId: action.myId }
        case IS_FETCHING: {
            return { ...state, isFetching: action.bool }
        }
        default:
            return state;
    }
}
export const addPost = () => ({ type: ADD_POST });
export const refreshTextPost = (post_text) => ({ type: REFRESH_POST, post_text: post_text });
export const refreshProfileAC = (myId) => ({ type: REFRESH_PROFILE, myId })
const fetchingProfile = (bool) => ({ type: IS_FETCHING, bool });
const setUserStatusAC = (status) => ({ type: SET_USER_STATUS, status });
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const setPhotoProfile = (photoAva) => ({ type: SET_PHOTO_PROFILE, photoAva });

export const getProfileThunkAPI = (userId) => async (dispatch) => {
    dispatch(fetchingProfile(true))
    let response = await ProfileAPI.getUserProfile(userId)
    dispatch(setUserProfile(response.data));
    dispatch(fetchingProfile(false));
}
export const getUserStatusThunk = (userId) => async (dispatch) => {
    let response = await ProfileAPI.getUserStatus(userId)
    dispatch(setUserStatusAC(response.data))
}

export const setUserStatusThunk = (status) => async (dispatch) => {
    let response = await ProfileAPI.setUserStatus(status)
    dispatch(setUserStatusAC(status))
}

export const savePhotoThunk = (file) => async (dispatch) => {
    let response = await ProfileAPI.savePhoto(file)
    if (response.data.resultCode === 0)
        dispatch(setPhotoProfile(response.data.data.photos))
}

export default profileReducer;