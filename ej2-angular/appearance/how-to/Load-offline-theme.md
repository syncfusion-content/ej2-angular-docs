---
layout: post
title: How to load offline theme in  ##Platform_Name## Common control | Syncfusion
description: Learn here all about load offline theme in Syncfusion  ##Platform_Name##  Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Loading Themes Without Internet Access

Syncfusion<sup style="font-size:70%">&reg;</sup>'s default Material theme incorporates Google fonts, which typically require internet access. For offline environments, Syncfusion<sup style="font-size:70%">&reg;</sup> provides an `offline-theme` file to reference Material styles with local fonts, ensuring the components function seamlessly without internet connectivity.

## Material Theme Package

The [`ej2-material-theme`](https://www.npmjs.com/package/@syncfusion/ej2-material-theme) package offers a way to use styles without online font dependencies, through an offline-theme file available as an NPM package. Below are the steps to utilize this package.

## Adding the Material Theme Package

Install the `ej2-material-theme` package in your application using the following command:

```bash
npm i @syncfusion/ej2-material-theme
```

To use the [`ej2-material-dark`](https://www.npmjs.com/package/@syncfusion/ej2-material-dark-theme?activeTab=readme) theme, run:

```bash
npm i @syncfusion/ej2-material-dark-theme
```

## Importing Styles

After installation, import the styles into your application by specifying the link path to your styles folder, ensuring it excludes references to the Roboto font.

```css
@import '../node_modules/@syncfusion/ej2-material-theme/styles/offline-theme/material.css';
```

## Loading Offline Theme for Tailwind

Similar to the Material theme, an offline theme is also available for `Tailwind` users. This option lets you fully leverage the Tailwind theme's benefits without requiring Google Font references.

## Tailwind Theme Package

As with the `material-theme` package, the [`ej2-tailwind-theme`](https://www.npmjs.com/package/@syncfusion/ej2-tailwind-theme) allows for style referencing without the online font through an offline-theme file, available as an NPM package. Follow the steps below to use this package.

## Adding the Tailwind Theme Package

Install the `ej2-tailwind-theme` package using:

```bash
npm install @syncfusion/ej2-tailwind-theme
```

To utilize the `ej2-tailwind-dark` theme, use:

```bash
npm install @syncfusion/ej2-tailwind-dark-theme
```

## Importing Styles

Post-installation, import the styles into your application by including the style path in the styles folder, consciously avoiding Roboto font references.

```css
@import '../node_modules/@syncfusion/ej2-tailwind-theme/styles/offline-theme/tailwind.css';
```

Syncfusion<sup style="font-size:70%">&reg;</sup> understands the necessity for offline-capable applications and offers an offline-theme file referencing themes with local fonts. This strategy guarantees a smooth user experience, making components adaptability possible even in environments with limited or no internet access.