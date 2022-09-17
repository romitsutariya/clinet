import React, { useState, useEffect } from 'react';  //imrse  r=react s=state e=effect
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';
function PostList() {

    const [posts,setPosts]=useState({});
    const fetchPost= async () =>{
        const res=await axios.get(`http://${process.env.REACT_APP_QUERY_HOST}/posts`);
        setPosts(res.data);
    }
   
    useEffect(()=>{
        fetchPost();
    },[]);

    const renderPosts= Object.values(posts).map(post=>{
        return(
                <div 
                     className='card mb-5' 
                     key={post.id} 
                     style={{width:'30%'}}>
                  <div className='card-body'>
                        <h2>{post.title}</h2>
                        <CommentCreate postId={post.id}/>
                        <hr/>
                        <CommentList comments={post.comments}/>
                  </div>
                </div>
        );
    });

    return (<div className='d-flex flex-row flex-wrap justify-content-between'>
        {renderPosts}
    </div>);
}

export default PostList;