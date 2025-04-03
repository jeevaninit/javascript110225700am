import React, { useEffect, useState } from 'react'

const FetchApi = () => {

    const [data,setData]=useState([]);

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
      .then((json)=>setData(json))
      .catch((error)=>console.error("Error Fetching Data:",error));
    },[])

  return (
    <div>
    <h1>FetchApi</h1>
    <ul>
      {data.map((item)=>(
        <li key={item.id}>
       
          <h3>{item.name}</h3>
          <p>{item.email}</p>
          <p>{item.address.city}</p>
      
        </li>
      ))}
    </ul>
     
    </div>
  )
}

export default FetchApi