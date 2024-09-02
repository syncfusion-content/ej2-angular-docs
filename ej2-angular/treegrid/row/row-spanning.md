---
layout: post
title: Row spanning in Angular TreeGrid component | Syncfusion
description: Learn here all about Row spanning in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Row spanning 
documentation: ug
domainurl: ##DomainURL##
---

# Row spanning in Angular TreeGrid component

The tree grid provides an option to span row cells, allowing you to merge two or more cells in a row into a single cell. This feature can be useful in scenarios where you want to display information that spans across multiple rows, but want to avoid repeating the same information in each row.

To achieve this, you need to define the [rowSpan](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs/#rowspan) attribute to span cells in the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid#querycellinfo) event. The rowSpan attribute is used to specify the number of rows that the current cell should span.

The `queryCellInfo` event is triggered for each cell in the tree grid, and allows you to customize the cells in the tree grid. By handling this event, you can set the `rowSpan` attribute for a cell to achieve row spanning.

In the following demo, **Lunch Break** cell is spanned to two rows in the **1:00** column. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/row-spanning-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-spanning-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-spanning-cs1" %}

> * To disable the spanning for particular tree grid page, you need to use **requestType** from `queryCellInfo` event argument.
> * The `rowSpan` and `colSpan` attributes can be used together to merge cells both vertically and horizontally.

## Limitations

* The [updateCell](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#updatecell) method does not support row spanning.
* Row spanning is not compatible with the following features:
    1. Virtual scrolling
    2. Infinite scrolling
    3. Row drag and drop
    4. Autofill
    5. Row or cell editing
    6. Batch editing
    7. CRUD
