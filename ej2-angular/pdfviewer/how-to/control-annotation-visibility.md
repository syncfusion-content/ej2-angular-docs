---
layout: post
title: Control Annotations Visibility in Angular Pdfviewer|Syncfusion.
description: Learn how to Control PDF Annotations Visibility in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Control PDF Annotations Visibility in PDF Viewer

### Overview

This guide demonstrates how to control the visibility of PDF annotations in documents loaded and saved using the Syncfusion PDF Viewer. This process allows the annotations to be visible only in specific viewers, such as the Syncfusion PDF Viewer.

### How to Control Annotation Visibility

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started/) to create a simple PDF Viewer sample.


**Step 2:**  Set Up Your Angular Component

Create an Angular component and update the template to include a button that triggers the download operation. Additionally, create a function to save the document with the PDF annotation flag set to `noView`.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit} from '@angular/core';
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
  StickyNotesSettings,
  InkAnnotationSettings,
  HandWrittenSignatureSettings,
  DisplayMode,
  CustomStampSettings,
  StampSettings,
  StandardBusinessStampItem,
  SignStampItem,
  DynamicStampItem,
  FreeTextSettings,
  HighlightSettings,
  UnderlineSettings,
  StrikethroughSettings,
  LineSettings,
  ArrowSettings,
  RectangleSettings,
  CircleSettings,
  PolygonSettings,
  VolumeSettings,
  RadiusSettings,
  AreaSettings,
  PerimeterSettings,
  DistanceSettings,
  LoadEventArgs,
  PdfViewerComponent,

} from '@syncfusion/ej2-angular-pdfviewer';

// Import PdfAnnotationFlag and PdfDocument from the Syncfusion PDF library. 
import { PdfAnnotationFlag, PdfDocument, PdfPage } from '@syncfusion/ej2-pdf';

@Component({
  selector: 'app-root',
  template: `
    <div class="content-wrapper">
      <button (click)="save()" style="margin-bottom: 20px;">Download</button>
      <ejs-pdfviewer 
        id="pdfViewer"
        [documentPath]="document" 
        [resourceUrl]="resourceUrl"
        (documentLoad)='documentLoaded($event)' 
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
  public document: string = 'https://cdn.syncfusion.com/content/pdf/annotations-v1.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/28.1.33/dist/ej2-pdfviewer-lib';

  documentLoaded(e: LoadEventArgs): void {
    var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    
    //Code snippet to add basic annotations. You can also include other annotations as needed.
        viewer.annotation.addAnnotation("Highlight", {
            bounds: [{ x: 97, y: 610, width: 350, height: 14 }],
            pageNumber: 1
        } as HighlightSettings);
        viewer.annotation.addAnnotation("Underline", {
            bounds: [{ x: 97, y: 723, width: 353.5, height: 14 }],
            pageNumber: 1
        } as UnderlineSettings);
        viewer.annotation.addAnnotation("Strikethrough", {
            bounds: [{ x: 97, y: 836, width: 376.5, height: 14 }],
            pageNumber: 1
        } as StrikethroughSettings);
    }

ngOnInit(): void { 

}
save() {
  // Get the PDF viewer instance from the DOM element
  var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];

  // Save the PDF document as a Blob
  viewer.saveAsBlob().then((blob: Blob) => {
    const reader = new FileReader();
    
    reader.onload = () => {
      // Convert Blob data to a Base64 encoded string
      let base64data = reader.result as string;

      // Extract the Base64 string from the Data URL
      const base64EncodedData = base64data.split('base64,')[1];

      // Create a PdfDocument instance with the Base64 data
      const document1 = new PdfDocument(base64EncodedData);

      // Iterate over each page and annotation to modify the annotation flags
      for (let i = 0; i < document1.pageCount; i++) {
        const page = document1.getPage(i);
        for (let j = 0; j < page.annotations.count; j++) {
          const annot = page.annotations.at(j);
          
          // Set the annotation flag to noView
          annot.flags |= PdfAnnotationFlag.noView;
        }
      }

      // Save the modified document as a Blob
      document1.saveAsBlob().then((modifiedBlob: { blobData: Blob }) => {
        const internalReader = new FileReader();
        
        internalReader.onload = () => {
          // Convert the modified Blob data to a Base64 encoded string
          const modifiedBase64 = internalReader.result as string;
          
          // Create a link to download the modified PDF
          const downloadLink = document.createElement('a');
          downloadLink.href = modifiedBase64;
          downloadLink.download = 'modified.pdf';
          downloadLink.click();
        };

        // Read the modified Blob data as a Data URL
        internalReader.readAsDataURL(modifiedBlob.blobData);
      });
    };

    // Read the original Blob data as a Data URL
    reader.readAsDataURL(blob);
  });
}
}

{% endhighlight %}
{% endtabs %}

By following these steps, the annotations in a PDF document can be set to be visible in the Syncfusion PDF Viewer, providing control over annotation visibility based on different platforms.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)