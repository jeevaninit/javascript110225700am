import React from 'react'

const ConditionCheck02 = () => {

    const isloading=false;
    const error=false;

  return (
    <div>
        {!error && !isloading &&(
            <>
            <button>LogIn</button>
            <button>LogOut</button>
            </>
        )}

        {error && <p>Authentication Error</p>}
        {!error && isloading && <p>Loadig...</p>}
    </div>
  )
}

export default ConditionCheck02