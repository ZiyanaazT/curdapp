import axios from 'axios'
import React, { useState } from 'react'

const Form = () => {


    const[users,setUsers]=useState({id:0,name:"shubham",email:"shub@gmail.com"})

    const getName = (value) => {
        setUsers({...users,name:value})
    }
    const getEmail = (value) =>{
        setUsers({...users,email:value})
    }
 
    const submitHandle = () =>{

          setUsers({...users,id:users.id+1})
          axios.post("http://localhost:5001/users",users)
          .then(response=> console.log(response))
          .catch(err=> console.log(err))
    }

  return (
    <>
    <div className='form'>
    <form>
    <div className="mb-3">
    <label htmlfor="exampleInputEmail1" className="form-label">Email address</label>
    <input value={users.email} onChange={(e)=>{ getEmail(e.target.value) }}  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
    </div>
    <div className="mb-3">
    <label htmlfor="exampleInputPassword1" className="form-label">Enter your Password</label>
    <input value={users.name}  onChange={(e)=>{ getName(e.target.value) }} type="text" className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="mb-3 form-check">
    {/* <input value={users.phone} onChange={()=>{ }}  type="number" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlfor="exampleCheck1">enter your number</label> */}
   </div>
   <button type="submit" className="btn btn-primary" onClick={()=>{submitHandle();}}>Submit</button>
</form>
</div>
    </>
  )
}

export default Form