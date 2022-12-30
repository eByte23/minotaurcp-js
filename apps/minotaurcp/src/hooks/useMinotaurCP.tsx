import { IActionsManager } from "@minotaurcp/plugin-ui";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type MinotaurControlPanelObject = {
  Actions: IActionsManager;
  Plugins: any;
};

export const MinotaurControlPanelContext = createContext<any>(null);

export const useMinotaurCP = () => useContext(MinotaurControlPanelContext);

export const MinotaurControlPanelContextProvider = ({
  children,
}: PropsWithChildren) => {
  const [refreshState, doRefresh] = useState(1);

  Minotaur.Render.addListener(() => {
      doRefresh(refreshState + 1);
      console.log("Refresh triggered");
  });
  //   const [someState, setRoutes] = useState<Routes>([
  //     { path: "/", element: <App /> },
  //   ]);

  return (
    <MinotaurControlPanelContext.Provider value={refreshState}>
      {children}
    </MinotaurControlPanelContext.Provider>
  );
};

export {};
