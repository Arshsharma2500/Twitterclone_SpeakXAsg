import React from 'react'
import Nav from './components/navbar/Nav'
import Footer from './components/footer/Footer'
import {Outlet} from 'react-router-dom'
function Layout() {
  return (
    <div className='flex w-screen h-max bg-gray-100 px-52 gap-8'>
      <div className='bg-white w-64 h-max'>
        <Nav/>
      </div>
      <div className='bg-white w-1/2 h-max'>
        <Outlet/>
      </div>
      <div className='bg-white w-64 h-max'>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout