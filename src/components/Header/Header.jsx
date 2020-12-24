import React from "react";
import c from './Header.module.css';
import {NavLink} from "react-router-dom";



const Header = (props) => {
    return(
        <header className={c.header}>
            <img src="data:image/jpeg;base64,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" alt=""/>
            <div className={c.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header
