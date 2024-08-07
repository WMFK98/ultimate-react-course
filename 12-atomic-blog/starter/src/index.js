import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import { PostProvieder } from "./PostProvieder";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PostProvieder>
      <App />
    </PostProvieder>
  </React.StrictMode>
);
