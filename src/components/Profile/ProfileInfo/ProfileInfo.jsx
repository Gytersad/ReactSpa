import React from "react";
import c from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
        <div className={c.content}>
            <h1>Main Content</h1>
            <img src="https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg" alt=""/>
            <div className={c.discriptionBlock}>
                Ava +description
            </div>
        </div>
    );
}

export default ProfileInfo