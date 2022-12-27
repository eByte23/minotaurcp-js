import type { IPlugin, IPluginPackageInfo } from "@minotaurcp/plugin-base";

const packageInfo: IPluginPackageInfo = {
  pluginName: "domains",
  packageName: "@minotaurcp/plugin-domain",
  packageVersion: "0.0.1-alpha",
  description: "",
};

const DomainPlugin: IPlugin = {
  getPluginName: () => packageInfo.pluginName,
  getPackageName: () => packageInfo.packageName,
  getPackageVersion: () => packageInfo.packageVersion,
  getPackageInfo: () => packageInfo,
  registerPlugin: (pp) => {
    pp.registerUIRoute("/domains", null);
  },
};


export default DomainPlugin;