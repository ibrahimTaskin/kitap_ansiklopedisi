export const createBook = (book) => {
  return (dispatch, getState, { getFirebase,getFirestore }) => {
    // async call
    // firestore nesnesi türettik.
    const firestore = getFirestore();
    // hangi collection a göndereceksek belirledik.
    firestore
      .collection("books")
      .add({
        ...book,
      })
      .then(() => {
        dispatch({ type: "CREATE_BOOK", book: book });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_BOOK_ERR", err });
      });
  };
};
