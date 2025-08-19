---
layout: post
title: Deployment in Angular Common control | Syncfusion
description: Learn here all about Deployment in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Deployment

This guide explains how to deploy Syncfusion Angular UI Components in your applications using different methods such as CDN and npm packages.

## CDN

The CDN links are provided individually for all the scripts and style sheets of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components.

The CDN links are provided to following files in the package


1. **UMD Files** - Universal Module Definition files for different modules.
2. **CSS Files** - Theme-specific CSS stylesheets for a consistent appearance.

_The latest minified versions of all UMD and CSS files are available in CDN:_

* **`https://cdn.syncfusion.com/ej2/RELEASEVERSION/PACKAGENAME/dist/PACKAGENAME.umd.min.js`**
* **`https://cdn.syncfusion.com/ej2/RELEASEVERSION/PACKAGENAME/styles/THEMENAME.css`**

For example:

* [https://cdn.syncfusion.com/ej2/20.4.38/ej2-angular-inputs/dist/ej2-angular-inputs.umd.min.js](https://cdn.syncfusion.com/ej2/20.4.38/ej2-angular-inputs/dist/ej2-angular-inputs.umd.min.js)
* [https://cdn.syncfusion.com/ej2/20.4.38/ej2-angular-inputs/styles/material.css](https://cdn.syncfusion.com/ej2/20.4.38/ej2-angular-inputs/styles/material.css)

## Packages

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components are available as npm packages, which are published in the public [npm registry](https://www.npmjs.com/search?q=ej2-angular&page=1&ranking=optimal). Using npm packages is recommended for most Angular applications as it integrates well with the Angular CLI and build systems.

### Anatomy of NPM packages

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components are shipped as npm packages with the following structure:

|    Files         | Purpose             |
|----------------------------------|-------------------------------------|
|    `dist/<packagename>.umd.min.js`   `dist/<packagename>.umd.js` |  For applications using AMD or Common JS based   module loader can be utilize these files. |
|    `src/`    |    This folder contains the script files in ES6 format. It can be utilize Bundling.    |
|    `styles/<theme_name>.css`      `styles/<theme_name>.scss`  |    This folder contains the CSS and SCSS files of the package. |