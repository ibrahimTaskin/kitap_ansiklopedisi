import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import rootReducer from "./store/reducers/RootReducers";
import { Provider } from "react-redux";
import { applyMiddleware, compose, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import fbconfig from './config/firebaseconfig';

const root = ReactDOM.createRoot(document.getElementById("root"));


const store = configureStore(
  {
    reducer: rootReducer,
    compose:compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})), 
      reduxFirestore(fbconfig),
      reactReduxFirebase(fbconfig))
  }  
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
