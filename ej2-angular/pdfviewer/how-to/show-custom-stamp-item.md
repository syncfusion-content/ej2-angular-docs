---
layout: post
title: Displaying Custom stamp Items in Angular Pdfviewer|Syncfusion.
description: Learn how to display custom items in the custom stamp Dropdown in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Displaying Custom Items in Custom Stamp Dropdown

### Overview

This guide explains how to add and display custom items in the custom stamp dropdown menu of Syncfusion's PDF Viewer using Angular. This feature allows users to easily access and apply custom stamps to their PDF documents.

### Steps to Show Custom Items in Custom Stamp Dropdown

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started/) to create a simple PDF Viewer sample.


**Step 2:** Configure Custom Stamp Settings

Within the PDF Viewer setup, utilize `customStampSettings` to specify the custom stamps that should appear in the dropdown menu.


{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
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
  PrintService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div class="content-wrapper">
      <ejs-pdfviewer 
        id="pdfViewer"
        [documentPath]="document" 
        [resourceUrl]="resourceUrl"
        [customStampSettings]="customStampSettings"
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
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/27.2.2/dist/ej2-pdfviewer-lib';

  public customStampSettings = {
    isAddToMenu: true,
    customStamps: [
      {
        customStampName: 'Image1',
        customStampImageSource: 'data:image/png;base64,...' // Provide a valid base64 or URL for the image
         },
      {
        customStampName: 'Image2',
        customStampImageSource: 'data:image/png;base64,...' // Provide a valid base64 or URL for the image
        }
    ],
    enableCustomStamp: true,
    opacity: 1,
  };

  ngOnInit(): void {}

}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { Component, OnInit } from '@angular/core';
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
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div class="content-wrapper">
      <ejs-pdfviewer 
        id="pdfViewer"
        [documentPath]="document" 
        [serviceUrl]="serviceUrl" 
        [customStampSettings]="customStampSettings"
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
    PrintService,
  ],
})
export class AppComponent implements OnInit {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public serviceUrl: string = 'https://services.syncfusion.com/angular/production/api/pdfviewer';

  public customStampSettings = {
    isAddToMenu: true,
    customStamps: [
      {
        customStampName: 'Image1',
        customStampImageSource: 'data:image/png;base64,...' // Provide a valid base64 or URL for the image
         },
      {
        customStampName: 'Image2',
        customStampImageSource: 'data:image/png;base64,...' // Provide a valid base64 or URL for the image
        }
    ],
    enableCustomStamp: true,
    opacity: 1,
  };

  ngOnInit(): void {}

}

{% endhighlight %}
{% endtabs %}

By following these instructions, you can successfully configure to display custom items in the custom stamp dropdown, allowing users to easily apply personalized stamps to their documents.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)