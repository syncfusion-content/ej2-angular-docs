---
layout: post
title: Text Markup Annotation in Angular PDF Viewer component | Syncfusion
description: Learn here all about Text Markup Annotation in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Text Markup Annotation 
documentation: ug
domainurl: ##DomainURL##
---

# Text Markup Annotation in the Angular PDF Viewer component

The PDF Viewer control provides the options to add, edit, and delete text markup annotations such as highlight, underline, and strikethrough annotations in the PDF document.

![Alt text](../../pdfviewer/images/text_markup_annotation.png)

## Highlight a text

There are two ways to highlight a text in the PDF document:

1. Using the context menu
    * Select a text in the PDF document and right-click it.
    * Select **Highlight** option in the context menu that appears.

![Alt text](../../pdfviewer/images/highlight_context.png)

<!-- markdownlint-disable MD029 -->
2. Using the annotation toolbar
    * Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
    * Select the **Highlight** button in the annotation toolbar. It enables the highlight mode.
    * Select the text and the highlight annotation will be added.
    * You can also select the text and apply the highlight annotation using the **Highlight** button.

![Alt text](../../pdfviewer/images/highlight_button.PNG)

In the pan mode, if the highlight mode is entered, the PDF Viewer control will switch to text select mode to enable the text selection for highlighting the text.

Refer to the following code sample to switch to the highlight mode.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

   import { ViewChild } from '@angular/core';
   import { Component, OnInit } from '@angular/core';
   import { PdfViewerComponent, LinkAnnotationService,  BookmarkViewService,
            MagnificationService, ThumbnailViewService, ToolbarService,
            NavigationService, TextSearchService,TextSelectionService,
            PrintService, AnnotationService,
          } from '@syncfusion/ej2-angular-pdfviewer';

 @Component({
  selector: 'app-root',
   // Specifies the template string for the PDF Viewer component.
   template: `<button (click)="addAnnotation()">Highlight</button>
              <div class="content-wrapper">
                 <ejs-pdfviewer id="pdfViewer"
                         [documentPath]='document'
                         style="height:640px;display:block">
                  </ejs-pdfviewer>
               </div>`,
    providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
                 ThumbnailViewService, ToolbarService, NavigationService,
                 TextSearchService, TextSelectionService, PrintService,
                 AnnotationService ],
 })
 export class AppComponent implements OnInit {
    @ViewChild('pdfviewer')
    public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    addAnnotation() {
       var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
       pdfviewer.annotationModule.setAnnotationMode('Highlight');
   }
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

   import { ViewChild } from '@angular/core';
   import { Component, OnInit } from '@angular/core';
   import { PdfViewerComponent, LinkAnnotationService,  BookmarkViewService,
            MagnificationService, ThumbnailViewService, ToolbarService,
            NavigationService, TextSearchService,TextSelectionService,
            PrintService, AnnotationService,
          } from '@syncfusion/ej2-angular-pdfviewer';

 @Component({
  selector: 'app-root',
   // Specifies the template string for the PDF Viewer component.
   template: `<button (click)="addAnnotation()">Highlight</button>
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
                 AnnotationService ],
 })
 export class AppComponent implements OnInit {
    @ViewChild('pdfviewer')
    public service: string = 'https://services.syncfusion.com/angular/production/api/pdfviewer';
    public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    addAnnotation() {
       var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
       pdfviewer.annotationModule.setAnnotationMode('Highlight');
   }
}

{% endhighlight %}
{% endtabs %}

Refer to the following code sample to switch back to normal mode from the highlight mode.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

   import { ViewChild } from '@angular/core';
   import { Component, OnInit } from '@angular/core';
   import { PdfViewerComponent, LinkAnnotationService,  BookmarkViewService,
            MagnificationService, ThumbnailViewService, ToolbarService,
            NavigationService, TextSearchService, TextSelectionService,
            PrintService, AnnotationService,
          } from '@syncfusion/ej2-angular-pdfviewer';

 @Component({
  selector: 'app-root',
   // Specifies the template string for the PDF Viewer component.
   template: `<button (click)="addAnnotation()">Highlight</button>
              <button (click)="setNone()">None</button>
              <div class="content-wrapper">
                 <ejs-pdfviewer id="pdfViewer"
                         [documentPath]='document'
                         style="height:640px;display:block">
                  </ejs-pdfviewer>
               </div>`,
    providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
                 ThumbnailViewService, ToolbarService, NavigationService,
                 TextSearchService, TextSelectionService, PrintService,
                 AnnotationService ],
 })
 export class AppComponent implements OnInit {
    @ViewChild('pdfviewer')
    public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    addAnnotation() {
       var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
       pdfviewer.annotationModule.setAnnotationMode('Highlight');
   }
   setNone() {
      var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
       pdfviewer.annotationModule.setAnnotationMode("None");
    }
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

   import { ViewChild } from '@angular/core';
   import { Component, OnInit } from '@angular/core';
   import { PdfViewerComponent, LinkAnnotationService,  BookmarkViewService,
            MagnificationService, ThumbnailViewService, ToolbarService,
            NavigationService, TextSearchService, TextSelectionService,
            PrintService, AnnotationService,
          } from '@syncfusion/ej2-angular-pdfviewer';

 @Component({
  selector: 'app-root',
   // Specifies the template string for the PDF Viewer component.
   template: `<button (click)="addAnnotation()">Highlight</button>
              <button (click)="setNone()">None</button>
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
                 AnnotationService ],
 })
 export class AppComponent implements OnInit {
    @ViewChild('pdfviewer')
    public service: string = 'https://services.syncfusion.com/angular/production/api/pdfviewer';
    public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    addAnnotation() {
       var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
       pdfviewer.annotationModule.setAnnotationMode('Highlight');
   }
   setNone() {
      var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
       pdfviewer.annotationModule.setAnnotationMode("None");
    }
}

