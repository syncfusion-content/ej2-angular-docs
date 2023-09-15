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

PDF export allows exporting Gantt data to PDF document. You need to use the [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#pdfexport) method for exporting. To enable PDF export in the Gantt, set the [`allowPdfExport`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowpdfexport) to true.

To export data to PDF document, inject the `PdfExport` module in Gantt.

>Note: Currently, we do not have support for exporting manually scheduled tasks.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs14/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/pdf-export-cs14/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs14/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs14" %}

## Exporting Gantt data as a blob object

In Gantt, you can export the Gantt chart data as a blob object, which allows you to preview or modify the data before exporting it.

To export the Gantt chart data as a blob object, follow these steps:

step 1: pdfExport fourth argument set as `true`.

step 2: Then , `pdfExpComplete` return as blob object.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/blobdata-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/blobdata-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/blobdata-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/blobdata-cs1" %}

## Single page exporting in gantt

In Gantt, we have provided support to export the Gantt component where each rows are auto-fit to the PDF document page width by setting [`isFitToWidth`](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties/fitToWidthSettings/#isFitToWidth) as true in <code>fitToWidthSettings</code> of <code>PdfExportProperties</code>.

Also, we can customize the chart width and grid width in exported file using [`chartWidth`](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties/fitToWidthSettings/isFitToWidth/#chartWidth) and [`gridWidth`](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties/fitToWidthSettings/isFitToWidth/#gridWidth) by defining it as percentage in string. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/single-page/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/single-page/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/single-page/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/single-page" %}