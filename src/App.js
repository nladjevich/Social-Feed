import { useState } from 'react';
import PostForm from './Components/PostForm/PostForm';
import DislayPostForm from './Components/DisplayPostForm/DispalyPostForm.jsx/DisplayPostForm';

function App() {

  const[posts, setPosts] = useState([{Fullname: 'Eric Man', Post:'Hi Guys:3'}])

  function addNewPost(post){

    let tempPosts = [...posts, post];

    setPosts(tempPosts)
  }

  return (
    <div>
      <PostForm postProperty={addNewPost} ></PostForm>
      <DislayPostForm parentEntries={posts}/>
      
    </div>
  );
}

export default App;
