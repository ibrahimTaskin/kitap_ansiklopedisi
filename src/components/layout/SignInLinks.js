import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {signOut} from '../../store/actions/authActions'

 const SignInLinks = (props) => { 

  return (
    <ul className='right'>
        <li><NavLink to='/createBook' >Yeni Proje</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to='/' className='btn btn-floating teal lighten-1'>AAA</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    signOut:() => dispatch(signOut())
  }
}

export default connect(null,mapDispatchToProps)(SignInLinks);