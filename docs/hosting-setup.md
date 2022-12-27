# Minotaur CP

Automated install and basic configuration of LAMP stack and customisable control panel for hosting as an alternative to cPanel.

Ability to turn on and off features during setup.
Plugin control panel model.

### User file locations

Home Dir: `/home/<username>/`
Hosting dir `/home/<username>/sites/<site_name>/public_html`
access logs:

- `/home/<username>/sites/<domain>/access_logs/<domain>-yyyy-MM-dd-hhmmsss.log` or
- `/home/<username>/access_logs/<domain>-yyyy-MM-dd-hhmmsss.log`
  error logs:
- `/home/<username>/sites/<domain>/error_logs/<domain>-yyyy-MM-dd-hhmmsss.log` or
- `/home/<username>/error_logs/<domain>-yyyy-MM-dd-hhmmsss.log`

### MySql

Shared mysql instance user namespaced.
`username_<db>`

### Postgres

Shared mysql instance user namespaced.
`username_<db>`

## Plugins

Everything in the control panel should be a plugin.
The control panel will include default plugins:

- `DNS`
- `Domains`
- `Sub-Domains`
- `MySql`
- `Postgres`
- `FTP`
- `Email`

### Architecture

All plugins will be required to export a manifest file and the entry point must match the contract.

```ts
interface IPlugin {
  getPackageName(): string;
  getPackageVersion(): string;
  getPackageInfo(): IPluginPackageInfo;
  getRequiresDbChanges?(): boolean;
  getRequiresFsChanges?(): boolean;
  getApiRoutes?(): boolean
}

interface IPluginPackageInfo {
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
```

## Distributed host solution

Home dirs are stored on fast network storage. (SSD) and are just symlinked. (local ssd cache as well?)

Multi-shards setup main gateway then all shards have all domains in nginx and php config.
Somehosts with ftp and some with replicated mysql.
