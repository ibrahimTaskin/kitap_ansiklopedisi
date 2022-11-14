import { combineReducers } from "redux";
import  { authReducer } from "./AuthReducer";
import  { bookReducer } from "./BookReducer";

const rootReducer = combineReducers({
    auth:authReducer,
    book:bookReducer
});

export default rootReducer;