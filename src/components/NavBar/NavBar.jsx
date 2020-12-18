import React from "react";
import c from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return(
        <nav className={c.nav}>
            <ul>
                <li className={c.item}>
                    <NavLink to="/profile"  activeClassName={c.active}>Profile</NavLink>
                </li>
                <li className={c.item}>
                    <NavLink to="/dialogs" activeClassName={c.active}>Messages</NavLink>
                </li>
                <li className={c.item}>
                    <NavLink to="/users" activeClassName={c.active}>Users</NavLink>
                </li>
                <li className={c.item}>
                    <NavLink to="/news" activeClassName={c.active}>News</NavLink>
                </li>
                <li className={c.item}>
                    <NavLink to="/music" activeClassName={c.active}>Music</NavLink>
                </li>
                <li className={c.item}>
                    <NavLink to="/settings" activeClassName={c.active}>Settings</NavLink>
                </li>

            </ul>
        </nav>
    );
}

export default NavBar
