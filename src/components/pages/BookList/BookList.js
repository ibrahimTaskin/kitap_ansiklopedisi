import React from "react";
import { Link } from "react-router-dom";
import { BookSummary } from "./BookSummary";

export const BookList = ({ books }) => {
  return (
    <div className="book-list section">
      {books?.length > 0 ? (
        books?.map((book) => (
          <div className="col s12 m6 l3">
            <BookSummary book={book} />
          </div>
        ))
      ) : (
        <h5>Yükleniyor</h5>
      )}
    </div>
  );
};
