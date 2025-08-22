---
layout: post
title: Export As Image in Angular PDF Viewer component | Syncfusion
description: Learn here all about Export As Image in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Export As Image in Angular PDF Viewer component

The PDF Viewer library allows you to export specified pages as a Base64-encoded image string using the **exportAsImage()** method and exporting a range of pages as Base64-encoded image strings using the **exportAsImages()** method.

The following steps are used to exportAsImage.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** The following code snippet to implement the functionality for exporting a specified page as a Base64-encoded image string or exporting a range of pages as Base64-encoded image strings.

```html
<button (click)="exportAsImage()">ExportAsImage</button>
```

```ts
exportAsImage() {
  let imageDetail;
  let pageIndex: number = 1;
  var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  viewer.exportAsImage(pageIndex).then(function (value) {
      imageDetail = value;
      console.log(imageDetail);
  });
}
```
Similarly, to code snippet for exports the specified page as a Base64-encoded image string, allowing for custom image size:

```html
<button (click)="exportAsImageWithSize()">exportAsImageWithSize</button>
```

```ts
exportAsImageWithSize() {
  let imageDetail;
  let pageIndex: number = 1;
  let size: Size = new Size(200,500);
  var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  viewer.exportAsImage(pageIndex,size).then(function (value) {
      imageDetail = value;
      console.log(imageDetail);
  });
}
```
Similarly, to code snippet for exports the range of pages as Base64-encoded image strings:

```html
<button (click)="exportAsImages()">exportAsImages</button>
```

```ts
exportAsImages() {
  let startPageIndex: number = 1;
  let endPageIndex: number = 5;
  var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  viewer.exportAsImages(startPageIndex, endPageIndex).then(function (value) {
      imageDetails = value;
      console.log(imageDetails);
  });
}
```
Similarly, to code snippet for exports the range of pages as Base64-encoded image strings, allowing for custom image size:

```html
<button (click)="exportAsImageWithSize()">exportAsImageWithSize</button>
```

```ts
exportAsImageWithSize() {
  let startPageIndex: number = 1;
  let endPageIndex: number = 5;
  let size: Size = new Size(200,500);
  var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  viewer.exportAsImages(startPageIndex, endPageIndex, size).then(function (value) {
      imageDetails = value;
      console.log(imageDetails);
  });
}
```

By following these steps, you can successfully integrate and use the export as image API in the EJ2 PDF Viewer.