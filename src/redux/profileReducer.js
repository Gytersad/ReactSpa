import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const TOGGLE_FETCHING = 'TOGGLE-FETCHING'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

let initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'Yo', likesCount: 13}],
    isFetching: false,
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: action.postId,
                message: action.postBody,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case TOGGLE_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (postBody,postId) => ({type: ADD_POST, postBody, postId})


export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})



export const getUserProfileThank = (userId) =>{
    return (dispatch) => {
        dispatch(toggleFetching(true))
        usersAPI.getProfile(userId).then(response => {
            dispatch(toggleFetching(false))
            dispatch(setUserProfile(response.data))
            //this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
}
export const getStatusThank = (userId) =>{
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}
export const updateStatusThank = (status) =>{
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0){
                dispatch(setStatus(status))
            }

        })
    }
}

export default profileReducer
