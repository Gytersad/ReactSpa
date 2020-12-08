import React from "react";
import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.onSendMessageClick();
    }
    let onNewMessageChange = (e) => {
        let body =  e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea  onChange={ onNewMessageChange }
                                   value={newMessageBody}
                                   placeholder='Enter your message'>

                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs
