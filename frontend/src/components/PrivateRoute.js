import React from 'react'
import { Navigate } from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService'

const PrivateRoute = ({children}) => {

    const user = AuthenticationService.isUserLoggedIn()
    
    if(user){
      const currentUser = AuthenticationService.getLoggedInUserName()
      return currentUser.role === 'ROLE_ADMIN' ? children : <Navigate to={"/meusEnderecos"}/>
    }

    return user ? children : <Navigate to={"/login"}/>
}

export default PrivateRoute