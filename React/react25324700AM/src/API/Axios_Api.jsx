import axios from 'axios'
import React, { useState } from 'react'

const Axios_Api = () => {

    const [data,setData]=useState([])


    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>setData(response.data))
    .catch((error)=>console.error("Error Fetching Data:",error));

  return (
    <div>
        <h1 style={{textAlign:'center'}}>Axios_Api</h1>
        
        <ul>
            {data.map((item)=>(
                <li key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                </li>
            ))}
        </ul>
        
    </div>
  )
}

export default Axios_Api