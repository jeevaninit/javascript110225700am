import React, { useCallback } from "react";


const UseCallback=()=>{
    //regular function
/* 
    const myfunction=()=>{
        console.log('Hello am from Regular Function...')
    } */

        const myvalue=70;

        const myusecallbackfun=useCallback(
            ()=>{
                console.log('Hello am from useCallback Function here...');
            },[]
        )

    return(
        <>
               <button onClick={myusecallbackfun}>Click Here</button> 
        </>
    )

}
export default UseCallback;