import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./assets/fonts/font.css";
import { RouterProvider } from "react-router-dom";
import MainAppRouter from "./routes/MainAppRouter";
import Formulaire from "./pages/formulaire/Formulaire";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={MainAppRouter} /> */}
    <Formulaire />
  </StrictMode>
);
