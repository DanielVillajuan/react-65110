import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import CounterProvider from "./Context/CounterContext.jsx";
import AuthContextProvider from "./Context/AuthContext.jsx";
// BrowserRouter
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <AuthContextProvider>
        <CounterProvider>
          <App />
        </CounterProvider>
      </AuthContextProvider>
    </StrictMode>
  </BrowserRouter>
);
