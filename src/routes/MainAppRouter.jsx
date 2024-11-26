import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import ContactPage from "../pages/contact/ContactPage";
import MainAppLayout from "../layouts/MainAppLayout";
import PageNotFound from "../pages/404/PageNotFound";
import ContenuDynamique from "../pages/contenu-dynamique/ContenuDynamique";
import Dashboard from "../pages/dashboard/Dashboard";

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
    path: "in/:chocolat",
    element: (
      <MainAppLayout>
        <ContenuDynamique />
      </MainAppLayout>
    ),
  },
  {
    path: "dashboard",
    element: (
      <MainAppLayout>
        <Dashboard />
      </MainAppLayout>
    ),
    children: [
      {
        path: "/dashboard/graphe",
        element: (
          <div className="bg-green-200 h-96 w-full flex items-center justify-center">
            <p>C'est l'enfant du parent</p>
          </div>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default MainAppRouter;
