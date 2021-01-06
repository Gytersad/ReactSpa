const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Yakov'},
        {id: 2, name: 'Dmitriy'},
        {id: 3, name: 'Artem'},
        {id: 4, name: 'Sergey'}],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Pog'},],
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: action.messageId, message: action.messageBody}]
            }
        default:
            return state;
    }
}


export const sendMessageCreator = (messageId, messageBody) => ({type: SEND_MESSAGE, messageId, messageBody})

export default dialogsReducer
