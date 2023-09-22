---
layout: post
title: Pdf export in Angular Grid component | Syncfusion
description: Learn here all about Pdf export in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Pdf export 
documentation: ug
domainurl: ##DomainURL##
---

# Pdf export in Angular Grid component

PDF export allows exporting Grid data to PDF document. You need to use the [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexport) method for exporting. To enable PDF export in the grid, set the [`allowPdfExport`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowpdfexport) as true.

To use PDF export, inject **PdfExportService** in the provider section of **AppModule**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs18/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/exporting-cs18/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs18" %}

## Show spinner while exporting

You can show/ hide spinner component while exporting the grid using **showSpinner**/ **hideSpinner** methods. You can use [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event to show spinner before exporting and hide a spinner in the [`pdfExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexportcomplete) or [`excelExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexportcomplete) event after the exporting.

In the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event, based on the parameter **args.item.id** as **Grid_pdfexport** or **Grid_excelexport** we can call the **showSpinner** method from grid instance.

In the [`pdfExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexportcomplete) or [`excelExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexportcomplete) event, We can call the **hideSpinner** method.

In the below demo, we have rendered the default spinner component when exporting the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs19/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/exporting-cs19/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs19" %}

## Custom data source

PDF export provides an option to define datasource dynamically before exporting. To export data dynamically, define the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#datasource) in [`pdfExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/)

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs20/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/exporting-cs20/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs20" %}

## Passing additional parameters to the server when exporting

You can pass the additional parameter in the [`query`](https://ej2.syncfusion.com/angular/documentation/api/grid/#query) property by invoking **addParams** method. In the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event, you can define params as key and value pair so it will receive at the server side when exporting.

In the below example, we have passed **recordcount** as **12** using **addParams** method

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs21/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/exporting-cs21/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs21/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs21" %}

## See Also

* [Exporting Grid in Cordova application](../how-to/exporting-grid-in-cordova-application)