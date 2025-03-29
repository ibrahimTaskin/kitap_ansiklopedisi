import firebase from '../../config/firebaseconfig';

export const createBook = (book) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    
    firestore
      .collection("books")
      .add({
        ...book,
        datetime: timestamp
      })
      .then(() => {
        dispatch({ type: "CREATE_BOOK", book: book });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_BOOK_ERR", err });
      });
  };
};
