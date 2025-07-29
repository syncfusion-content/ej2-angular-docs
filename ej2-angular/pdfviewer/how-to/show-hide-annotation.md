---
layout: post
title: Showing and Hiding Annotations in Angular Pdfviewer | Syncfusion
description: Learn here all about how to show and hide annotations in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Showing and Hiding Annotations in PDF Viewer

## Overview

This guide demonstrates how to show and hide annotations in the Syncfusion PDF Viewer for Angular. This functionality is useful when you want to temporarily remove annotations from view and restore them later without permanently deleting them.

## How to Show and Hide Annotations

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Set Up Your Angular Component

Create an Angular component and update the template to include buttons that trigger the hide and unhide functionality for annotations.

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
  PageOrganizerService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div class="content-wrapper">
      <button (click)="hideAnnotations()" style="margin-right: 10px;">Hide Annotations</button>
      <button (click)="unhideAnnotations()">Unhide Annotations</button>
      <ejs-pdfviewer 
        id="pdfViewer"
        [documentPath]="document" 
        [resourceUrl]="resourceUrl"
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
    PageOrganizerService
  ]
})
export class AppComponent implements OnInit {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/30.1.37/dist/ej2-pdfviewer-lib';
  public exportObject: any;

  ngOnInit(): void { }

  hideAnnotations() {
    var proxy = this;
    var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    viewer.exportAnnotationsAsObject().then(function (value: any) {
      proxy.exportObject = value;
      viewer.deleteAnnotations();
    });
  }

  unhideAnnotations() {
    var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    viewer.importAnnotation(JSON.parse(this.exportObject));
  }
}

{% endhighlight %}
{% endtabs %}

## Conclusion

By implementing these steps in your Angular component, you can add functionality to show and hide annotations in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer. This allows for a better user experience when working with annotated PDF documents.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to/Show%20and%20Hide%20Annotations)