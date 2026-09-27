---
layout: post
title: Angular Grid Row Pinning | Syncfusion
description: Learn how to pin rows in Angular Data Grid using Syncfusion. Keep important rows fixed at the top while supporting data operations.
platform: ej2-angular
control: Row pinning 
documentation: ug
domainurl: ##DomainURL##
---

# Row Pinning in Angular Data Grid

The Data Grid control provides an option to pin specific rows at the top, ensuring important information remains visible while scrolling vertically. This feature is useful for keeping specific rows always visible for quick reference or priority viewing, regardless of user interactions.

## Enable row pinning

To enable row pinning, configure the [isRowPinned](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#isrowpinned) callback function. This function receives each row's data and returns `true` or `false` based on the desired pinning condition. It executes only during the initial rendering of the Data Grid, ensuring that each row's pinning state is determined at that stage.

The following example pins rows with "Critical" priority and "Open" status at the top using the `isRowPinned` callback function.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/rows-pinning-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/rows-pinning-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/rows-pinning-cs1" %}


> Pinning rows requires a primary key column for mapping the pinned rows to their original records. To define the primary key, set [columns->isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/column#isprimarykey) to `true` for a column.

## Paging with row pinning

Row pinning keeps important rows visible at the top while navigating pages. Pinned rows are excluded from the page size calculation and remain fixed. For example, if [pageSettings->pageSize](https://ej2.syncfusion.com/angular/documentation/api/grid/pagesettings#pagesize) is set to "10" and "2" rows are pinned, those "2" rows stay at the top while the grid displays "10" additional rows beneath them. When navigating to another page, the pinned rows remain fixed, and the next set of records is rendered below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/rows-pinning-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/rows-pinning-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/rows-pinning-cs2" %}

## Row selection with pinned rows

Pinned rows can be selected like regular rows, with their selection state synchronized with corresponding data rows via the primary key. This ensures consistent behavior across all grid operations, such as paging, sorting, and filtering, whether selection is performed using the mouse, keyboard, or checkbox.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/rows-pinning-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/rows-pinning-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/rows-pinning-cs3" %}

> The [selectionSettings->persistSelection](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionsettings#persistselection) will be automatically enabled when pinning the rows using the `isRowPinned` callback function.

## Filtering and sorting with pinned rows

Row pinning is fully compatible with filtering and sorting operations. When a filter is applied, both pinned and scrollable sections display only rows that meet the filter criteria, ensuring consistent results and preventing data mismatches.
 
When sorting is applied, pinned rows are reordered using the same sorting rules while remaining fixed at the top. This maintains visibility and correct positioning of pinned rows even as the remaining data is reorganized.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/rows-pinning-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/rows-pinning-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/rows-pinning-cs4" %}

## CRUD operations with row pinning

Row pinning fully supports CRUD operations with automatic synchronization between pinned rows and their original rows. Any edit, update, or deletion is immediately reflected in both views, ensuring consistent and accurate data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/rows-pinning-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/rows-pinning-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/rows-pinning-cs5" %}

## Dynamic row pinning

Dynamic row pinning is available through the built-in context menu, allowing rows to be pinned or unpinned quickly. Right-click any row to access `PinRow` and `UnpinRow` options for flexible row management.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/rows-pinning-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/rows-pinning-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/rows-pinning-cs6" %}