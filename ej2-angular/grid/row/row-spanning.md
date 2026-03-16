---
layout: post
title: Angular Grid - Row Spanning | Syncfusion
description: Angular Grid row spanning describes merging cells across rows, configuration for rowspan behavior, and templates for multi-row presentations.
platform: ej2-angular
control: Row spanning 
documentation: ug
domainurl: ##DomainURL##
---

# Row Spanning in Angular Grid Component

The Grid provides row spanning capabilities to merge two or more cells in a row into a single cell, reducing information repetition across multiple rows and enhancing readability.

## Row spanning

Row spanning merges adjacent cells vertically into a single cell. The feature uses two key concepts:

* [rowSpan](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs#rowspan): Specifies the number of consecutive row cells to be merged vertically.
* [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs): Triggered for each grid cell, allowing custom cell configuration.

The `queryCellInfo` event enables row spanning by setting the `rowSpan` attribute during cell rendering. The Grid processes this attribute and renders the merged cell across the specified number of rows.

The following example demonstrates row spanning in action:

* "Davolio" cell spans two rows in the "Employee Name" column.
* "Lunch Break" cell spans two rows and three columns simultaneously (combined row and column spanning) in the "1:00" column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/spanning-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/spanning-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/spanning-cs2" %}

> * Spanning can be disabled for a particular Grid page by using the `requestType` value from the `queryCellInfo` event argument.
> * The `rowSpan` and `colSpan` attributes can be used together to merge cells both vertically and horizontally.

## Limitations

* The [updateCell](https://ej2.syncfusion.com/angular/documentation/api/grid#updatecell) method does not support modifications to spanned cells.
* The following features are incompatible:

  * Virtual scrolling
  * Infinite scrolling
  * Grouping
  * Row drag and drop
  * Autofill
  * Inline editing
  * Batch editing
  * CRUD operations


## Row spanning using enableRowSpan property    

For a simplified row spanning approach to vertically merge cells, use the [enableRowSpan](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#enablerowspan) property.

When `enableRowSpan` is enabled:

* The Grid automatically detects cells with matching data across adjacent rows.
* Matching cells merge into a single cell visually.
* No manual span configuration through [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs) event required.
* Improves readability by eliminating redundant data display.

This example demonstrates the `enableRowSpan` property for merging cells vertically:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/row-spanning-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/row-spanning-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/row-spanning-cs1" %}

> Row spanning can also be controlled at the column level. Set `enableRowSpan` to `false` in a column definition to disable merging for that column.

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