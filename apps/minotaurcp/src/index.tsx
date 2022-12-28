/// <reference types="@babel/core" />
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import {
  useRouteProvider,
  InternalRouteProvider,
} from "./hooks/RouteProviderHook";


import * as Minotaurcp from "@minotaurcp/plugin-ui";

globalThis.Minotaur = Minotaurcp;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     // errorElement: <ErrorPage />,
//     // children: [
//     //   {
//     //     path: "contacts/:contactId",
//     //     element: <Contact />,
//     //     handle,
//     //   },
//     // ],
//   },
//   {

//   },
// ]);

const Page2 = () => {
  return (
    <div>
      <h1>Page 2</h1>
    </div>
  );
};

const AppRoute = () => {
  const p = useRouteProvider();

  useEffect(() => {
    p?.setRoutes((prev) => [
      ...prev,
      {
        path: "/page2",
        element: <Page2 />,
      },
    ]);
  }, []);

  // return <RouterProvider></RouterProvider>;

  return (
    <BrowserRouter>
      <Routes>
        {p?.routes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <React.StrictMode>
    <InternalRouteProvider>
      <AppRoute />
    </InternalRouteProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// <LoadPlugin packageName={package.Name} route="" />
