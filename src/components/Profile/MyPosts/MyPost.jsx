import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={c.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="20" rows="3"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                <Post message='Hi!' like='5'/>
                <Post message='Hello!'/>
            </div>
        </div>
    );
}

export default MyPosts