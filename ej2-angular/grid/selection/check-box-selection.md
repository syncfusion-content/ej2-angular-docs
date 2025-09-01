---
layout: post
title: Checkbox selection in Angular Grid component | Syncfusion
description: Learn how to enable and customize checkbox selection in the Syncfusion Angular Grid component, including selecting rows, limiting selections, and customizing header and row selection behaviors.
platform: ej2-angular
control: Check box selection 
documentation: ug
domainurl: ##DomainURL##
---

# Checkbox selection in Angular Grid component

Checkbox selection in the Grid component enables users to select multiple records by displaying a checkbox in each row. This feature is particularly helpful for performing bulk actions or operations on selected records.

To add a checkbox in each row, use a column with [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#type) property set to **checkbox**.

Example: Enable checkbox selection using the `type` property in the Grid component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cs3" %}

> By default, selection is allowed by clicking either a grid row or the checkbox within that row. To restrict selection so it is only possible via checkboxes, set [`selectionSettings.checkboxOnly`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#checkboxonly) to **true**.
> To persist selection across operations, set [`selectionSettings.persistSelection`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#persistselection) to **true**. Persisted selection requires a primary key column defined via [`columns.isPrimaryKey`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#isprimarykey).

## Checkbox selection mode

Checkbox selection mode allows selecting rows via checkboxes or clicking directly on the rows. This can be controlled with [`selectionSettings.checkboxMode`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#checkboxmode):

* **Default**: Multiple rows can be selected by clicking one row at a time. Clicking a row toggles its checkbox.
* **ResetOnRowClick**: Clicking a row resets previous selections. To select multiple rows, press and hold the CTRL key; to select a range, hold SHIFT and click the rows.

Example: Dynamically enable and change the `checkboxMode` using the DropDownList component:

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

The select-all checkbox in the column header can be hidden for customization by defining an empty [`HeaderTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#headertemplate) in the grid column.

Example: Hide the select-all checkbox using an empty `HeaderTemplate`:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-checkbox-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-checkbox-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-checkbox-cs2" %}

## Prevent specific rows from being selected in checkbox selection

To prevent certain rows from being selected based on specific conditions, use the [`rowDataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdatabound) event. Set the [`isSelectable`](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDataBoundEventArgs/#isselectable) argument to **false** for those rows.

Example: Prevent row selection using the `isSelectable` argument in `rowDataBound`:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cs5" %}

## How to select a single row in checkbox selection mode

To allow only one row to be selected at a time in checkbox selection mode, use the [`rowSelecting`](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowselecting) event to call the [`clearSelection`](https://ej2.syncfusion.com/angular/documentation/api/grid/#clearselection) method before making a new selection.

> With [`checkboxMode`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#checkboxmode) set to **ResetOnRowClick**, the previously selected row is reset automatically when a new row is selected (row only, not checkbox).

Example: Enable single-row selection using the `clearSelection` method in `rowSelecting`:

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

To restrict selection so it is only performed by clicking on checkboxes, set [`selectionSettings.checkboxOnly`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#checkboxonly) to **true**.

Here's an example of how to enable selection only through checkbox click using `checkboxOnly` property:
 
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-checkbox-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-checkbox-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-checkbox-cs1" %}
