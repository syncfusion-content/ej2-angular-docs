---
layout: post
title: Measurement annotation in Angular Pdfviewer component | Syncfusion
description: Learn here all about Measurement annotation in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Measurement annotation 
documentation: ug
domainurl: ##DomainURL##
---

# Measurement Annotation in Angular PDF Viewer component

The PDF Viewer provides the options to add measurement annotations. You can measure the page annotations with the help of measurement annotation. The supported measurement annotations in the PDF Viewer control are:

* Distance
* Perimeter
* Area
* Radius
* Volume

![CalibrateAnnotation](../../pdfviewer/images/calibrate_annotation.png)

## Adding measurement annotations to the PDF document

The measurement annotations can be added to the PDF document using the annotation toolbar.

* Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
* Click the **Measurement Annotation** dropdown button. A dropdown pop-up will appear and shows the measurement annotations to be added.
* Select the measurement type to be added to the page in the dropdown pop-up. It enables the selected measurement annotation mode.
* You can measure and add the annotation over the pages of the PDF document.

In the pan mode, if the measurement annotation mode is entered, the PDF Viewer control will switch to text select mode.

![CalibrateTool](../../pdfviewer/images/calibrate_tool.png)

Refer to the following code snippet to switch to distance annotation mode.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

  import { ViewChild } from '@angular/core';
  import { Component, OnInit } from '@angular/core';
  import { PdfViewerComponent, LinkAnnotationService, BookmarkViewService,
           MagnificationService, ThumbnailViewService, ToolbarService,
           NavigationService,TextSearchService, TextSelectionService,
           PrintService, AnnotationService
         } from '@syncfusion/ej2-angular-pdfviewer';
  @Component({
    selector: 'app-root',
    // specifies the template string for the PDF Viewer component
    template: `<button (click)="addAnnotation()">Distance</button>
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
        pdfviewer.annotationModule.setAnnotationMode("Distance");
     }
  }

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

  import { ViewChild } from '@angular/core';
  import { Component, OnInit } from '@angular/core';
  import { PdfViewerComponent, LinkAnnotationService, BookmarkViewService,
           MagnificationService, ThumbnailViewService, ToolbarService,
           NavigationService,TextSearchService, TextSelectionService,
           PrintService, AnnotationService
         } from '@syncfusion/ej2-angular-pdfviewer';
  @Component({
    selector: 'app-root',
    // specifies the template string for the PDF Viewer component
    template: `<button (click)="addAnnotation()">Distance</button>
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
        pdfviewer.annotationModule.setAnnotationMode("Distance");
     }
  }

{% endhighlight %}
{% endtabs %}

## Editing the properties of measurement annotation

The fill color, stroke color, thickness, and opacity of the measurement annotation can be edited using the Edit Color tool, Edit Stroke Color tool, Edit Thickness tool, and Edit Opacity tool in the annotation toolbar.

### Editing fill color

The fill color of the annotation can be edited using the color palette provided in the Edit Color tool.

![CalibrateFillColor](../../pdfviewer/images/calibrate_fillcolor.png)

### Editing stroke color

The stroke color of the annotation can be edited using the color palette provided in the Edit Stroke Color tool.

![CalibrateStrokeColor](../../pdfviewer/images/calibrate_stroke.png)

### Editing thickness

The thickness of the border of the annotation can be edited using the range slider provided in the Edit thickness tool.

![CalibrateThickness](../../pdfviewer/images/calibrate_thickness.png)

### Editing opacity

The opacity of the annotation can be edited using the range slider provided in the Edit Opacity tool.

![CalibrateOpacity](../../pdfviewer/images/calibarte_opacity.png)

### Editing the line properties

The properties of the line shapes such as distance and perimeter annotations can be edited using the Line properties window. It can be opened by selecting the Properties option in the context menu that appears on right-clicking the distance and perimeter annotations.

![CalibrateProperty](../../pdfviewer/images/calibrate_lineprop.png)

## Setting default properties during control initialization

