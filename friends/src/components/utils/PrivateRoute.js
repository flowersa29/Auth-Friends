import React, { Component } from "react"
import {Route, redirect, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) =>{
const token = window.localStorage.getItem('token')
return(
  <Route {...rest} render={props =>{
    if (token) {
      return <Component {...props} />
    } else {
      return <Redirect to='/login'/>
    }
  }} />
)
}
export default PrivateRoute