import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import DashboardNavbar from './DashboardNavbar'
const DashboardLayout = () => {
  return (
    <div>
        <Sidebar/>
        <DashboardNavbar/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout