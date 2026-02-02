---
layout: post
title: Installation in Angular Installation md component | Syncfusion
description: Learn here all about Installation in Syncfusion Angular Installation md component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Installation 
documentation: ug
domainurl: ##DomainURL##
---

# Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components (Essential<sup style="font-size:70%">&reg;</sup> JS 2) are modern, high-performance controls distributed as npm packages. This guide covers installing one or more components into an Angular project.

## Prerequisites

Before installing, ensure the following prerequisites are met:

- **Node.js:** Download and install Node.js from [nodejs.org](https://nodejs.org/en).
- **npm:** npm is included with Node.js and is required for installing Angular packages.
- **Angular CLI:** Familiarity with Angular and the Angular CLI is recommended for efficient project setup and management.

```sh
ng new my-syncfusion-app --style=scss --routing=false
cd my-syncfusion-app
```

> Syncfusion Angular packages are Ivy-compatible starting from version ~20.2.36 and officially support Angular 12 and above.

## Installing a Specific Component Package

To install a component (e.g., Grid), run:

```sh
npm install @syncfusion/ej2-angular-grids --save
```

Install multiple at once:

```sh
npm install @syncfusion/ej2-angular-grids @syncfusion/ej2-angular-buttons --save
```

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

