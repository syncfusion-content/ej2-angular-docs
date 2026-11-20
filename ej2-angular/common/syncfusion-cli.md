---
layout: post
title: Syncfusion CLI in Angular | Syncfusion
description: Learn to use Syncfusion CLI to create and manage Angular apps with Syncfusion components, templates, themes, and AI-powered tools.
control: Syncfusion CLI
platform: common
documentation: ug
domainurl: ##DomainURL##
---

# Syncfusion® CLI in Angular

The **Syncfusion<sup style="font-size:70%">&reg;</sup> CLI** is a command-line tool that helps developers create, configure, and manage Angular projects with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. It simplifies project setup by enabling developers to scaffold Angular applications, add ready-to-use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, configure themes, set up Syncfusion<sup style="font-size:70%">&reg;</sup> MCP assistants, install Syncfusion<sup style="font-size:70%">&reg;</sup> component skills, manage accounts and licenses, and check for CLI updates.

For Angular development, the Syncfusion<sup style="font-size:70%">&reg;</sup> CLI scaffolds the Angular project and then layers on the recommended Syncfusion project structure, predefined templates, and the required component setup. By using the Syncfusion<sup style="font-size:70%">&reg;</sup> CLI, developers can reduce manual configuration effort and quickly start building Angular projects with a recommended project structure, predefined templates, and the required component setup.

> The `@syncfusion/syncfusion-cli` package has been deprecated to follow the standard package naming convention. Please use the latest `@syncfusion/cli` package instead. Future updates and new features will be available only in `@syncfusion/cli`. Uninstall the older package and upgrade to the latest package.

## Prerequisites