The properties of the shape annotations can be set before creating the control using distanceSettings, perimeterSettings, areaSettings, radiusSettings and volumeSettings.
Refer to the following code snippet to set the default annotation settings.

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
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
              <ejs-pdfviewer id="pdfViewer"
                    [documentPath]='document'
                    [distanceSettings]='distanceSettings'
                    [perimeterSettings]='perimeterSettings'
                    [areaSettings]='areaSettings'
                    [radiusSettings]='radiusSettings'
                    [volumeSettings]='volumeSettings'
                    style="height:640px;display:block">
              </ejs-pdfviewer>
              </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService,ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService]
  })
  export class AppComponent implements OnInit {
    public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public distanceSettings = { fillColor: 'blue', opacity: 0.6, strokeColor: 'green' };
    public perimeterSettings = { fillColor: 'green', opacity: 0.6, strokeColor: 'blue' };
    public areaSettings = { fillColor: 'yellow', opacity: 0.6, strokeColor: 'orange' };
    public radiusSettings = { fillColor: 'orange', opacity: 0.6, strokeColor: 'pink' };
    public volumeSettings = { fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow' };
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
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
              <ejs-pdfviewer id="pdfViewer"
                    [serviceUrl]='service'
                    [documentPath]='document'
                    [distanceSettings]='distanceSettings'
                    [perimeterSettings]='perimeterSettings'
                    [areaSettings]='areaSettings'
                    [radiusSettings]='radiusSettings'
                    [volumeSettings]='volumeSettings'
                    style="height:640px;display:block">
              </ejs-pdfviewer>
              </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService,ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService]
  })
  export class AppComponent implements OnInit {
    public service: string = 'https://services.syncfusion.com/angular/production/api/pdfviewer';
    public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public distanceSettings = { fillColor: 'blue', opacity: 0.6, strokeColor: 'green' };
    public perimeterSettings = { fillColor: 'green', opacity: 0.6, strokeColor: 'blue' };
    public areaSettings = { fillColor: 'yellow', opacity: 0.6, strokeColor: 'orange' };
    public radiusSettings = { fillColor: 'orange', opacity: 0.6, strokeColor: 'pink' };
    public volumeSettings = { fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow' };
  }

{% endhighlight %}
{% endtabs %}

## Editing scale ratio and unit of the measurement annotation

The scale ratio and unit of measurement can be modified using the scale ratio option provided in the context menu of the PDF Viewer control.

![CalibrateScaleRatio](../../pdfviewer/images/calibrate_scaleratio.png)

The Units of measurements support for the measurement annotations in the PDF Viewer are

* Inch
* Millimeter
* Centimeter
* Point
* Pica
* Feet

![CalibrateScaleDialog](../../pdfviewer/images/calibrate_scaledialog.png)

## Setting default scale ratio settings during control initialization

The properties of scale ratio for measurement annotation can be set before creating the control using ScaleRatioSettings as shown in the following code snippet,

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
      // specifies the template string for the PDF Viewer component
      template: `<div class="content-wrapper">
                  <ejs-pdfviewer id="pdfViewer"
                                [documentPath]='document'
                                [measurementSettings]='measurementSettings'
                                style="height:640px;display:block">
                  </ejs-pdfviewer>
                </div>`,
    providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
                 ThumbnailViewService,ToolbarService, NavigationService,
                 TextSearchService, TextSelectionService, PrintService, AnnotationService]
  })
  export class AppComponent implements OnInit {
    public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public measurementSettings = { scaleRatio: 2, conversionUnit: 'cm', displayUnit: 'cm' };
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
      // specifies the template string for the PDF Viewer component
      template: `<div class="content-wrapper">
                  <ejs-pdfviewer id="pdfViewer"
                                [serviceUrl]='service'
                                [documentPath]='document'
                                [measurementSettings]='measurementSettings'
                                style="height:640px;display:block">
                  </ejs-pdfviewer>
                </div>`,
    providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
                 ThumbnailViewService,ToolbarService, NavigationService,
                 TextSearchService, TextSelectionService, PrintService, AnnotationService]
  })
  export class AppComponent implements OnInit {
    public service: string = 'https://services.syncfusion.com/angular/production/api/pdfviewer';
    public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public measurementSettings = { scaleRatio: 2, conversionUnit: 'cm', displayUnit: 'cm' };
  }

{% endhighlight %}
{% endtabs %}