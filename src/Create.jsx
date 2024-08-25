import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function Create() {
    const history=useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = () => {
        const headers = { "Access-Control-Allow-Origin": "*" };
        axios.post('https://66c864728a477f50dc2ddc52.mockapi.io/crud', 
        { name: name, email: email }, 
        { headers: headers }
        )
        .then(response => {
            console.log(response.data);  // Log the response data
        })
        .catch(err => {
            console.log(err);  // Log any errors
        }).then(()=>{
history("/read");
        })
    };

    return (
       <>
       <h1>Create </h1>
          <form >
            <div className="mb-3">
                <label className='form-label'>Name</label>
                <input type="text" className='form-control' onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className='form-label'>Email address</label>
                <input type="email" className='form-control' aria-describedby='emailHelp' onChange={(e)=>setEmail(e.target.value)} />
            </div>
          </form>
          <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Submit</button>
         
       </>
    );
}

export default Create;
