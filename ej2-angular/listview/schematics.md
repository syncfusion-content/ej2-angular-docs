---
layout: post
title: Schematics in Angular ListView component | Syncfusion
description: Learn here all about Schematics in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView 
documentation: ug
domainurl: ##DomainURL##
---

# Schematics in Angular ListView component

Angular schematics is a workflow tool that allows developers to generate components, modules, and automatically resolve dependency issues. Schematics streamline the development process by automating repetitive tasks and ensuring consistent project structure in Angular applications.

The Syncfusion EJ2 ListView component supports Angular schematics for module injection, component generation, automated dependency installation, and style imports, significantly reducing setup time and configuration effort.

## Getting started

>Note: Angular schematics requires Angular CLI v6 or later. Check your version by running `ng --version`. If using an earlier version, update the CLI by running the following command: `npm install -g @angular/cli`.

To work with Angular schematics, first create an Angular CLI application. Run the following command to create a new CLI application:

```
ng new angular-application
```

After the command completes and all dependency modules are installed, you can generate the EJ2 ListView component using schematics.

## Dependency and Module injection using Schematics

Schematics automatically handle dependency and module injection for the EJ2 lists package `@syncfusion/ej2-angular-lists`. Run the following command in the root directory of your application:

```
ng add @syncfusion/ej2-angular-lists
```

This command performs the following actions:

* Installs the `@syncfusion/ej2-angular-lists` package and adds an entry in the `package.json` file.
* Imports the `ListViewModule` in the `app.module.ts` file and adds an entry in the `imports` array of the `@NgModule` decorator.

## Component generation using Schematics

Angular schematics can generate components and module files with pre-configured settings. The ListView component can be generated with specific features and functionality already implemented.

Using schematics to generate EJ2 ListView components significantly reduces configuration time and provides development-ready components. To generate an EJ2 ListView component with specific features, use the commands listed in the following table.

The general syntax for the ng generate command is:
`ng generate @syncfusion/<component-package-name>:<componentName-featureName> --name=<your-desired-name>`

| Feature Name    | Schematics command                                                                              |
|     :-:         |  ---                                                                                            |
| Default List    | `ng generate @syncfusion/ej2-angular-lists:listview-default --name=default-list`                |
| Check List      | `ng generate @syncfusion/ej2-angular-lists:listview-checklist --name=check-list`                |
| Nested List     | `ng generate @syncfusion/ej2-angular-lists:listview-nestedlist --name=nested-list`              |
| Remote List     | `ng generate @syncfusion/ej2-angular-lists:listview-remotelist --name=remote-list`              |
| Template List   | `ng generate @syncfusion/ej2-angular-lists:listview-template --name=template-list`          |
| Virtualization  | `ng generate @syncfusion/ej2-angular-lists:listview-virtualization --name=virtualization-list`  |

These commands perform the following actions:

* Generate the ListView component with the specified features in the `src/app` directory with a folder name matching the `name` property value.
* Import the generated component into the `app.module.ts` file and add an entry in the `declarations` array of the `@NgModule` decorator.

> Note: It is not required to run the above commands only after the `ng add @syncfusion/ej2-angular-lists` but it is required to have `@syncfusion/ej2-angular-lists` installed.
