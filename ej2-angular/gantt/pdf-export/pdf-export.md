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

In Gantt, you can export the Gantt chart data as a blob object, which allows you to preview or modify the data before exporting it.

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

In Gantt, we have provided support to export the Gantt component where each rows are auto-fit to the PDF document page width by setting [`isFitToWidth`](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties/fitToWidthSettings/#isFitToWidth) as true in <code>fitToWidthSettings</code> of <code>PdfExportProperties</code>.

Also, we can customize the chart width and grid width in exported file using [`chartWidth`](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties/fitToWidthSettings/isFitToWidth/#chartWidth) and [`gridWidth`](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties/fitToWidthSettings/isFitToWidth/#gridWidth) by defining it as percentage in string. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/single-page/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/single-page/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/single-page" %}

## Exporting with templates

### Exporting with column template

The PDF export functionality allows to export Grid columns that include images, hyperlinks, and custom text to an PDF document using [pdfQueryCellInfo](https://helpej2.syncfusion.com/angular/documentation/api/gantt/pdfQueryCellInfoEventArgs/) event.

In the following sample, the hyperlinks and images are exported to PDF using [hyperlink](https://helpej2.syncfusion.com/angular/documentation/api/gantt/pdfQueryCellInfoEventArgs/#hyperlink) and [image](https://helpej2.syncfusion.com/angular/documentation/api/gantt/pdfQueryCellInfoEventArgs/#image) properties in the [pdfQueryCellInfo](https://helpej2.syncfusion.com/angular/documentation/api/gantt/pdfQueryCellInfoEventArgs/) event.

>Note: PDF Export supports base64 string to export the images.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-column-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-column-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-column-template-cs1" %}

### Exporting with taskbar template

The PDF export functionality allows to export taskbar templates that include `images` and `text` to an PDF document using [pdfQueryTaskbarInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#pdfquerytaskbarinfo) event. Taskbars in the exported PDF document can be customized or formatted using the `pdfQueryTaskbarInfo` event for parent taskbar templates, taskbar templates and milestone templates.

In the following sample, taskbar templates with images and text are exported to PDF using [taskbarTemplate](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfQueryTaskbarInfoEventArgs/#taskbarTemplate) properties in the [pdfQueryTaskbarInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#pdfquerytaskbarinfo) event.

>Note: PDF Export supports base64 string to export the images.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-taskbar-template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-taskbar-template/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-taskbar-template" %}

### Exporting with task label template

The PDF export functionality allows to export task label template that include `images` and `text` to an PDF document using [pdfQueryTaskbarInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#pdfquerytaskbarinfo) event.

In the following sample, task label template with images and text are exported to PDF using [labelSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfQueryTaskbarInfoEventArgs/#labelSettings) properties in the [pdfQueryTaskbarInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#pdfquerytaskbarinfo) event.

>Note: PDF Export supports base64 string to export the images.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-tasklabel-template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-tasklabel-template/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-tasklabel-template" %}

### Exporting with header template

The PDF export functionality allows to export header template that include `images` and `text` to an PDF document using [pdfColumnHeaderQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfColumnHeaderQueryCellInfoEventArgs/) event.

In the following sample, header template with images and text are exported to PDF using [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfColumnHeaderQueryCellInfoEventArgs/#headerTemplate) properties in the [pdfColumnHeaderQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfColumnHeaderQueryCellInfoEventArgs/) event.

>Note: PDF Export supports base64 string to export the images.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-header-template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-header-template/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-header-template" %}
