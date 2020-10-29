import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {


    let postsElements = props.posts
        .map(p => <Post message={p.message} like={p.likesCount}/>)

    return (
        <div className={c.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="20" rows="3">

                    </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts