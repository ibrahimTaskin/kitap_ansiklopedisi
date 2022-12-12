import React from "react";
import { BookSummary } from "./BookSummary";

export const BookList = ({ books }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 md:gap-8">
      {books?.length > 0 ? (
        books?.reverse(s=> s.datetime?.seconds)?.map((book) => (
            <BookSummary key={book?.id} book={book} />
        ))
      ) : (
        <h5>Yükleniyor</h5>
      )}
    </div>
  );
};
