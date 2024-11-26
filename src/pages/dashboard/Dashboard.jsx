import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h1 className='text-4xl text-red-600 font-bold'>Tableau de bord</h1>
      <Outlet />
    </div>
  )
}

export default Dashboard