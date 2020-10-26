import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div>
            My post
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>
            <div className={c.posts}>
                <Post message='Hi!' like='5'/>
                <Post message='Hello!'/>
            </div>
        </div>
    );
}

export default MyPosts