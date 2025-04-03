import React from 'react'
import Header from './Header';
import Navigationbar from './Navigationbar';
import Bodycontainer from './Bodycontainer';
import Article01 from './Article01';
import Article02 from './Article02';
import FetchApi from './API/FetchApi';
import Axios_Api from './API/Axios_Api';


const App = () => {

  const mycondition=true;

  
  return (
    <>
      {mycondition?<FetchApi/>:<Axios_Api />}

    {/* <Axios_Api /> */}
   {/*  <FetchApi /> */}
  {/*  <Header />
    <Navigationbar />
    
   <Bodycontainer /> */}
    </>
  )
}

export default App