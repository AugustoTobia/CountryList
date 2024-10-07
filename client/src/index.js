import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
	createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import CountryInfo from './pages/CountryInfo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "country/:country/code/:countryCode",
    element: <CountryInfo />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
