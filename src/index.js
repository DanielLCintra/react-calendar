import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import reducers from "./store/slices";
import Main from "./Main";
import reportWebVitals from "./reportWebVitals";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import 'react-notifications/lib/notifications.css';

// import main sass file
import "./sass/app.scss";

const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: [...getDefaultMiddleware(), thunk]
});

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
