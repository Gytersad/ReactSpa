let store = {
    _state: {
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


    },
    _callSubscriber() {
    },
    getState() {
        return this._state;
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0

        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;

        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}


export default store