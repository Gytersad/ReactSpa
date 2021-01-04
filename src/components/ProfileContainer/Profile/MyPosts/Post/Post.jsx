import React from "react";
import c from './Post.module.css';

const Post = (props) => {
    return(
        <div className={c.item}>
            {props.message}
            {props.like}
        </div>
    );
}

export default Post