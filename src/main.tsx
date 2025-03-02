import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./App";
import "./index.css";
import { MatchesContextProvider } from "./utils/matchesContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MatchesContextProvider>
      <RouterProvider router={router} />
    </MatchesContextProvider>
  </React.StrictMode>
);