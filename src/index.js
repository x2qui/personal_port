import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Quidownloader from './pages/Quidownloader';
import Instadownloader from './pages/Instadownloader';
import About from './pages/about';
import Clock from './pages/Clock';
import './index.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Quidownloader",
    element: <Quidownloader />
  },
  {
    path: "/instagramreels",
    element: <Instadownloader />
  },
  {
    path: "/about",
    element: <About />
  },
  {
   
  
    path: "/time",
    element: <Clock />
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