{% endhighlight %}
{% endtabs %}

## Underline a text

There are two ways to underline a text in the PDF document:

1. Using the context menu
    * Select a text in the PDF document and right-click it.
    * Select the **Underline** option in the context menu that appears.

![Alt text](../../pdfviewer/images/underline_context.png)

<!-- markdownlint-disable MD029 -->
2. Using the annotation toolbar
    * Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
    * Select the **Underline** button in the annotation toolbar. It enables the underline mode.
    * Select the text and the underline annotation will be added.
    * You can also select the text and apply the underline annotation using the **Underline** button.

![Alt text](../../pdfviewer/images/underline_button.png)

In the pan mode, if the underline mode is entered, the PDF Viewer control will switch to text select mode to enable the text selection for underlining the text.

Refer to the following code sample to switch to the underline mode.

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
  template: `<button (click)="addAnnotation()">Underline</button>
             <div class="content-wrapper">
                <ejs-pdfviewer id="pdfViewer"
                      [documentPath]='document'
                      style="height:640px;display:block">
                </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService, 
               AnnotationService ]
  })
  export class AppComponent implements OnInit {
    public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    addAnnotation() {
      var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
      pdfviewer.annotationModule.setAnnotationMode("Underline");
    }
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
  template: `<button (click)="addAnnotation()">Underline</button>
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
               AnnotationService ]
  })
  export class AppComponent implements OnInit {
    public service: string = 'https://services.syncfusion.com/angular/production/api/pdfviewer';
    public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    addAnnotation() {
      var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
      pdfviewer.annotationModule.setAnnotationMode("Underline");
    }
  }

{% endhighlight %}
{% endtabs %}

Refer to the following code sample to switch back to normal mode from the underline mode.

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
  template: `<button (click)="addAnnotation()">Underline</button>
             <button (click)="setNone()">None</button>
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
    @ViewChild('pdfviewer')
    public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    addAnnotation() {
       var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
       pdfviewer.annotationModule.setAnnotationMode("Underline");
    }
    setNone() {
      var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
       pdfviewer.annotationModule.setAnnotationMode("None");
    }
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
  template: `<button (click)="addAnnotation()">Underline</button>
             <button (click)="setNone()">None</button>
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
    @ViewChild('pdfviewer')
    public service: string = 'https://services.syncfusion.com/angular/production/api/pdfviewer';
    public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    addAnnotation() {
       var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
       pdfviewer.annotationModule.setAnnotationMode("Underline");
    }
    setNone() {
      var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
       pdfviewer.annotationModule.setAnnotationMode("None");
    }
  }

