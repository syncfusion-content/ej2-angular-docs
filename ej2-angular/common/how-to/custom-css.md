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

This guide details the step-by-step process to incorporate custom styles in an Angular application using Syncfusion<sup style="font-size:70%">&reg;</sup> Essential JS 2 components. Custom styles enable you to match your application's brand identity while maintaining full component functionality. Styles are created and customized using the [Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=material).

## Create an Angular application

Set up an Angular application with Syncfusion<sup style="font-size:70%">&reg;</sup> Essential JS 2 components. Follow the [Getting Started documentation](../../getting-started/angular-cli) for detailed instructions on project environment setup and component integration.

## Generating custom CSS file

### Using Theme Studio

The [Syncfusion<sup style="font-size:70%">&reg;</sup> Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=material) provides an interactive interface to customize component appearances without manual CSS authoring. With this tool, you can:

1. Select a base theme (Material, Bootstrap, Fabric, etc.) as your starting point
2. Customize colors, fonts, borders, and other visual properties
3. Preview changes in real-time across different components
4. Generate and download a complete CSS file with your customizations

For complex customizations, Theme Studio allows you to modify individual component styles while maintaining visual consistency across your application.

## Adding custom CSS in Angular application

Place the generated custom CSS file in the `./src/` directory of your Angular project. A common naming convention is `custom-theme.css` or `custom-material.css`.

## Configure angular.json

To enable Angular to load your custom CSS, add the file path to the `styles` array under `architect` → `build` → `options` in your `angular.json` file:

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

Your Essential<sup style="font-size:70%">&reg;</sup> JS 2 Angular components will now display with your custom styles applied.

## Troubleshooting common issues

- **Styles not applying**: Ensure the path in angular.json is correct and the CSS file is in the specified location
- **Style conflicts**: Check CSS specificity if custom styles aren't overriding defaults
- **Performance concerns**: Minimize CSS file size by including only necessary customizations

By following these guidelines, you can successfully implement custom styling while maintaining the full functionality and compatibility of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components.