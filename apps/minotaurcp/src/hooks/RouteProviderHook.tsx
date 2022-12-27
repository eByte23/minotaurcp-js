import React, { PropsWithChildren } from "react";
import { createContext, useContext, useState } from "react";

import {
  BrowserRouter,
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";

import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "contacts/:contactId",
    //     element: <Contact />,
    //     handle,
    //   },
    // ],
  },
  //     {

  //     },
]);

type Routes = {
  path: string;
  element: React.ReactElement;
}[];

export const RouteProviderContext = createContext<{
  routes: Routes;
  setRoutes: (fn: (prev: Routes) => Routes) => Routes;
} | null>(null);

export const useRouteProvider = () => useContext(RouteProviderContext);

export const InternalRouteProvider = ({ children }: PropsWithChildren) => {
  const [someState, setRoutes] = useState<Routes>([
    { path: "/", element: <App /> },
  ]);

  return (
    <RouteProviderContext.Provider
      value={{
        routes: someState,
        setRoutes: setRoutes as any,
      }}
    >
      {children}
    </RouteProviderContext.Provider>
  );
};
