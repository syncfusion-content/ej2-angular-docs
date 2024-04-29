---
layout: post
title: Shape annotation in Angular Pdfviewer component | Syncfusion
description: Learn here all about Shape annotation in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Shape annotation 
documentation: ug
domainurl: ##DomainURL##
---

# Shape Annotation in Angular PDF Viewer component

The PDF Viewer control provides the options to add, edit, and delete the shape annotations. The shape annotation types supported in the PDF Viewer control are:

* Line
* Arrow
* Rectangle
* Circle
* Polygon

![ShapeAnnotation](../../pdfviewer/images/shape_annot.png)

## Adding a shape annotation to the PDF document

Shape annotations can be added to the PDF document using the annotation toolbar.

* Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
* Click the **Shape Annotation** drop-down button. A drop-down pop-up will appear and shows the shape annotations to be added.
* Select the shape types to be added to the page in the drop-down pop-up. It enables the selected shape annotation mode.
* You can add the shapes over the pages of the PDF document.

In the pan mode, if the shape annotation mode is entered, the PDF Viewer control will switch to text select mode.

![ShapeTool](../../pdfviewer/images/shape_toolbar.png)

Refer to the following code sample to switch to the circle annotation mode.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import { PdfViewerComponent, LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, AnnotationService
       } from '@syncfusion/ej2-angular-pdfviewer';
  @Component({
    selector: 'app-root',
    // Specifies the template string for the PDF Viewer component.
    template: `<button (click)="addAnnotation()">Circle</button>
               <div class="content-wrapper">
                  <ejs-pdfviewer id="pdfViewer"
                        [documentPath]='document'
                        [resourceUrl] = 'resource'
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
    public resource: string = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";

    ngOnInit(): void {
    }
    addAnnotation() {
      var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
      pdfviewer.annotationModule.setAnnotationMode("Circle");
    }
  }

{% endhighlight %}

{% highlight ts tabtitle="Server-Backed" %}


import { Component, OnInit } from '@angular/core';
import { PdfViewerComponent, LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, AnnotationService
       } from '@syncfusion/ej2-angular-pdfviewer';
  @Component({
    selector: 'app-root',
    // Specifies the template string for the PDF Viewer component.
    template: `<button (click)="addAnnotation()">Circle</button>
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
    ngOnInit(): void {
    }

    addAnnotation() {
      var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
      pdfviewer.annotationModule.setAnnotationMode("Circle");
    }
  }

{% endhighlight %}
{% endtabs %}

## Adding a shape annotation to the PDF document Programmatically

With the PDF Viewer library, you can add a shape annotation to the PDF Viewer control programmatically using the [**addAnnotation()**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotation/#addannotationn) method.

Here's a example of how you can utilize the **addAnnotation()** method to include a shape annotation programmatically:

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService, 
         AnnotationService, PageOrganizerService, LineSettings, ArrowSettings, 
         RectangleSettings, CircleSettings, PolygonSettings } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
  <button (click)="addLineAnnotation()">Add Line annotation Programmatically</button>
  <button (click)="addArrowAnnotation()">Add Arrow annotation Programmatically</button>
  <button (click)="addRectangleAnnotation()">Add Rectangle annotation Programmatically</button>
  <button (click)="addCircleAnnotation()">Add Circle annotation Programmatically</button>
  <button (click)="addPolygonAnnotation()">Add Polygon annotation Programmatically</button>
  <ejs-pdfviewer 
    id="pdfViewer" 
    [documentPath]='document' 
    [resourceUrl]='resource' 
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
  addLineAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfviewer.annotation.addAnnotation("Line", {
      offset: { x: 200, y: 230 },
      pageNumber: 1,
      vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
    } as LineSettings);
  }
  addArrowAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfviewer.annotation.addAnnotation("Arrow", {
      offset: { x: 200, y: 370 },
      pageNumber: 1,
      vertexPoints: [{ x: 200, y: 370 }, { x: 350, y: 370 }]
    } as ArrowSettings);
  }
  addRectangleAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfviewer.annotation.addAnnotation("Rectangle", {
      offset: { x: 200, y: 480 },
      pageNumber: 1,
      width: 150,
      height: 75
    } as RectangleSettings);
  }
  addCircleAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfviewer.annotation.addAnnotation("Circle", {
      offset: { x: 200, y: 620 },
      pageNumber: 1,
      width: 90,
      height: 90
    } as CircleSettings);
  }
  addPolygonAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfviewer.annotation.addAnnotation("Polygon", {
      offset: { x: 200, y: 800 },
      pageNumber: 1,
      vertexPoints: [{ x: 200, y: 800 }, { x: 242, y: 771 }, { x: 289, y: 799 }, { x: 278, y: 842 }, { x: 211, y: 842 }, { x: 200, y: 800 }]
    } as PolygonSettings);
  }
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService, 
         AnnotationService, PageOrganizerService, LineSettings, ArrowSettings, 
         RectangleSettings, CircleSettings, PolygonSettings } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
  <button (click)="addLineAnnotation()">Add Line annotation Programmatically</button>
  <button (click)="addArrowAnnotation()">Add Arrow annotation Programmatically</button>
  <button (click)="addRectangleAnnotation()">Add Rectangle annotation Programmatically</button>
  <button (click)="addCircleAnnotation()">Add Circle annotation Programmatically</button>
  <button (click)="addPolygonAnnotation()">Add Polygon annotation Programmatically</button>
  <ejs-pdfviewer 
    id="pdfViewer" 
    [documentPath]='document' 
    [serviceUrl]='service' 
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
  addLineAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfviewer.annotation.addAnnotation("Line", {
      offset: { x: 200, y: 230 },
      pageNumber: 1,
      vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
    } as LineSettings);
  }
  addArrowAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfviewer.annotation.addAnnotation("Arrow", {
      offset: { x: 200, y: 370 },
      pageNumber: 1,
      vertexPoints: [{ x: 200, y: 370 }, { x: 350, y: 370 }]
    } as ArrowSettings);
  }
  addRectangleAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfviewer.annotation.addAnnotation("Rectangle", {
      offset: { x: 200, y: 480 },
      pageNumber: 1,
      width: 150,
      height: 75
    } as RectangleSettings);
  }
  addCircleAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfviewer.annotation.addAnnotation("Circle", {
      offset: { x: 200, y: 620 },
      pageNumber: 1,
      width: 90,
      height: 90
    } as CircleSettings);
  }
  addPolygonAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfviewer.annotation.addAnnotation("Polygon", {
      offset: { x: 200, y: 800 },
      pageNumber: 1,
      vertexPoints: [{ x: 200, y: 800 }, { x: 242, y: 771 }, { x: 289, y: 799 }, { x: 278, y: 842 }, { x: 211, y: 842 }, { x: 200, y: 800 }]
    } as PolygonSettings);
  }
}


