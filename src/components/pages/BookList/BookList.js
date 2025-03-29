import React from "react";
import { BookSummary } from "./BookSummary";

export const BookList = ({ books }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 md:gap-8">
      {books?.length > 0 ? (
        [...books].sort((a, b) => {
          const dateA = a.datetime?.toDate ? a.datetime.toDate() : new Date(a.datetime);
          const dateB = b.datetime?.toDate ? b.datetime.toDate() : new Date(b.datetime);
          return dateB - dateA;
        }).map((book) => (
          <BookSummary key={book?.id} book={book} />
        ))
      ) : (
        <h5>Yükleniyor</h5>
      )}
    </div>
  );
};
