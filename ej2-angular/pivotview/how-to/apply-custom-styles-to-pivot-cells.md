---
layout: post
title: Apply custom style to pivot cells in Angular Pivotview | Syncfusion
description: Learn here all about Apply custom style to pivot cells in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Apply custom style to pivot cells 
documentation: ug
domainurl: ##DomainURL##
---

# Apply custom style to pivot cells in Angular Pivotview component

The Angular Pivotview component allows you to customize the appearance of pivot cells using event handlers. This guide demonstrates how to apply custom styling to specific cells in your pivot table.

## Overview

You can apply custom styles to different types of cells in the pivot table:
- Use the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#querycellinfo) event to style row headers and value cells
- Use the [headerCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#headercellinfo) event to style column headers

Both events are available through the [gridSettings](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/) property of the Pivotview component.

## Implementation example

In the following example, we apply custom styling to:
- The column header **"Sold Amount"** under **"FY 2016"** using the **headerCellInfo** event
- The row header **"Germany"** and its corresponding aggregated values using the **queryCellInfo** event

The styling is applied by adding a custom CSS class **"e-custom"** to the cell elements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs310/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs310/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs310" %}

N> The **dot(.)** character in **FY 2016.Sold Amount** is used by default to identify the header levels in the pivot table's row and column. It can be changed by setting the [headerDelimiter](https://helpej2.syncfusion.com/angular/documentation/api/pivotview/valueSortSettingsModel/#headerdelimiter) in the [valueSortSettings](https://helpej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#valuesortsettings) property to any other delimiter instead of the default separator.