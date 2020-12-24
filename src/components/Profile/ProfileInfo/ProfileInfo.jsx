import React from "react";
import c from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } else return (
        <div className={c.content}>
            <h1>{props.profile.fullName}</h1>
            <img src={props.profile.photos.large} alt='#'/>
            <div className={c.discriptionBlock}>
                <p>{props.profile.lookingForAJobDescription}</p>
                <p>{props.profile.contacts.github}</p>
            </div>
        </div>
    );
}

export default ProfileInfo
