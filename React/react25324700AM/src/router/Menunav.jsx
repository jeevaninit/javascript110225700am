import React from 'react'
import { useNavigate } from 'react-router-dom';

const Menunav = () => {

    const navigation=useNavigate();

    const menuitems=[
        {label:'HOME',path:'/home'},
        {label:'ABOUT',path:'/about'},
        {label:'SERVICES',path:'/services'},
        {label:'CAREER',path:'/career'},
        {label:'CONTACT',path:'/contact'},
    ]
const handlenavigation=(path)=>{
    navigation(path);
}

  return (
    <div>
        <nav>
            <ul>
                {menuitems.map((item,index)=><li onClick={()=>{handlenavigation(item.path)}}>{item.label}</li>)}
            </ul>
        </nav>
    </div>
  )
}

export default Menunav