const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Iakov'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Grisha'},
        {id: 4, name: 'Serega'}],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Pog'},],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) =>{

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newText;
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            break;
        default: break;
    }

    return state;
}

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, newText: body})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export default dialogsReducer