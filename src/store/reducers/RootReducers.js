import { combineReducers } from "redux";
import  { authReducers } from "./AuthReducers";
import  { bookReducer } from "./BookReducer";

const rootReducer = combineReducers({
    auth:authReducers,
    book:bookReducer
});

export default rootReducer;