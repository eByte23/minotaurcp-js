import { MinotaurGlobal, MinotaurPlugin } from "@minotaurcp/plugin-base";

const PLUGIN_NAME = "domain-manager";

export class DomainManagerPlugin extends MinotaurPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  public init(minotaur: MinotaurGlobal): void {
    // minotaur.Actions.registerAction()
  }
}
