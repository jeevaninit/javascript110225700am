import React, { useRef } from 'react'

const UseRef = () => {

    let myrefid=useRef(null);

    const runfun=()=>{
        myrefid.current.innerHTML='Change Default Heading Content here...';
        myrefid.current.classList.toggle('headingstyle');
    }

  return (
    <div>
        <h1 ref={myrefid}>Hello am from UseRef Heading</h1>

        <button onClick={runfun}>
            Click to Change Heading Text
        </button>
    </div>
  )
}

export default UseRef