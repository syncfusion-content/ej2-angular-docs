---
layout: post
title: Excel export in Angular Gantt component | Syncfusion
description: Learn here all about Excel export in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Excel export 
documentation: ug
domainurl: ##DomainURL##
---

# Excel export in Angular Gantt component

The Angular Gantt component allows exporting data to Excel and CSV formats, making it easier to share or analyze in spreadsheets.  
 
This export functionality is accessed using the [excelExport](https://ej2.syncfusion.com/angular/documentation/api/gantt/#excelexport) and [csvExport](https://ej2.syncfusion.com/angular/documentation/api/gantt/#csvexport) methods. To enable Excel or CSV export, set [allowExcelExport](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowexcelexport) to **true** and inject `ExcelExportService` into the providers array of your module configuration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/excelExport-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/excelExport-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excel-export/excelExport-cs1" %}

## Binding custom data source while exporting

You can configure a custom data source for Excel or CSV export in the Angular Gantt component by defining it dynamically before the export process. To do this, assign the required data to the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#datasource) property within the [ExcelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) configuration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/customData-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/customData-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excel-export/customData-cs1" %}

## Exporting with cell and row spanning

To export merged cells and rows in Excel or CSV files from a Gantt component, use the [excelQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#excelquerycellinfo) event and apply `rowSpan` and `colSpan` during export. The [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#querycellinfo) event is used for customizing cell rendering in the Gantt.
 
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/excelExport-spanning/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/excelExport-spanning/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excel-export/excelExport-spanning" %}

## Show spinner while exporting

To indicate progress during the export operation in the Angular Gantt component, use the [showSpinner](https://ej2.syncfusion.com/angular/documentation/api/gantt/#showspinner) method within the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/gantt/events#toolbarclick) event when initiating Excel or CSV export. After the export process completes, hide the spinner by calling the [hideSpinner](https://ej2.syncfusion.com/angular/documentation/api/gantt/#hidespinner) method inside the [excelExportComplete](https://ej2.syncfusion.com/angular/documentation/gantt/events#excelexportcomplete) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/excelExport-spinner/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/excelExport-spinner/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excel-export/excelExport-spinner" %}

## Exporting with custom date format

To apply a custom date format to columns during Excel or CSV export in the Angular Gantt component, define the desired format using the [format](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#format) property in the column configuration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/excelExport-custom-date/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/excelExport-custom-date/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excel-export/excelExport-custom-date" %}

## Exporting Multiple Gantt Charts

The Angular Gantt component allows exporting multiple Gantt charts either into a single worksheet or across separate sheets when generating Excel or CSV files.

## Same sheet

The Excel or CSV export feature in the Angular Gantt component supports exporting multiple datasets into a single worksheet. This can be achieved by setting [multipleExport.type](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#multipleexport) to **AppendToSheet** within the [ExcelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) configuration. To insert spacing between the exported datasets, define the number of blank rows using the [multipleExport.blankRows](https://ej2.syncfusion.com/angular/documentation/api/grid/multipleExport/#blankrows) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/sameSheet-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/sameSheet-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excel-export/sameSheet-cs1" %}

>By default, `multipleExport.blankRows` value is 5.

## New sheet

The Excel or CSV export feature in the Angular Gantt component supports exporting multiple Gantt charts to separate worksheets. This can be configured by setting the [multipleExport.type](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#multipleexport) property to **NewSheet** within the [ExcelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) configuration, ensuring each Gantt chart is exported to its own sheet.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/newSheet-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/newSheet-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excel-export/newSheet-cs1" %}

### Export Gantt as Blob

To export Gantt data as a Blob, set `isBlob` to **true** in the [excelExport](https://ej2.syncfusion.com/angular/documentation/api/gantt/#excelexport) or [csvExport](https://ej2.syncfusion.com/angular/documentation/api/gantt/#csvexport) method and use the [excelExportComplete](https://ej2.syncfusion.com/angular/documentation/gantt/events#excelexportcomplete) event to retrieve the Blob for custom processing or download handling.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/export-blop/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/export-blop/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excel-export/export-blop" %}