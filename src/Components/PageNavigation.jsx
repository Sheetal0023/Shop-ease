import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header/Header.css'

function PageNavigation({title}) {
  return (
    <div className='PageNavigation'>
        <NavLink to={"/"}>Home</NavLink>
        <div className="greaterThan lightFont">
            &gt;
        </div>
        <div className='lightFont'>
            {title}
        </div>
    </div>
  )
}



export default PageNavigation