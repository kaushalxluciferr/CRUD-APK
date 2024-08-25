import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'   // used for navigate from one page to another
import {Link} from 'react-router-dom'     // it is also use to link one page to another . this can be done without making a function .. avoid function conflict
function Read() {
    const kaushal=useNavigate();  // creating a variable for navigating from onen page to another
   const[data,setdata]= useState([])

   function ka(){
    kaushal("/create");  // here it sets the path 
   }
  
    function getdata()
    {
        axios.get('https://66c864728a477f50dc2ddc52.mockapi.io/crud')   // it fetches the api 
        .then((res)=>{console.log(res.data) 
            setdata(res.data);

        }).catch((e)=>{  // if any error occur then it handles it 
            console.log(e);
            
        });
        
    }
const settolocalstorage=(id,name,email)=>{             // it is used to transfer out data from one browser to another
localStorage.setItem("id",id);                              // 
localStorage.setItem("name",name);
localStorage.setItem("email",email);
}



function handledelete(id)
{
    axios.delete(`https://66c864728a477f50dc2ddc52.mockapi.io/crud/${id}`).then(()=>{
        getdata();
    });
}

useEffect(()=>{
getdata();
},[])  //whenever the data changes it automatically refereshes

  return (
    <>
    <h2>Read operations</h2>
    <button type="button" class="btn btn-success" id='one' onClick={ka}>Add +</button> 
    <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  {
data.map((eachData)=>
{
    return(
        <>
         <tbody>
    <tr>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.name}</td>
      <td>{eachData.email}</td>
      <td> <button type="button" class="btn btn-danger" onClick={()=>handledelete(eachData.id)}>Delete</button></td>
   <td> <Link to="/update"> <td> <button type="button" class="btn btn-success" onClick={settolocalstorage(eachData.id,eachData.name,eachData.email)} >Update</button> </td></Link> </td> 
    </tr>
  </tbody>
        </>
    )
})
 }
</table>
    
    </>
  )
}

export default Read
