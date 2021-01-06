import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {


    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} like={p.likesCount}/>)


    const onSubmit = (formData) => {
        let postId = props.posts.length + 1
        let postBody = formData.post
        props.addPostActionCreator(postBody,postId)
    }
    return (
        <div className={c.postBlock}>
            <h3>My post</h3>
            <div>
                <MyPostFormRedux onSubmit={onSubmit}/>
            </div>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>
    );
}


const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'post'} placeholder={'Enter your post'}/>
                <br/>
            <button>Add post</button>
        </form>
    )
}

const MyPostFormRedux = reduxForm({form: 'Posts'})(MyPostForm)

export default MyPosts
