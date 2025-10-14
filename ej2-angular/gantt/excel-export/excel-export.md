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

The Syncfusion Angular Gantt component supports exporting project data to Excel and CSV formats, enabling seamless sharing, reporting, and offline analysis.  
 
To enable Excel or CSV export functionality, set the [allowExcelExport](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowexcelexport) property to **true** and inject the `ExcelExportService` into the component's providers array. 

You can trigger export operations using the [excelExport](https://ej2.syncfusion.com/angular/documentation/api/gantt/#excelexport) or [csvExport](https://ej2.syncfusion.com/angular/documentation/api/gantt/#csvexport) methods, typically within the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/gantt/events#toolbarclick) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/excelExport-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/excelExport-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/excel-export/excelExport-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excel-export/excelExport-cs1" %}

## Binding custom data source while exporting

You can bind a custom data source for Excel or CSV export in the Angular Gantt component by assigning it dynamically before the export begins. To achieve this, set the required data to the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#datasource) property within the [ExcelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) configuration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/customData-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/customData-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/excel-export/customData-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excel-export/customData-cs1" %}

## Exporting with cell and row spanning

To export merged cells and rows in Excel or CSV files using the Angular Gantt component, handle the [excelQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#excelquerycellinfo) event and apply `rowSpan` and `colSpan` during the export process. The [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#querycellinfo) event can be used to customize cell rendering within the Gantt view.
 
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/excelExport-spanning/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/excelExport-spanning/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/excel-export/excelExport-spanning/src/data.ts %}
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

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/excel-export/excelExport-spinner/src/data.ts %}
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

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/excel-export/excelExport-custom-date/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excel-export/excelExport-custom-date" %}

## Exporting multiple Gantt charts

The Angular Gantt component supports exporting multiple Gantt charts either into a single worksheet or across separate sheets when generating Excel or CSV files.

### Same sheet

To export multiple datasets into a single worksheet, set [multipleExport.type](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#multipleexport) to **AppendToSheet** within the [ExcelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) configuration. To add spacing between datasets, define the number of blank rows using the [multipleExport.blankRows](https://ej2.syncfusion.com/angular/documentation/api/grid/multipleExport/#blankrows) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/sameSheet-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/sameSheet-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/excel-export/sameSheet-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excel-export/sameSheet-cs1" %}

>By default, `multipleExport.blankRows` value is 5.

### New sheet

To export each Gantt to a separate worksheet, set [multipleExport.type](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#multipleexport) to **NewSheet** in the [ExcelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) configuration. This ensures each dataset is placed on its own sheet.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/newSheet-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/newSheet-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/excel-export/newSheet-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excel-export/newSheet-cs1" %}

## Export Gantt data as a Blob

To export Gantt data as a Blob object for advanced processing or custom download workflows, set the `isBlob` parameter to **true** in the [excelExport](https://ej2.syncfusion.com/angular/documentation/api/gantt/#excelexport) or [csvExport](https://ej2.syncfusion.com/angular/documentation/api/gantt/#csvexport) method. Use the [excelExportComplete](https://ej2.syncfusion.com/angular/documentation/gantt/events#excelexportcomplete) event to access the Blob and implement custom logic.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/export-blop/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/export-blop/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/excel-export/export-blop/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excel-export/export-blop" %}