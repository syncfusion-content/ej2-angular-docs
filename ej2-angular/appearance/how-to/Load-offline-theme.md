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

Syncfusion<sup style="font-size:70%">&reg;</sup>'s default Material theme incorporates Google fonts, which typically require internet access. For offline environments, Syncfusion<sup style="font-size:70%">&reg;</sup> provides an `offline-theme` file that references Material styles with local system fonts, ensuring components render properly without internet connectivity.

## Material Theme Package

The [`@syncfusion/ej2-material-theme`](https://www.npmjs.com/package/@syncfusion/ej2-material-theme) package includes an offline-theme option that eliminates online font dependencies. Follow these steps to implement this offline theme in your application:

1. Install the material theme package:

```bash
npm i @syncfusion/ej2-material-theme
```

For the Material dark theme, install the appropriate package:

```bash
npm i @syncfusion/ej2-material-dark-theme
```

2. Import the offline theme styles in your application's global styles file:

```css
@import '../node_modules/@syncfusion/ej2-material-theme/styles/offline-theme/material.css';
```

## Tailwind Theme Package

Similar to the Material theme, Syncfusion provides an offline version of the [`@syncfusion/ej2-tailwind-theme`](https://www.npmjs.com/package/@syncfusion/ej2-tailwind-theme) that works without Google Font references.

1. Install the Tailwind theme package:

```bash
npm install @syncfusion/ej2-tailwind-theme
```

For the Tailwind dark theme, use:

```bash
npm install @syncfusion/ej2-tailwind-dark-theme
```

2. Import the offline Tailwind theme styles in your application's global styles file:

```css
@import '../node_modules/@syncfusion/ej2-tailwind-theme/styles/offline-theme/tailwind.css';
```

Syncfusion<sup style="font-size:70%">&reg;</sup> provides these offline-theme options to ensure a consistent user experience across all deployment environments. The offline themes use system fonts that closely match the aesthetic of the online versions, making components visually appealing even in environments with limited or no internet access.