import React from "react";
import c from './Profile.module.css';

const Profile = () => {
    return(
        <div className={c.content}>
            <h1>Main Content</h1>
            <img src="https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg" alt=""/>
            <div>Ava +description</div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div className={c.posts}>
                    <div className={c.item}>post 1</div>
                    <div className={c.item}>post 2</div>
                </div>
            </div>

        </div>
    );
}

export default Profile