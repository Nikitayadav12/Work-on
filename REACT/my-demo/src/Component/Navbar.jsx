import React from 'react'
import "./style.css"
import { Link } from '@mui/material';
const Navbar = () => {
  return (
    <>
    <ul className='nav'>
        <li><Link to="/home">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
    </ul>
    </>
  )
}

export default Navbar;