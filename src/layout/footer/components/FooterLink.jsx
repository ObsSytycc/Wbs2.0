import React from 'react'
import { NavLink } from 'react-router-dom'

const FooterLink = ({ name = '', path = '' }) => {
  return (
    <li>
      <NavLink 
        to={path}
        className={({isActive}) => isActive ? 'footer-nav-link active' : 'footer-nav-link'}
      >
        {name}
      </NavLink>
    </li>
  )
}

export default FooterLink