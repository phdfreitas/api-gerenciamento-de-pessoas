import React from 'react'
import { Navigate } from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService'

const PrivateRoute = ({children}) => {

    const user = AuthenticationService.isUserLoggedIn()

  return user ? children : <Navigate to={"/login"}/>
}

export default PrivateRoute