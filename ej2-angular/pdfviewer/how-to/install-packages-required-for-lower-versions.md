---
title: Install packages required for versions below 12 | Syncfusion
component: "PDF Viewer"
description: Learn here all about how to install the packages required for versions below 12 in PDF Viewer control.
---

# Install packages required for versions below 12

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-pdfviewer@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-pdfviewer/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-pdfviewer@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-pdfviewer:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.
