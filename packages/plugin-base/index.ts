import React from "react";

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
