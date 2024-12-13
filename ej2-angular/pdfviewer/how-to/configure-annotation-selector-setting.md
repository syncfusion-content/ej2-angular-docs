---
layout: post
title: Annotation Selector Setting in Angular Pdfviewer|Syncfusion.
description: Learn here all about Configuring Annotation Selector Settings in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Configure Annotation Selector Settings

### Annotation Selector Settings

The [**annotationSelectorSettings**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotationSelectorSettings/) property allows you to customize the appearance and behavior of the annotation selector in the UI.

### AnnotationSelectorSettingsModel

The [**AnnotationSelectorSettingsModel**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotationSelectorSettingsModel/) defines the settings for the annotation selector, including border colors, sizes, and shapes. It provides fine-grained control over how annotations are displayed and interacted with.

### How to Configure Annotation Selector Settings

**Step 1:**	Create a PdfViewer Instance: Initialize your PdfViewer instance.

**Step 2:** Set the annotationSelectorSettings Property: Define your settings to customize the annotation selector. 

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
  PrintService,
  AnnotationResizerLocation,
  CursorType
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
  <ejs-pdfviewer id="pdfViewer"
             [documentPath]='document'
                 [resourceUrl]='resource' 
                 [annotationSelectorSettings]="annotationSelection"
             style="height:640px;display:block">
  </ejs-pdfviewer>
</div>`,
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
    PrintService]
})
export class AppComponent implements OnInit {
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/27.1.48/dist/ej2-pdfviewer-lib';
  public annotationSelection = {
    selectionBorderColor: 'blue', 
    resizerBorderColor: 'red', 
    resizerFillColor: '#4070ff', 
    resizerSize: 8, 
    selectionBorderThickness: 1, 
    resizerShape: 'Circle', 
    selectorLineDashArray: [5, 6], 
    resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges, 
    resizerCursorType: CursorType.grab 
  };
  ngOnInit(): void {
  }
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
  AnnotationResizerLocation,
  CursorType
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
  <ejs-pdfviewer id="pdfViewer"
             [documentPath]='document'
                 [serviceUrl]='service' 
                 [annotationSelectorSettings]="annotationSelection"
             style="height:640px;display:block">
  </ejs-pdfviewer>
</div>`,
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
    PrintService]
})
export class AppComponent implements OnInit {
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/27.1.48/dist/ej2-pdfviewer-lib';
  public annotationSelection = {
    selectionBorderColor: 'blue', 
    resizerBorderColor: 'red', 
    resizerFillColor: '#4070ff', 
    resizerSize: 8, 
    selectionBorderThickness: 1, 
    resizerShape: 'Circle', 
    selectorLineDashArray: [5, 6], 
    resizerLocation: AnnotationResizerLocation.Corners | AnnotationResizerLocation.Edges, 
    resizerCursorType: CursorType.grab 
  };
  ngOnInit(): void {
  }
}
{% endhighlight %}
{% endtabs %}

#### Key properties include:

* **selectionBorderColor**: Sets the color for the border around selected annotations.

* **resizerBorderColor**: Sets the color for the border of the resizer handles.

* **resizerFillColor**: Defines the fill color for the resizer handles.

* **resizerSize**: Determines the size of the resizer handles.

* **selectionBorderThickness**: Specifies how thick the selection border should be.

* **resizerShape**: Allows you to choose the shape of the resizer handles (e.g., Circle or Square).

* **selectorLineDashArray**: Specifies the dash pattern for the selector line to enhance visual cues.

* **resizerLocation**: Determines where the resizer appear in relation to the annotation (e.g., Corners or Edges).

* **resizerCursorType**: Sets the cursor style when hovering over the resizer, improving user interaction.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)