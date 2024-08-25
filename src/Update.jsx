import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
function Update() {
    const history=useNavigate()

    const handleupdate=()=>{
        axios.put(`https://66c864728a477f50dc2ddc52.mockapi.io/crud/${id}`,
        {
            name:name,
            email:email
        }
    ).then(()=>history("/read"))
    }

    const [id,setid]=useState(0);
    const [name,setname]=useState("");
    const [email,setemail]=useState("")
    useEffect(()=>{
setid(localStorage.getItem("id"));
setname(localStorage.getItem("name"));
setemail(localStorage.getItem("email"));
    },[])
  return (
   <>
    <form >
            <div className="mb-3">
                <label className='form-label'>Name</label>
                <input type="text" className='form-control' 
                value={name}
                onChange={(e)=>setname(e.target.value)}
                 />
            </div>
            <div className="mb-3">
                <label className='form-label'>Email address</label>
                <input type="email" className='form-control' aria-describedby='emailHelp'
                value={email}
                 onChange={(e)=>setemail(e.target.value)} 
                 />
            </div>
          </form>
          <button type='submit' className='btn btn-primary' 
          onClick={handleupdate}
          >Submit</button>
   
   
   </>
  )
}

export default Update
