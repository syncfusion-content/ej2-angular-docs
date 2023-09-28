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

Gantt supports client-side exporting, which allows you to export its data to the Excel and CSV formats. Use the [`excelExport`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#excelexport) and [`csvExport`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#csvexport) methods for exporting. To enable Excel export in the Gantt, set the [`allowExcelExport`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowexcelexport) to true.

To export data to Excel and CSV, inject the `ExcelExportService` in the provider section of `AppModule`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/excelExport-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/excel-export/excelExport-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/excelExport-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excel-export/excelExport-cs1" %}