---
layout: post
title: Custom css in Angular Common control | Syncfusion
description: Learn here all about Custom css in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# How to use Custom CSS File in Angular Application

This guide details the step-by-step process to incorporate custom styles in an Angular application using Essential JS 2 Angular components. The styles will be created using the [Theme Editor](https://ej2.syncfusion.com/themestudio/?theme=material).

## Create an Angular application

Begin by setting up an Angular application with Essential JS 2 components. Follow our [Getting Started documentation](../../getting-started/angular-cli) for detailed instructions on setting up your project environment and integrating the necessary components.

## Generating custom CSS file

Customize your style by using the [Syncfusion<sup style="font-size:70%">&reg;</sup> Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=material). This tool allows you to generate a custom CSS file tailored to your design preferences. Select your desired theme, modify the elements as needed, and download your custom CSS.

## Adding custom CSS in Angular application

Place the generated custom CSS file inside the `./src/` directory of your Angular application.

## Custom style mapping

In the `./angular.json` file, add the path to the custom CSS file under the `architect/build/options/styles` property, as shown below,

```typescript
"styles": [
             "src/styles.css",
             "src/custom-material.css"
          ],
```

## Run Angular application

With everything configured, run your Angular application using the command:

```bash
ng serve
```

Now, your Essential JS 2 Angular components will reflect the custom styles specified in your CSS file.
