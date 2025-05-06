---
layout: post
title: Installation in Angular Platform | Syncfusion
description: Learn here all about installation support in Syncfusion Essential Angular platform, it's elements and more.
platform: ej2-angular
control: Installation 
documentation: ug
domainurl: ##DomainURL##
---

# Installation in Angular 

## Installing Package

Syncfusion Angular UI Component (Essential JS 2) packages are published in [npm](https://www.npmjs.com/search?q=ej2-angular&page=1&ranking=optimal).
You can install the necessary packages from npm’s install command.
For example, grid package can be installed using following command.

```sh
npm install @syncfusion/ej2-angular-grids --save
```

## Install by using `package.json`

1. Add the Syncfusion Angular (Essential JS 2) package references in the `dependencies` of `~/package.json` file.

    ```json
    {
        "dependencies": {
            "@syncfusion/ej2-angular-grids": "*"
        }
    }
    ```
    > The `*` indicates the latest version of npm package. Refer the [documentation](https://docs.npmjs.com/cli/v7/using-npm/semver#versions) for more details about npm versioning.

2. Now, open the command prompt and run the `npm install` command line. This will install all npm dependencies in a single command line.

> Refer the [documentation](https://docs.npmjs.com/files/package.json) for more details about npm `package.json`

These packages offer JavaScript files in ES6, UMD module systems. Which can be used in different dependency management and bundling libraries.