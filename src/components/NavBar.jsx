import React from "react";
import c from './NavBar.module.css';

const NavBar = () => {
    return(
        <nav className={c.nav}>
            <ul className={c.menu}>
                <li className={c.item}><a href="#"></a>Profile</li>
                <li className={c.item}><a href="#"></a>Messages</li>
                <li className={c.item}><a href="#"></a>News</li>
                <li className={c.item}><a href="#"></a>Music</li>
                <li className={c.item}><a href="#"></a>Settings</li>
            </ul>
        </nav>
    );
}

export default NavBar