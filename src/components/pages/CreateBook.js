import React, { useState } from 'react'

export const CreateBook = () => {
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');

  const handleChange = (e) => {
    if(e.target.id === 'title') setTitle(e.target.value);
    if(e.target.id === 'description') setDescription(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} action="" className='white'>
        <h5 className='grey-text text-darken-3'>Create Book</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id='title' onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="description">Description</label>
          <textarea className='materialize-textarea' id='description' onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className='btn green lighten-1 z-depth-0'>Login</button>
        </div>
        <p>{title}</p>
        <p>{description}</p>
      </form>
    </div>
  )
}
