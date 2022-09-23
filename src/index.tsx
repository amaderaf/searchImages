import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ConfigContextProvider } from "./Context/ConfigContext";
import { TranslateContextProvider } from "./Context/TranslateContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <TranslateContextProvider>
        <ConfigContextProvider>
          <App />
        </ConfigContextProvider>
      </TranslateContextProvider>
    </Router>
  </React.StrictMode>
);
