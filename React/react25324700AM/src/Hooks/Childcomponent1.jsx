import React, { useContext } from 'react'
import { Mycontextone } from './UseContext'

const Childcomponent1 = () => {
  const getValues=useContext(Mycontextone);
  return (
    <>
    <div>Childcomponent1</div>
    <h2>Course: {getValues.course}</h2>
    <p>Duration: {getValues.duration}</p>
    <p>Fee: {getValues.fee}</p>
    </>
  )
}

export default Childcomponent1