import React from 'react'
import RouterNavbar from '../composants/RouterNavbar'

const MainAppLayout = ({ children }) => {
  return (
    <div>
      <RouterNavbar />
      <div className='m-4 pt-10'>
        {children}
      </div>
    </div>
  )
}

export default MainAppLayout