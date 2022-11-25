import React from "react";
import { Link } from "react-router-dom";
import { BookSummary } from "./BookSummary";

export const BookList = ({ books }) => {
  return (
    <div className="book-list section">
      {books?.length > 0 ? (
        books?.map((book) => (
          <Link to={`/book/${book.id}`} key={book.id} >
            <BookSummary book={book} />
          </Link>
        ))
      ) : (
        <h5>Yükleniyor</h5>
      )}
    </div>
  );
};
