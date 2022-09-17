import axios from 'axios';
import React, { useState } from 'react';  //imrs 

function PostCreate() {

    //Declaration
    const [title, setTitle] = useState('');
    // post  localost:4000
    const onSumit = async (event) => {
        event.preventDefault();
        await axios.post(`http://${process.env.REACT_APP_POST_HOST}/posts`, {
            title
        });
        setTitle('');
    }

    return (<div>
        <form onSubmit={onSumit}>
            <div className='form-group'>
                <label>Title</label>
                <input value={title} onChange={e => setTitle(e.target.value)} className='form-control'></input>
            </div>
            <br />
            <button className='btn btn-success' disabled={title.length===0}>Submit {}</button>
        </form>
    </div>);
}

export default PostCreate;
