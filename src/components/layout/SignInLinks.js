import React from 'react'
import { NavLink } from 'react-router-dom'

export const SignInLinks = () => {
  return (
    <ul className='right'>
        <li><NavLink to='/createBook' >Yeni Proje</NavLink></li>
        <li><NavLink to='/logOut' >Log Out</NavLink></li>
        <li><NavLink to='/' className='btn btn-floating teal lighten-1'>AAA</NavLink></li>
    </ul>
  )
}
