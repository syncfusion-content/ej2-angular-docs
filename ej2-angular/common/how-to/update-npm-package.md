---
layout: post
title: Update npm package in Angular Common control | Syncfusion
description: Learn here all about Update npm package in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---


# Update Syncfusion npm package

Keeping your Syncfusion npm packages up-to-date ensures you are using the latest features and security updates. This guide will take you through the steps to update these packages using the [`npm-check-updates`](https://www.npmjs.com/package/npm-check-updates) tool.

## Global Installation of npm-check-updates

First, install the `npm-check-updates` package globally. This tool helps you check for updates and can be used as a CLI tool.

### Steps to Install:

1. Open the terminal or command prompt.
2. Run the following command to install:

    ```bash
    npm install -g npm-check-updates
    ```

3. To update all `@syncfusion` packages to their latest versions, execute:

    ```bash
    ncu -u -f /^@syncfusion/
    ```

    This modifies your `package.json` file, setting the version of all `@syncfusion` packages to their latest available.

## Updating npm Packages in node_modules

Once your `package.json` has been updated, follow these steps to update the packages installed in `node_modules` and clean up any duplicate packages:

1. Run the update command to synchronize your local package installations:

    ```bash
    npm update
    ```

2. Use the dedupe command to remove any duplicate packages:

    ```bash
    npm dedupe
    ```
## Updating a specific npm package

Run the following commands from the command prompt in the application root to update a specific npm package in `node_modules` and remove the installed duplicate package.

  ```bash
    npm update @syncfusion/ej2-grids
    npm update @syncfusion/ej2-angular-grids
    npm dedupe
  ```
