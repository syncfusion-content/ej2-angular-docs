---
layout: post
title: Row spanning in Angular Gantt component | Syncfusion
description: Learn here all about Row spanning in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Row spanning 
documentation: ug
domainurl: ##DomainURL##
---

# Row spanning in Angular Gantt component

The Gantt provides an option to span grid row cells, allowing you to merge two or more cells in a row into a single cell. This feature can be useful in scenarios where you want to display information that spans across multiple rows, but want to avoid repeating the same information in each row.

To achieve this, you need to define the [rowSpan](https://ej2.syncfusion.com/angular/documentation/api/gantt/queryCellInfoEventArgs/#rowspan) attribute to span cells in the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/queryCellInfoEventArgs) event. The `rowSpan` attribute is used to specify the number of rows that the current cell should span.

The `queryCellInfo` event is triggered for each grid cell in the gantt, allowing you to customize the cells in row. By handling this event, you can set the `rowSpan` attribute for a cell to achieve row spanning.

In the following demo, **Soil test approval** cell is spanned to two rows in the **TaskName** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/rowSpanning-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/rowSpanning-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/rowSpanning-cs1" %}

> * The [rowSpan](https://ej2.syncfusion.com/angular/documentation/api/gantt/queryCellInfoEventArgs/#rowspan) and [colSpan](https://ej2.syncfusion.com/angular/documentation/api/gantt/queryCellInfoEventArgs/#colspan) attributes can be used together to merge grid cells both vertically and horizontally.