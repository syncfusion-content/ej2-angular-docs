---
layout: post
title: Excel export in Angular Gantt component | Syncfusion
description: Learn here all about Excel export in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Excel export 
documentation: ug
domainurl: ##DomainURL##
---

# Excel export options in Angular Gantt component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt component provides configurable options for Excel or CSV export through the [ExcelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) object. You can customize column selection, include hidden columns, define a custom data source, apply filters, and format exported data. It also supports setting file names, adding headers and footers, and exporting multiple Gantt charts.

## Export selected records

You can export selected records to Excel or CSV by using [getSelectedRecords](https://ej2.syncfusion.com/angular/documentation/api/treegrid#getselectedrecords) to retrieve the required data and assigning it to [ExportProperties.dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#datasource) within the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/gantt/events#toolbarclick) event. Once the data source is set, initiate the export using [excelExport](https://ej2.syncfusion.com/angular/documentation/api/gantt#excelexport) or [csvExport](https://ej2.syncfusion.com/angular/documentation/api/gantt#csvexport) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/excelOption-selected-records/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/excelOption-selected-records/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/excel-export/excelOption-selected-records/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-export/excelOption-selected-records" %}

## Show or hide columns during export

To show or hide specific columns during Excel export in Gantt, use the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/gantt/events#toolbarclick) event to check `args.item.id` and update the [columns.visible](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#visible) property to **true** or **false** . After the export is complete, restore the original column visibility using the [excelExportComplete](https://ej2.syncfusion.com/angular/documentation/gantt/events#excelexportcomplete) event.

The following example demonstrates how the **StartDate** column is made visible and the **Duration** column is excluded from the exported Excel file.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/showHide-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/showHide-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/excel-export/showHide-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-export/showHide-cs1" %}

## Include hidden columns in export

To include hidden columns during Excel export in the Gantt component, set [ExportProperties.includeHiddenColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#includehiddencolumn) to **true** in the export configuration. This ensures that hidden columns are included in the exported data.

The following example demonstrates that the hidden **StartDate** column is included in the exported file.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/exportHidden-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/exportHidden-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/excel-export/showHide-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-export/exportHidden-cs1" %}

## Enable filtering in exported Excel

To enable filtering in exported Excel or CSV files in Gantt component, set the [enableFilter](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#enablefilter) property to **true** within [ExcelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/). Additionally, ensure that filtering is enabled in the Gantt configuration by setting [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/gantt#allowfiltering) to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/excelOption-filtering/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/excelOption-filtering/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/excel-export/excelOption-filtering/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-export/excelOption-filtering" %}

## Set custom file name

To specify a custom name for the exported Excel or CSV file in the Gantt component, set the [fileName](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#filename) property within the [ExcelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) configuration. This defines the name assigned to the file when the export is triggered.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/excelOption-file-name/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/excelOption-file-name/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/excel-export/excelOption-file-name/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-export/excelOption-file-name" %}

## Customize exported columns

The Gantt component supports customizing column settings during Excel or CSV export by configuring the [ExcelExportProperties.columns](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#columns) property. You can specify attributes such as `field`, `headerText`, and `textAlign` to define the structure and formatting of each column in the exported file, aligning the exported content with specific layout and styling preferences.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/excelOption-columns/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/excelOption-columns/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/excel-export/excelOption-columns/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-export/excelOption-columns" %}

## Add header and footer to export

To add header and footer content to exported Excel or CSV files in the Gantt component, configure the [header](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#header) and [footer](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#footer) properties within [ExcelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) during the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/gantt/events#toolbarclick) event. This allows you to define custom content that appears at the top and bottom of the exported document.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/headerFooter-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/headerFooter-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/excel-export/headerFooter-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-export/headerFooter-cs1" %}

## Apply font and color themes

The Excel or CSV export feature in Gantt supports applying custom themes to the exported document, helping maintain a consistent and visually structured appearance.

To configure a theme, set the [theme](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#theme)  property within [ExcelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/). This allows customization of styles for the following sections in the exported file

- **caption**: Defines the style for the caption, typically used for titles or descriptions at the top of the sheet.
- **header**: Specifies the styling for column headers.
- **record**: Applies formatting to the data rows exported from the Gantt chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/theme-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/theme-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/excel-export/theme-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-export/theme-cs1" %}

> By default, material theme is applied to the exported Excel document.

## Apply conditional formatting

You can customize Gantt cells in exported Excel or CSV documents using the [excelQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#excelquerycellinfo) event. This event is triggered for each cell during export, allowing formatting to be conditionally applied based on the cell's content.

In the example below, the background color is customized for the **Progress** column in the exported Excel or CSV file:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/cellFormat-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/cellFormat-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/excel-export/cellFormat-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-export/cellFormat-cs1" %}
