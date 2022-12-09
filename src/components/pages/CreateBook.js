import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createBook } from "../../store/actions/bookActions";
import "react-datepicker/dist/react-datepicker.css";

const CreateBook = (props) => {
  const [book, setBook] = useState({
    title: "",
    url:"",
    author: "",
    mycomment: "",
    datetime: "",
    isbn: "",
  });
  
  const [startDate, setStartDate] = useState(new Date());


  const handleChange = (e,b) => {
    let copyBook = { ...book };
   
    if (e?.target?.id === "title") copyBook["title"] = e?.target?.value;
    if (e?.target?.id === "author") copyBook["author"] = e?.target?.value;
    if (e?.target?.id === "url") copyBook["url"] = e?.target?.value;
    if (e?.target?.id === "mycomment") copyBook["mycomment"] = e?.target?.value;
    if (e?.target?.id === "isbn") copyBook["isbn"] = e?.target?.value;
    
    setBook(copyBook);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let copyBook = { ...book }
    copyBook["datetime"] = startDate;

    props.createBook(copyBook);

    props.history.push("/");
  };

  return (
    <>
      {props.auth.uid ? (
        <div className="min-h-screen items-center justify-center bg-green-100 dark:bg-slate-600 p-10">
          <form
           onSubmit={handleSubmit}
          >
            <div class="mb-6">
              <label
                htmlFor="title"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Kitap Adı
              </label>
              <input
                type="text"
                id="title"
                onChange={handleChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div class="mb-6">
              <label
                htmlFor="author"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Yazar
              </label>
              <input
                type="text"
                id="author"
                onChange={handleChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div class="mb-6">
              <label
                htmlFor="url"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                URL
              </label>
              <input
                type="text"
                id="url"
                onChange={handleChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div class="mb-6">
              <label
                htmlFor="mycomment"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Yorum
              </label>
              <textarea
                id="mycomment"
                onChange={handleChange}
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <div class="mb-6">
              <label
                htmlFor="isbn"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ISBN
              </label>
              <input
                type="text"
                id="isbn"
                onChange={handleChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>{" "}
            <div class="mb-6">
              <label
                htmlFor="datetime"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tarih
              </label>
              <DatePicker
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="datetime"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect      
              dateFormat="MMMM d, yyyy h:mm aa"
            />
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Kaydet
            </button>
          </form>
        </div>
      ) : (
        <Redirect to={"/signin"} />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBook: (book) => dispatch(createBook(book)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBook);
