import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
  const[data,setData] = useState([])
  useEffect(()=>{
     axios.get("http://localhost:6741/users")
     .then((response)=>{
        //  console.log(response)
         setData(response.data)
     })
  })

  return (
    <>
      <ul>
        {data.map((item=><li key={item.id}>{item.uName}{item.uEmail}{item.uPhone}</li>))}
      </ul>
    </>
  )
}

export default View