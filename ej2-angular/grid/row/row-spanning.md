---
layout: post
title: Row Spanning in Angular Grid Component | Syncfusion
description: Learn here all about Row spanning in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Row spanning 
documentation: ug
domainurl: ##DomainURL##
---

# Row Spanning in Angular Grid Component

The grid provides an option to span row cells, allowing you to merge two or more cells in a row into a single cell. This feature can be useful in scenarios where you want to display information that spans across multiple rows, but want to avoid repeating the same information in each row.

To achieve this, You need to define the [rowSpan](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs/#rowspan) attribute to span cells in the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs) event. The rowSpan attribute is used to specify the number of rows that the current cell should span.

The `queryCellInfo` event triggers for each cell during grid rendering, providing opportunity to customize individual cells. Within this event handler, evaluate cell data and conditions to determine appropriate spanning behavior.

In the following example, the **Davolio** cell spans two rows in the **EmployeeName** column. Additionally, the Grid demonstrates simultaneous row and column spanning where the **Lunch Break** cell spans two rows and three columns in the **1:00** time slot:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/spanning-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/spanning-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/spanning-cs2" %}

> To disable spanning for a particular grid page, use the **requestType** property from the `queryCellInfo` event argument to identify the current operation.
> The `rowSpan` and `colSpan` attributes can be used together to merge cells both vertically and horizontally for complex layout requirements.

## Limitations

* The [updateCell](https://ej2.syncfusion.com/angular/documentation/api/grid/#updatecell) method does not support row spanning.
* Row spanning is not compatible with the following features:
    1. Virtual scrolling
    2. Infinite scrolling
    3. Grouping
    4. Row drag and drop
    5. Autofill
    6. Inline editing
    7. Batch editing
    8. CRUD

## Row spanning using enableRowSpan property    

The Syncfusion Angular Grid introduces a simplified approach to vertically merge cells using the `enableRowSpan` property. 

When the `enableRowSpan` property is enabled, the Grid automatically merges cells with matching data across adjacent columns without requiring manual span configuration using the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs) event. These merged cells are visually combined into a single cell, improving readability.

Here is an example of how to use the `enableRowSpan` property to merge cells vertically:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/row-spanning-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/row-spanning-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/row-spanning-cs1" %}

> You can also control spanning at the column level. To prevent merging for specific columns, set `enableRowSpan` to **false** in the column definition.

### Limitation

* Virtualization
* Infinite Scrolling
* Lazy Load Grouping
* Row Drag and Drop
* Column Virtualization
* Detail Template
* Editing
* Export
* Foreign Key
* Hierarchy Grid