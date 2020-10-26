import React from "react";
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPost";

const Profile = () => {
    return(
        <div className={c.content}>
            <h1>Main Content</h1>
            <img src="https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg" alt=""/>
            <div>Ava +description</div>
            <MyPosts/>
        </div>
    );
}

export default Profile