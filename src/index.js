import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import firebase from "firebase/compat/app";

import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPNwi0IYEiDBCjNNOkyzRZk3S3TPLzteY",
  authDomain: "react-hook-project-45531.firebaseapp.com",
  projectId: "react-hook-project-45531",
  storageBucket: "react-hook-project-45531.appspot.com",
  messagingSenderId: "196466247624",
  appId: "1:196466247624:web:8ca5d36c52f97bb5b6a2fd",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
