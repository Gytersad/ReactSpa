import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";




const MyPosts = (props) => {


    let postsElements = props.posts
        .map(p => <Post message={p.message} like={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={c.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onChangePost} ref={newPostElement} name="" id="" cols="20" rows="3"
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts