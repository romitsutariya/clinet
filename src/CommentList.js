// import React, {useState,useEffect} from 'react';
// // import axios from 'axios'

import React from 'react';


function CommentList({comments}) {
    
    // const [commnets,setComents]=useState([]);
    // const fetchComments= async (postIdToGet) =>{
    //     const res=await axios.get(`http://localhost:5000/posts/${postIdToGet}/comments`);
    //     setComents(res.data);
    // }

    // useEffect(()=>{
    //     fetchComments(postId);
    // },[postId]);
    console.log(comments)
    const renderComments= comments.map(commnet=>{
        return(<li key={commnet.id}>{commnet.content}- {commnet.status}</li>);
    });
 
    return (  <ul>{renderComments}</ul>);
}

export default CommentList;