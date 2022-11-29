import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { BookList } from "../pages/BookList/BookList";

const Dashboard = (props) => {
  const { books } = props;

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m12 l12">
          <BookList books={books} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.firestore.ordered.books,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => [
    { collection: "books" }, // or `todos/${props.todoId}`
  ])
)(Dashboard);
