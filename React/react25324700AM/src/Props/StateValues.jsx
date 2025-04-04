import React, { useState } from 'react'
import Childcomponent from './Childcomponent'

const StateValues = () => {

    const [data,setData]=useState({
        productname:'Dell-1055',
        price:10000,
        memory:'256 GB',
        ram:'16 GB'
    })


    const {productname,price,memory,ram}=data;

  return (
    <div>
        <h1 style={{textAlign:'center'}}>State and Props </h1>
        <Childcomponent 
        
            pname={productname}
            pr={price}
            m={memory}
            ram={ram}
       
        />


    </div>
  )
}

export default StateValues