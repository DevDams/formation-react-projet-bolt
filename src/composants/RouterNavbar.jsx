import React from 'react'
import { NavLink } from 'react-router-dom'

const RouterNavbar = () => {
  return (
    <div className='w-full h-20 bg-red-300 flex items-center justify-center gap-8'>
      <NavLink to="/">
        <div className='text-lg text-black font-bold'>
          Accueil
        </div>
      </NavLink>
      <NavLink to="/contact">
        <div className='text-lg text-black font-bold'>
          Contact
        </div>
      </NavLink>
      <NavLink to="/ziengfzoeubgizuebg">
        <div className='text-lg text-black font-bold'>
          Page 404
        </div>
      </NavLink>
    </div>
  )
}

export default RouterNavbar