{% endhighlight %}
{% endtabs %}

## Strikethrough a text

There are two ways to strikethrough a text in the PDF document:

1. Using the context menu
    * Select a text in the PDF document and right-click it.
    * Select the **Strikethrough** option in the context menu that appears.

![Alt text](../../pdfviewer/images/strikethrough_context.png)

<!-- markdownlint-disable MD029 -->
2. Using the annotation toolbar
    * Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
    * Select the **Strikethrough** button in the annotation toolbar. It enables the strikethrough mode.
    * Select the text and the strikethrough annotation will be added.
    * You can also select the text and apply the strikethrough annotation using the **Strikethrough** button.

![Alt text](../../pdfviewer/images/strikethrough_button.png)

In the pan mode, if the strikethrough mode is entered, the PDF Viewer control will switch to text select mode to enable the text selection for striking through the text.

Refer to the following code sample to switch to strikethrough mode.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PdfViewerComponent, LinkAnnotationService, BookmarkViewService,
         MagnificationService,ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService, 
         PrintService, AnnotationService 
       } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
    selector: 'app-root',
    // Specifies the template string for the PDF Viewer component.
    template: `<button (click)="addAnnotation()">Strikethrough</button>
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
           pdfviewer.annotationModule.setAnnotationMode("Strikethrough");
       }
   }

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PdfViewerComponent, LinkAnnotationService, BookmarkViewService,
         MagnificationService,ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService, 
         PrintService, AnnotationService 
       } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
    selector: 'app-root',
    // Specifies the template string for the PDF Viewer component.
    template: `<button (click)="addAnnotation()">Strikethrough</button>
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
           pdfviewer.annotationModule.setAnnotationMode("Strikethrough");
       }
   }

{% endhighlight %}
{% endtabs %}

Refer to the following code sample to switch back to normal mode from the strikethrough mode.

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
     template: `<button (click)="addAnnotation()">Strikethrough</button>
     <button (click)="setNone()">None</button>
     <div class="content-wrapper">
     <ejs-pdfviewer id="pdfViewer"
                    [documentPath]='document'
                    style="height:640px;display:block">
     </ejs-pdfviewer>
     </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService,MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService, 
               AnnotationService]
})
export class AppComponent implements OnInit {
     public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
     addAnnotation() {
       var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
       pdfviewer.annotationModule.setAnnotationMode("Strikethrough");
     }
     setNone() {
       var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
       pdfviewer.annotationModule.setAnnotationMode("None");
     }
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
     template: `<button (click)="addAnnotation()">Strikethrough</button>
     <button (click)="setNone()">None</button>
     <div class="content-wrapper">
     <ejs-pdfviewer id="pdfViewer"
                    [serviceUrl]='service'
                    [documentPath]='document'
                    style="height:640px;display:block">
     </ejs-pdfviewer>
     </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService,MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService, 
               AnnotationService]
})
export class AppComponent implements OnInit {
     public service: string = 'https://services.syncfusion.com/angular/production/api/pdfviewer';
     public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
     addAnnotation() {
       var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
       pdfviewer.annotationModule.setAnnotationMode("Strikethrough");
     }
     setNone() {
       var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
       pdfviewer.annotationModule.setAnnotationMode("None");
     }
   }

{% endhighlight %}
{% endtabs %}

## Deleting a text markup annotation

The selected annotation can be deleted in the following ways:

1. Using the Delete key
    * Select the annotation to be deleted.
    * Click the Delete key in the keyboard. The selected annotation will be deleted.

2. Using the annotation toolbar
    * Select the annotation to be deleted.
    * Click the **Delete Annotation** button in the annotation toolbar. The selected annotation will be deleted.

![Alt text](../../pdfviewer/images/delete_button.png)

## Editing the properties of the text markup annotation

The color and the opacity of the text markup annotation can be edited using the Edit Color tool and the Edit Opacity tool in the annotation toolbar.

### Editing color

The color of the annotation can be edited using the color palette provided in the Edit Color tool.

