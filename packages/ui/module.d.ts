/// <reference path="./src/actions/types.d.ts" />

interface Window {
  appConfig?: Record<string, unknown>;
}

interface IMinotaur {
  Actions: IActionsManager;
  Plugins: {
    init: (plugin: any) => void;
  };
}

declare const Minotaur: {
  Plugins: {
    init(MinotaurPlugin);
  };
  Actions: IActionsManager;
};

// declare global {
//   namespace NodeJS {
//     interface Global {
//       Minotaur: IMinotaur;
//     }
//   }
// }

declare global {
  var Minotaur: IMinotaur;
}


// declare module NodeJS {
//   interface Global {
//     Minotaur: IMinotaur;
//   }

//   interface globalThis {
//     Minotaur: IMinotaur;
//   }
// }

declare const __FPB_PLUGIN_UNIQUE_NAME: string;
declare const __FPB_PLUGIN_VERSION: string;
declare const __FPB_FLEX_PLUGIN_SCRIPTS_VERSION: string;
declare const __FPB_FLEX_PLUGIN_VERSION: string;
declare const __FPB_FLEX_UI_VERSION: string;
declare const __FPB_REACT_VERSION: string;
declare const __FPB_REACT_DOM_VERSION: string;

interface IActionsManager {
  registerAction(
    name: string,
    action: ActionFunction,
    payloadUpdateFunction?: PayloadUpdateFunction
  ): void;

  invokeAction(name: string, payload?: ActionPayload): Promise<any>;

  //   replaceAction(name: string, action: ReplacedActionFunction): void;
  //   /**
  //    * Add a new listener to the action
  //    * @function addListener
  //    * @param {string} event Event name
  //    * @param {Function} listener Event callback
  //    * @returns {EventEmitter} Event Emitter
  //    * @memberof ActionsManager
  //    */
  //   addListener(
  //     event: string | symbol,
  //     listener: (...args: any[]) => void
  //   ): EventEmitter;
}

/**
 * @callback ActionFunction
 * @param {ActionsManager.ActionPayload} payload action payload
 * @returns {Promise<any>} promise to be invoked for action
 * @memberof ActionsManager
 */
export type ActionFunction = (payload: any) => Promise<any>;

/**
 * @callback ActionCancelFunction
 * @returns {void}
 * @memberof ActionsManager
 */
export declare type ActionCancelFunction = () => void;

/**
 * @callback ReplacedActionFunction
 * @param {ActionsManager.ActionPayload} payload action payload
 * @param {ActionsManager.ActionFunction} original original action invocation
 * @returns {Promise<any>} promise to be invoked for action
 * @memberof ActionsManager
 */
export declare type ReplacedActionFunction = (
  payload: ActionPayload,
  original: ActionFunction
) => Promise<any>;

/**
 * @callback PayloadUpdateFunction
 * @param {ActionsManager.ActionPayload} payload action payload
 * @returns {ActionsManager.ActionPayload} updated action payload
 * @memberof ActionsManager
 */
export declare type PayloadUpdateFunction = (
  payload: ActionPayload
) => ActionPayload;

/**
 * Action with payload
 *
 * @typedef {Object} ActionWithPayload
 * @property {ActionsManager.ActionName} action action code
 * @property {ActionsManager.ActionPayload} [payload] action payload
 * @memberof ActionsManager
 */
export interface ActionWithPayload {
  action: ActionName;
  payload?: ActionPayload;
}

/**
 * Actions with payload
 *
 * @typedef {Object} ActionsWithPayload
 * @property {ActionsManager.ActionWithPayload} [first] first action with payload
 * @property {ActionsManager.ActionPayload} [ACTION_CODE] action payload by action code in key
 * @memberof ActionsManager
 */
export interface ActionsWithPayload {
  [k: string]: ActionPayload;
  first?: ActionWithPayload;
}
/**
 * Action payload
 *
 * @typedef {Object} ActionPayload
 * @memberof ActionsManager
 */
export declare type ActionPayload = any;
/**
 * Action name
 *
 * @typedef {string} ActionName
 * @memberof ActionsManager
 */
export declare type ActionName = string;
/**
 * Predicate to match action by payload
 *
 * @callback MatchActionPayloadPredicate
 * @param {ActionsManager.ActionPayload} payload action payload
 * @param {string} action action code
 * @returns {boolean} true if payload is matched
 * @memberof ActionsManager
 */
export declare type MatchActionPayloadPredicate = (
  payload: ActionPayload,
  action: string
) => boolean;
/**
 * Action payload or predicate to match
 *
 * @typedef {(ActionsManager.MatchActionPayloadPredicate | ActionsManager.ActionPayload)} MatchActionPayload
 * @memberof ActionsManager
 */
