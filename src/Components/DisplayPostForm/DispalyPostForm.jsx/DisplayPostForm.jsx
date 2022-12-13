import React, { useState } from 'react';

const DislayPostForm = (props) => {
    {props.parentEntries.map((post) => {
        return (
            <div>
                <h3>{post.fullName}</h3>
                <p>{post.post}</p>
            </div>
            
        )
    })}

}
 
export default DislayPostForm;