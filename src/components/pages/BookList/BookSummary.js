import React from "react";
import { Link } from "react-router-dom";

export const BookSummary = ({ book }) => {
  const { title, id, url } = book;
  return (
    <>
      <Link to={`/book/${id}`} key={book.id}>
        <div style={{ borderRadius: "15px" }} class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img style={{ borderRadius: "15px" }} src={url} />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              {title}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};
