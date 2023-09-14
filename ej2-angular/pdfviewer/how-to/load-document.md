---
layout: post
title: Load document in Angular Pdfviewer component | Syncfusion
description: Learn here all about Load document in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Load document 
documentation: ug
domainurl: ##DomainURL##
---

# Load PDF documents dynamically

The PDF Viewer library allows to switch or load the PDF documents dynamically after the initial load operation. To achieve this, load the PDF document as a base64 string or file name in PDF Viewer control using the [**Load()**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#load) method dynamically.

The following steps are used to load the PDF document dynamically.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started/) to create a simple PDF Viewer sample in Angular.

**Step 2:** Use the following code snippet to load the document from Base64 string.

```html
<button (click)="load_1()">LoadDocumentFromBase64</button>
```

```typescript
load_1() {
  var viewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
  viewer.load(
    "data:application/pdf;base64,.....",
    null
  );
}
```

**Step 3:** Use the following code snippet to load PDF document using document name.

```html
<button (click)="load_2()">LoadDocumentFromBase64</button>
```

```typescript
load_2() {
  // Load PDF document using file name
  var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  viewer.load('https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf', null);
}
```

Find the Sample, [how to load the PDF document dynamically](https://stackblitz.com/edit/angular-btme9m-7nzzyd?devtoolsheight=33&file=app.component.ts)

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Save%20and%20Load/Load%20PDF%20at%20runtime%20from%20base64%20string%20or%20filename)
