---
layout: post
title: Sass in Angular Common control | Syncfusion
description: Learn here all about Sass in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# How to use SCSS in Angular CLI

Sass (SCSS) is a powerful CSS pre-processor that significantly enhances your styling capabilities with features like variables, nested rules, and functions. This guide will walk you through integrating SCSS into Angular CLI for customizing the styles of your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components.

## SASS variables location

SASS variables corresponding to Essential<sup style="font-size:70%">&reg;</sup> JS 2 components are located at:

`node_modules/@syncfusion/package-name/styles/themename.scss`

For example, to access SASS variables for the Navigation component, use:

`node_modules/@syncfusion/ej2-angular-grids/styles/material.scss`

## Initialization of SCSS variables

To incorporate SCSS variables into your project, import the required component styles into the `src/styles.scss` file:


```typescript
@import “ej2-grids/styles/material.scss”
```

## Configuring Node-Sass in Angular CLI json

To avoid SCSS compilation issues and to map the SCSS file path, you need to add the `stylePreprocessorOptions` to the .`angular-cli.json` file. You should add this option in two places under the apps object,

1. angular-cli.json -> {}build -> {}options
2. angular-cli.json -> {}test -> {}options

This setup allows global path resolution for SCSS files in your Angular application:

```typescript
"stylePreprocessorOptions": {
         "includePaths": [
         "node_modules/@syncfusion"
        ]
  },
```

A sample Angular project demonstrating SCSS compilation with Essential<sup style="font-size:70%">&reg;</sup> JS 2 Grid component is available on [GitHub](https://github.com/SyncfusionExamples/ej2-angular-scss).

## Overriding styles

To customize Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component styles, override default SASS variable values as illustrated below:

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

By following the guidelines in this document, you can effectively use SCSS within Angular CLI to tailor the styles of your Essential<sup style="font-size:70%">&reg;</sup> JS 2 components.