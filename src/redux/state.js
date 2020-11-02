let renderEntireTree = () => {

};

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 12},
            {id: 2, message: 'Yo', likesCount: 13}],
        newPostText: 'kekw'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Iakov'},
            {id: 2, name: 'Dima'},
            {id: 3, name: 'Grisha'},
            {id: 4, name: 'Serega'}],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Yo'},
            {id: 3, message: 'Pog'},]
    },


};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0

    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;

    renderEntireTree(state);
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state