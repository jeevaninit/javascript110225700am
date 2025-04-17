import React from 'react'
import { useNavigate } from 'react-router-dom';
import ErrorIcon from '@mui/icons-material/Error';
import HomeIcon from '@mui/icons-material/Home';

const Menunav = () => {

    const navigation=useNavigate();

    const menuitems=[
        {label:'HOME',path:'/home',icon:<HomeIcon />},
        {label:'ABOUT',path:'/about',icon:<ErrorIcon />},
        {label:'SERVICES',path:'/services',icon:<ErrorIcon />},
        {label:'CAREER',path:'/career',icon:<ErrorIcon />},
        {label:'CONTACT',path:'/contact',icon:<ErrorIcon />},
    ]
const handlenavigation=(path)=>{
    navigation(path);
}

  return (
    <div>
        <nav>
            <ul>
                {menuitems.map((item,index)=><li onClick={()=>{handlenavigation(item.path)}}>{item.icon} {item.label}</li>)}
            </ul>
        </nav>
    </div>
  )
}

export default Menunav