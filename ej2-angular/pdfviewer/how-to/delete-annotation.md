---
layout: post
title: Delete annotation in Angular Pdfviewer component | Syncfusion
description: Learn here all about Delete annotation in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Delete annotation 
documentation: ug
domainurl: ##DomainURL##
---

# Delete a specific annotation using deleteAnnotationById

The PDF Viewer library allows you to delete a specific annotation from a PDF document. Deleting a specific annotation can be done using the **deleteAnnotationById()** method. This method is used to delete a specific annotation using its id.

The following steps are used to delete a specific annotation from PDF Document.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code snippet to delete a specific annotation using `deleteAnnotationById()` method.

```html
<button (click)="deleteAnnotationbyId()">Delete Annotation by Id</button>
```

```typescript
// Delete Annotation by id.
deleteAnnotationbyId() {
  var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  viewer.annotationModule.deleteAnnotationById(
    viewer.annotationCollection[0].annotationId
  );
}
```

Find the sample [how to delete a specific annotation using deleteAnnotationById](https://stackblitz.com/edit/angular-pfuexf?file=app.component.ts)