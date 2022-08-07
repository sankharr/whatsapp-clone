// packages
import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layout
import MainLayout from "./layouts/MainLayout";

// pages
import LandingPage from "./pages/landingPage/LandingPage";
import ChatWindow from './pages/chatWindow/ChatWindow';
import NotFound from './pages/notFound/NotFound';

function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Navigate to="/welcome" /> },
        { path: "welcome", element: <LandingPage /> },
        { path: "chat/:id", element: <ChatWindow /> },
        // { path: 'login', element: <Login />},
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

export default Router;
