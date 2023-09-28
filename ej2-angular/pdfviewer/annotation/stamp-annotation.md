---
layout: post
title: Stamp annotation in Angular Pdfviewer component | Syncfusion
description: Learn here all about Stamp annotation in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Stamp annotation 
documentation: ug
domainurl: ##DomainURL##
---

# Stamp Annotation in Angular PDF Viewer component

The PDF Viewer control provides options to add, edit, delete, and rotate the following stamp annotation in the PDF documents:

* Dynamic
* Sign Here
* Standard Business
* Custom Stamp

![StampAnnotation](../../pdfviewer/images/stamp_annot.png)

## Adding stamp annotations to the PDF document

The stamp annotations can be added to the PDF document using the annotation toolbar.

* Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
* Click the **Stamp Annotation** drop-down button. A drop-down pop-up will appear and shows the stamp annotations to be added.

![StampTool](../../pdfviewer/images/stamp_tool.png)

* Select the annotation type to be added to the page in the pop-up.

![StampPopup](../../pdfviewer/images/selectstamp_annot.png)

* You can add the annotation over the pages of the PDF document.

In the pan mode, if the stamp annotation mode is entered, the PDF Viewer control will switch to text select mode.

Refer to the following code sample to switch to the stamp annotation mode.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

  import { ViewChild } from '@angular/core';
  import { Component, OnInit } from '@angular/core';
  import { PdfViewerComponent, LinkAnnotationService, BookmarkViewService,
           MagnificationService, ThumbnailViewService, ToolbarService,
           NavigationService, TextSearchService, TextSelectionService,
           PrintService, AnnotationService, SignStampItem
         } from '@syncfusion/ej2-angular-pdfviewer';
  @Component({
      selector: 'app-root',
      // Specifies the template string for the PDF Viewer component.
      template: `<button (click)="addAnnotation()">Stamp</button>
                  <div class="content-wrapper">
                    <ejs-pdfviewer id="pdfViewer"
                      [documentPath]='document'
                      style="height:640px;display:block">
                    </ejs-pdfviewer>
                  </div>`,
    providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
                 ThumbnailViewService, ToolbarService, NavigationService,
                 TextSearchService, TextSelectionService, PrintService, 
                 AnnotationService]
    })
  export class AppComponent implements OnInit {
      public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
      addAnnotation() {
          var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
          pdfviewer.annotationModule.setAnnotationMode("Stamp", null, SignStampItem.Witness);
      }
  }

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

  import { ViewChild } from '@angular/core';
  import { Component, OnInit } from '@angular/core';
  import { PdfViewerComponent, LinkAnnotationService, BookmarkViewService,
           MagnificationService, ThumbnailViewService, ToolbarService,
           NavigationService, TextSearchService, TextSelectionService,
           PrintService, AnnotationService, SignStampItem
         } from '@syncfusion/ej2-angular-pdfviewer';
  @Component({
      selector: 'app-root',
      // Specifies the template string for the PDF Viewer component.
      template: `<button (click)="addAnnotation()">Stamp</button>
                  <div class="content-wrapper">
                    <ejs-pdfviewer id="pdfViewer"
                      [serviceUrl]='service'
                      [documentPath]='document'
                      style="height:640px;display:block">
                    </ejs-pdfviewer>
                  </div>`,
    providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
                 ThumbnailViewService, ToolbarService, NavigationService,
                 TextSearchService, TextSelectionService, PrintService, 
                 AnnotationService]
    })
  export class AppComponent implements OnInit {
      public service: string = 'https://services.syncfusion.com/angular/production/api/pdfviewer';
      public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
      addAnnotation() {
          var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
          pdfviewer.annotationModule.setAnnotationMode("Stamp", null, SignStampItem.Witness);
      }
  }

{% endhighlight %}
{% endtabs %}

## Adding custom stamp to the PDF document

* Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
* Click the **Stamp Annotation** drop-down button. A drop-down pop-up will appear and shows the stamp annotations to be added.
* Click the Custom Stamp button.

![CustomStamp](../../pdfviewer/images/customStamp.png)

* The file explorer dialog will appear, choose the image and then add the image to the PDF page.

>The JPG and JPEG image format is only supported in the custom stamp annotations.

## Adding custom stamp programmatically

To add a custom stamp programmatically in the Syncfusion PDF viewer, you can use the **addAnnotation()** method of the Annotation module in the viewer.

Here is an example of how you can use this method to add a custom stamp to a PDF document:

```typescript

addCustomStamp() {
  var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  viewer.annotation.addAnnotation('Stamp', 
  {
    offset:{ x: 100, y: 200 },
    width:46,
    author:'Guest',
    height:100,
    isLock:true,
    pageNumber:1,
    customStamps:[{customStampName: "Image",customStampImageSource: // Provide the base64 string here
    }]
  });
}

```

This will add a custom stamp to the first page of the PDF document.

Find the sample [how to to add the custom stamp programmatically](https://stackblitz.com/edit/angular-dxub1a-gz5rle?file=app.component.ts)

## Setting default properties during control initialization

The properties of the stamp annotation can be set before creating the control using the StampSettings.

After editing the default opacity using the Edit Opacity tool, they will be changed to the selected values.
Refer to the following code sample to set the default sticky note annotation settings.


{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PdfViewerComponent, LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, AnnotationService
       } from '@syncfusion/ej2-angular-pdfviewer';
  @Component({
      selector: 'app-root',
      // Specifies the template string for the PDF Viewer component.
      template: `<div class="content-wrapper">
                    <ejs-pdfviewer id="pdfViewer"
                          [documentPath]='document'
                          [stampSettings]='stampSettings'
                          style="height:640px;display:block">
                    </ejs-pdfviewer>
                 </div>`,
    providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
                 ThumbnailViewService, ToolbarService, NavigationService,
                 TextSearchService, TextSelectionService, PrintService, 
                 AnnotationService]
     })
  export class AppComponent implements OnInit {
    public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public stampSettings = { opacity: 0.3, author: 'Guest User' };
  }

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PdfViewerComponent, LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, AnnotationService
       } from '@syncfusion/ej2-angular-pdfviewer';
  @Component({
      selector: 'app-root',
      // Specifies the template string for the PDF Viewer component.
      template: `<div class="content-wrapper">
                    <ejs-pdfviewer id="pdfViewer"
                          [serviceUrl]='service'
                          [documentPath]='document'
                          [stampSettings]='stampSettings'
                          style="height:640px;display:block">
                    </ejs-pdfviewer>
                 </div>`,
    providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
                 ThumbnailViewService, ToolbarService, NavigationService,
                 TextSearchService, TextSelectionService, PrintService, 
                 AnnotationService]
     })
  export class AppComponent implements OnInit {
    public service: string = 'https://services.syncfusion.com/angular/production/api/pdfviewer';
    public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public stampSettings = { opacity: 0.3, author: 'Guest User' };
  }

{% endhighlight %}
{% endtabs %}