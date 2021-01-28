import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControl";


const MyPosts = React.memo( (props) => {


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
})

const maxLength10 = maxLength(10)

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'post'} placeholder={'Enter your post'}
                   validate={[required, maxLength10]}/>
                <br/>
            <button>Add post</button>
        </form>
    )
}

const MyPostFormRedux = reduxForm({form: 'Posts'})(MyPostForm)

export default MyPosts
