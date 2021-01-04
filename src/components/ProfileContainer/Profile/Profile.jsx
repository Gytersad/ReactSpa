import React from "react";
import c from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {

    return(
        <div className={c.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatusThank={props.updateStatusThank}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile
