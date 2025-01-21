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

Angular schematics is a workflow tool that allows you generate component, modules, and resolve dependency issues. The main goal of the schematics is ease of use and development in angular environment.

EJ2 ListView supports Angular schematic's module injection, component generation, automation dependency installation, styles imports, etc.

## Getting started

>Note: Angular schematics supports only from the Angular CLI v6. So, check your version by running `ng --version`. If it is below version 6, update your CLI by running the following command: `npm install -g @angular/cli`.

In order to work with Angular schematics, create an Angular CLI application. Run the following command to create a CLI application.

```
ng new angular-application
```

After running the above command and all the dependency modules installed, we can generate EJ2 ListView component using schematics.

## Dependency and Module injection using Schematics

Using schematics, we can perform dependency and module injection of the EJ2 lists package `@syncfusion/ej2-angular-lists` automatically. Run the following command in the root of the application.

```
ng add @syncfusion/ej2-angular-lists
```

The above command will do the following,

* Installs the `@syncfusion/ej2-angular-lists` package, and add an entry in `package.json` file.
* Imports the `ListViewModule` module in the `app.module.ts`, and add an entry in the `import` property of the `@NgModule` decorator.

## Component generation using Schematics

Angular Schematics can be used to generate component, module file, etc. In the same way, ListView components can also be generated.

By using the Schematics to generate EJ2 ListView, the time for configuring components is significantly reduced and it is made ready for development immediately. To generate EJ2 ListView component with specific features, refer to the following table.

The general syntax for the ng generate command is
`ng generate @syncfusion/<component-package-name>:<componentName-featureName> --name=<your-desired-name>`

| Feature Name    | Schematics command                                                                              |
|     :-:         |  ---                                                                                            |
| Default List    | `ng generate @syncfusion/ej2-angular-lists:listview-default --name=default-list`                |
| Check List      | `ng generate @syncfusion/ej2-angular-lists:listview-checklist --name=check-list`                |
| Nested List     | `ng generate @syncfusion/ej2-angular-lists:listview-nestedlist --name=nested-list`              |
| Remote List     | `ng generate @syncfusion/ej2-angular-lists:listview-remotelist --name=remote-list`              |
| Template List   | `ng generate @syncfusion/ej2-angular-lists:listview-template --name=template-list`          |
| Virtualization  | `ng generate @syncfusion/ej2-angular-lists:listview-virtualization --name=virtualization-list`  |

The above commands will do the following,

* Generate the ListView with specific features mentioned in the `src/app` with folder name of the `name` property passed.
* Import the generated component into the `app.module.ts` file, and add an entry in the `declarations` array in the `@NgModule` decorator.

> Note: It is not required to run the above commands only after the `ng add @syncfusion/ej2-angular-lists` but it is required to have `@syncfusion/ej2-angular-lists` installed.
