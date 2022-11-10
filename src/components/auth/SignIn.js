import React, { useState } from 'react'

export const SignIn = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleChange = (e) => {
    if(e.target.id === 'email') setEmail(e.target.value);
    if(e.target.id === 'password') setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

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
        </div>
        <p>{email}</p>
        <p>{password}</p>
      </form>
    </div>
  )
}
