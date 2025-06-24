---
layout: post
title: Installation in Angular Installation and upgrade control | Syncfusion
description: Learn here all about Installation in Syncfusion Angular Installation and upgrade component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Installation 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD024 -->

# Installation of Syncfusion<sup style="font-size:70%">&reg;</sup> Controls

## Install by using NPM CLI

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. All Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages can be found on [npm]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler (Angular’s legacy compilation and rendering pipeline) package.

### Ivy Library Distribution Package

By default, Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) supports [Angular Ivy distribution](https://docs.angular.lat/guide/ivy). These packages are compatible with Angular version 12 and above. To install the package use the below command,

Add the [`@syncfusion/ej2-angular-grids`](https://www.npmjs.com/package/@syncfusion/ej2-angular-grids/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-grids --save
```

### Angular compatibility compiled package (ngcc)

For Angular version below 12, use the `ngcc` tagged packages of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To install the package use the following command,

Add the [`@syncfusion/ej2-angular-grids@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-grids/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-grids@ngcc --save
```

To specify the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as shown below.

```bash
@syncfusion/ej2-angular-grids:"20.2.38-ngcc"
```

> If the ngcc tag is not specified while installing the package for Angular versions below 12, the Ivy package will be installed with a warning.

## Install by using package.json

1. Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular (Essential JS 2) package references in the `dependencies` section of the `~/package.json` file.

    ```json
    {
        "dependencies": {
            "@syncfusion/ej2-angular-grids": "*",
            "@syncfusion/ej2-angular-charts": "*"
        }
    }
    ```
    > The `*` indicates the latest version of the npm package. Refer to the [documentation](https://docs.npmjs.com/misc/) for more details about npm versioning.

2. Now, open the command prompt and run the `npm install` command. This will install all npm dependencies in a single command.

    > Refer to the [documentation](https://docs.npmjs.com/files/package.json) for more details about npm package.json
