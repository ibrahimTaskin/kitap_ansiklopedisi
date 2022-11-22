import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


const SignOutLinks = () => {
  return (
    <ul className='right'>
        <li><NavLink to='/signup'>Sign Up</NavLink></li>
        <li><NavLink to='/signin'>Login</NavLink></li>
    </ul>
  )
}

const mapStateToProps = (state) => {
  return({
    auth:state.firebase
  })
}

export default connect(mapStateToProps)(SignOutLinks);