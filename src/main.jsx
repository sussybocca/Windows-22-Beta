import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// REMOVE THIS: import { WindowProvider } from "./contexts/WindowContext";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
