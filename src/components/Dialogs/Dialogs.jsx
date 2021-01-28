import React from "react";
import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControl";
import {maxLength, required} from "../../utils/validators/validators";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>);


    const onSubmit = (formData) => {
        let messageId = props.messages.length + 1
        let messageBody = formData.message
        props.sendMessageCreator(messageId, messageBody)
    }

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
                    <MyPostFormRedux onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    );
}

const maxLength10 = maxLength(10)

const DialogsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name={'message'}
                   validate={[required, maxLength10]}
                   placeholder={'Enter your post'}/>
            <br/>
            <button>Send</button>
        </form>
    )
}

const MyPostFormRedux = reduxForm({form: 'Messages'})(DialogsForm)


export default Dialogs
