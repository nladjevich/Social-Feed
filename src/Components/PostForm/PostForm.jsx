import React, { useState } from 'react';

const PostForm = (props) => {

    const [fullName, setFullName] = useState();
    const [post, setPost] = useState();

    function onSubmit(formEvent){
        const formValuesObject = {
            fullName: fullName,
            post: post
        }
        console.log(formValuesObject)
        props.entrProperty(formValuesObject)
    }

    return ( 
        <form onSubmit={onSubmit} action="post">
            <label htmlFor="full_name">Name</label>
            <input type="text" value={fullName} name='full_name' /><br />
            <label htmlFor="post_content">Post</label>
            <input type="text"  value={post} name="post_content" />
            <button type='submit'>Post</button>
        </form>
     );
};
 
export default PostForm;