---
layout: post
title: Installation of Syncfusion Angular Controls | Syncfusion
description: Learn how to install Syncfusion Essential JS 2 Angular UI components using npm CLI or package.json, including Ivy and ngcc packages.
platform: ej2-angular
control: Installation
documentation: ug
domainurl: ##DomainURL##
---

# Installation of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Controls

This guide explains how to install Syncfusion<sup style="font-size:70%">&reg;</sup> Essential JS 2 Angular UI components into an existing Angular application using either the **NPM CLI** or the **`package.json`** file.

**Prerequisites**

* [Node.js](https://nodejs.org/) and npm installed. npm is bundled with Node.js.
* An existing Angular project created with the [Angular CLI](https://angular.io/cli) (Angular 6 or later is supported, but the required package format depends on your Angular version; see below).
* Access to the npm registry (public, or your private registry if applicable).

## Install by Using the NPM CLI

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed on npm as `@syncfusion` scoped packages. All Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages can be found on [npm](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two package structures for Angular components:

1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler (ngcc) package (Angular's legacy compilation and rendering pipeline)

### Ivy Library Distribution Package

By default, Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (>= 20.2.36) support the [Angular Ivy distribution](https://angular.io/guide/ivy). These packages are compatible with Angular version 12 and above.

To install a package, run the following command in the root of your Angular project:

```bash
npm install @syncfusion/ej2-angular-grids --save
```

For a list of available packages and the latest version, see [`@syncfusion/ej2-angular-grids`](https://www.npmjs.com/package/@syncfusion/ej2-angular-grids) on npm.

### Angular Compatibility Compiler (ngcc) Package

For Angular versions below 12, use the `ngcc`-tagged packages of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components.

To install the `ngcc` package, run the following command in the root of your Angular project:

```bash
npm install @syncfusion/ej2-angular-grids@ngcc --save
```

To specify the `ngcc` package directly in the `package.json` file, add the suffix `-ngcc` to the package version, as shown below:

```json
"@syncfusion/ej2-angular-grids": "20.2.38-ngcc"
```

> If the `ngcc` tag is not specified for Angular versions below 12, the Ivy package installs by default, resulting in a warning.

## Install by Using package.json

1. Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular (Essential JS 2) package references in the `dependencies` section of your project's `package.json` file:

    ```json
    {
        "dependencies": {
            "@syncfusion/ej2-angular-grids": "20.2.38",
            "@syncfusion/ej2-angular-charts": "20.2.38"
        }
    }
    ```

    > Replace `20.2.38` with the version you need, or use `^20.2.38` to allow updates to the most recent compatible release. For details on version ranges, see the [npm `package.json` documentation](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#dependencies).

2. From the root of your project, run the following command to install all npm dependencies at once:

    ```bash
    npm install
    ```

    > For more information, see the [npm `package.json` documentation](https://docs.npmjs.com/cli/v10/configuring-npm/package-json).

## Next Steps

After installing the package, you typically need to:

1. Import the required module into your Angular feature module. For example:

    ```typescript
    import { GridModule } from '@syncfusion/ej2-angular-grids';
    ```

2. Register `GridModule` (or the relevant module) in the `imports` array of your feature `NgModule` (or import the standalone component directly for Angular 14+ standalone components).

For component-specific configuration, theming, and usage examples, refer to the documentation of the individual Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component you are using.

## Troubleshooting

| Issue | Possible Cause | Suggested Fix |
| --- | --- | --- |
| `npm install` reports a peer-dependency warning about Angular versions. | Installed package version does not match your Angular version. | Use the Ivy package (default) for Angular 12+, or the `@ngcc` tag for Angular versions below 12. |
| Ivy package installed but app fails to compile under Angular 11. | The Ivy distribution requires Angular 12+. | Install the matching `@ngcc` package: `npm install @syncfusion/ej2-angular-grids@ngcc --save`. |
| `package.json` shows the package version as `*` and `npm install` fails. | `*` is a placeholder, not a valid npm range. | Replace `*` with an explicit version such as `^20.2.38` or a specific version. |

For additional help, see [Common Installation Errors](https://ej2.syncfusion.com/angular/documentation/installation-and-upgrade/common-installation-errors).
