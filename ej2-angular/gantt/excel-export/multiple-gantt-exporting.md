---
layout: post
title: Multiple gantt exporting in Angular Gantt component | Syncfusion
description: Learn here all about Multiple gantt exporting in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Multiple gantt exporting 
documentation: ug
domainurl: ##DomainURL##
---


# Multiple gantt exporting in Angular Gantt component

In Gantt, the Excel export provides support to export multiple Gantt data in new sheet or same sheet.

## Same sheet

The Excel export provides support to export multiple Gantt data in the same sheet. To export in same sheet, define `multipleExport.type` as `AppendToSheet` in `ExcelExportProperties`. You can also provide blank rows between exported multiple Gantt data. These blank rows count can be defined using `multipleExport.blankRows`.

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

The Excel exporting provides support to export multiple Gantt in new sheet. To export in new sheet, define `multipleExport.type` as `NewSheet` in `ExcelExportProperties`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/newSheet-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/newSheet-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excel-export/newSheet-cs1" %}

## Customize the Excel export

Gantt Excel export allows the users to customize the exported document based on requirement.

### Export hidden columns

In Gantt, the Excel export provides an option to export hidden columns by defining `includeHiddenColumn` as `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/exportHidden-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/exportHidden-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excel-export/exportHidden-cs1" %}

### Show or hide columns on exported Excel

In Gantt, while exporting, you can show a hidden column or hide a visible column using the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#toolbarclick) and [`excelExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#excelexportcomplete) events.

In the `toolbarClick` event, using the `args.item.id` property, you can show or hide columns by setting the `columns.visible` property to `true` or `false` respectively.

Similarly, in the excelExportComplete event, you can revert the columns visibility back to the previous state.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/showHide-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/showHide-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excel-export/showHide-cs1" %}

### Cell formatting during export

In Gantt, you can customize the TreeGrid cells in the exported document using the [`excelQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#excelquerycellinfo) event. In this event, you can format the TreeGrid cells of exported Excel and CSV documents based on the required condition.

In the following sample, the background color has been customized for `TaskID` column in the exported Excel using the `args.style` and `backColor` properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/cellFormat-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/cellFormat-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excel-export/cellFormat-cs1" %}

### Theme

The Excel export also provides an option to include custom theme for exported Excel document.

To apply theme in exported Excel, define the `theme` in `ExcelExportProperties`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/theme-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/theme-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excel-export/theme-cs1" %}

> By default, material theme is applied to the exported Excel document.

### Add header and footer

The Excel export also allows users to include header and footer contents to the exported Excel document.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/headerFooter-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/headerFooter-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excel-export/headerFooter-cs1" %}

### File name for exported document

You can set the required file name for the exported document by defining the `fileName` property in `ExcelExportProperties`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/fileName-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/fileName-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excel-export/fileName-cs1" %}