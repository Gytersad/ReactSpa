import React from "react";
import c from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id} activeClassName={c.active}>{props.name}</NavLink>
        </div>
    );
}


export default DialogItem
