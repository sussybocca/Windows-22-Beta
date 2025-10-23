import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WindowProvider } from "./contexts/WindowContext";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WindowProvider>
      <App />
    </WindowProvider>
  </React.StrictMode>
);
