import React from "react";
import { NavLink } from "react-router-dom";
import { BookDetail } from "../BookDetail/BookDetail";

export const BookSummary = () => {
  return (
    <div className="card z-depth-0 book-summary">
      <div className="card-content f-green-text text-darken-3">
        <span className="card-title">Book Title</span>
        <p>İbrahim Taşkın</p>
        <p className="green-text">08.11.2022</p>
        {/* <NavLink to='/book' className='btn btn-floating teal lighten-1'>Go Detail</NavLink> */}
      </div>
    </div>
  );
};