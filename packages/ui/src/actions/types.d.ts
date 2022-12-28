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
export declare type ReplacedActionFunction = (payload: ActionPayload, original: ActionFunction) => Promise<any>;

/**
 * @callback PayloadUpdateFunction
 * @param {ActionsManager.ActionPayload} payload action payload
 * @returns {ActionsManager.ActionPayload} updated action payload
 * @memberof ActionsManager
 */
export declare type PayloadUpdateFunction = (payload: ActionPayload) => ActionPayload;

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
export declare type MatchActionPayloadPredicate = (payload: ActionPayload, action: string) => boolean;
/**
 * Action payload or predicate to match
 *
 * @typedef {(ActionsManager.MatchActionPayloadPredicate | ActionsManager.ActionPayload)} MatchActionPayload
 * @memberof ActionsManager
 */