{% endhighlight %}
{% endtabs %}

## Edit the existing shape annotation programmatically

To modify existing shape annotation in the Syncfusion PDF viewer programmatically, you can use the **editAnnotation()** method.

Here is an example of how you can use the **editAnnotation()** method:

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
  <button (click)="editLineAnnotation()">Edit Line annotation Programmatically</button>
  <button (click)="editArrowAnnotation()">Edit Arrow annotation Programmatically</button>
  <button (click)="editRectangleAnnotation()">Edit Rectangle annotation Programmatically</button>
  <button (click)="editCircleAnnotation()">Edit Circle annotation Programmatically</button>
  <button (click)="editPolygonAnnotation()">Edit Polygon annotation Programmatically</button>
  <ejs-pdfviewer 
    id="pdfViewer" 
    [documentPath]='document' 
    [resourceUrl]='resource' 
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
  editLineAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
      if (pdfviewer.annotationCollection[i].subject === "Line") {
        pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
        pdfviewer.annotationCollection[i].thickness = 2 ;
        pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
      }
    }
  }
  editArrowAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
      if (pdfviewer.annotationCollection[i].subject === "Arrow") {
        pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
        pdfviewer.annotationCollection[i].thickness = 2 ;
        pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
        pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
      }
    }
  }
  editRectangleAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
      if (pdfviewer.annotationCollection[i].subject === "Rectangle") {
        pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
        pdfviewer.annotationCollection[i].thickness = 2 ;
        pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
        pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
      }
    }
  }
  editCircleAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
      if (pdfviewer.annotationCollection[i].subject === "Circle") {
        pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
        pdfviewer.annotationCollection[i].thickness = 2 ;
        pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
        pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
      }
    }
  }
  editPolygonAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
      if (pdfviewer.annotationCollection[i].subject === "Polygon") {
        pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
        pdfviewer.annotationCollection[i].thickness = 2 ;
        pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
        pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
      }
    }
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
  <button (click)="editLineAnnotation()">Edit Line annotation Programmatically</button>
  <button (click)="editArrowAnnotation()">Edit Arrow annotation Programmatically</button>
  <button (click)="editRectangleAnnotation()">Edit Rectangle annotation Programmatically</button>
  <button (click)="editCircleAnnotation()">Edit Circle annotation Programmatically</button>
  <button (click)="editPolygonAnnotation()">Edit Polygon annotation Programmatically</button>
  <ejs-pdfviewer 
    id="pdfViewer" 
    [documentPath]='document' 
    [serviceUrl]='service' 
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
  editLineAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
      if (pdfviewer.annotationCollection[i].subject === "Line") {
        pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
        pdfviewer.annotationCollection[i].thickness = 2 ;
        pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
      }
    }
  }
  editArrowAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
      if (pdfviewer.annotationCollection[i].subject === "Arrow") {
        pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
        pdfviewer.annotationCollection[i].thickness = 2 ;
        pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
        pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
      }
    }
  }
  editRectangleAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
      if (pdfviewer.annotationCollection[i].subject === "Rectangle") {
        pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
        pdfviewer.annotationCollection[i].thickness = 2 ;
        pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
        pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
      }
    }
  }
  editCircleAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
      if (pdfviewer.annotationCollection[i].subject === "Circle") {
        pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
        pdfviewer.annotationCollection[i].thickness = 2 ;
        pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
        pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
      }
    }
  }
  editPolygonAnnotation() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
      if (pdfviewer.annotationCollection[i].subject === "Polygon") {
        pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
        pdfviewer.annotationCollection[i].thickness = 2 ;
        pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
        pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
      }
    }
  }
}
{% endhighlight %}
{% endtabs %}

