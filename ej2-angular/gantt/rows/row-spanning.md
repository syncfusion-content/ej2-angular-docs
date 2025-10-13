---
layout: post
title: Row spanning in Angular Gantt component | Syncfusion
description: Learn here all about Row spanning in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Row spanning 
documentation: ug
domainurl: ##DomainURL##
---

# Row Spanning in Angular Gantt Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt component supports **row cell spanning**, allowing multiple cells in a row to merge into a single cell. This is useful for displaying shared information across rows without duplication.

To enable row spanning, use the [rowSpan](https://ej2.syncfusion.com/angular/documentation/api/gantt/queryCellInfoEventArgs/#rowspan) attribute inside the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#querycellinfo) event. This event is triggered for each grid cell, where you can define the number of rows a cell should span based on its data.

In the example below, the **Soil test approval** cell spans across two rows in the **TaskName** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/rowSpanning-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/rowSpanning-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/rowSpanning-cs1" %}

> * You can use both [rowSpan](https://ej2.syncfusion.com/angular/documentation/api/gantt/queryCellInfoEventArgs/#rowspan) and [colSpan](https://ej2.syncfusion.com/angular/documentation/api/gantt/queryCellInfoEventArgs/#colspan) together to merge grid cells vertically and horizontally.
