---
layout: post
title: Unload document in Angular Pdfviewer component | Syncfusion
description: Learn here all about Unload document in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Unload document 
documentation: ug
domainurl: ##DomainURL##
---

# Unload the PDF document programmatically

The PDF Viewer library allows you to unload the PDF document being displayed in the PDF Viewer control programmatically using the [**unload()**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#unload) method.

The following steps are used to unload the PDF document programmatically.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Add the following code snippet to perform the unload operation.

```html
 <button (click)="unload()">Unload Document</button>
```

```typescript
unload() {
  // Unload the PDF document.
  var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  viewer.unload();
}
```

Find the Sample, [how to unload the PDF document programmatically](https://stackblitz.com/edit/angular-jjltrq?file=app.component.ts)