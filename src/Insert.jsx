import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

  const Insert = () => {
  const[users,setUsers] = useState({id:0,uName:"",uEmail:"",uPhone:""})
  const changeHndler= (e)=>{
      setUsers({...users,[e.target.name]:e.target.value})
  }
  const submitHndler= (e)=>{
   e.preventDefault()
     if(users.uName==="" && users.uEmail==="" && users.uPhone===""){
        alert("pls enter your details")
     }
     else if(users.uName===""){
      alert("pls enter your name")
     }
     else if(users.uEmail===""){
      alert("pls enter your email")
     }
     else if(users.uPhone===""){
      alert("pls enter your phone")
     }
      else{
        axios.post("http://localhost:6741/users",users)
      .catch(err=>{console.log(err)})
      }
      setUsers({...users,id:users.id+1,uName:"",uEmail:"",uPhone:""})
  }

  const name = useRef()
  const email= useRef()
  const phone = useRef()

  return (
    <form onSubmit={(event)=>{submitHndler(event)}}>
      <input
      value={users.uName} 
      ref={name} 
      type='text'
      onChange={(event)=>{changeHndler(event)}}
      name='uName'
      minLength={5}
      maxLength={30}
      />
       <input
       value={users.uEmail} 
       ref={email}
        type='email'
        onChange={(event)=>{changeHndler(event)}}
        name='uEmail'
        minLength={10}
        maxLength={40}
        />
        <input
         value={users.uPhone} 
         ref={phone}
         type='tel'
         onChange={(event)=>{changeHndler(event)}}
         name='uPhone'
         minLength={10}
         maxLength={10}
         />
          <button>submit</button> 
    </form>
  )
}

export default Insert