## Editing the properties of the shape annotation

The fill color, stroke color, thickness, and opacity of the shape annotation can be edited using the Edit color tool, Edit stroke color tool, Edit thickness tool, and Edit opacity tool in the annotation toolbar.

### Editing fill color

The fill color of the annotation can be edited using the color palette provided in the Edit Color tool.

![ShapeFillColor](../../pdfviewer/images/shape_fillColor.png)

### Editing stroke color

The stroke color of the annotation can be edited using the color palette provided in the Edit Stroke Color tool.

![ShapeStrokeColor](../../pdfviewer/images/shape_strokecolor.png)

### Editing thickness

The thickness of the border of the annotation can be edited using the range slider provided in the Edit Thickness tool.

![ShapeThickness](../../pdfviewer/images/shape_thickness.png)

### Editing opacity

The opacity of the annotation can be edited using the range slider provided in the Edit Opacity tool.

![ShapeOpacity](../../pdfviewer/images/shape_opacity.png)

### Editing the line properties

The properties of the line shapes such as line and arrow annotations can be edited using the Line Properties window. It can be opened by selecting the Properties option in the context menu that appears on right-clicking the line and arrow annotations.

Refer to the following code sample to set the default annotation settings.

![ShapeProperty](../../pdfviewer/images/shape_lineprty.png)

## Setting default properties during the control initialization

The properties of the shape annotations can be set before creating the control using LineSettings, ArrowSettings, RectangleSettings, CircleSettings, and PolygonSettings.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

  
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
                        [lineSettings]='lineSettings'
                        [arrowSettings]='arrowSettings'
                        [rectangleSettings]='rectangleSettings'
                        [circleSettings]='circleSettings'
                        [polygonSettings]='polygonSettings'
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
      public lineSettings = { fillColor: 'blue', opacity: 0.6, strokeColor: 'green' };
      public arrowSettings = { fillColor: 'green', opacity: 0.6, strokeColor: 'blue' };
      public rectangleSettings = { fillColor: 'yellow', opacity: 0.6, strokeColor: 'orange' };
      public circleSettings = { fillColor: 'orange', opacity: 0.6, strokeColor: 'pink' };
      public polygonSettings = { fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow' };
  }

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

  
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
                        [lineSettings]='lineSettings'
                        [arrowSettings]='arrowSettings'
                        [rectangleSettings]='rectangleSettings'
                        [circleSettings]='circleSettings'
                        [polygonSettings]='polygonSettings'
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
      public lineSettings = { fillColor: 'blue', opacity: 0.6, strokeColor: 'green' };
      public arrowSettings = { fillColor: 'green', opacity: 0.6, strokeColor: 'blue' };
      public rectangleSettings = { fillColor: 'yellow', opacity: 0.6, strokeColor: 'orange' };
      public circleSettings = { fillColor: 'orange', opacity: 0.6, strokeColor: 'pink' };
      public polygonSettings = { fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow' };
  }

{% endhighlight %}
{% endtabs %}