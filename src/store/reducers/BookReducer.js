const initState = {
  books: []
};

export const bookReducer = (state = initState, action) => {
  // action => {type, book}
  switch (action.type) {
    case "CREATE_BOOK":
      console.log("Kitap oluşturuldu.", action.book);
      return state;
    case "CREATE_BOOK_ERR":
      console.log("Hata oluştu.", action.err);
      return state;
    default:
      return state;
  }
};
