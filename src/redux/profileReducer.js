import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const TOGGLE_FETCHING = 'TOGGLE-FETCHING'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'Yo', likesCount: 13}],
    newPostText: '',
    isFetching: false,
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: action.postId,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case TOGGLE_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (postId) => ({type: ADD_POST, postId: postId})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

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


export default profileReducer