![Alt text](../../pdfviewer/images/edit_color.png)

### Editing opacity

The opacity of the annotation can be edited using the range slider provided in the Edit Opacity tool.

![Alt text](../../pdfviewer/images/edit_opacity.png)

## Setting default properties during the control initialization

The properties of the text markup annotation can be set before creating the control using the  highlightSettings, underlineSettings, and strikethroughSettings.

>After editing the default color and opacity using the Edit Color tool and Edit Opacity tool, they will be changed to the selected values.

Refer to the following code sample to set the default annotation settings.

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
                            [highlightSettings]='highlightSettings'
                            [underlineSettings]='underlineSettings'
                            [strikethroughSettings]='strikethroughSettings'
                            style="height:640px;display:block">
                  </ejs-pdfviewer>
              </div>`,
  providers: [ LinkAnnotationService,  BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService, 
               AnnotationService]
})
export class AppComponent implements OnInit {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public highlightSettings = { author: 'Guest User', subject: 'Important', color: '#ffff00', opacity: 0.9, modifiedDate: '' };
  public underlineSettings = { author: 'Guest User', subject: 'Points to be remembered', color: '#00ffff', opacity: 0.9, modifiedDate: '' };
  public strikethroughSettings = { author: 'Guest User', subject: 'Not Important', color: '#ff00ff', opacity: 0.9, modifiedDate: '' };
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
                            [highlightSettings]='highlightSettings'
                            [underlineSettings]='underlineSettings'
                            [strikethroughSettings]='strikethroughSettings'
                            style="height:640px;display:block">
                  </ejs-pdfviewer>
              </div>`,
  providers: [ LinkAnnotationService,  BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService, 
               AnnotationService]
})
export class AppComponent implements OnInit {
  
  public service: string = 'https://services.syncfusion.com/angular/production/api/pdfviewer';
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public highlightSettings = { author: 'Guest User', subject: 'Important', color: '#ffff00', opacity: 0.9, modifiedDate: '' };
  public underlineSettings = { author: 'Guest User', subject: 'Points to be remembered', color: '#00ffff', opacity: 0.9, modifiedDate: '' };
  public strikethroughSettings = { author: 'Guest User', subject: 'Not Important', color: '#ff00ff', opacity: 0.9, modifiedDate: '' };
}

{% endhighlight %}
{% endtabs %}

## Performing undo and redo

The PDF Viewer performs undo and redo for the changes made in the PDF document. In the text markup annotation, undo and redo actions are provided for:

* Inclusion of the text markup annotations.
* Deletion of the text markup annotations.
* Change of either color or opacity of the text markup annotations.

The undo and redo actions can be done in the following ways:

1. Using the keyboard shortcuts:
    After performing a text markup annotation action, you can undo it by using the Ctrl + Z shortcut and redo by using the Ctrl + Y shortcut.
2. Using toolbar:
    The Undo and redo can be done using the **Undo** tool and **Redo** tool provided in the toolbar.

Refer to the following code sample for calling undo and redo actions from the client-side.

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
  template: `<button (click)="Undo()">Undo</button>
             <button (click)="Redo()">Redo</button>
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
    Undo() {
      var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
      pdfviewer.undo();
    }
    Redo() {
      var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
      pdfviewer.redo();
   }
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
  template: `<button (click)="Undo()">Undo</button>
             <button (click)="Redo()">Redo</button>
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
    Undo() {
      var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
      pdfviewer.undo();
    }
    Redo() {
      var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
      pdfviewer.redo();
   }
 }

{% endhighlight %}
{% endtabs %}

## Saving the text markup annotation

When you click the download tool in the toolbar, the text markup annotations will be saved in the PDF document. This action will not affect the original document.

## Printing the text markup annotation

When the print tool is selected in the toolbar, the PDF document will be printed along with the text markup annotations added to the pages. This action will not affect the original document.

## Disabling text markup annotation

The PDF Viewer control provides an option to disable the text markup annotation feature. The code sample for disabling the feature is as follows.

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
                    [enableTextMarkupAnnotation]='false'
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
                    [enableTextMarkupAnnotation]='false'
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