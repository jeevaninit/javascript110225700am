import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    
    /* const [count,setCount]=useState(0); */

    let num1=20;
    let num2=40;

    //let total=num1+num2;

let total=useMemo(()=>{
    return num1+num2;
},[num1,num2])

  return (
    <div>
        <h1>UseMemo</h1>
     <h2>{total}</h2>   
    </div>
  )
}

export default UseMemo