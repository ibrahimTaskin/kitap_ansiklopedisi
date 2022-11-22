import React, { useState } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

const SignIn = (props) => {
  const [identity, setIdentity] = useState({
    email:"",
    password:""
  });

  const handleChange = (e) => {
    let _identity = { ...identity };

    if(e.target.id === 'email') _identity["email"] = e.target.value;
    if(e.target.id === 'password') _identity["password"] = e.target.value;

    setIdentity(_identity);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    props.signIn(identity)
  }

  const {authError} = props;

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} action="" className='white'>
        <h5 className='grey-text text-darken-3'>Login</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">password</label>
          <input type="password" id='password' onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className='btn cyan lighten-1 z-depth-0'>Login</button>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
        </div>       
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  
  return{
    signIn:(identity) => dispatch(signIn(identity))
  }
}

const mapStateToProps = (state) => {
  return{
    authError:state.auth.authError
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
