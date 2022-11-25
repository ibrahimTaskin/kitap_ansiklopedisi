import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { BookList } from "../pages/BookList/BookList";
import { Notification } from "./Notification";

const Dashboard = (props) => {
  const { books, auth } = props;
  return (
    <>
    {auth.uid 
    ? <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6 l4">
            <BookList books={books} />
          </div>
          <div className="col s12 m6 l8">
            <Notification />
          </div>
        </div>
      </div>
    : <Redirect to={'/signin'} />
    }      
    </>
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
