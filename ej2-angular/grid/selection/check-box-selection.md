---
layout: post
title: Angular Grid - Check box selection | Syncfusion
description: Angular Grid check box selection explains enabling checkbox columns, select-all behavior, and integration with selection APIs to manage multi-select scenarios.
platform: ej2-angular
control: Check box selection 
documentation: ug
domainurl: ##DomainURL##
---

# Check box Selection in Angular Grid Component

Checkbox selection provides functionality to select multiple grid records through checkboxes in each row. This selection method allows efficient bulk operations on selected records within the grid.

To render checkboxes in each grid row, configure a checkbox column by setting the column [type](https://ej2.syncfusion.com/angular/documentation/api/grid/column#type) property to `checkbox`.

Here's an example of enabling checkbox selection using the `type` property in the Grid component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cs3" %}

> Selection can be persisted on all the operations using [selectionSettings.persistSelection](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#persistselection) property. For persisting selection on the grid, any one of the column should be defined as a primary key using [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/column#isprimarykey) property.

## Checkbox selection mode

The checkbox selection mode provides two options that can be configured through the [selectionSettings.checkboxMode](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#checkboxmode) property:

* `Default`: This mode allows multiple row selection by clicking rows sequentially. When a row is clicked, the associated checkbox switches to the "checked" state.
* `ResetOnRowClick`: This mode resets previously selected rows when a new row is clicked. Multiple selections remain possible using <kbd>CTRL</kbd> **+ Click** for individual rows or <kbd>SHIFT</kbd> **+ Click** for row ranges.

In the following example, it demonstrates dynamically configuring the `checkboxMode` using the `DropDownList` component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cs4" %}

## Hide select-all checkbox in column header

When the column type is set to [checkbox](https://ej2.syncfusion.com/angular/documentation/api/grid/column#type), a select-all checkbox appears in the column header by default. To hide the select-all checkbox, define an empty [HeaderTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column#headertemplate) directive in the grid column.

Here's an example of hiding selectall checkbox in column header using empty `HeaderTemplate` directive in the Grid component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-checkbox-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-checkbox-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-checkbox-cs2" %}

## Conditional row selection

The `isRowSelectable` callback determines which rows can be selected by evaluating each row's data and returning `true` for selectable rows and `false` for those that should not be selectable.

**Local data:** The callback executes once during grid initialization, evaluating all records because the full dataset is available on the client side.

**Remote data:** The callback executes only for rows displayed on the current page when the grid first loads. The callback re-executes whenever the grid fetches new data, such as during paging, filtering, or sorting operations, to re-evaluate newly visible rows.

The example below prevents selection of rows with canceled orders:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/prevent-checkbox-selection/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/prevent-checkbox-selection/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/prevent-checkbox-selection" %}

## Select a single row in checkbox selection mode

Single-row selection in checkbox mode ensures that only one row remains selected at a time, with any previous selections cleared when a new row is selected.

To configure single-row selection in checkbox mode, handle the [rowSelecting](https://ej2.syncfusion.com/angular/documentation/api/grid#rowselecting) event and use the [clearSelection](https://ej2.syncfusion.com/angular/documentation/api/grid#clearselection) method to clear previous selections before selecting a new row.

> When the [checkboxMode](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#checkboxmode) property is set to `ResetOnRowClick`, clicking a new row automatically resets the previously selected row. This behavior applies to row clicks rather than checkbox clicks and represents the default grid behavior.

Here's an example of selecting a single row in checkbox selection mode using the `clearSelection` method along with the `rowSelecting` event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-single-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-single-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-single-cs1" %}

## Allow selection only through checkbox click

By default, the Grid component allows selection by clicking either a grid row or the checkbox within that row. To restrict selection to checkbox clicks only, set the [selectionSettings.checkboxOnly](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#checkboxonly) property to `true`.
 
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-checkbox-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-checkbox-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-checkbox-cs1" %}
