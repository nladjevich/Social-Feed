import React, { useState } from 'react';
import './PostForm.css'


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
        <div>
            <form onSubmit={onSubmit} action="post">
                <label className='spacing' htmlFor="full_name">Name: </label>
                <input type="text" value={fullName} name='full_name' onChange={(event) =>  setFullName(event.target.value)}/><br />
                <label className='spacing' htmlFor="post_content">Post: </label>
                <input className='input-size' type="text" size='50' value={post} name="post_content" onChange={(event) => setPost(event.target.value)}/>
                <button className='spacing btn btn-primary' type='submit'>Post</button>
            </form>
        </div>
        
     );
};
 
export default PostForm;