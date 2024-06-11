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

The Syncfusion Angular components now supports the [schematics](https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2?gi=d47ecc14b7ed).
The [NPM](https://www.npmjs.com/search?q=@syncfusion/ej2-angular) packages are installed by using the Angular CLI [`add`](https://github.com/angular/angular-cli/wiki/add/) command.

## Creating Angular application

To create an Angular application, install the [Angular CLI](https://github.com/angular/angular-cli) globally using the following command.

```
npm install -g @angular/cli
```

Then, create a new Angular application using the following command.

```
ng new my-app
```

This will download all the required files and initialize the NPM install.

## Syncfusion package initialization

    All the Syncfusion Angular packages can be installed using the following command in the CLI application.

```
ng add 'package-name'
```

For example,

```
ng add @syncfusion/ej2-angular-grids
```

The above command does the following configuration to your Angular app,
 
 * Adds `@syncfusion/ej2-angular-grids` package and its peer dependencies to your `package.json` file.
 * Imports the `GridModule` in your application module `app.module.ts`.
 * Registers the Syncfusion UI default theme (material) in the `angular.json` file.

## Adding specific modules from multiple component package

The EJ2 Angular Schematics support adding a specific module from the component package to the `app.module.ts` file.

While initializing the package, we can pass the preferred module as a parameter using the following command.

```
ng add @syncfusion/<ej2-angular-package-name> --module=module_1,module_2,module_3
```

> NOTE: While passing module names, there should be no space between them. If any, it will be ignored.

For example,

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

For example,

```
ng add @syncfusion/ej2-angular-popups -–module=tooltip,treeview
```

Here, the `tooltip` is a valid module, but the `treeview` is invalid since it does not belong to `@syncfusion/ej2-angular-popups` package. Schematics add only the `tooltip` but it will throw the following error message for `treeview`. It is also applicable for a misspelt module name.

```
The treeview module is not a part of the package, @syncfusion/ej2-angular-popups. The available modules are Tooltip, Dialog.
```