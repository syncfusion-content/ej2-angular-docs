---
layout: post
title: Update npm package in Angular Common control | Syncfusion
description: Learn here all about Update npm package in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---



# Update Syncfusion<sup style="font-size:70%">&reg;</sup> npm packages

Keeping your Syncfusion<sup style="font-size:70%">&reg;</sup> npm packages up-to-date is essential for accessing the latest features, bug fixes, performance improvements, and security patches. This guide explains how to efficiently update these packages using `npm-check-updates` (ncu) and best practices for npm package management.

## Install `npm-check-updates` (ncu)

`npm-check-updates` (ncu) is a powerful tool that helps you discover and update package dependencies in your `package.json` file. It's recommended to install it locally within your project to avoid global dependency issues.

### Local Installation

1. Open your terminal or command prompt in your Angular project's root directory.
2. Run the following command to install `npm-check-updates` as a development dependency:

    ```bash
    npm install npm-check-updates --save-dev
    ```

### Using `npx` (No Installation Needed)

Alternatively, you can use `npx` to run `npm-check-updates` without installing it, using the latest version directly:

```bash
npx npm-check-updates
```

## Update Syncfusion Packages to Latest Versions

After installing `ncu` (or choosing to use `npx`), follow these steps to update your Syncfusion packages.

### 1. Identify and Update `package.json`

Use `ncu` to check for specific `@syncfusion` package updates and modify your `package.json` file.

```bash
npx ncu -u -f /^@syncfusion/
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
