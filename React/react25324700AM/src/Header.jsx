import React from 'react'

export const HeaderContent=()=>{
    return(
        <>
            <div className='header'>
            <h3>Welcome to Header Content Here</h3>
            <p>Name of the Company</p>
            </div>
        </>
    )
}

const Header = () => {
  return (
    <>
    <HeaderContent />
    </>
  )
}

export default Header