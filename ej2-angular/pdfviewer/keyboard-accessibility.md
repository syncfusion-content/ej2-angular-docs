---
layout: post
title: Keyboard accessibility in Angular Pdfviewer component | Syncfusion
description: Learn here all about Keyboard accessibility in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Keyboard accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Keyboard interaction

The angular PDF Viewer supports the following keyboard interactions.

|**Action**|**Windows**|**Macintosh**|
|--|--|--|
|**Shortcuts for page navigation**|||
|Navigate to the first page|Home|Function + Left arrow|
|Navigate to the last page|End|Function + Right arrow|
|Navigate to the previous page|Up Arrow|Up Arrow|
|Navigate to the next page|Down Arrow|Down Arrow|
|**Shortcuts for Zooming**|||
|Perform zoom-in operation|CONTROL + =|COMMAND + =|
|Perform zoom-out operation|CONTROL + -|COMMAND + -|
|Retain the zoom level to 1|CONTROL + 0|COMMAND + 0|
|**Shortcut for Text Search**|||
|Open the search toolbar|CONTROL + F|COMMAND + F|
|**Shortcut for Text Selection**|||
|Copy the selected text or annotation or form field|CONTROL + C|COMMAND + C|
|Cut the selected text or annotation of the form field|CONTROL + X|COMMAND + X|
|Paste the selected text or annotation or form field|CONTROL + Y|COMMAND + Y|
|**Shortcuts for the general operation**|||
|Undo the action|CONTROL + Z|COMMAND + Z|
|Redo the action|CONTROL + Y|COMMAND + Y|
|Print the document|CONTROL + P|COMMAND + P|
|Delete the annotations and form fields|Delete|Delete|

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService,ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         PrintService
       } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                <ejs-pdfviewer id="pdfViewer"
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

{% endhighlight %}

{% highlight ts tabtitle="Server-Backed" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService,ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         PrintService
       } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                <ejs-pdfviewer id="pdfViewer"
                          [serviceUrl]='service'
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
      public service = 'https://services.syncfusion.com/angular/production/api/pdfviewer';
      public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  }

{% endhighlight %}
{% endtabs %}