oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g minotaurcp-cli
$ minotaurcp-cli COMMAND
running command...
$ minotaurcp-cli (--version)
minotaurcp-cli/0.0.0 linux-x64 node-v16.19.0
$ minotaurcp-cli --help [COMMAND]
USAGE
  $ minotaurcp-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`minotaurcp-cli hello PERSON`](#minotaurcp-cli-hello-person)
* [`minotaurcp-cli hello world`](#minotaurcp-cli-hello-world)
* [`minotaurcp-cli help [COMMAND]`](#minotaurcp-cli-help-command)
* [`minotaurcp-cli plugins`](#minotaurcp-cli-plugins)
* [`minotaurcp-cli plugins:install PLUGIN...`](#minotaurcp-cli-pluginsinstall-plugin)
* [`minotaurcp-cli plugins:inspect PLUGIN...`](#minotaurcp-cli-pluginsinspect-plugin)
* [`minotaurcp-cli plugins:install PLUGIN...`](#minotaurcp-cli-pluginsinstall-plugin-1)
* [`minotaurcp-cli plugins:link PLUGIN`](#minotaurcp-cli-pluginslink-plugin)
* [`minotaurcp-cli plugins:uninstall PLUGIN...`](#minotaurcp-cli-pluginsuninstall-plugin)
* [`minotaurcp-cli plugins:uninstall PLUGIN...`](#minotaurcp-cli-pluginsuninstall-plugin-1)
* [`minotaurcp-cli plugins:uninstall PLUGIN...`](#minotaurcp-cli-pluginsuninstall-plugin-2)
* [`minotaurcp-cli plugins update`](#minotaurcp-cli-plugins-update)

## `minotaurcp-cli hello PERSON`

Say hello

```
USAGE
  $ minotaurcp-cli hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/eByte23/minotaurcp-js/blob/v0.0.0/dist/commands/hello/index.ts)_

## `minotaurcp-cli hello world`

Say hello world

```
USAGE
  $ minotaurcp-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ minotaurcp-cli hello world
  hello world! (./src/commands/hello/world.ts)
```

## `minotaurcp-cli help [COMMAND]`

Display help for minotaurcp-cli.

```
USAGE
  $ minotaurcp-cli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for minotaurcp-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.20/src/commands/help.ts)_

## `minotaurcp-cli plugins`

List installed plugins.

```
USAGE
  $ minotaurcp-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ minotaurcp-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.8/src/commands/plugins/index.ts)_

## `minotaurcp-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ minotaurcp-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ minotaurcp-cli plugins add

EXAMPLES
  $ minotaurcp-cli plugins:install myplugin 

  $ minotaurcp-cli plugins:install https://github.com/someuser/someplugin

  $ minotaurcp-cli plugins:install someuser/someplugin
```

## `minotaurcp-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ minotaurcp-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ minotaurcp-cli plugins:inspect myplugin
```

## `minotaurcp-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ minotaurcp-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ minotaurcp-cli plugins add

EXAMPLES
  $ minotaurcp-cli plugins:install myplugin 

  $ minotaurcp-cli plugins:install https://github.com/someuser/someplugin

  $ minotaurcp-cli plugins:install someuser/someplugin
```

## `minotaurcp-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ minotaurcp-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ minotaurcp-cli plugins:link myplugin
```

## `minotaurcp-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ minotaurcp-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ minotaurcp-cli plugins unlink
  $ minotaurcp-cli plugins remove
```

## `minotaurcp-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ minotaurcp-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ minotaurcp-cli plugins unlink
  $ minotaurcp-cli plugins remove
```

## `minotaurcp-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ minotaurcp-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ minotaurcp-cli plugins unlink
  $ minotaurcp-cli plugins remove
```

## `minotaurcp-cli plugins update`

Update installed plugins.

```
USAGE
  $ minotaurcp-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