- [Node.js 24+](https://nodejs.org/en) (LTS recommended).
- A terminal, command prompt, or shell environment is available.
  
## Key Benefits
  
- **Project Scaffolding** - Quickly create Angular projects with the required Syncfusion configuration and recommended project structure.
- **Component Templates** - Start with ready-to-use Angular component templates such as `Grid`, `Chart`, `Scheduler`, `Gantt`, `File Manager`, `Diagram`, and `Rich Text Editor`, `PDF Viewer`, `DOCX Editor` and `Spreadsheet Editor`.
- **Theme and Styling Configuration** - Easily apply built-in themes such as `Material 3`, `Fluent 2`, `Bootstrap 5.3`, and `Tailwind 3` with CSS or SCSS support.
- **AI Assistant Integration** - Configure MCP assistants and install Syncfusion<sup style="font-size:70%">&reg;</sup> components Skills to improve AI-assisted Angular development.
- **Project information**: View environment and project details, review installed Syncfusion package information.
- **Account and license management** - Sign in to Syncfusion, download and activate license keys, and view installed licenses.

## Installation

Install the Syncfusion<sup style="font-size:70%">&reg;</sup> CLI globally from npm.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
npm install -g @syncfusion/cli
{% endhighlight %}
{% endtabs %}

After installation, verify that the `sf` command is available.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf --version
or 
sf -v
{% endhighlight %}
{% endtabs %}

> If you have the previous `@syncfusion/syncfusion-cli` package installed, use this `npm uninstall -g @syncfusion/syncfusion-cli` command to uninstall it before installing `@syncfusion/cli` to avoid installation failures.

## Interactive Mode

Interactive mode provides a guided command-line interface for accessing the main Syncfusion<sup style="font-size:70%">&reg;</sup> CLI actions. It is useful for users who prefer a menu-driven experience instead of manually entering complete commands.

To start interactive mode, run the CLI without additional arguments.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf
{% endhighlight %}
{% endtabs %}

The interactive menu displays the available CLI actions grouped by category.

```bash
 ──────────────────────────────────────────────────────────────
  Syncfusion CLI                                     v1.0.0
 ──────────────────────────────────────────────────────────────

? What would you like to do? (Use arrow keys)

  📦 PROJECT MANAGEMENT
>      Create a new project                              sf new
       Add component to an existing project              sf add
       Add theme to an existing project                  sf theme switch
       Show environment & project information            sf info

  🤖 AI & SKILLS
       Setup Model Context Protocol (MCP)                sf mcp init
       Add component skills to AI Agent                  sf skills install

  🔑 LICENSE MANAGEMENT
       License & Account Management                      sf license

  ℹ️ HELP & EXIT
       View help                                         sf --help
       Check for CLI updates                             sf upgrade
       Exit                                              Ctrl + C
```

The following options are available in interactive mode:

<table>
<tr>
<th>Option</th>
<th>Description</th>
<th>Command</th>
</tr>
<tr>
<td>Create a new project</td>
<td>Creates a new Angular project using Syncfusion Angular components.</td>
<td>sf new</td>
</tr>
<tr>
<td>Add component to existing project</td>
<td>Adds a Syncfusion Angular component to an existing project.</td>
<td>sf add</td>
</tr>
<tr>
<td>Add themes to existing project</td>
<td>Applies or changes the theme in the current project.</td>
<td>sf theme switch</td>
</tr>
<tr>
<td>Setup MCP</td>
<td>Configures MCP assistant support for the current project.</td>
<td>sf mcp init</td>
</tr>
<tr>
<td>Install Component Skills</td>
<td>Installs Syncfusion component skills to improve AI-assisted development.</td>
<td>sf skills install</td>
</tr>
<tr>
<td>License & Account Management</td>
<td>Manages your Syncfusion account and licenses.</td>
<td>sf license</td>
</tr>
<tr>
<td>Show Project info</td>
<td>Displays environment and project information.</td>
<td>sf info</td>
</tr>
<tr>
<td>View help</td>
<td>Displays Syncfusion CLI help information.</td>
<td>sf --help</td>
</tr>
<tr>
<td>Check for CLI updates</td>
<td>Checks the installed and latest available Syncfusion CLI versions.</td>
<td>sf upgrade</td>
</tr>
<tr>
<td>Exit</td>
<td>Exits interactive mode.</td>
<td>Ctrl + C</td>
</tr>
</table>

## Non-Interactive Mode
  
Non-interactive mode allows you to run Syncfusion CLI commands directly from the terminal by passing options as flags. This mode does not show prompts and is useful for automation, scripts, and repeatable project creation.

### Syntax
  
{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf <command> [options]
{% endhighlight %}
{% endtabs %}

### Example

The following example uses the `new` command to create an Angular project with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components using the Grid template and Material 3 theme.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf new my-app --framework angular --template grid
{% endhighlight %}
{% endtabs %}.

## Syncfusion CLI commands
  
The Syncfusion<sup style="font-size:70%">&reg;</sup> CLI provides commands to create projects, add Syncfusion<sup style="font-size:70%">&reg;</sup> components, configure the MCP server, and install skills, manage themes and licenses, inspect project information, and check for CLI updates.

### Project Creation Command

Create a new Syncfusion<sup style="font-size:70%">®</sup> project with the desired framework, templates, themes, and other configuration options. The project creation commands help you quickly set up a development environment and start building applications with Syncfusion components.

#### `new` command
  
The `new` command creates an Angular project with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. You can use this command to specify the framework, component template, theme, styling format, MCP assistant configuration, and component skills installation.The CLI scaffolds the Angular project; therefore, all Angular projects are TypeScript-based by default.

#### Syntax
  
{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf new <project-name> --framework angular --template <component> --theme <theme> --styling <styling> --mcp <editor> --skills
{% endhighlight %}
{% endtabs %}

#### Example
  
The following command creates an Angular application with the Grid template, Tailwind 3 theme, CSS styling, Syncfusion<sup style="font-size:70%">&reg;</sup> Code Studio MCP configuration, and skills installation.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf new my-app --framework angular --template grid --theme tailwind3 --mcp code-studio --skills
{% endhighlight %}
{% endtabs %}

#### Options

The `new` command supports options for configuring the project during creation.

<table>
<tr>
<th>Option</th>
<th>Description</th>
<th>Supported values</th>
</tr>
<tr>
<td><code>--framework</code></td>
<td>Specifies the application framework.</td>
<td><code>angular</code>,<code>react</code>,<code>vue</code>,<code>typescript</code></td>
</tr>
<tr>
<td><code>--template</code></td>
<td>Specifies the starter template for the application.</td>
<td><code>empty</code>, <code>grid</code>, <code>chart</code>, <code>scheduler</code>, <code>file-manager</code>, <code>gantt</code>, <code>diagram</code>, <code>rich-text-editor</code>, <code>pdf-viewer</code>, <code>docx-editor</code>, <code>spreadsheet-editor</code></td>
</tr>
<tr>
<td><code>--theme</code></td>
<td>Specifies the Syncfusion<sup style="font-size:70%">&reg;</sup> theme to configure in the application.</td>
<td><code>material3</code>, <code>tailwind3</code>, <code>bootstrap5.3</code>, <code>fluent2</code></td>
</tr>
<tr>
<td><code>--styling</code></td>
<td>Specifies the stylesheet format.</td>
<td><code>css</code>, <code>scss</code></td>
</tr>
<tr>
<td><code>--mcp</code></td>
<td>Configures Syncfusion<sup style="font-size:70%">&reg;</sup> MCP assistant support for the selected development environment.</td>
<td><code>all</code>,<code>code-studio</code>, <code>vs-studio</code>, <code>cursor</code>,<code>jetbrains</code></td>
</tr>
<tr>
<td><code>--skills</code></td>
<td>Installs Syncfusion<sup style="font-size:70%">&reg;</sup> components Skills during project creation.</td>
<td>No value required</td>
</tr>
</table>

### Project-Specific Commands
  
The following commands must be run inside an existing Syncfusion<sup style="font-size:70%">&reg;</sup> project directory.

#### Add component command
  
Use the `add` command to add a supported Syncfusion<sup style="font-size:70%">&reg;</sup> component to an existing project.

**Syntax**

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf add <component>
{% endhighlight %}
{% endtabs %}

**Examples:**

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf add grid
sf add chart
sf add scheduler
sf add gantt
sf add filemanager
sf add diagram
sf add rich-text-editor
sf add pdf-viewer
sf add docx-editor
sf add spreadsheet-editor
{% endhighlight %}
{% endtabs %}

#### MCP configuration Command
  
Use the `mcp init` command to configure Syncfusion<sup style="font-size:70%">&reg;</sup> MCP assistant support in an existing project.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf mcp init code-studio
{% endhighlight %}
{% endtabs %}

#### Skills command
  
Use the `skills install` command to install Syncfusion<sup style="font-size:70%">&reg;</sup> component skills in an existing project.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf skills install
{% endhighlight %}
{% endtabs %}

#### Theme switch command
  
Use the `theme switch` command to change the Syncfusion<sup style="font-size:70%">&reg;</sup> theme used in the project.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf theme switch --tailwind3
{% endhighlight %}
{% endtabs %}

#### Project information command
  
Use the `info` command to display project and environment details.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf info
{% endhighlight %}
{% endtabs %}

### License Management Commands

The following commands must be run inside an existing Syncfusion<sup style="font-size:70%">&reg;</sup> project directory.

#### License activate command

Use the `license activate` command to activate a Syncfusion<sup style="font-size:70%">&reg;</sup> license for the current project. If you are not already signed in, the command authenticates your account, downloads the license key for the currently installed package version, saves it to the `syncfusion-license.txt` file, and activates the license using the downloaded key. If no product license is available for your account, the command prompts to set up a trial license after obtaining your approval.

**Syntax**

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf license activate
{% endhighlight %}
{% endtabs %}

The `license activate` command supports following options.

<table>
<tr>
<th>Option</th>
<th>Description</th>
</tr>
<tr>
<td>--file</td>
<td>Activate a Syncfusion<sup style="font-size:70%">&reg;</sup> license from an existing license file instead of downloading a license key from your Syncfusion<sup style="font-size:70%">&reg;</sup> account. If you do not specify a file path, the command uses the default `syncfusion-license.txt` file in the project directory.</td>
</tr>
<tr>
<td>--file "D:\license.txt"</td>
<td>To activate the license from a custom file, by specifying its path.</td>
</tr>
<tr>
</table>

> Before activating a Syncfusion<sup style="font-size:70%">&reg;</sup> license through the CLI, remove any existing [registerLicense](https://ej2.syncfusion.com/angular/documentation/licensing/license-key-registration#register-syncfusion-license-key-in-the-project) method call. If [registerLicense](https://ej2.syncfusion.com/angular/documentation/licensing/license-key-registration#register-syncfusion-license-key-in-the-project) is present in the project, it overrides the CLI license activation.

#### License view command

Use the `license view` command to view the downloaded license keys for the current project. The `.syncfusion/license-meta.json` file stores information about the downloaded license metadata.

**Syntax**

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf license view
{% endhighlight %}
{% endtabs %}

### Account Management Commands

Manage your Syncfusion<sup style="font-size:70%">&reg;</sup> account authentication. The account management commands allow you to sign in to access your Syncfusion licenses and subscriptions, and sign out of the currently authenticated Syncfusion account.

#### login command

Use the `login` command to authenticate your Syncfusion account and enable access to your licenses and subscriptions.

**Syntax**

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf login
{% endhighlight %}
{% endtabs %}

The Syncfusion CLI stores a session token in the following location based on the operating system:

<table>
<tr>
<th>Operating System</th>
<th>Path</th>
</tr>
<tr>
<td>Windows</td>
<td>%APPDATA%\Roaming\Syncfusion\session.json</td>
</tr>
<tr>
<td>macOS</td>
<td>~/Library/Application Support/Syncfusion/session.json</td>
</tr>
<tr>
<tr>
<td>Linux</td>
<td>~/.config/syncfusion/session.json</td>
</tr>
<tr>
</table>

#### logout command

Use the `logout` command to sign out of the currently authenticated Syncfusion account.

**Syntax**

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf logout
{% endhighlight %}
{% endtabs %}

### Default Values

When values are not provided, the Syncfusion CLI uses default values where applicable.

<table>
<tr>
<th>Setting</th>
<th>Default value</th>
</tr>
<tr>
<td>Framework</td>
<td>angular</td>
</tr>
<tr>
<td>Template</td>
<td>empty</td>
</tr>
<tr>
<td>Theme</td>
<td>material3</td>
</tr>
<tr>
<td>Styling</td>
<td>css</td>
</tr>
<tr>
<td>MCP</td>
<td>no</td>
</tr>
<tr>
<td>Skills</td>
<td>no</td>
</tr>
</table>

## Check for CLI updates

Use the `upgrade` command to check the installed and latest available Syncfusion CLI versions.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf upgrade
{% endhighlight %}
{% endtabs %}

If the installed CLI version is outdated, the command displays the following command to upgrade to the latest version:

{% tabs %}
{% highlight bash tabtitle="CMD" %}
npm i -g @syncfusion/cli
{% endhighlight %}
{% endtabs %}

## Help
  
The `--help` option displays the list of available Syncfusion CLI commands, arguments, and options.

{% tabs %}
{% highlight bash tabtitle="CMD" %}
sf --help
{% endhighlight %}
{% endtabs %}

### FAQ

**Which frameworks are supported?**  
The Syncfusion CLI supports React, Angular, Vue and TypeScript  applications.

**Can I create a project without interactive prompts?**  
Yes. Use flag mode to create projects non-interactively. For Angular, pass `--framework angular` along with the desired options.

**Can I add components after project creation?**  
Yes. Use the `sf add <component>` command to add supported Syncfusion<sup style="font-size:70%">&reg;</sup> components to an existing project.

**Can I change the theme after project creation?**  
Yes. Use the `sf theme switch <themeName>` command to switch themes.

**Does the Syncfusion CLI support Syncfusion<sup style="font-size:70%">&reg;</sup> MCP and Skills?**  
Yes. The CLI supports Syncfusion<sup style="font-size:70%">&reg;</sup> MCP assistant configuration and Syncfusion<sup style="font-size:70%">&reg;</sup> Components Skills installation.
