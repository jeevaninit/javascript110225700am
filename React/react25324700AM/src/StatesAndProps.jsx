import React from 'react'
import RecProps from './RecProps';

const StatesAndProps = () => {

    const username='JeevanKonduru';
    const password='12345';

  return (
    <div>
    StatesAndProps
        <RecProps 
        uname={username} 
        upassword={password}
        />
    </div>
  )
}

export default StatesAndProps