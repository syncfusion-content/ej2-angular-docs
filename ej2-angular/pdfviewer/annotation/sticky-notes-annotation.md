---
layout: post
title: Sticky notes annotation in Angular Pdfviewer component | Syncfusion
description: Learn here all about Sticky notes annotation in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Sticky notes annotation 
documentation: ug
domainurl: ##DomainURL##
---

# Sticky Notes Annotation in the Angular PDF Viewer component

The PDF Viewer control provides the options to add, edit, and delete the sticky note annotations in the PDF document.

![StickyNotesAnnotation](../../pdfviewer/images/stickynotes_annotation.png)

## Adding a sticky note annotation to the PDF document

Sticky note annotations can be added to the PDF document using the annotation toolbar.

* Click the **Comments** button in the PDF Viewer toolbar. A toolbar appears below it.
* Click the position where you want to add sticky note annotation in the PDF document.
* Sticky note annotation will be added in the clicked positions.

![StickyNotesTool](../../pdfviewer/images/stickynotes_tool.png)

Annotation comments can be added to the PDF document using the comment panel.

* Select a Sticky note annotation in the PDF document and right-click it.
* Select the Comment option in the context menu that appears.
* Now, you can add Comments, Reply, and Status using the Comment Panel.
* Now, you can add Comments, Reply, and Status using the Comment Panel.

![StickyNotesComment](../../pdfviewer/images/stickynotes_comment.png)

## Editing the properties of the sticky note annotation

### Editing opacity

The opacity of the annotation can be edited using the range slider provided in the Edit Opacity tool.

![StickyNotesOpacity](../../pdfviewer/images/sticky_opacity.png)

### Editing comments

The comment, comment reply, and comment status of the annotation can be edited using the Comment Panel.

* Open the comment panel using the Comment Panel button showing in the annotation toolbar.

![StickyNotesComment](../../pdfviewer/images/commentPanel.png)

You can modify or delete the comments or comments replay and it’s status using the menu option provided in the comment panel.

![StickyNotesEdit](../../pdfviewer/images/sticky_editbtn.png)

## Setting default properties during the control initialization

The properties of the sticky note annotation can be set before creating the control using the StickyNoteSettings.

After editing the default opacity using the Edit Opacity tool, they will be changed to the selected values. Refer to the following code sample to set the default sticky note annotation settings.

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
                      [stickyNotesSettings]='stickyNotesSettings'
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
    public stickyNotesSettings = { author: 'Syncfusion' };
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
                      [stickyNotesSettings]='stickyNotesSettings'
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
    public stickyNotesSettings = { author: 'Syncfusion' };
 }

{% endhighlight %}
{% endtabs %}

## Disabling sticky note annotations

The PDF Viewer control provides an option to disable the sticky note annotations feature. The code sample for disabling the feature is as follows.

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
                    [enableStickyNotesAnnotation]='false'
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
                    [enableStickyNotesAnnotation]='false'
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
}

{% endhighlight %}
{% endtabs %}