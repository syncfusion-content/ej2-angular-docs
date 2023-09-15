---
layout: post
title: Export multiple grids in Angular Grid component | Syncfusion
description: Learn here all about Export multiple grids in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Export multiple grids 
documentation: ug
domainurl: ##DomainURL##
---

# Export multiple grids in Angular Grid component

The Excel export provides an option to export multiple grid data in the same or different sheets of an Excel file. Each grid is identified by its unique ID. You can specify which grids to export by listing their **IDs** in the `exportGrids` property.

## Same sheet

Excel exporting provides support for exporting multiple grids on the same sheet. To export the grids in the same sheet, define [`multipleExport.type`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#multipleexport) as **AppendToSheet** in [`excelExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/). It also has an option to provide blank rows between the grids. These blank rows count can be defined by using `multipleExport.blankRows` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs12/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/excel-exporting-cs12/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs12/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-cs12" %}

>By default, **multipleExport.blankRows** value is 5.

## New sheet

Excel export functionality enables the exporting of multiple grids onto separate sheets (each grid in new sheet of excel) within the Excel file. To achieve this, you can specify `multipleExport.type` as **NewSheet** in [`excelExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs13/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/excel-exporting-cs13/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs13/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-cs13" %}