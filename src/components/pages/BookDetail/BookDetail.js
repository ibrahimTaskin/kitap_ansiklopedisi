import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { compose } from "redux";

const BookDetail = (props) => {
  const { book,auth } = props;

  if(!auth.uid) return <Redirect to={'/signin'}/>
  return (
    <div>
      {book ? (
        <div className="container section book-detail">
          <div className="card z-depth">
            <div className="card-content">
              <span className="card-title">{book?.title} </span>
              <p>{book?.mycomment}</p>
            </div>
            <div className="card-action teal accent-2 white-text">
              <div>{book?.author}</div>
              <div>{book?.isbn}</div>
              <div>{book?.datetime}</div>
            </div>
          </div>
        </div>
      ) : (
        <p>Henüz içerik eklenmemiştir.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const id = props?.match?.params?.id;
  const bookList = state?.firestore?.data?.books;
  const book = bookList ? bookList[id] : null;
  return {
    book: book,
    auth:state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => [
    { collection: "books" }, // or `todos/${props.todoId}`
  ])
)(BookDetail);
