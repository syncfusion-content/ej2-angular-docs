---
layout: post
title: Import export annotation in Angular Pdfviewer component | Syncfusion
description: Learn here all about Import export annotation in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Import export annotation 
documentation: ug
domainurl: ##DomainURL##
---

# Import and Export annotation 

The PDF Viewer library allows you to import annotations from objects or streams instead of loading it as a file. To import such annotation objects, the PDF Viewer control must export the PDF annotations as objects by using the [**ExportAnnotationsAsObject()**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#exportannotationsasobject) method. Only the annotation objects that are exported from the PDF Viewer can be imported.

The following steps are used to import and export annotations in various formats such as objects, JSON, and XFDF.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code snippet to perform import and export annotation.

```html
  <button (click)="ExportAsJson()" >ExportAsJson</button>
  <button (click)="ExportAsXfdf()" >ExportAsXfdf</button>
  <button (click)="ExportAsObject()" >ExportAsObject</button>
  <button (click)="Import()" >Import</button>
```

```ts

    // export the annotation in JSON format.
    ExportAsJson(): void {
      var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
      viewer.exportAnnotation('Json');
    }
    // export the annotation in XFDF format.
    ExportAsXfdf(): void {
      var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
      viewer.exportAnnotation('Xfdf');
    }
    // export the annotation as object.
    ExportAsObject(): void {
      var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
      return viewer.exportAnnotationsAsObject().then((value: any) => {
        exportObject = value;
      });
    }
    //Import annotation that are exported as object.
    Import(): void {
      var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
        viewer.importAnnotation(JSON.parse(exportObject));
    }

```

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)