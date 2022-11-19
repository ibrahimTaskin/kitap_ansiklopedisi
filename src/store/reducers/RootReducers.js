import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import  { authReducer } from "./AuthReducer";
import  { bookReducer } from "./BookReducer";

const rootReducer = combineReducers({
    auth:authReducer,
    book:bookReducer,
    firestore:firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;