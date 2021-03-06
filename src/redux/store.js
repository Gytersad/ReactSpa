import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'Yo', likesCount: 13}],
            newPostText: 'Enter your post'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Yakov'},
                {id: 2, name: 'Dmitriy'},
                {id: 3, name: 'Artem'},
                {id: 4, name: 'Sergey'}],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'Pog'},],
            newMessageBody: ''
        },
        sidebarPage: ''
    },
    _callSubscriber() {
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)

        this._callSubscriber(this._state);
    }
}


export default store
