import React, { useContext } from 'react'
import { Mycontextone, Mycontexttwo } from './UseContext'


const Childcomponent2 = () => {
    const getValue=useContext(Mycontexttwo);
  return (
    <>
    <div>Childcomponent2</div>
    <h3>{getValue}</h3>
 
    </>
  )
}

export default Childcomponent2