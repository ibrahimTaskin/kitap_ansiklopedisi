import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { BookList } from "../pages/BookList/BookList";
import { Notification } from "./Notification";


const Dashboard = (props) => {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6 l4">
          <BookList books={props.books} />
        </div>
        <div className="col s12 m6 l8">
          <Notification />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => { // state => store => reducers => bookReducers => books
  
  return {
    books: state.firestore.ordered.books
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => [
    { collection: 'books'} // or `todos/${props.todoId}`
  ])
)(Dashboard);

