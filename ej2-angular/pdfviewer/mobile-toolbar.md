---
layout: post
title: Mobile Toolbar Interface in Angular Pdfviewer component | Syncfusion
description: Learn All About the Mobile Toolbar Interface in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Mobile Toolbar Interface
documentation: ug
domainurl: ##DomainURL##
---
# Mobile Toolbar Interface in Angular PDF Viewer component

The Mobile PDF Viewer offers a variety of features for viewing, searching, annotating, and managing PDF documents on mobile devices. It includes Essential<sup style="font-size:70%">&reg;</sup> tools like search, download, bookmarking, annotation, and page organization. Users also have the option to enable desktop toolbar features in mobile mode, providing a more extensive set of actions.

## Mobile Mode Toolbar Configuration
In mobile mode, the toolbar is optimized for ease of use on small screens, presenting users with the most common actions for interacting with a PDF document. Below are the key features available in mobile mode:

![Mobile toolbar with primary PDF interaction options](images/mobileToolbar.png)

### Main Toolbar Options:

**OpenOption:** Tap to load a PDF document.

**SearchOption:** Access the search bar to find text within the document.

![Search bar displayed for finding text within a PDF](images/searchOption.png)

**UndoRedoTool:** Quickly undo or redo any annotations made.

**OrganizePagesTool:** Enable or disable page organization features to modify document pages.

![Page organization interface for modifying PDF pages](images/organizePages.png)

**AnnotationEditTool:** Activate or deactivate annotation editing to add or modify annotations.

![Annotation editing toolbar allowing users to add, edit, or delete annotations on a PDF](images/editAnnotation.png)


N> In mobile mode, the annotation toolbar is conveniently displayed at the bottom of the viewer. 

### More Options Menu:
When you open the "more options" menu, you will see additional actions such as:

**DownloadOption:** Tap to download the currently opened PDF document.

**BookmarkOption:** Allows you to view bookmarks within the document.

![More options menu showing additional actions like download and bookmark](images/more-options.png)

## Enabling Desktop Mode in Mobile

The desktop version of the toolbar can be enabled on mobile devices by using the `enableDesktopMode` API. This API allows you to bring desktop-like features to the mobile PDF viewer, providing access to additional toolbar actions that are typically available on desktop platforms.

### Steps to Enable Desktop Mode:

**Step 1:** Set `enableDesktopMode` to true in the API configuration.

**Step 2:** This will replace the mobile toolbar with the desktop toolbar layout, allowing access to more actions and controls.

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
    [enableDesktopMode]=true
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
    [enableDesktopMode]=true
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
    ngOnInit(): void {
    }
}
{% endhighlight %}
{% endtabs %}

## Enable Scrolling in Desktop Mode with Touch Gestures

To ensure smooth scrolling of PDF documents on a mobile device in desktop mode, it is important to enable touch gesture scrolling. You can achieve this by setting the `enableTextSelection` option to **false**.

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
    [enableDesktopMode]=true
    [enableTextSelection]=false
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
    [enableDesktopMode]=true
    [enableTextSelection]=false
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
    ngOnInit(): void {
    }
}
{% endhighlight %}
{% endtabs %}

## Print Option Not Available

The Print option is not available in mobile mode by default. However, if you need to use the print functionality on mobile devices, we recommend enabling the desktop toolbar on mobile using the `enableDesktopMode` API.

### How to Use Print on Mobile:

**Enable Desktop Mode:** Set `enableDesktopMode` to true to load the desktop version of the toolbar on your mobile device.

**Print Option:** Once desktop mode is enabled, the print option will be available, allowing you to print the document directly from your mobile device.

N> In mobile mode, the print functionality will not be available unless desktop mode is enabled.