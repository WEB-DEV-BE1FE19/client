import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import './index.css'
import { BrowserRouter } from "react-router-dom";

//style
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/style.css";
// import "./assets/css/responsive.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>

  // </React.StrictMode>,
);
