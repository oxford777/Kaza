import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";

import AppRouter from "./router/AppRouter";
import "./index.css";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);
