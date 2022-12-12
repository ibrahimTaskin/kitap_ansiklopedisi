import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

export const BookSummary = ({ book }) => {
  const { title, id, url , mycomment ,datetime } = book;
  return (
    <>
      <div>
      <Link
          to={`/book/${id}`}
          key={book?.id}
          class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class="object-cover md:w-1/2 lg:w-1/2 w-1/1 rounded-t-lg h-96 md:h-auto md:rounded-none md:rounded-l-lg"
            src={url}
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {mycomment.substr(0,100)}...
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {moment(datetime.toDate().toString()).calendar()}...
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};
