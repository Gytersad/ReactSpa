import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {


    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} like={p.likesCount}/>)

    let onAddPost = () => {
        let postId = props.posts.length + 1
        props.addPost(postId)
    }

    let onChangePost = (evt) => {
        let text = evt.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={c.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onChangePost}
                              placeholder='Enter your post'
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts
