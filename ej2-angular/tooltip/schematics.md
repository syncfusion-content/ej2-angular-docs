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

Angular schematics is a workflow tool that allows you to generate components, modules, and resolve dependency issues. The main goal of the schematics is ease of use and development in angular environment.

EJ2 Tooltip supports Angular schematic's module injection, component generation, automation dependency installation, styles imports, etc.

## Getting started

>Note: Angular schematics supports only from the Angular CLI v6. So, check your version by running the `ng --version` command. If it is below version 6, update your CLI by running the following command: `npm install -g @angular/cli`.

In order to work with Angular schematics, create an Angular CLI application. Run the following command to create a CLI application.

```
ng new angular-application
```

After running the above command and all the dependency modules installed, we can generate EJ2 Tooltip component using schematics.

## Dependency and Module injection using Schematics

Using schematics, we can automatically perform dependency and module injection of the EJ2 Popups package `@syncfusion/ej2-angular-popups` automatically. Run the following command in the root of the application.

```
ng add @syncfusion/ej2-angular-popups --modules=tooltip
```

The above command will do the following,

* Installs the `@syncfusion/ej2-angular-popups` package, and adds an entry in `package.json` file.
* Imports the `TooltipModule` module in the `app.module.ts`, and adds an entry in the `import` property of the `@NgModule` decorator.

## Component generation using Schematics

Angular Schematics can be used to generate component, module file, etc. In the same way, Tooltip components can also be generated.

By using Schematics to generate EJ2 Tooltip, the time for configuring components is significantly reduced, and they are made ready for development immediately. To generate EJ2 Tooltip component with specific features, refer to the following table.

The general syntax for the ng generate command is `ng generate @syncfusion/<component-package-name>:<componentName-featureName> --name=<your-desired-name>`

| Feature Name     |  Schematics command                                                                   |
|     :-:          |  ---                                                                                  |
| Default Tooltip  | `ng generate @syncfusion/ej2-angular-popups:tooltip-default --name=default-tooltip`   |
| Template Tooltip | `ng generate @syncfusion/ej2-angular-popups:tooltip-template --name=template-tooltip` |

The above commands will do the following,

* Generate the Tooltip with specific features mentioned in the `src/app` with folder name of the `name` property passed.
* Import the generated component into the `app.module.ts` file, and add an entry in the `declarations` array in the `@NgModule` decorator.

> Note: It is not required to run the above commands only after the `ng add @syncfusion/ej2-angular-popups`, but it is required to have `@syncfusion/ej2-angular-popups` installed.
