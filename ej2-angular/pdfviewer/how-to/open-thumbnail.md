---
layout: post
title: Open thumbnail in Angular Pdfviewer component | Syncfusion
description: Learn here all about Open thumbnail in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Open thumbnail 
documentation: ug
domainurl: ##DomainURL##
---

# Open Thumbnail pane programmatically

The PDF Viewer library allows you to open the thumbnail pane programmatically using the [**openThumbnailPane()**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/thumbnailView/#openthumbnailpane) method.

The following steps are used to open the thumbnail.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code snippet to open thumbnail.

```html
<button (click)="openThumbnail()">Open Thumbnail Pane</button>
```

```ts
openThumbnail() {
  var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  // Open Thumbnail pane.
  viewer.thumbnailViewModule.openThumbnailPane();
}
```

Find the sample, [how to open the thumbnail pane programmatically](https://stackblitz.com/edit/angular-6bwxuk?file=app.component.ts)