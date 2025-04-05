---
layout: post
title: Schematics in Angular Common control | Syncfusion
description: Learn here all about Schematics in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Schematics

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components now supports the [schematics](https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2?gi=d47ecc14b7ed).
The [NPM](https://www.npmjs.com/search?q=@syncfusion/ej2-angular) packages are installed by using the Angular CLI [`add`](https://github.com/angular/angular-cli) command.

## Creating Angular application

To kickstart your Angular application, you first need to install the [Angular CLI](https://github.com/angular/angular-cli), ensuring it is accessible globally. Execute the following command in your terminal:

```
npm install -g @angular/cli
```

Once the CLI is installed, create a new Angular application by entering:

```
ng new my-app
```

This command sets up a new project by downloading all necessary files and initializing the NPM components.

## Syncfusion<sup style="font-size:70%">&reg;</sup> package initialization

    All the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages can be installed using the following command in the CLI application.

```
ng add 'package-name'
```

For instance, to include the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component:

```
ng add @syncfusion/ej2-angular-grids
```

This command will execute the following configurations in your Angular application:
 
 * Adds `@syncfusion/ej2-angular-grids` package and its peer dependencies to your `package.json` file.
 * Imports the `GridModule` in your application module `app.module.ts`.
 * Registers the Syncfusion<sup style="font-size:70%">&reg;</sup> UI default theme (material) in the `angular.json` file.

## Adding specific modules from multiple component package

The EJ2 Angular Schematics provide the flexibility to include specific modules from a component package directly into your `app.module.ts` file. This can be achieved by specifying the modules as parameters:

```
ng add @syncfusion/<ej2-angular-package-name> --module=module_1,module_2,module_3
```

> NOTE: While passing module names, there should be no space between them. If any, it will be ignored.

For example:

```
ng add @syncfusion/ej2-angular-popups -–module=tooltip
```

```
ng add @syncfusion/ej2-angular-inputs -–module=slider,colorpicker,maskedtextbox
```

```
ng add @syncfusion/ej2-angular-navigation -–module=treeview,tab,contextmenu
```

## Invalid and misspelled module names

When you pass valid and invalid module names, the schematics will add all the valid modules and throw an error for the invalid modules.

For example:

```
ng add @syncfusion/ej2-angular-popups -–module=tooltip,treeview
```

Here, the `tooltip` is a valid module, but the `treeview` is invalid since it does not belong to `@syncfusion/ej2-angular-popups` package. Schematics add only the `tooltip` but it will throw the following error message for `treeview`. It is also applicable for a misspelt module name.

```
The treeview module is not a part of the package, @syncfusion/ej2-angular-popups. The available modules are Tooltip, Dialog.
```