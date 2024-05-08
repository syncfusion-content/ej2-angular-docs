---
layout: post
title: Exporting selected data in Angular Treegrid component | Syncfusion
description: Learn here all about Exporting selected data in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Exporting selected data 
documentation: ug
domainurl: ##DomainURL##
---

# Exporting selected data in Angular Treegrid component

You can export the selected records data by passing it to [`PdfExportProperties.dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/) or [`ExcelExportProperties.dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) property in the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event.

In the below exporting demo, we can get the selected records using [`getSelectedRecords`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getselectedrecords) method and pass the selected data to [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#pdfexport) or [`excelExport`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#excelExport) methods using respective export properties..

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/refresh-cs9" %}

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.