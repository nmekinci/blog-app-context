import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
const { currentUser } = useContext(AuthContext);

// console.log(!authState.user.id);
 // const {currentuser} = useContext(AuthContext)
//   const currentuser = false
  
  return currentUser?.user?.id ? <Outlet /> : <Navigate to="/auth" replace/>
}

export default PrivateRouter