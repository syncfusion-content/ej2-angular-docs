---
layout: post
title: Pdf export in Angular Gantt component | Syncfusion
description: Learn here all about Pdf export in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Pdf export 
documentation: ug
domainurl: ##DomainURL##
---

# Export

## Pdf export in Angular Gantt component

PDF export allows exporting Gantt data to PDF document. This can be achieved using the [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#pdfexport) method. To enable PDF export in the Gantt, set the [`allowPdfExport`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowpdfexport) to true.

To export data to PDF document, inject the `PdfExport` module in Gantt.

>Note: Currently, we do not have support for exporting manually scheduled tasks.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs14" %}

## Indicators in PDF exporting 

The PDF export functionality allows users to export Gantt charts enriched with dynamic indicators and accompanying images.
These indicators, represented by images,can be effortlessly defined using the  [`base64`](https://ej2.syncfusion.com/angular/documentation/api/gantt/iIndicator/#base64) encoding value in the data object of datasource.This data object field should be mapped to indiactor property of [`task fields`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#indicators).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs14" %}

## Exporting Gantt data as a blob object

In the Gantt chart, data can be exported as a blob object, allowing for preview or modifications before exporting the PDF.

To export the Gantt chart data as a blob object, follow these steps:

step 1: pdfExport fourth argument set as `true`.

step 2: Then , `pdfExpComplete` return as blob object.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/blobdata-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/blobdata-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/blobdata-cs1" %}

## Single page exporting in gantt

The Gantt chart supports exporting with rows automatically adjusted to fit the PDF document's page width.This can be achieved by setting [`isFitToWidth`](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties/fitToWidthSettings/#isFitToWidth) to true within  <code>fitToWidthSettings</code> of <code>PdfExportProperties</code>.

Additionally, the chart width and grid width in the exported PDF file can be customized using [`chartWidth`](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties/fitToWidthSettings/isFitToWidth/#chartWidth) and [`gridWidth`](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties/fitToWidthSettings/isFitToWidth/#gridWidth) by defining it as percentage in string. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/single-page/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/single-page/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/single-page" %}

## Multiple gantt exporting in Angular Gantt component

PDF export provides an option for exporting multiple Gantt to same file. In this exported document, each Gantt will be exported to a new page of the document in same file.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-multiple-export-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-multiple-export-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-multiple-export-cs1" %}

## Applying Themes in PDF Export

PDF export provides an option to include theme for the exported PDF document.
To apply theme in exported PDF, define the [theme](https://helpej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties/#theme) in [pdfExportProperties](https://helpej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties/).
The available themes are:

* Material
* Fabric
* Bootstrap
* Bootstrap 4

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs12" %}