import React from "react";
import { connect } from "react-redux";
import { BookList } from "../pages/BookList/BookList";
import { Notification } from "./Notification";


const Dashboard = (props) => {
  const {books} = props;
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6 l4">
          <BookList books={books} />
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
    books: state.book.books
  }
}

export default connect(mapStateToProps)(Dashboard);

