/// <reference path="./module.d.ts" />
/// <reference types="@minotaurcp/ui" />

// reference https://www.twilio.com/docs/flex/developer/ui/use-ui-actions#register-a-custom-action
// minotaurcp.Actions.registerAction("MyAction", (payload) => { 
// fetch("")...
// minotaurcp.Api.get("",)
// minotaurcp.Api.post("",)
// minotaurcp.Api.send("")
// });

// flex.Actions.addListener(
//   "beforeAcceptTask",
//   (payload, abortFunction) => {
//     alert("Triggered before event AcceptTask");
//     if (!window.confirm("Are you sure you want to accept the task?")) {
//       abortFunction();
//   }
// });

// flex.Actions.addListener("afterCompleteTask", (payload) => {
//   return flex.Actions.invokeAction("MyAction");
// });


// flex.Actions.invokeAction("SendMessage", {              
//   body: 'Thanks for chatting. Your session is now closed.',              
//   conversationSid: payload.task.attributes.conversationSid            
// }).then((response) => {              
//   // Wait until the message is sent to wrap-up the task:              
//   resolve(original(payload));            
// }); 



import * as MinotaurT from "@minotaurcp/ui";
import { Minotaur } from "@minotaurcp/ui";
export type MinotaurGlobal = typeof MinotaurT;





// import Flex from '@twilio/flex-ui';

// export type FlexGlobal = typeof Flex;

// eslint-disable-next-line import/no-unused-modules
export interface IMinotaurPlugin {
  name: string;
  init(minotaur: MinotaurGlobal): void;
}

/**
 * Base class for creating a Flex Plugin
 */
export abstract class MinotaurPlugin implements IMinotaurPlugin {
  public name: string;

  public uniqueName: string = __FPB_PLUGIN_UNIQUE_NAME;

  public version: string = __FPB_PLUGIN_VERSION;

  public dependencies: Record<string, string> = {
    '@twilio/flex-plugin-scripts': __FPB_FLEX_PLUGIN_SCRIPTS_VERSION,
    '@twilio/flex-plugin': __FPB_FLEX_PLUGIN_VERSION,
    'flex-ui': __FPB_FLEX_UI_VERSION,
    react: __FPB_REACT_VERSION,
    'react-dom': __FPB_REACT_DOM_VERSION,
  };

  protected constructor(name: string) {
    this.name = name;

    // eslint-disable-next-line no-console
    console.log(`loading ${this.name}@${this.version} plugin`);
  }

  public abstract init(minotaur: MinotaurGlobal): void;
}

// eslint-disable-next-line import/no-unused-modules
export type PluginConstructor<T> = new () => T;

/**
 * Plugin loader helper function
 * @param plugin
 */
export const loadPlugin = <T extends MinotaurPlugin>(plugin: PluginConstructor<T>): void => {
  if (Minotaur && Minotaur.Plugins) {
    Minotaur.Plugins.init(plugin);
  } else {
    // eslint-disable-next-line no-console
    console.warn('This version of Flex does not appear to support plugins.');
  }
};



export {};

interface IPluginProvider {
  registerUIRoute(path: string, element: React.ReactElement|null): void;
  registerApiRoute?(path: string, func: any): void | any;
}

export interface IPlugin {
  getPluginName(): string;
  getPackageName(): string;
  getPackageVersion(): string;
  getPackageInfo(): IPluginPackageInfo;
  getRequiresDbChanges?(): boolean;
  getRequiresFsChanges?(): boolean;

  registerPlugin(pluginProvider: IPluginProvider): void;
}

export interface IPluginPackageInfo {
  /**
   * pluginName is a non-unique name used for display and routes inside the cp
   */
  pluginName: string;
  /**
   * packageName is unique, unlike pluginName it is not used in the route it is only used to differentiate plugins
   */
  packageName: string;
  description: string;
  packageVersion: string;
  gitRepo?: string;
  authors?: string[];
  supportUrl?: string;
  contactUrl?: string;
  contactEmail?: string;
  isDeprecated?: string;
  requiresDbChanges?: boolean;
  requiresFsChanges?: boolean;
}
