import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'


const Services = () => {

  const navigation=useNavigate();

  const servicelist=[
    {label:'ONLINE TRAINING',path:'onlinetraining'},
    {label:'OFFLINE TRAINING',path:'offlinetraining'},
    {label:'WEEKEND TRAINING',path:'weekendtraining'},
   
]

const serviceitemhandle=(path)=>{
  navigation(path)
}

  return (
    <div>
      <h3>Welcome to Service Page</h3>
      <ul>
       {servicelist.map(
        (serviceitem,index)=>
        <li key={index} onClick={()=>{serviceitemhandle(serviceitem.path)}}>
          {serviceitem.label}
        </li>)}
      </ul>


      <div>
        <h3>Display 
        Container
        </h3>

      <Outlet />
      </div>

      </div>
  )
}

export default Services