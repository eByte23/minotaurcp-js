// import "./src/actions/types";
import {
  IMinotaur,
  IMinotaurPlugin,
  IRenderHelper,
  PluginConstructor,
} from "./module";
import { Actions } from "./actions";

type IRenderListener = () => void;

class RenderHelper implements IRenderHelper {
  private listeners: IRenderListener[] = [];

  addListener(callback: () => void) {
    this.listeners.push(callback);
  }

  removeListener(callback: () => void) {
    this.listeners = this.listeners.filter((x) => callback === x);
  }

  trigger() {
    for (const listener of this.listeners) {
      listener();
    }
  }
}

const MinotaurImpl: IMinotaur = {
  UI: {
    menuItems: [
      {
        label: "Home",
        key: "home",
        display: true,
        icon: "1234",
      },
    ],
  },
  Actions,
  Plugins: {
    init: function <T extends IMinotaurPlugin>(
      plugin: PluginConstructor<T>
    ): void {
      const pluginInstance = new plugin();
      pluginInstance.init(Minotaur);
      console.log(`Registered plugin '${pluginInstance.name}'.`);

      Minotaur.Render.trigger();
    },
  },
  Render: new RenderHelper(),
};

globalThis.Minotaur = MinotaurImpl;
