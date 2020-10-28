import React from "react";
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={c.dialog + ' ' + c.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) =>{
    return(
        <div className={c.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                <DialogItem name='Iakov' id='1'/>
                <DialogItem name='Dima' id='2'/>
                <DialogItem name='Grisha' id='3'/>
                <DialogItem name='Serega' id='4'/>

            </div>
            <div className={c.messages}>
                <Message message='Hi'/>
                <Message message='Yo'/>
                <Message message='Pog'/>
            </div>
        </div>
    );
}

export default Dialogs