import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "jotai";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
