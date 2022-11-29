import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Posts } from "./pages/Posts";
import { User } from "./pages/User";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// you might need to touch on the Switch component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/user" element={<User />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Posts />} />        
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
