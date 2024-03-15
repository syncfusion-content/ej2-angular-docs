---
layout: post
title: Open Bookmark in Angular PDF Viewer component | Syncfusion
description: Learn here all about Open Bookmark in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Open and Close Bookmark pane programmatically 

The PDF Viewer library allows you to open the Bookmark pane programmatically using the **openBookmarkPane()** method.

The following steps are used to open the Bookmark.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Insert the following code snippet to implement the functionality for opening the Bookmark pane:

```html
<button (click)="openBookmark()">Open Thumbnail Pane</button>
```

```ts
openBookmark() {
  var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  // Open Bookmark pane.
  viewer.bookmarkViewModule.openBookmarkPane();
}
```
Similarly, to close the Bookmark pane programmatically, employ the following code snippet:

```html
<button (click)="closeBookmark()">Close Bookmark Pane</button>
```

```ts
closeBookmark() {
  var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  // Close Bookmark pane.
  viewer.bookmarkViewModule.closeBookmarkPane();
}
```

[View sample in GitHub]()