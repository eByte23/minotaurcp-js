import { MinotaurGlobal, MinotaurPlugin } from "@minotaurcp/plugin-base";
import { IMinotaur } from "@minotaurcp/plugin-ui";

const PLUGIN_NAME = "domain-manager";

export class DomainManagerPlugin extends MinotaurPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  public init(minotaur: IMinotaur): void {
    minotaur.Actions.registerAction(
      "domain-manager.testfn",
      async (payload: any) => {
        console.log("Action run: 'domain-manager.testfn'", payload);
        minotaur.UI.menuItems.push({
          icon: "234",
          label: "Domain Manger",
          key: "domain-manger",
          display: true,
        });
      }
    );
  }
}
