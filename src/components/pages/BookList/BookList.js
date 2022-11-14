import React from "react";
import { BookSummary } from "./BookSummary";

export const BookList = ({ books }) => {
  return (
    <div className="book-list section">
      {books?.length > 0 ? (
        books?.map((book) => {
          return <BookSummary key={book.id} book={book} />;
        })
      ) : (
        <h5>No Data</h5>
      )}
    </div>
  );
};
