import React, { useState } from 'react';
import './PostForm'


const PostForm = (props) => {

    const [fullName, setFullName] = useState();
    const [post, setPost] = useState();
  

    function onSubmit(event){
        event.preventDefault();
        let formValuesObject = {
            fullName: fullName,
            post: post
        };
        console.log(formValuesObject);
        props.postProperty(formValuesObject);
    };

    return ( 
        <form onSubmit={onSubmit} action="post">
            <label htmlFor="full_name">Name: </label>
            <input type="text" value={fullName} name='full_name' onChange={(event) =>  setFullName(event.target.value)}/><br />
            <label htmlFor="post_content">Post: </label>
            <input type="text"  value={post} name="post_content" onChange={(event) => setPost(event.target.value)}/>
            <button type='submit'>Post</button>
        </form>
     );
};
 
export default PostForm;