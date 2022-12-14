import { useState } from 'react';
import PostForm from './Components/PostForm/PostForm';
import DislayPostForm from './Components/DisplayPostForm/DisplayPostForm';
import './App.css'


function App() {

  const[posts, setPosts] = useState([])

  function addNewPost(post){

    let tempPosts = [...posts, post];

    setPosts(tempPosts)
  }

  return (
    <div className='container width d-flex align-content-centerS'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='border-styles width' style={{'background-color': 'white'}}>
            <PostForm postProperty={addNewPost} className='panel'></PostForm>
          </div>
          <div className='border-styles width set-width' style={{'background-color': 'white'}}>
            <DislayPostForm parentEntries={posts} className='panel'/>
          </div>
        </div>
      </div>
    </div>
    

  );
}

export default App;
