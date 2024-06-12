---
layout: post
title: Tree shaking in Angular Frameworks and feature Component | Syncfusion
description: Learn here all about tree shaking support in Syncfusion Essential Angular Frameworks and feature component, it's elements and more.
platform: ej2-angular
control: Tree shaking 
documentation: ug
domainurl: ##DomainURL##
---

# Tree Shaking in Angular Frameworks and Features

Tree shaking is a technique used to eliminate unused modules from the final bundle file of an application, reducing the download size and improving performance. The Angular CLI uses the Webpack bundler, which supports tree shaking from version 2. This article provides an in-depth explanation of what tree shaking is and how it works in Angular applications.

## Understanding Tree Shaking

Tree shaking is a way to eliminate unused modules from the final bundle file of the application. The Angular CLI, by default, uses the Webpack bundler for bundling script files, which supports Tree Shaking from version 2. It allows for only including the parts of the code that are actually used by the application, thus reducing the final bundle size, which leads to improved performance, faster load times and better user experience.

## Tree Shaking in Angular

Modern bundlers, such as Webpack, combine all application scripts into a single bundle file. The bundle file does not contain any exports and supports the removal of unused code.

## Using Syncfusion with Tree Shaking

By default, Syncfusion Angular components supports Tree Shaking and it dose not require any special changes in application level.

## Implementing Tree Shaking in an Angular Application

Here are the steps for enabling Tree Shaking in an Angular application,

1. Create an Angular application with Syncfusion EJ2 Angular components as described in the [Getting Started](../getting-started/angular-cli) documentation using the [Angular CLI](https://cli.angular.io/).

2. Run the `ng build --prod` or `ng serve --prod` command to build or serve the application with Tree Shaking enabled.

A sample code snippet that shows how to enable Tree Shaking in the `angular.json` configuration file,

```json

"configurations": {
    "production": {
        "optimization": true,
        "outputHashing": "all",
        "sourceMap": false,
        "extractCss": true,
        "namedChunks": false,
        "aot": true,
        "extractLicenses": true,
        "vendorChunk": false,
        "buildOptimizer": true
    }
},

```

By following these steps and implementing tree shaking in your Angular application, you can optimize the performance and improve the user experience.