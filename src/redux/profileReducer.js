const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        posts: [
            {id: 1, message: 'Hi', likesCount: 12},
            {id: 2, message: 'Yo', likesCount: 13}],
        newPostText: ''
};

const profileReducer = (state = initialState, action) => {

    //'UPDATE-NEW-POST-TEXT'--------------------------------------------------
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0

            };
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        default:
            break;
    }
    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer