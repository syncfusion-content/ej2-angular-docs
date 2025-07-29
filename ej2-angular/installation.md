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

This guide provides detailed instructions on installing Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages, which extend Angular applications with a wide range of UI controls. These components are available via npm, making installation straightforward and consistent with standard Angular practices.

## Prerequisites

To ensure a smooth installation process, make sure you have the following prerequisites:

- **Node.js**: Ensure Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/en).
- **npm**: npm, which comes bundled with Node.js, should also be installed, as it is used to install the Angular packages.
- **Angular CLI**: Familiarity with Angular and the Angular CLI is recommended for setting up and managing your projects efficiently.

## Installing Package

Syncfusion<sup style="font-size:70%">&reg;</sup> publishes its Angular UI components on [npm](https://www.npmjs.com/search?q=ej2-angular&page=1&ranking=optimal). You can install any specific component package using npm. For example, to add the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component to your Angular project, use the following command:

```sh
npm install @syncfusion/ej2-angular-grids --save
```

This command will add the Grid package to your project and update the `package.json` file accordingly.

## Install by using `package.json`

To streamline the integration of Syncfusion<sup style="font-size:70%">&reg;</sup> components via your `package.json` file, follow these steps:

1. Open your `package.json` file located at the root of your Angular project. Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI component library to the `dependencies` section, like so:

    ```json
    {
        "dependencies": {
            "@syncfusion/ej2-angular-grids": "*"
        }
    }
    ```
    > The asterisk (`*`) is a version specifier that installs the latest version of the package. If you wish to specify a particular version, replace `*` with the desired version number. Refer to the [npm versioning documentation](https://docs.npmjs.com/about-semantic-versioning) for more details.

2. Once you've updated the `package.json`, open your terminal, navigate to your project's root directory, and run the following command to install the dependencies:

    ```sh
    npm install
    ```

This approach takes advantage of the package management capabilities of npm, ensuring that all specified dependencies, including those for Syncfusion<sup style="font-size:70%">&reg;</sup>, are installed together.

> For a deeper understanding of the `package.json` file and its configuration options, see the [official npm documentation](https://docs.npmjs.com/files/package.json).

These steps will integrate the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components into your project, enabling you to start utilizing its features. Different module systems such as ES6 and UMD are supported by Syncfusion<sup style="font-size:70%">&reg;</sup>, ensuring compatibility across various project setups.

By following the above instructions, you will successfully add Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components to your project, equipping it with robust and high-performance UI elements.