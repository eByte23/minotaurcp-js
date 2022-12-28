import { loadPlugin } from "@minotaurcp/plugin-base/src";
import { DomainManagerPlugin } from "./src/DomainsManagerPlugin";

// const packageInfo: IPluginPackageInfo = {
//   pluginName: "domains",
//   packageName: "@minotaurcp/plugin-domain",
//   packageVersion: "0.0.1-alpha1",
//   description: "",
// };

// const DomainPlugin: IPlugin = {
//   getPluginName: () => packageInfo.pluginName,
//   getPackageName: () => packageInfo.packageName,
//   getPackageVersion: () => packageInfo.packageVersion,
//   getPackageInfo: () => packageInfo,
//   registerPlugin: (pp) => {
//     pp.registerUIRoute("/domains", null);
//   },
// };

loadPlugin(DomainManagerPlugin);