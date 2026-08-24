---
layout: post
title: Angular Data Grid Row Spanning | Syncfusion
description: Learn how to implement row spanning in Angular Data Grid using Syncfusion. Merge cells across rows, configure rowspan behavior, and create rich data layouts.
platform: ej2-angular
control: Row spanning 
documentation: ug
domainurl: ##DomainURL##
---

# Row Spanning in Angular Data Grid

The Data Grid supports row spanning, which merges adjacent cells vertically across multiple rows into a single cell, reducing data repetition and improving readability.

## Enable row spanning

Row spanning merges adjacent cells vertically into a single cell. The feature uses two key concepts:

- [rowSpan](https://ej2.syncfusion.com/angular/documentation/api/grid/querycellinfoeventargs#rowspan): Specifies the number of consecutive row cells to be merged vertically. |
- `[queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/querycellinfoeventargs): Triggered for each grid cell, allowing custom cell configuration. 

The `queryCellInfo` event enables row spanning by setting the `rowSpan` attribute during cell rendering. The Data Grid processes this attribute and renders the merged cell across the specified number of rows.

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

> * Spanning can be disabled for a particular Data Grid page by using the `requestType` value from the `queryCellInfo` event argument.
> * The `rowSpan` and `colSpan` attributes can be used together to merge cells both vertically and horizontally.

## Automatic row cell merging

When consecutive rows contain the same value in a column, the Data Grid automatically merges those cells into a single spanned cell. This reduces duplicate content and creates a cleaner, more readable layout.  

Enable this behavior by setting the [enableRowSpan](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#enablerowspan) property in the Data Grid configuration. During rendering, the grid detects identical values in the next row and merges them automatically. 


This example shows automatic row cell merging when consecutive rows have the same value.

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

## Row spanning constraints

Row spanning merges multiple cells into a single logical cell, altering the Data Grid’s default row and cell layout. Since many advanced features depend on a consistent row and cell structure, they are not compatible when spanning is enabled:

- Virtualization and infinite scrolling: require fixed row heights for efficient rendering, but spanning changes row sizes.  
- Row drag and drop: depends on clear row boundaries, which spanning modifies.  
- Column virtualization: needs aligned columns, disrupted when cells span across rows.  
- Detail templates and hierarchy grids: rely on standard row layouts, which spanning alters.  
- Editing, exporting, and autofill: assume one-to-one cell mapping, removed by spanning.
