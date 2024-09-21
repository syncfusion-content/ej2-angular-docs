---
layout: post
title: Controlling File Downloads in Angular Pdfviewer component | Syncfusion
description: Learn here how to Controlling File Downloads in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Controlling File Downloads in Syncfusion PDF Viewer

In the Syncfusion PDF Viewer, we've introduced a new feature that enables you to manage file downloads more effectively. This feature allows you to intercept and potentially skip the download process of a PDF document, providing enhanced control over user interactions within your application.

### Using the downloadStart Event

The key to this functionality lies in the downloadStart event, which offers a mechanism to intercept the initiation of the download process. Within the event handler, you can set the cancel argument to true to programmatically prevent the download action from proceeding.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import { PdfViewerModule, LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService, 
         AnnotationService, DownloadStartEventArgs, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                  <ejs-pdfviewer id="pdfViewer"
                            [documentPath]='document'
                            (downloadStart)="downloadStart($event)"
                            style="height:640px;display:block">
                  </ejs-pdfviewer>
              </div>`,
   providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
  })
  export class AppComponent implements OnInit {
    public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public resource: string = "https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib";
    ngOnInit(): void {
    }
    public downloadStart(args: DownloadStartEventArgs): void {
      // Your custom logic here
      args.cancel = true; // Prevent download action
    }
}

{% endhighlight %}

{% highlight ts tabtitle="Server-Backed" %}

import { Component, OnInit } from '@angular/core';
import { PdfViewerModule, LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService, 
         AnnotationService, DownloadStartEventArgs, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                  <ejs-pdfviewer id="pdfViewer"
                            [serviceUrl]='service'
                            [documentPath]='document'
                            (downloadStart)="downloadStart($event)"
                            style="height:640px;display:block">
                  </ejs-pdfviewer>
              </div>`,
   providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
  })
  export class AppComponent implements OnInit {
    public service = 'https://services.syncfusion.com/angular/production/api/pdfviewer';
    public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

    ngOnInit(): void {
    }
  public downloadStart(args: DownloadStartEventArgs): void {
    // Your custom logic here
    args.cancel = true; // Prevent download action
  }
}

{% endhighlight %}
{% endtabs %}

By default, the cancel argument is set to `false`, indicating that the download action will proceed unless explicitly canceled by your custom logic.

### Enhanced Flexibility

By leveraging the [downloadStart](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/downloadStartEventArgs/) event and its cancel argument, you gain the ability to implement custom logic to control and potentially prevent download actions based on your application's specific requirements. This enhancement provides greater flexibility in managing user interactions with PDF documents, empowering you to tailor the experience according to your needs.