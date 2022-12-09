import moment from "moment";
import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";
import { compose } from "redux";

const BookDetail = (props) => {
  const { book } = props;

  return (
    <>
      {book ? (
        <>
          <div className="min-h-screen items-center justify-center bg-green-100 dark:bg-slate-600 p-10">
            <div className="max-w-6xl mx-auto p-10 bg-white dark:bg-slate-400 rounded-xl shadow-lg hover:shadow-2xl">
              <div className="flex flex-col text-left">
                <Link to="/" className="">
                  <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                    <svg
                      class="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      ></path>
                    </svg>
                    Anasayfa
                  </span>
                </Link>
                <div className="basis-1/2 p-5 ">
                  <h1 class="text-5xl font-extrabold dark:text-white">
                    {book?.title}
                  </h1>
                  <p class="pt-10 mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-4xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
                    {book?.mycomment}{" "}
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis, omnis adipisci ipsum eveniet, obcaecati illo
                      labore corrupti, impedit dicta molestias quasi unde
                      repellat tempora minus iste nostrum consequuntur quod
                      tenetur. Saepe, animi pariatur illum magni a inventore
                      debitis nulla obcaecati ducimus sequi labore accusamus
                      dolorum error iure ea cumque ut corrupti quaerat? Iure
                      odit deleniti magni rerum deserunt at veniam. Et ipsum qui
                      hic aut vitae autem recusandae repudiandae quos inventore
                      porro eos doloribus facere, sunt excepturi laudantium
                      deserunt quas ipsam voluptatum voluptates, ullam nulla.
                      Iste consequatur repellat blanditiis libero! Beatae,
                      voluptatum quidem. Fugit iste similique doloribus ab rem
                      distinctio placeat, impedit ad enim maxime esse, magni,
                      cumque soluta nisi illum ex fuga blanditiis laudantium
                      omnis saepe corporis eius earum? Nemo odit ad accusamus ea
                      autem ab mollitia illo fugit sint, assumenda consequatur
                      maxime eligendi dignissimos, reprehenderit perferendis?
                      Optio, porro. Ex delectus modi vero possimus tempore,
                      nihil excepturi mollitia consequatur.
                    </p>
                  </p>
                </div>
                <div className="basis-1/2 p-5 ">
                  <h6 class="text-lg font-bold dark:text-white">Yazar</h6>
                  <p class="font-light text-gray-500 dark:text-gray-400">
                    {book?.author}
                  </p>
                </div>
                <div className="basis-1/2 p-5 ">
                  <h6 class="text-lg font-bold dark:text-white">ISBN</h6>
                  <p class="font-light text-gray-500 dark:text-gray-400">
                    {book?.isbn}
                  </p>
                </div>
                <div className="basis-1/2 p-5 ">
                  <h6 class="text-lg font-bold dark:text-white">
                    Bitirme Tarihi
                  </h6>
                  <p class="font-light  text-gray-500 dark:text-gray-400">
                    {moment(book?.datetime.toDate().toString()).calendar()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Henüz içerik eklenmemiştir.</p>
      )}
    </>
  );
};

const mapStateToProps = (state, props) => {
  const id = props?.match?.params?.id;
  const bookList = state?.firestore?.data?.books;
  const book = bookList ? bookList[id] : null;
  return {
    book: book,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => [
    { collection: "books" }, // or `todos/${props.todoId}`
  ])
)(BookDetail);
