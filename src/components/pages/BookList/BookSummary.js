import React from "react";
import { NavLink } from "react-router-dom";
import { BookDetail } from "../BookDetail/BookDetail";

export const BookSummary = ({book}) => {
 
  const {author,datetime,title} = book;
  return (
    <div className="card z-depth-0 book-summary">
      <div className="card-content f-green-text text-darken-3">
        <span className="card-title">{title}</span>
        <p>{author}</p>
        <p className="green-text">{datetime}</p>
      </div>
    </div>
  );
};
