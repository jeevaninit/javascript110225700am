import React, { createContext } from 'react'
import Childcomponent1 from './Childcomponent1';
import Childcomponent2 from './Childcomponent2';


//create context
const Mycontextone=createContext();
const Mycontexttwo=createContext();

//parent component
const UseContext = () => {

    const details={
        course:'React and Javascript',
        duration:'1 Month',
        fee:12000,
    }

  return (
    <div>
    <h1>UseContext</h1>

    <Mycontextone.Provider
    value={details}>
        <Childcomponent1 />
        <Childcomponent2 />
    </Mycontextone.Provider>

    <Mycontexttwo.Provider
    value={"Narayana Technologes-Dilsukhnagar"}>
        <Childcomponent2 />
    </Mycontexttwo.Provider>

    </div>
  )
}

export default UseContext;
export {Mycontextone,Mycontexttwo}