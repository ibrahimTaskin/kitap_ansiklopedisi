import React from 'react'
import { NavLink } from 'react-router-dom'

const SignInLinks = () => {
  return (
    <ul className='right'>
        <li><NavLink to='/' >Yeni Proje</NavLink></li>
        <li><NavLink to='/' >Log Out</NavLink></li>
        <li><NavLink to='/' className='btn btn-floating teal lighten-1'>AAA</NavLink></li>
    </ul>
  )
}

export default SignInLinks