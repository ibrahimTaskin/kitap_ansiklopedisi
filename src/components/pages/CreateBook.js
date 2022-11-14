import React, { useState } from 'react'
import { connect } from 'react-redux';
import { createBook } from '../../store/actions/bookActions';

const CreateBook = (props) => {
  const [book,setBook] = useState({
    title:'',
    description:''
  });
  const [description,setDescription] = useState({});

  const handleChange = (e) => {

    let copyBook = {...book}

    if(e.target.id == 'title') copyBook['title'] = e.target.value;
    if(e.target.id == 'description')  copyBook['description'] = e.target.value;

    setBook(copyBook);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    props.createBook(book);
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} action="" className='white'>
        <h5 className='grey-text text-darken-3'>Create Book</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id='title' onChange={(e)=> handleChange(e)} />
        </div>
        <div className="input-field">
          <label htmlFor="description">Description</label>
          <textarea className='materialize-textarea' id='description' onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className='btn green lighten-1 z-depth-0'>Save</button>
        </div>
        <p>{book?.title}</p>
        <p>{book?.description}</p>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBook: (book) => dispatch(createBook(book))
  }
}

export default connect(null,mapDispatchToProps)(CreateBook);