import React, { useState } from "react";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.id === "name") setName(e.target.value);
    if (e.target.id === "email") setEmail(e.target.value);
    if (e.target.id === "password") setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} action="" className="white">
        <h5 className="grey-text text-darken-3">Sıgn Up</h5>
        <div className="input-field">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn red lighten-1 z-depth-0">Sign Up</button>
        </div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{password}</p>
      </form>
    </div>
  );
};
