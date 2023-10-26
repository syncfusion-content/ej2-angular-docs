---
layout: post
title: Sass in Angular Common Control | Syncfusion
description: Learn here all about sass support in Syncfusion Essential Angular Common control, it's elements and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# How to use SCSS in Angular CLI

Sass (SCSS) is a powerful CSS pre-processor that allows you to use variables, nested rules, and functions to make writing CSS easier and more efficient. In this guide, we will show you how to use SCSS in Angular CLI to customize the styles of your Angular Syncfusion components.

## SASS variables location

The SASS variables for Essential JS 2 components can be found in the following location,

`node_modules/@syncfusion/package-name/styles/themename.scss`

For example, the location for the navigation component's SASS variables is,

`node_modules/@syncfusion/ej2-angular-grids/styles/material.scss`

## Initialization of SCSS variables

To use the SCSS variables in your project, you need to import the styles of the required component in the `src/styles.scss` file.

```typescript
@import “ej2-grids/styles/material.scss”
```

## Configuring Node-Sass in Angular CLI json

To avoid SCSS compilation issues and to map the SCSS file path, you need to add the `stylePreprocessorOptions` to the .`angular-cli.json` file. You should add this option in two places under the apps object,

1. angular-cli.json -> {}build -> {}options
2. angular-cli.json -> {}test -> {}options

This allows you to use the following paths globally in your Angular app.

```typescript
"stylePreprocessorOptions": {
         "includePaths": [
         "node_modules/@syncfusion"
        ]
  },
```

An angular sample with SCSS compilation to render the Essential JS 2 Grid component can be downloaded from the following [GitHub link](https://github.com/SyncfusionExamples/ej2-angular-scss).

## Overriding styles

You can override the control styles in Syncfusion Angular components by replacing the sass variable values like this,

```

// SASS Variable override
$accent: black;
$primary: rgb(0, 255, 157);

// syncfusion styles
@import '../node_modules/@syncfusion/ej2-angular-grids/styles/material.scss';

```

## Angular-CLI Version 8 With SASS

In version 8, the Angular Team moved away from `node-sass` in favor of `sass`. However, you can still use `node-sass` manually by running the following command:

```bash
npm install node-sass --save-dev
```

By following the steps outlined in this guide, you should now be able to use SCSS in Angular CLI to customize the styles of your Essential JS 2 components.