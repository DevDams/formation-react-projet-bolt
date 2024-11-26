import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import ContactPage from "../pages/contact/ContactPage";
import MainAppLayout from "../layouts/MainAppLayout";
import PageNotFound from "../pages/404/PageNotFound";


const MainAppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainAppLayout>
        <HomePage />
      </MainAppLayout>
    ),
  },
  {
    path: "/contact",
    element: (
      <MainAppLayout>
        <ContactPage />
      </MainAppLayout>
    ),
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default MainAppRouter;
