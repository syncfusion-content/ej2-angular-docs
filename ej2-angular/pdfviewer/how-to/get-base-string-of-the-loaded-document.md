---
layout: post
title: Get base string of the loaded document in Angular Pdfviewer component | Syncfusion
description: Learn here all about Get base string of the loaded document in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Get base string of the loaded document 
documentation: ug
domainurl: ##DomainURL##
---

# Get the Base 64 string of the loaded PDF document

The PDF Viewer library allows you to get the base 64 string of the loaded PDF document by using **saveAsBlob()** method. The entire PDF document will get as blob as like memory stream. So, we can save the blob or convert into stream and we can save it in the database. We can also load the PDF document from base 64 string using the **load()** method.

The following steps are used to get the base 64 string of the loaded PDF document in the PDF viewer control.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started/) to create simple PDF Viewer sample in Angular.

**Step 2:** Add the following code snippet to get the base 64 string with button click event.

```html

<button (click)="base64ofloadedDocument()">base64Document</button>

```

```typescript

base64ofloadedDocument() {
  var viewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
  viewer.saveAsBlob().then(function (value) {
    var data = value;
    var reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = () => {
      var base64data = reader.result;
      // get base 64 string.
      console.log(base64data);
    };
  });

```

**Step 3:** Use the following code snippet inside the **saveAsBlob()** method to load the document from the base 64 string.

```typescript
// load the document from base 64 string.
viewer.load(base64data, null);
```

Find the Sample, [how to get the Base 64 string of the loaded PDF document](https://stackblitz.com/edit/angular-wmpo4g-ts8b1g?file=app.component.ts)

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Save%20and%20Load/Load%20PDF%20with%20WebService)