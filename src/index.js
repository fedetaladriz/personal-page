import React from 'react';
import ReactDOM, {  } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import Layout from './Layout';
import Profile from './components/Profile';
import BankData from './components/BankData';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
  {
    path: "datos",
    element: (
    <Layout>
      <BankData />
    </Layout>
    )
  },
  {
    path: "fintoc",
    loader: () => {
      window.location.href = "https://fintoc.me/federico";
      return null;
    },
  },
  {
    path: "bitcoin",
    loader: () => {
      window.location.href = "https://www.buda.com/link/fede";
      return null;
    },
  },
  {
    path: "pay-me-or-die",
    loader: () => redirect("/datos"),
  },
  {
    path: "pay-me-bitch",
    loader: () => redirect("/datos"),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
