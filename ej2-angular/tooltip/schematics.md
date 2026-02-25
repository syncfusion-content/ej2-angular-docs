---
layout: post
title: Schematics in Angular Tooltip component | Syncfusion
description: Learn here all about Schematics in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip 
documentation: ug
domainurl: ##DomainURL##
---

# Schematics in Angular Tooltip component

Angular schematics is a workflow tool that generates components, modules, and resolves dependency issues. Schematics enhance ease of use and development in the Angular environment.

EJ2 Tooltip supports Angular schematics for module injection, component generation, automatic dependency installation, and style imports.

## Getting started

>Note: Angular schematics supports only from the Angular CLI v6. So, check your version by running the `ng --version` command. If it is below version 6, update your CLI by running the following command: `npm install -g @angular/cli`.

To work with Angular schematics, create an Angular CLI application by running the following command:

```
ng new angular-application
```

After running this command and installing all dependencies, you can generate EJ2 Tooltip components using schematics.

## Dependency and Module injection using Schematics

Use schematics to automatically inject dependencies and modules for the EJ2 Popups package `@syncfusion/ej2-angular-popups`. Run the following command in the application root:

```
ng add @syncfusion/ej2-angular-popups --modules=tooltip
```

This command performs the following:

* Installs the `@syncfusion/ej2-angular-popups` package and adds an entry to `package.json`.
* Imports the `TooltipModule` module in `app.module.ts` and adds an entry to the `import` property of the `@NgModule` decorator.

## Component generation using Schematics

Use Angular Schematics to generate components, modules, and other files. Schematics can also generate Tooltip components.

Using Schematics to generate EJ2 Tooltip reduces configuration time and makes components ready for development immediately. To generate EJ2 Tooltip components with specific features, refer to the following table.

The general syntax for the ng generate command is: `ng generate @syncfusion/<component-package-name>:<componentName-featureName> --name=<your-desired-name>`

| Feature Name     |  Schematics command                                                                   |
|     :-:          |  ---                                                                                  |
| Default Tooltip  | `ng generate @syncfusion/ej2-angular-popups:tooltip-default --name=default-tooltip`   |
| Template Tooltip | `ng generate @syncfusion/ej2-angular-popups:tooltip-template --name=template-tooltip` |

These commands perform the following:

* Generate the Tooltip with specific features in `src/app` using the folder name from the `name` property.
* Import the generated component into `app.module.ts` and add an entry to the `declarations` array in the `@NgModule` decorator.

> Note: You are not required to run the ng add command first, but `@syncfusion/ej2-angular-popups` must be installed.
