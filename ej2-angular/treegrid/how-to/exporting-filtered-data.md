---
layout: post
title: Exporting filtered data in Angular Treegrid component | Syncfusion
description: Learn here all about Exporting filtered data in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Exporting filtered data 
documentation: ug
domainurl: ##DomainURL##
---

# Exporting filtered data in Angular Treegrid component

You can export the filtered data by defining the resulted data in [`PdfExportProperties.dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#datasource) before export.

In the below Pdf exporting demo, We have gotten the filtered data from the filteredResult of Tree Grid filterModule and then defines the resulted data in [`PdfExportProperties.dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#datasource) and pass it to [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#pdfexport) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/refresh-cs8" %}

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.
