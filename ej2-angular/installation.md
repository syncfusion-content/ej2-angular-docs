---
layout: post
title: Installation in Angular Installation md component | Syncfusion
description: Learn here all about Installation in Syncfusion Angular Installation md component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Installation 
documentation: ug
domainurl: ##DomainURL##
---

# Installation in Angular

This guide provides step-by-step instructions for installing Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components (Essential<sup style="font-size:70%">&reg;</sup> JS 2), which extend Angular applications with a comprehensive suite of UI controls. All Syncfusion Angular components are distributed via npm, ensuring a seamless and familiar installation experience for Angular developers.

## Prerequisites

Before installing, ensure the following prerequisites are met:

- **Node.js:** Download and install Node.js from [nodejs.org](https://nodejs.org/en).
- **npm:** npm is included with Node.js and is required for installing Angular packages.
- **Angular CLI:** Familiarity with Angular and the Angular CLI is recommended for efficient project setup and management.

## Installing a Package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI components are available on [npm](https://www.npmjs.com/search?q=ej2-angular&page=1&ranking=optimal). To add a specific component package to your Angular project, run the following command:

```sh
npm install @syncfusion/ej2-angular-grids --save
```

This command installs the Grid package and updates your project's `package.json` file.

## Install using `package.json`

To manage Syncfusion<sup style="font-size:70%">&reg;</sup> components with your project's `package.json` file:

1. Open the `package.json` file located at the root of your Angular project. Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI component to the `dependencies` section, like below:

    ```json
    {
        "dependencies": {
            "@syncfusion/ej2-angular-grids": "*"
        }
    }
    ```
    > The asterisk (`*`) installs the latest version of the package. To use a specific version, replace `*` with the required version number. See the [npm versioning documentation](https://docs.npmjs.com/about-semantic-versioning) for more details.

2. After updating `package.json`, open a terminal, navigate to your project’s root folder, and run:

    ```sh
    npm install
    ```

This approach takes advantage of the package management capabilities of npm, ensuring that all specified dependencies, including those for Syncfusion<sup style="font-size:70%">&reg;</sup>, are installed together.

> For a deeper understanding of the `package.json` file and its configuration options, see the [official npm documentation](https://docs.npmjs.com/files/package.json).

By following these steps, Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components are integrated into your project, allowing immediate access to robust, high-performance UI elements. Syncfusion<sup style="font-size:70%">&reg;</sup> supports multiple module systems, including ES6 and UMD, ensuring broad compatibility across various Angular project setups.
