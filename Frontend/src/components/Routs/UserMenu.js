import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
  return (
    <>
    <div className='text-center'>

<div className="list-group">
    <h4>Dashboard</h4>
  <NavLink to={`${baseurl}/dashboard/user/profile`} className="list-group-item list-group-item-action" >
    Profile
  </NavLink>
  <NavLink to={`${baseurl}/dashboard/user/orders`} className="list-group-item list-group-item-action">Orders</NavLink>
 
  
</div>
    </div>

    </>
  )
}

export default UserMenu