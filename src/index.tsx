import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login";
import reportWebVitals from "./reportWebVitals";
import HomeScreen from "./pages/homescreen";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          {" "}
          <Route path="homeScreen" element={<HomeScreen />} />
        </Route>{" "}
      </Routes>
    </BrowserRouter>
    <Login />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
