---
layout: post
title: Excel exporting in Angular Grid component | Syncfusion
description: Learn here all about Excel exporting in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Excel exporting 
documentation: ug
domainurl: ##DomainURL##
---

# Excel exporting in Angular Grid component

The excel export allows exporting Grid data to Excel document. You need to use the [`excelExport`](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexport) method for exporting. To enable Excel export in the grid, set the [`allowExcelExport`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowexcelexport) as true.

To use excel export, inject **ExcelExportService** in the provider section of **AppModule**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/excel-exporting-cs10/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-cs10" %}

## Show spinner while exporting

You can show/ hide spinner component while exporting the grid using **showSpinner**/ **hideSpinner** methods. You can use [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event to show spinner before exporting and hide a spinner in the [`pdfExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexportcomplete) or [`excelExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexportcomplete) event after the exporting.

In the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event, based on the parameter **args.item.id** as **Grid_pdfexport** or **Grid_excelexport** we can call the **showSpinner** method from grid instance.

In the [`pdfExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexportcomplete) or [`excelExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexportcomplete) event, We can call the **hideSpinner** method.

In the below demo, we have rendered the default spinner component when exporting the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/exporting-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs1" %}

## Custom data source

The excel export provides an option to define datasource dynamically before exporting.
To export data dynamically, define the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#datasource) in [`excelExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/excel-exporting-cs11/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-cs11" %}

## Passing additional parameters to the server when exporting

You can pass the additional parameter in the [`query`](https://ej2.syncfusion.com/angular/documentation/api/grid/#query) property by invoking **addParams** method. In the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event, you can define params as key and value pair so it will receive at the server side when exporting.

In the below example, we have passed **recordcount** as **12** using **addParams** method

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/exporting-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs2" %}

## See Also

* [Exporting Grid in Cordova application](../how-to/exporting-grid-in-cordova-application)
* [How to get grid display numbers without grouping and same format to be exported to excel in Angular Grid](https://www.syncfusion.com/forums/151524/how-to-get-grid-display-numbers-without-grouping-and-same-format-to-be-exported-to-excel-in)