import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'

function MainLayout() {
  return (
    <>
    <div>MainLayout</div>
    <Navbar />
    <Sidebar />
    <Outlet />
    </>
  )
}

export default MainLayout