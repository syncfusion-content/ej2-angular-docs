---
layout: post
title: Exporting selected data in Angular TreeGrid component | Syncfusion
description: Learn how to export selected records in the Syncfusion Angular TreeGrid component by passing them to PdfExportProperties or ExcelExportProperties during export operations.
platform: ej2-angular
control: Exporting selected data 
documentation: ug
domainurl: ##DomainURL##
---

# Exporting selected data in Angular TreeGrid component

Selected records can be exported by passing them to the [`PdfExportProperties.dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/) or [`ExcelExportProperties.dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) properties within the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event.

In the export demo below, selected records are obtained using the [`getSelectedRecords`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getselectedrecords) method. The selected data is then provided to the [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#pdfexport) or [`excelExport`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#excelExport) methods using the corresponding export properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/refresh-cs9" %}

> For details on advanced features, visit the [`Angular TreeGrid feature tour page`](https://www.syncfusion.com/angular-components/angular-tree-grid). Additional examples for presenting and manipulating data can be found in the [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview).