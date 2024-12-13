---
layout: post
title: Customize PDF exporting in Angular Gantt component | Syncfusion
description: Learn here all about Customize PDF exporting in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Multiple gantt exporting 
documentation: ug
domainurl: ##DomainURL##
---

# To customize PDF export

PDF export provides an option to customize the mapping of Gantt to exported PDF document.

## File name for exported document

You can assign a file name for the exported document by defining the `fileName` property in `pdfExportProperties`.

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

Page orientation can be changed to `Portrait` (Default Landscape) for the exported document using the property `pdfExportProperties.pageOrientation`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs2" %}

## How to change page size

Page size can be customized for the exported document using the property `pdfExportProperties.pageSize`.
The supported page sizes are:

* Letter
* Note
* Legal
* A0
* A1
* A2
* A3
* A5
* A6
* A7
* A8
* A9
* B0
* B1
* B2
* B3
* B4
* B5
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
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs3" %}

## Export current view data

PDF export provides an option to export the current view data into PDF. To export current view data alone, define the `exportType` to `CurrentViewData`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs4" %}

## Enable footer

By default, we render the default footer for a PDF file, this can be enabled or disabled by using the `enableFooter` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs5" %}

## Export hidden columns

PDF export provides an option to export hidden columns of Gantt by defining the `includeHiddenColumn` to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs6" %}

## Export predecessor lines

By using `showPredecessorLines`, you can hide or show predecessor lines in the exported PDF document.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs7" %}

## Show or hide columns on exported PDF

You can show a hidden column or hide a visible column while exporting the Gantt using the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/gantt#toolbarclick) and [`beforePdfExport`](https://ej2.syncfusion.com/angular/documentation/api/gantt#beforepdfexport) events.

You can show or hide columns by setting the `column.visible` property to `true` or `false` respectively.

In the following example, there is a hidden column `Duration` in the Gantt. While exporting, we have changed `Duration` to visible column and `StartDate` to hidden column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs8" %}

## Conditional cell formatting

TreeGrid cells in the exported PDF can be customized or formatted using the [`pdfQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/gantt#pdfquerycellinfo) event. In this event, you can format the treegrid cells of exported PDF document based on the column cell value.

In the following sample, the background color is set for `Progress` column in the exported document by using the `args.style` and `backgroundColor` properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs9" %}

## Timeline cell formatting

Timeline cells in the exported PDF document can be customized or formatted using the [`pdfQueryTimelineCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/treegrid#pdfquerytimelinecellinfo) event.

In the following sample, the header background color is set for timeline cells in the exported document by using the `args.headerBackgroundColor` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs10" %}

## Taskbar formatting

Taskbars in the exported PDF document can be customized or formatted using the [`pdfQueryTaskbarInfo`](https://ej2.syncfusion.com/angular/documentation/api/treegrid#pdfquerytaskbarinfo) event.

In the following sample, the taskbar background color is customized in the chart side of the exported document by using the `args.taskbar` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs11" %}

## Theme

PDF export provides an option to include theme for the exported PDF document.
To apply theme in exported PDF, define the `theme` in `pdfExportProperties`.
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

## Customized Theme

PDF export provides an option to customize the Gantt style in the exported PDF documents.

To customize the Gantt style in exported PDF, define the 'ganttStyle' in `pdfExportProperties`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs13" %}

## Customize Split Taskbar Segment Colors in PDF

The PDF export feature in the Gantt Chart allows you to customize the colors of split taskbar segments using the [`taskSegmentStyles`](https://ej2.syncfusion.com/angular/documentation/api/gantt/iTaskbarStyle/#taskSegmentStyles) property inside the [`pdfQueryTaskbarInfo`](https://helpej2.syncfusion.com/angular/documentation/api/gantt/#pdfquerytaskbarinfo) event.

The [`taskSegmentStyles`](https://ej2.syncfusion.com/angular/documentation/api/gantt/iTaskbarStyle/#taskSegmentStyles) property contains a collection of style properties for task segments. By specifying the index of corresponding segment index in this collection you can customize that segment taskbar color, progress color, and its border color.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/pdf-export-cs16" %}
