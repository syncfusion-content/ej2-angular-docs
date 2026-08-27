---
layout: post
title: Hyperlink in Angular Pivot Table | Syncfusion
description: Learn how the Angular Pivot Table enables hyperlinks on row, column, summary, and value cells using columnRender and cellClick.
platform: ej2-angular
control: Pivot Table
documentation: ug
domainurl: ##DomainURL##
---

# Hyperlink in Angular Pivot Table

The Pivot Table component provides built-in support for displaying hyperlinks within individual cells. This feature allows users to link data in specific cells, enhancing interactivity and navigation. Common use cases include linking a value cell to a related detail report, opening an external resource from a row header, or highlighting summary cells that match a business rule.

Hyperlinks can be selectively enabled for various cell types, including:

- Row headers
- Column headers
- Value cells
- Summary cells

You can control hyperlink behavior using the [`hyperlinkSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinksettings) property, which can be defined during the initial rendering through the code-behind.

## Available hyperlink settings

The following properties are available in [`hyperlinkSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinksettings). Each property is optional; combine them to control which cells display hyperlinks.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| [`showHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinksettings#showhyperlink) | `boolean` | `false` | Shows or hides hyperlinks in all cells. |
| [`showRowHeaderHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinksettings#showrowheaderhyperlink) | `boolean` | `false` | Shows or hides hyperlinks in row headers. |
| [`showColumnHeaderHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinksettings#showcolumnheaderhyperlink) | `boolean` | `false` | Shows or hides hyperlinks in column headers. |
| [`showValueCellHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinksettings#showvaluecellhyperlink) | `boolean` | `false` | Shows or hides hyperlinks in value cells. |
| [`showSummaryCellHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinksettings#showsummarycellhyperlink) | `boolean` | `false` | Shows or hides hyperlinks in summary cells. |
| [`headerText`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinksettings#headertext) | `string` | `''` | Shows hyperlinks for cells whose header text matches the specified value. |
| [`conditionalSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinksettings#conditionalsettings) | `ConditionalSettings[]` | `[]` | Shows hyperlinks for cells whose values match the specified conditions. |
| [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinksettings#cssclass) | `string` | `''` | Applies a custom CSS class to hyperlink elements for user-defined styling. |

> **Precedence:** When `showHyperlink` is `true`, individual [`showHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinksettings#showhyperlink) flags are ignored. `headerText` and `conditionalSettings` are evaluated after the cell-type filters.

> By default, the hyperlink options are disabled for all cells in the pivot table.

## Hyperlink for all cells

The pivot table provides an option to display hyperlinks for **all cells** in the table. To enable this functionality, set the [`showHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinksettings#showhyperlink) property to **true** within the [`hyperlinkSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinksettings) object.

> **Prerequisite:** The Pivot Table must have at least one row, column, and value field configured so that all cell types render with content.

Once enabled, hyperlinks are shown consistently in row headers, column headers, value cells, and summary cells.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs172/src/app.component.ts %}
{% endhighlight %}

{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-grid/getting-started-cs172/index.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs172/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs172" %}

## Hyperlink for row headers

The pivot table provides a way to display hyperlinks specifically in **row header cells** that are currently visible. To enable this functionality, set the [`showRowHeaderHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinksettings#showrowheaderhyperlink) property to **true** within the [`hyperlinkSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinksettings). This ensures that only the row headers will display hyperlinks, while other cell types remain unaffected.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs173/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs173/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs173" %}

## Hyperlink for column headers

The pivot table provides an option to display hyperlinks specifically in column header cells that are currently visible. To enable this functionality, set the [`showColumnHeaderHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinksettings#showcolumnheaderhyperlink) property to **true** within the [`hyperlinkSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinksettings) object. This ensures that only the column headers will display hyperlinks, while other cell types remain unaffected.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs174/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs174/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs174" %}

## Hyperlink for value cells

The pivot table provides support for displaying hyperlinks specifically in value cells that are currently visible. To enable this option, set the [`showValueCellHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinksettings#showvaluecellhyperlink) property to **true** within the [`hyperlinkSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinksettings) object. This ensures that only the value cells will display hyperlinks, while other cell types remain unaffected.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs175/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs175/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs175" %}

## Hyperlink for summary cells

The pivot table provides support for displaying hyperlinks specifically in summary cells that are currently visible. To enable this option, set the [`showSummaryCellHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinksettings#showsummarycellhyperlink) property to **true** within the [`hyperlinkSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinksettings) object. This ensures that only the summary cells will display hyperlinks, while other cell types remain unaffected.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs176/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs176/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs176" %}

## Condition-based hyperlink

The pivot table supports displaying hyperlinks in specific cells based on defined conditions. This functionality can be configured through code-behind during initial rendering using the [`conditionalSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalsettings) property.

* [`measure`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalsettings#measure) (`string`): Specifies the value field name for which the hyperlink should be shown when the condition is met.
* [`conditions`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalsettings#conditions) (`Operators`): Specifies the operator type. The supported operators include:
  * `Equals`
  * `NotEquals`
  * `GreaterThan`
  * `GreaterThanOrEqual`
  * `LessThan`
  * `LessThanOrEqual`
  * `Between` (uses both `value1` and `value2`)
  * `NotBetween` (uses both `value1` and `value2`)
* [`value1`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalsettings#value1) (`number`): Sets the starting (or only) value for the condition.
* [`value2`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalsettings#value2) (`number`): Sets the ending value for range-based comparisons (`Between`, `NotBetween`). Ignored for other operators.

> **URL source:** The hyperlink target for condition-based cells is taken from a column on the data source whose name matches the value field defined in `measure`. If your data source does not contain such a column, the cell is rendered as plain text.

In the example below, the pivot table is configured to display hyperlinks only in cells where the "Units Sold" field value is between **500** and **1000**. This highlights specific aggregated values that meet the given condition.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs177/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs177/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs177" %}

## Header-based hyperlink

The pivot table supports displaying hyperlinks in cells that match specific row or column headers. This functionality can be enabled using the [`headerText`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinksettings#headertext) property, which is configured through code-behind during initial rendering.

In the example below, the value **FY 2015.Q1.Units Sold** is assigned to [`headerText`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinksettings#headertext), which means the pivot table shows hyperlinks only in cells that match this specific header combination.

> **Note:** The **dot (`.`)** character in `FY 2015.Q1.Units Sold` is the default delimiter used to identify the header levels in the row and column axes. To use a different delimiter, configure the [`headerDelimiter`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/valuesortsettingsmodel#headerdelimiter) property in [`valueSortSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#valuesortsettings) before the Pivot Table renders.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs178/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs178/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs178" %}

## Event

The pivot table triggers the [`hyperlinkCellClick`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#hyperlinkcellclick) event whenever a hyperlink cell is clicked. This event allows you to either customize the clicked cell or retrieve information about it.

> **Prerequisite:** Hyperlink cells must be enabled via `hyperlinkSettings`; the event does not fire on cells that are not hyperlinks.

It provides the following parameters:

* [`currentCell`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hypercellclickeventargs#currentcell) (`HTMLElement`): Refers to the clicked cell element, which can be modified as needed.
* [`cancel`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hypercellclickeventargs#cancel) (`boolean`): If set to **true**, prevents the default click behavior from running (for example, navigation). Set to **false** to let the click proceed normally and your custom code run in addition.
* [`data`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hypercellclickeventargs#data) (`HyperCellClickEventArgsData`): Contains detailed information about the clicked cell, including its value, row and column headers, position, and whether it is a summary cell.
* [`nativeEvent`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hypercellclickeventargs#nativeevent) (`Event`): Represents the original browser event triggered by the click, useful for advanced event handling.

<!-- markdownlint-disable-next-line MD034 -->
In the example below, when a hyperlink cell is clicked, a custom attribute (**data-url**) is added to the cell to redirect users to the Syncfusion Angular Pivot Table Hyperlink [Demo](https://ej2.syncfusion.com/demos/#/tailwind3/pivot-table/hyper-link.html). The [`cancel`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hypercellclickeventargs#cancel) property is set to **false** to allow this interaction.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs179/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs179/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs179" %}

## See Also

* [Apply condition-based hyperlink for specific row or column](./how-to/apply-condition-based-hyper-link-for-specific-row-or-column) — Recipe that shows a real-world `conditionalSettings` configuration for highlighting cells in a specific row or column.