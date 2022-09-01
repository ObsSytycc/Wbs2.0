import React from 'react'
import { NavLink } from 'react-router-dom'

const Link = ({ name, path }) => {
  return (
    <li className="nav-item">
      <NavLink 
        to={path}
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
      >
        {name}
        <span></span>
      </NavLink>
    </li>
  )
}

export default Link