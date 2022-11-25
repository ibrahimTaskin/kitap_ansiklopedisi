import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createBook } from "../../store/actions/bookActions";

const CreateBook = (props) => {
  const [book, setBook] = useState({
    title: "",
    name: "",
    author: "",
    mycomment: "",
    datetime: "",
    isbn: "",
  });

  const handleChange = (e) => {
    let copyBook = { ...book };

    if (e.target.id === "title") copyBook["title"] = e.target.value;
    if (e.target.id === "author") copyBook["author"] = e.target.value;
    if (e.target.id === "mycomment") copyBook["mycomment"] = e.target.value;
    if (e.target.id === "isbn") copyBook["isbn"] = e.target.value;
    if (e.target.id === "datetime") copyBook["datetime"] = e.target.value;

    setBook(copyBook);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.createBook(book);
  };

  return (
    <>
      {props.auth.uid ? (
        <div className="container">
          <form onSubmit={handleSubmit} action="" className="white">
            <h5 className="grey-text text-darken-3">Create Book</h5>
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={(e) => handleChange(e)} />
            </div>           
            <div className="input-field">
              <label htmlFor="author">Author Name</label>
              <input
                type="text"
                id="author"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="mycomment">My Comment</label>
              <textarea
                style={{ height: "6rem" }}
                className="materialize-textarea"
                id="mycomment"
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="isbn">ISBN</label>
              <textarea
                className="materialize-textarea"
                id="isbn"
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="datetime">Datetime</label>
              <textarea
                className="materialize-textarea"
                id="datetime"
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <button className="btn green lighten-1 z-depth-0">Save</button>
            </div>
          </form>
        </div>
      ) : (
        <Redirect to={'/signin'} />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBook: (book) => dispatch(createBook(book)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBook);
