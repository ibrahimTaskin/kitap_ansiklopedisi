import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { BookList } from "../pages/BookList/BookList";

const Dashboard = (props) => {
  const { books } = props;

  return (
    <div className="min-h-screen flex items-center bg-green-100 dark:bg-slate-600">
      <div className="flex-1 max-w-6xl mx-auto p-10">
        <BookList books={books} />
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
