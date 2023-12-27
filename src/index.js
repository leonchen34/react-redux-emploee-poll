import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
//import reportWebVitals from './reportWebVitals';
//import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import "./index.css";
import App from "./components/App";
import logger from "./middleware/logger";

const store = configureStore({reducer:reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)});

//const store = createStore(reducer,middleware);

const root = ReactDOM.createRoot(document.getElementById('root'));
/*
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

root.render(
  <Provider store={store}>
      <Router>
          <App />
      </Router>  
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
