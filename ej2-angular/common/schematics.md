---
layout: post
title: Schematics in Angular Common control | Syncfusion
description: Learn here all about Schematics in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Angular Schematics

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components support Angular schematics, allowing seamless installation and automatic configuration using the Angular CLI `ng add` command. This approach handles package installation, module imports, theme registration, and build configuration with minimal manual effort.

## Prerequisites

- Install the Angular CLI globally (if not already installed):
```bash
npm install -g @angular/cli
```

- Create a new Angular application (if starting fresh):
```bash
ng new my-app
cd my-app
```

## Installing a Syncfusion<sup style="font-size:70%">&reg;</sup> Package

Use the `ng add` command to install any Syncfusion<sup style="font-size:70%">&reg;</sup> Angular package:

```bash
ng add @syncfusion/ej2-angular-grids
```

This command performs the following automatically:
- Installs the package and required peer dependencies in `package.json`
- Imports the corresponding module (e.g., `GridModule`) in `app.module.ts` (or registers standalone components in `app.config.ts` for standalone projects)
- Adds the default Material theme CSS to `angular.json` styles array
- Applies necessary build and architect configurations

After running the command, the component is ready to use in your application without further setup.

## Adding specific modules from multiple component package

Some Syncfusion<sup style="font-size:70%">&reg;</sup> packages contain multiple components/modules. Specify which modules to include using the `--module` flag (comma-separated, no spaces):

```bash
ng add @syncfusion/ej2-angular-popups --module=tooltip
```

```bash
ng add @syncfusion/ej2-angular-inputs --module=slider,colorpicker,maskedtextbox
```

```bash
ng add @syncfusion/ej2-angular-navigation --module=treeview,tab,contextmenu
```

> **Note**: Module names must be exact, case-sensitive, and belong to the specified package. No spaces are allowed between module names.

## Handling Invalid or Misspelled Module Names

If one or more module names are invalid or misspelled, the schematic installs the valid ones and displays an error for the invalid entries.

Example:

```bash
ng add @syncfusion/ej2-angular-popups --module=tooltip,treeview
```

Result:
- `tooltip` is added successfully
- Error message displayed:
The treeview module is not a part of the package @syncfusion/ej2-angular-popups. The available modules are Tooltip, Dialog.

## Additional Options and Best Practices

- **Theme Selection**: Some schematics support `--theme` or prompt for theme choice (e.g., material, bootstrap5, tailwind). Check component-specific docs for availability.
- **Standalone Projects**: In Angular 17+ standalone applications, schematics register components/providers in `app.config.ts`.
- **Re-running Schematics**: Safe to run multiple times; updates existing configurations without duplication.
- **Next Steps**: After installation, import and use the component in your template (e.g., `<ejs-grid>...</ejs-grid>`).

For detailed options and troubleshooting, refer to the individual component documentation or the [official Angular schematics guide](https://angular.dev/tools/cli/schematics).