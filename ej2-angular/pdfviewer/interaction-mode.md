---
layout: post
title: Interaction mode in Angular Pdfviewer component | Syncfusion
description: Learn here all about Interaction mode in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Interaction mode 
documentation: ug
domainurl: ##DomainURL##
---

# Interaction Mode in Angular PDF Viewer component

The PDF Viewer provides interaction mode for easy interaction with the loaded PDF document.  Selection mode and panning mode are the two interactions modes.

## Selection mode

In this mode, the text selection can be performed in the PDF document loaded in PDF Viewer. The panning and scrolling of the pages by touch cannot be performed in this mode. It allows users to select and copy text from the PDF files. This is helpful for copying and sharing text content. You can enable/disable the text selection using the following code snippet.

{% tabs %}
{% highlight js tabtitle="Standalone" %}

```typescript

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         PrintService
       } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
              <ejs-pdfviewer id="pdfViewer"
                      enableTextSelection='true'
                      [documentPath]='document'
                      style="height:640px;display:block">
              </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               PrintService]
  })
  export class AppComponent implements OnInit {
      public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  }

```
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

```typescript

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         PrintService
       } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
              <ejs-pdfviewer id="pdfViewer"
                      [serviceUrl]='service'
                      enableTextSelection='true'
                      [documentPath]='document'
                      style="height:640px;display:block">
              </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               PrintService]
  })
  export class AppComponent implements OnInit {
      public service = 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
      public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  }

```
{% endhighlight %}
{% endtabs %}

![Alt text](images/selection.png)

## Panning Mode

In this mode, the panning and scrolling of the pages by touch can be performed in the PDF document loaded in the PDF Viewer, but the text selection cannot be performed.

![Alt text](images/pan.png)

You can switch the interaction mode of PDF Viewer by using the following code snippet.,

{% tabs %}
{% highlight js tabtitle="Standalone" %}

```typescript
@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
              <ejs-pdfviewer id="pdfViewer"
                    enableTextSelection='true'
                    [documentPath]='document'
                    [interactionMode]='interaction'
                    style="height:640px;display:block">
              </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               PrintService]
  })
  export class AppComponent implements OnInit {
      public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
      public interaction = 'Pan';
  }
```
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

```typescript
@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
              <ejs-pdfviewer id="pdfViewer"
                    [serviceUrl]='service'
                    enableTextSelection='true'
                    [documentPath]='document'
                    [interactionMode]='interaction'
                    style="height:640px;display:block">
              </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               PrintService]
  })
  export class AppComponent implements OnInit {
      public service = 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
      public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
      public interaction = 'Pan';
  }
```
{% endhighlight %}
{% endtabs %}

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)