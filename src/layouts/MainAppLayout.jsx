import React from 'react'
import RouterNavbar from '../composants/RouterNavbar'

const MainAppLayout = ({ children }) => {
  return (
    <div>
      <RouterNavbar />
      <div className='border border-violet-400 m-4'>
        {children}
      </div>
    </div>
  )
}

export default MainAppLayout