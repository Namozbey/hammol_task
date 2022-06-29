import "./app.css";
import React from "react";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}
