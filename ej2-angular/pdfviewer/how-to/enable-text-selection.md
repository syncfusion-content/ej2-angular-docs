---
layout: post
title: Enable Text Selection in Angular PDF Viewer component | Syncfusion
description: Learn how to enable text selection in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Enable or Disable Text Selection in Syncfusion PDF Viewer

The Syncfusion PDF Viewer provides the `enableTextSelection` property, which allows you to control whether users can select text within the displayed PDF document. This feature can be toggled programmatically during runtime.

## Configure Text Selection on Initialization

You can set the initial text selection behavior when initializing the PDF Viewer component by configuring the `enableTextSelection` property in the template.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

import { Component, OnInit, ViewChild } from '@angular/core';
import {
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  AnnotationService,
  TextSearchService,
  TextSelectionService,
  FormFieldsService,
  FormDesignerService,
  PrintService,
  PdfViewerComponent
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div class="content-wrapper">
      <div class="button-container" style="margin-bottom: 10px;">
        <button (click)="enableTextSelection()" style="margin-right: 10px;">Enable Text Selection</button>
        <button (click)="disableTextSelection()">Disable Text Selection</button>
      </div>
      <ejs-pdfviewer 
        #pdfViewer
        id="pdfViewer"
        [resourceUrl]="resourceUrl"
        [documentPath]="document"
        [enableTextSelection]="false"
        style="height: 640px; display: block;">
      </ejs-pdfviewer>
    </div>
  `,
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    AnnotationService,
    TextSearchService,
    TextSelectionService,
    FormFieldsService,
    FormDesignerService,
    PrintService
  ]
})
export class AppComponent implements OnInit {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/28.1.33/dist/ej2-pdfviewer-lib';
  
  @ViewChild('pdfViewer')
  public pdfViewerObj!: PdfViewerComponent;
  
  ngOnInit(): void { }
}

{% endhighlight %}
{% endtabs %}

## Toggle Text Selection Dynamically

As shown in the example above, you can implement methods to toggle the text selection behavior at runtime:

1. First, get a reference to the PDF Viewer component using `@ViewChild` decorator
2. Create methods to enable and disable text selection
3. Connect these methods to UI elements like buttons

```html
<button (click)="enableTextSelection()" style="margin-right: 10px;">Enable Text Selection</button>
<button (click)="disableTextSelection()">Disable Text Selection</button>
```
```typescript
// Enable text selection
enableTextSelection(): void {
  if (this.pdfViewerObj) {
    this.pdfViewerObj.enableTextSelection = true;
  }
}

// Disable text selection
disableTextSelection(): void {
  if (this.pdfViewerObj) {
    this.pdfViewerObj.enableTextSelection = false;
  }
}
```

## Use Cases and Considerations

- **Document Protection**: Disabling text selection helps prevent unauthorized copying of sensitive content.
- **Read-only Documents**: In scenarios where documents are meant for viewing only, disabling text selection can provide a cleaner user experience.
- **Interactive Applications**: Toggle text selection based on user roles or document states in complex applications.
- **Accessibility**: Consider enabling text selection for accessibility purposes in public-facing applications.

## Default Behavior

By default, text selection is enabled in the PDF Viewer. Set the `enableTextSelection` property to `false` explicitly if you want to disable this functionality.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)