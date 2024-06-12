---
layout: post
title: Update npm package in Angular Common control | Syncfusion
description: Learn here all about update npm package support in Syncfusion Essential Angular controls, it's elements and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---


# Update Syncfusion npm package in Angular

The latest Syncfusion npm package can be updated with the help of [`npm-check-updates`](https://www.npmjs.com/package/npm-check-updates) package.

1. You can install the `npm-check-update package` globally to use this as CLI.

    ```bash
    npm install -g npm-check-updates
    ncu -u -f /^@syncfusion/
    ```

    This will update the package.json file to latest version for all `@syncfusion` packages.

2. Now, run the following commands to update the packages in `node_modules` and remove the duplicate package which is already installed.

    ```bash
    npm update
    npm dedupe
    ```

## Updating a specific npm package

Run the following commands from the command prompt in the application root to update a specific npm package in `node_modules` and remove the installed duplicate package.

  ```bash
    npm update @syncfusion/ej2-grids
    npm update @syncfusion/ej2-angular-grids
    npm dedupe
  ```
