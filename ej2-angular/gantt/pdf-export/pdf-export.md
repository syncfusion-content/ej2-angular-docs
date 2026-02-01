---
layout: post
title: PDF Export in Angular Gantt Chart Component | Syncfusion
description: Learn how to export Gantt to PDF in Syncfusion Angular Gantt Chart component with indicators, blob objects, single-page, and theme options.
platform: ej2-angular
control: PDF export
documentation: ug
domainurl: ##DomainURL##
---

# PDF Export in Angular Gantt Chart Component

PDF export in the Angular Gantt Chart component enables exporting project data to PDF documents for sharing or archiving, using the [pdfExport](https://ej2.syncfusion.com/angular/documentation/api/gantt#pdfexport) method with [allowPdfExport](https://ej2.syncfusion.com/angular/documentation/api/gantt#allowpdfexport) set to **true** and `PdfExport` module injected. This feature supports exporting timelines, tasks, and dependencies, with options for indicators via `base64` images, blob objects for previews, single-page layouts, multiple Gantt instances in one file, and themes like Tailwind3 or Bootstrap. Focus on auto-scheduled tasks for accurate export, as manual scheduling is not currently supported.

## Export basic Gantt data

Export Gantt data to PDF by setting [allowPdfExport](https://ej2.syncfusion.com/angular/documentation/api/gantt#allowpdfexport) to **true** and calling [pdfExport](https://ej2.syncfusion.com/angular/documentation/api/gantt#pdfexport), which generates a document with the chart and tree-grid data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/pdf-export-cs14" %}

## Include indicators in PDF export

Include dynamic indicators and images in PDF export by defining them with `base64` encoding in the data source, mapped to the [taskFields.indicators](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields#indicators) property, enhancing visual representation of task status.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/pdf-export-cs14" %}

## Export Gantt data as blob object

Export Gantt data as a blob object for previews or modifications by setting the fourth argument of [pdfExport](https://ej2.syncfusion.com/angular/documentation/api/gantt#pdfexport) to **true**, with the blob returned in the [pdfExportComplete](https://ej2.syncfusion.com/angular/documentation/gantt/events#pdfexportcomplete) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/blobdata-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/blobdata-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/blobdata-cs1" %}

## Single page exporting in Gantt

Export Gantt rows to a single PDF page by setting [fitToWidthSettings.isFitToWidth](https://ej2.syncfusion.com/angular/documentation/api/gantt/fittowidthsettings#isfittowidth) to **true** in `PdfExportProperties`. Customize chart and grid widths using [chartWidth](https://ej2.syncfusion.com/angular/documentation/api/gantt/fittowidthsettings#chartwidth) and [gridWidth](https://ej2.syncfusion.com/angular/documentation/api/gantt/fittowidthsettings#gridwidth) as percentages.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/single-page/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/single-page/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/single-page" %}

## Multiple Gantt exporting

Export multiple Gantt instances to a single PDF file by calling [pdfExport](https://ej2.syncfusion.com/angular/documentation/api/gantt#pdfexport) on each, with each Gantt exported to a new page in the same document.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-multiple-export-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-multiple-export-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/pdf-multiple-export-cs1" %}

## Apply themes in PDF export

Apply themes to exported PDF documents by setting the [theme](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties#theme) property in `PdfExportProperties` to values like Tailwind3, Fabric, Bootstrap, or Bootstrap4, customizing the appearance.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/pdf-export-cs12" %}

## See also
- [How to export to Excel?](https://ej2.syncfusion.com/angular/documentation/gantt/excel-export)
- [How to customize PDF export?](https://ej2.syncfusion.com/angular/documentation/gantt/pdf-export/customize-pdf-export)
- [How to manage task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/taskdependency)