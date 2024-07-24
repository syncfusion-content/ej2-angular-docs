---
layout: post
title: Minimum and Maximum Zoom in Angular PDF Viewer component | Syncfusion
description: Learn here all about Minimum and Maximum Zoom in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Minimum and Maximum Zoom Properties

The Syncfusion PDF Viewer provides the ability to control zoom levels for viewing PDF documents. The [minZoom](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#minzoom) and [maxZoom](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#maxzoom) properties enable developers to set the minimum and maximum zoom levels, ensuring a consistent and controlled viewing experience.

### minZoom

The [minZoom](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#minzoom) property specifies the minimum zoom percentage allowed in the PDF Viewer. This ensures that users cannot zoom out beyond a certain limit, which helps maintain readability and performance. Developers can set the [minZoom](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#minzoom) property programmatically, defining the minimum zoom level based on the application's requirements. This is particularly useful for preventing users from zooming out too much, which could make the content difficult to read.

### maxZoom

The [maxZoom](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#maxzoom) property defines the maximum zoom percentage allowed in the PDF Viewer. By setting this property, developers can prevent users from zooming in too much, helping to avoid performance issues and maintain a smooth viewing experience. The [maxZoom](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#maxzoom) property can be set programmatically to control the upper limit of the zoom level. This is useful for applications where extremely high zoom levels might degrade performance or user experience.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService, 
         AnnotationService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">

  <ejs-pdfviewer 
    id="pdfViewer" 
    [documentPath]='document' 
    [resourceUrl]='resource'
    [maxZoom]="maxZoom"
    [minZoom]="minZoom"
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
})
export class AppComponent implements OnInit {
    public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public resource: string = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
    public maxZoom = 270;
    public minZoom = 45;
    ngOnInit(): void {
    }
}
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService, 
         AnnotationService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">

  <ejs-pdfviewer 
    id="pdfViewer" 
    [documentPath]='document' 
    [serviceUrl]='service' 
    [maxZoom]="maxZoom"
    [minZoom]="minZoom"
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
})
export class AppComponent implements OnInit {
    public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public service: string = 'https://services.syncfusion.com/angular/production/api/pdfviewer';
    public maxZoom = 270;
    public minZoom = 45;
    ngOnInit(): void {
    }
}
{% endhighlight %}
{% endtabs %}

#### Restrict Zoom Percentage on Mobile Devices

You can easily restrict the zoom percentage on mobile devices using the [minZoom](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#minzoom) and [maxZoom](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#maxzoom) properties. This feature allows you to set specific limits for zooming, ensuring smoother scrolling performance and efficient document loading on mobile devices. By controlling the zoom levels, you can provide a better user experience across different devices.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         PrintService, FormFieldsService, FormDesignerService,
         PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';
import  {Browser} from '@syncfusion/ej2-base';

@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                  <ejs-pdfviewer id="pdfViewer"
                            [documentPath]='document'
                            [resourceUrl] = 'resource'
                            (documentLoad)='documentLoaded($event)' 
                            style="height:640px;display:block">
                  </ejs-pdfviewer>
              </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               PrintService, FormFieldsService, FormDesignerService, PageOrganizerService]
  })
  export class AppComponent implements OnInit {
    public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public resource: string = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
    ngOnInit(): void {
    }
    documentLoaded(e: any): void {
      var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
      if (Browser.isDevice && !viewer.enableDesktopMode) {
        viewer.maxZoom = 200;
          viewer.minZoom = 10;
      }
      else {
        viewer.zoomMode = 'Default';
      }
    }
}

{% endhighlight %}

{% highlight ts tabtitle="Server-Backed" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         PrintService, FormFieldsService, FormDesignerService,
         PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';
import  {Browser} from '@syncfusion/ej2-base';

@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                  <ejs-pdfviewer id="pdfViewer"
                            [serviceUrl]='service'
                            [documentPath]='document'
                            (documentLoad)='documentLoaded($event)' 
                            style="height:640px;display:block">
                  </ejs-pdfviewer>
              </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               PrintService, FormFieldsService, FormDesignerService, PageOrganizerService]
  })
  export class AppComponent implements OnInit {
    public service = 'https://services.syncfusion.com/angular/production/api/pdfviewer';
    public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

    ngOnInit(): void {
    }
    documentLoaded(e: any): void {
      var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
      if (Browser.isDevice && !viewer.enableDesktopMode) {
        viewer.maxZoom = 200;
          viewer.minZoom = 10;
      }
      else {
        viewer.zoomMode = 'Default';
      }
    }
}

{% endhighlight %}
{% endtabs %}

By implementing this, you ensure that the maximum zoom percentage on mobile devices is limited to 200% and the minimum zoom percentage is set to 10%. This prevents performance issues that may arise from excessive zooming on mobile platforms.