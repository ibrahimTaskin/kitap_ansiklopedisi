import React from "react";
import { Link } from "react-router-dom";

export const BookSummary = ({ book }) => {
  const { title, id, url } = book;
  return (
    <>
      <div className="w-60 p-2 bg-white rounded-xl trasforn transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        <img className="h-50 object-cover rounded-xl" src={url} />
        <div className="p-2">
          <h2 className="font-bold text-xl">{title}</h2>
          <p className="text-sm text-gray-600"></p>
        </div>
        <div className="m-2">
          <Link
            to={`/book/${id}`}
            key={book.id}
            className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-800"
          >
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
};
