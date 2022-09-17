import React, {useState} from 'react';
import axios from 'axios'
function CommentCreate({postId}) {
    const [content,setConstent]=useState('');
    
    const onSubmit=async (event)=>{
        event.preventDefault();
        axios.post(`http://${process.env.REACT_APP_COMMENT_HOST}/posts/${postId}/comments`,{
            content
        }).catch(err=>console.log(err.message));
        setConstent('');
    }
    
    return (  <div>
           <form onSubmit={onSubmit}>
            <div className='form-group'>
               <label >New Commnet</label>
               <input className='form-control' value={content} onChange={e=> setConstent(e.target.value)}></input>
            </div>

            <button className='btn btn-primary mt-2' disabled={content.length===0}>Post</button>
           </form>


    </div>);
}

export default CommentCreate;