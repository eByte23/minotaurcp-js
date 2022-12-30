import { IMenuItem } from "@minotaurcp/plugin-ui";
import { PropsWithChildren, useMemo } from "react";
import { useMinotaurCP } from "../hooks/useMinotaurCP";

export const MainLayout = ({ children }: PropsWithChildren) => {
  const minotaur = useMinotaurCP()!;
  const menuItems = useMemo(
    () => Minotaur.UI.menuItems,
    [Minotaur.UI.menuItems]
  );

  return (
    <div>
      {<div style={{ display: "none" }}>{minotaur.toString()} </div>}
      <div>
        <h2>Menu</h2>
        <ul>
          {menuItems.map((item: IMenuItem) => (
            <li key={item.key}>{item.label}</li>
          ))}
        </ul>
      </div>
      {children}
    </div>
  );
};
