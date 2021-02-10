import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//CustomHooks
import { ThemeProvider } from "./hooks/themeHook/themeProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
