import React from 'react'

const Childcomponent = (props) => {

    const {pname,pr,m,ram}=props;

  return (
    <div>
        
        <h3>Childcomponent</h3>
        <p>Product Name : {pname}</p>
        <p>Product Price : {pr}</p>
        <p>Storage Memory: {m}</p>
        <p>Ram : {ram}</p>
        </div>
  )
}

export default Childcomponent