---
layout: post
title: Exporting filtered data in Angular TreeGrid component | Syncfusion
description: Learn how to export filtered data in the Syncfusion Angular TreeGrid component, including specifying filtered results using PdfExportProperties for exporting.
platform: ej2-angular
control: Exporting filtered data 
documentation: ug
domainurl: ##DomainURL##
---

# Exporting filtered data in Angular TreeGrid component

Filtered data can be exported by assigning the filtered results to [`PdfExportProperties.dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#datasource) before performing the export operation.

In the following PDF export demo, the filtered data is obtained from the filteredResult property of the TreeGrid's filterModule. This resulting data is then defined in [`PdfExportProperties.dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#datasource) and passed to the [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#pdfexport) method of the TreeGrid component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/refresh-cs8" %}

> For more details on feature capabilities, refer to the [`Angular TreeGrid feature tour page`](https://www.syncfusion.com/angular-components/angular-tree-grid). More comprehensive examples for presenting and manipulating data are available in the [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview).