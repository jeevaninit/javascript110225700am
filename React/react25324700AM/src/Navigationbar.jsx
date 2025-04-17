import React, { Component } from 'react'
import './Navigationbar.css';
import ErrorIcon from '@mui/icons-material/Error';

class Navigationbar extends Component {
  render() {
    return (
      <>
        <ul>
            <li><ErrorIcon></ErrorIcon> Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
        </ul>
    </>
    )
  }
}
export default Navigationbar;