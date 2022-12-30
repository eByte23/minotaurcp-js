/// <reference types="node" />

import { EventEmitter } from "events";
import {
  ActionFunction,
  ActionPayload,
  IActionsManager,
  PayloadUpdateFunction,
} from "../module";

type InternalActionsObj = { [key: string]: ActionFunction };

export class ActionsManagerImpl implements IActionsManager {
  private actions: InternalActionsObj = {};
  private listeners = {};

  registerAction(
    name: string,
    action: ActionFunction,
    payloadUpdateFunction?: PayloadUpdateFunction
  ) {
    if (name in this.actions) {
      throw new Error(
        `Action name '${name}' is already registered. Either use a different name or replace the action.`
      );
    }

    this.actions[name] = action;
  }

  _invokeBefore(name: string, payload?: ActionPayload) {}
  _invokeAfter(name: string, payload?: ActionPayload) {}

  async invokeAction(name: string, payload?: ActionPayload) {
    if (!(name in this.actions)) {
      throw new Error(`Action name '${name}' is not registered.`);
    }

    // run _invokeBefore()

    const actionResult = await this.actions[name]?.(payload);
    // run _invokeAfter()
    Minotaur.Render.trigger();
    return actionResult;
  }
}
