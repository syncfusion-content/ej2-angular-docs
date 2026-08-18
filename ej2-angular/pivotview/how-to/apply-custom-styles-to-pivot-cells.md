---
layout: post
title: How to Style Pivot Cells in Angular Pivot Table | Syncfusion
description: Step-by-step example showing how to apply custom styles to pivot cells in the Angular Pivot Table, with code snippets and property references.
platform: ej2-angular
control: Pivot Table
documentation: ug
domainurl: ##DomainURL##
---

# How to apply custom styles to Pivot Table cells

The Angular Pivot Table component allows you to alter the appearance of pivot cells using event handlers. This guide demonstrates how to apply custom styling to specific cells in your pivot table.

## Overview

You can apply custom styles to different types of cells in the pivot table:
- Use the [`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/grid#querycellinfo) event to style row headers and value cells.
- Use the [`headerCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/grid#headercellinfo) event to style column headers.

Both events are available through the [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings) property of the Pivot Table component.

## Implementation example

The following example shows how to apply styles to:
- The column header **"Sold Amount"** under **"FY 2016"** using the [`headerCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/grid#headercellinfo) event.
- The row header **"Germany"** and its aggregated values using the [`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/grid#querycellinfo) event.
- Styles are applied by adding the **"e-custom"** CSS class to the cell elements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs310/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs310/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs310" %}

N> The **dot(.)** character in **FY 2016.Sold Amount** is used by default to identify the header levels in the pivot table's row and column. It can be changed by setting the [`headerDelimiter`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/valueSortSettingsModel#headerdelimiter) in the [`valueSortSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings#valuesortsettings) property to any other delimiter instead of the default separator.