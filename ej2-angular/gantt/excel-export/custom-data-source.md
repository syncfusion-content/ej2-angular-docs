---
layout: post
title: Custom data source in Angular Gantt component | Syncfusion
description: Learn here all about Custom data source in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Custom data source 
documentation: ug
domainurl: ##DomainURL##
---

# Custom data source in Angular Gantt component

The excel export provides an option to define datasource dynamically before exporting. To export data dynamically, define the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#datasource) in [`ExcelExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/customData-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/customData-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excel-export/customData-cs1" %}
