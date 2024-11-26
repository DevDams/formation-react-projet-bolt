import React from 'react'
import { NavLink } from 'react-router-dom'

const RouterNavbar = () => {
  return (
    <div className='navbar-global w-full h-20 bg-black flex items-center justify-center gap-8 drop-shadow-lg'>
      <NavLink to="/" class="active">
        <div className='navbar-item text-lg text-white font-bold'>
          Accueil
        </div>
      </NavLink>
      <NavLink to="/contact">
        <div className='navbar-item text-lg text-white font-bold'>
          Contact
        </div>
      </NavLink>
      <NavLink to="/ziengfzoeubgizuebg">
        <div className='navbar-item text-lg text-white font-bold'>
          Page 404
        </div>
      </NavLink>
    </div>
  )
}

export default RouterNavbar