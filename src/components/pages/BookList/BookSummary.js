import React from "react";
import { Link } from "react-router-dom";

export const BookSummary = ({ book }) => {
  const { title, id, url } = book;
  return (
    <>
      {/* <div className="w-60 p-2 bg-white rounded-xl trasforn transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
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
      </div> */}
      <div>
      <Link
          to={`/book/${id}`}
          key={book.id}
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
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};
