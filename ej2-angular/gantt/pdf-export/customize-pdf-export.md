---
layout: post
title: Customize PDF Exporting in Angular Gantt Chart Component | Syncfusion
description: Learn here all about customize PDF exporting in Syncfusion Angular Gantt Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Multiple gantt exporting 
documentation: ug
domainurl: ##DomainURL##
---

# To customize PDF export

Customizing PDF export in the Angular Gantt Chart component allows tailoring exported documents for specific needs, using [PdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties/) to adjust file names, page orientation, size, columns, headers, footers, timelines, and templates. Ensuring focused content like selected rows or styled taskbars, with the `PdfExport` module injected and [allowPdfExport](https://ej2.syncfusion.com/angular/documentation/api/gantt#allowpdfexport) enabled. Use [beforePdfExport](https://ej2.syncfusion.com/angular/documentation/gantt/events#beforepdfexport) and [pdfExportComplete](https://ej2.syncfusion.com/angular/documentation/gantt/events#pdfexportcomplete) events for pre-export and post-export modifications, and [pdfQueryTaskbarInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#pdfquerytaskbarinfo) for taskbar styling, supporting RTL layouts via [enableRtl](https://ej2.syncfusion.com/angular/documentation/api/gantt#enablertl).

## Customize file name

Set the exported PDF file name using the [fileName](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties#filename) property in [PdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties/), such as **ProjectPlan.pdf**, for personalized document naming.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs1" %}

## How to change page orientation

Adjust page orientation to **Portrait** or **Landscape** using the [pageOrientation](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties#pageorientation) property in [PdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties/). By default, the exported PDF document is in Landscape orientation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs2" %}

## Customize page size

Page size can be customized for the exported document using the  [pageSize](https://helpej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties#pagesize) property in [pdfExportProperties](https://helpej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties/).
The supported page sizes are:

* Letter
* Note
* Legal
* A0 to A9
* B0 to B5
* Archa
* Archb
* Archc
* Archd
* Arche
* Flsa
* HalfLetter
* Letter11x17
* Ledger

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs3/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/pdf-export-cs3/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs3" %}

## Export current view data

PDF export provides an option to export the current view data into PDF. To export current view data alone, define the [exportType](https://helpej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties#exporttype) to **CurrentViewData**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs4/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/pdf-export-cs4/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs4" %}

## Enable footer

By default, we render the default footer for a PDF file, this can be enabled or disabled by using the [enableFooter](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties#enablefooter) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs5/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/pdf-export-cs5/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs5" %}

## Export hidden columns

PDF export provides an option to export hidden columns of Gantt by defining the [includeHiddenColumn](https://helpej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties#includehiddencolumn) to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs6/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/pdf-export-cs6/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs6" %}

## Export predecessor lines

The visibility of predecessor lines in the exported PDF document can be controlled using the [showPredecessorLines](https://helpej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties#showpredecessorlines) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs7/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/pdf-export-cs7/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs7" %}

## Export specific columns

A hidden column can be shown, or a visible column can be hidden while exporting the Gantt chart by using the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/gantt/events#toolbarclick) and [beforePdfExport](https://ej2.syncfusion.com/angular/documentation/gantt/events#beforepdfexport) events.

Columns can be shown or hidden by setting the `column.visible` property to **true** or **false**, respectively.

In the following example, the **Duration** column is initially hidden in the Gantt chart. During export, the **Duration** column is made visible and the StartDate column is hidden.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs8/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/pdf-export-cs8/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs8" %}

## Conditional cell formatting

TreeGrid cells in the exported PDF can be customized or formatted using the [pdfQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#pdfquerycellinfo) event. This event allows formatting TreeGrid cells in the exported PDF document based on the column cell value.

In the following sample, the background color is set for **Progress** column in the exported document by using the `args.style.backgroundColor` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs9/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/pdf-export-cs9/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs9" %}

## Timeline cell formatting

Timeline cells in the exported PDF document can be customized or formatted using the [pdfQueryTimelineCellInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#pdfquerytimelinecellinfo) event.

In the following sample, the header background color is set for timeline cells in the exported document by using the `args.timelineCell.backgroundColor` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs10/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/pdf-export-cs10/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs10" %}

## Taskbar formatting

Taskbars in the exported PDF document can be customized or formatted using the [pdfQueryTaskbarInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#pdfquerytaskbarinfo) event.

In the following sample, the taskbar background color is customized in the chart side of the exported document by using the `args.taskbar` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs11/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/pdf-export-cs11/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs11" %}

## Customize Gantt chart appearance in PDF export

PDF export allows to customize the Gantt chart's appearance in the exported PDF documents. To customize the appearance of Gantt charts in exported PDF documents, define [ganttStyle](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties#ganttstyle) within [pdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfExportProperties/). By using `ganttStyle`, can customize `columnHeader`, `fontFamily`, `cell`, `taskbar`, `label`, `timeline`, `chartGridLineColor`, `connectorLineColor`, `criticalConnectorLineColor`, `footer`, `font`, `eventMarker` and `holiday` regardless of the theme. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs13/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/pdf-export-cs13/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs13" %}

## Customize split taskbar segment colors in PDF

The PDF export feature in the Gantt Chart allows you to customize the colors of split taskbar segments using the [taskSegmentStyles](https://ej2.syncfusion.com/angular/documentation/api/gantt/iTaskbarStyle#taskSegmentStyles) property inside the [pdfQueryTaskbarInfo](https://helpej2.syncfusion.com/angular/documentation/api/gantt#pdfquerytaskbarinfo) event.

The [taskSegmentStyles](https://ej2.syncfusion.com/angular/documentation/api/gantt/iTaskbarStyle#taskSegmentStyles) property contains a collection of style properties for task segments. By specifying the index of corresponding segment index in this collection you can customize that segment taskbar color, progress color, and its border color.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs16/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/pdf-export-cs16/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs16" %}

## Exporting with templates

### Exporting with column template

The PDF export functionality allows to export Grid columns that include images, hyperlinks, and custom text to an PDF document using [pdfQueryCellInfo](https://helpej2.syncfusion.com/angular/documentation/api/gantt/pdfQueryCellInfoEventArgs/) event.

In the following sample, the hyperlinks and images are exported to PDF using [hyperlink](https://helpej2.syncfusion.com/angular/documentation/api/gantt/pdfQueryCellInfoEventArgs#hyperlink) and [image](https://helpej2.syncfusion.com/angular/documentation/api/gantt/pdfQueryCellInfoEventArgs#image) properties in the [pdfQueryCellInfo](https://helpej2.syncfusion.com/angular/documentation/api/gantt/pdfQueryCellInfoEventArgs/) event.

>Note: PDF Export supports base64 string to export the images.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-column-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-column-template-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/pdf-export-column-template-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-column-template-cs1" %}

### Exporting with taskbar template

The PDF export functionality allows to export taskbar templates that include `images` and `text` to an PDF document using [pdfQueryTaskbarInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#pdfquerytaskbarinfo) event. Taskbars in the exported PDF document can be customized or formatted using the `pdfQueryTaskbarInfo` event for parent taskbar templates, taskbar templates and milestone templates.

In the following sample, taskbar templates with images and text are exported to PDF using [taskbarTemplate](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfQueryTaskbarInfoEventArgs#taskbarTemplate) properties in the [pdfQueryTaskbarInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#pdfquerytaskbarinfo) event.

>Note: PDF Export supports base64 string to export the images.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-taskbar-template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-taskbar-template/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="app.component.css" %}
{% include code-snippet/gantt/pdf-export-taskbar-template/src/app.component.css %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/pdf-export-taskbar-template/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-taskbar-template" %}

### Exporting with task label template

The PDF export functionality allows to export task label template that include `images` and `text` to an PDF document using [pdfQueryTaskbarInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#pdfquerytaskbarinfo) event.

In the following sample, task label template with images and text are exported to PDF using [labelSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfQueryTaskbarInfoEventArgs#labelSettings) properties in the [pdfQueryTaskbarInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#pdfquerytaskbarinfo) event.

>Note: PDF Export supports base64 string to export the images.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-tasklabel-template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-tasklabel-template/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="app.component.css" %}
{% include code-snippet/gantt/pdf-export-tasklabel-template/src/app.component.css %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/pdf-export-tasklabel-template/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-tasklabel-template" %}

### Exporting with header template

The PDF export functionality allows to export header template that include `images` and `text` to an PDF document using [pdfColumnHeaderQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#pdfcolumnheaderquerycellinfo) event.

In the following sample, header template with images and text are exported to PDF using [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfColumnHeaderQueryCellInfoEventArgs#headerTemplate) properties in the [pdfColumnHeaderQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#pdfcolumnheaderquerycellinfo) event.

>Note: PDF Export supports base64 string to export the images.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-header-template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-header-template/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="app.component.css" %}
{% include code-snippet/gantt/pdf-export-header-template/src/app.component.css %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/pdf-export-header-template/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-header-template" %}

## See also
- [How to export Gantt chart to Excel?](https://ej2.syncfusion.com/angular/documentation/gantt/excel-export)
- [How to manage task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/taskdependency)
- [How to configure critical path?](https://ej2.syncfusion.com/angular/documentation/gantt/critical-path)