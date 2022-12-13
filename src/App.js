import { useState } from 'react';
import './Components/PostForm/PostForm'
import PostForm from './Components/PostForm/PostForm';
import DislayPostForm from './Components/DisplayPostForm/DispalyPostForm.jsx/DisplayPostForm';

function App() {

  const[posts, setPosts] = useState()

  function addNewPost(post){

    let tempPosts = [...posts, post];

    setPosts(tempPosts)
  }

  return (
    <div>
      <PostForm></PostForm>
      <DislayPostForm postProperty={addNewPost}/>
      
    </div>
  );
}

export default App;
