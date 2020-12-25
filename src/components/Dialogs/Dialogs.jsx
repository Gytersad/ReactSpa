import React from "react";
import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>);


    let onSendMessageClick = () => {
        let messageId = props.messages.length + 1
        props.sendMessageCreator(messageId);
    }
    let onNewMessageChange = (evt) => {
        let body = evt.target.value;
        props.updateNewMessageBodyCreator(body);
    }

    if (!props.isAuth){return <Redirect to={'/login'}/>}

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <textarea
                        onChange={onNewMessageChange}
                        value={props.newMessageBody}
                        placeholder='Enter your message'>

                    </textarea>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs
