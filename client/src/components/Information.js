import React from 'react'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';



function Information() {
  return (
    <div className='framework' >
    <img id='fw' style={{width:'40%'}} src='../images/fw.jpg'></img>
    <h1 className='content' >Hi, I<b>'</b>m Jaya Surya </h1>
    <h1 className='info' > Full-stack developer </h1>
    <FaGithub />
     
    </div>
  )
}

export default Information