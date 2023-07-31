import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'


const header  = () => {
  return <> 
    <nav>  Get ready to complete  your daily Project goals</nav>  
    <div className='header'>

      <Link to ="/"> Home </Link>
      <Link to ="/About"> About </Link>
      <Link to ="/contact"> contact </Link>
       </div>

  
    </>;
}

export default header 