import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import Quiz from './pages/Quiz.tsx';
import Location from './pages/Location.tsx';
import Contact from './pages/Contact.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/wasserrad/",
    element: <App />,
    children: [
      {
        path: "/wasserrad/",
        element: <Home />,
      },
      {
        path: "/wasserrad/quiz",
        element: <Quiz />,
      },
      {
        path: "/wasserrad/location",
        element: <Location />,
      },
      {
        path: "/wasserrad/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);