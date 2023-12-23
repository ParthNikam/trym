import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";
import App from "./App";

import * as serviceWorker from './serviceWorker';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwNtdLMdDe2FsB-uToHnKAJqdBWH_Srqg",
  authDomain: "metajack-24e60.firebaseapp.com",
  databaseURL: "https://metajack-24e60-default-rtdb.firebaseio.com",
  projectId: "metajack-24e60",
  storageBucket: "metajack-24e60.appspot.com",
  messagingSenderId: "968200954230",
  appId: "1:968200954230:web:3a78b15daa5d547344da57",
  measurementId: "G-BZJVN5XNR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const store = createStore(reducers, compose(applyMiddleware(thunk)));

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

serviceWorker.register();
