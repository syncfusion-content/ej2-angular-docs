---
layout: post
title: Hyper link in Angular Pivotview component | Syncfusion
description: Learn here all about Hyper link in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Hyper link 
documentation: ug
domainurl: ##DomainURL##
---

# Hyper link in Angular Pivotview component

The Pivot Table component provides built-in support for displaying hyperlinks within individual cells. This feature allows users to link data in specific cells, enhancing interactivity and navigation.

Hyperlinks can be selectively enabled for various cell types, including:

- Row headers
- Column headers
- Value cells  
- Summary cells  

You can control hyperlink behavior using the [`hyperlinkSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/) property, which can be defined during the initial rendering through the code-behind.

## Available Hyperlink Settings

The following properties are available in hyperlinkSettings:

* [`showHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#showhyperlink): It allows to set the visibility of hyperlink in all cells.
* [`showRowHeaderHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#showrowheaderhyperlink): It allows to set the visibility of hyperlink in row headers.
* [`showColumnHeaderHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#showcolumnheaderhyperlink): It allows to set the visibility of hyperlink in column headers.
* [`showValueCellHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#showvaluecellhyperlink): It allows to set the visibility of hyperlink in value cells.
* [`showSummaryCellHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#showsummarycellhyperlink): It allows to set the visibility of hyperlink in summary cells.
* [`headerText`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#headertext): It allows to set the visibility of hyperlink based on header text.
* [`conditionalSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#conditionalsettings): It allows to set the visibility of hyperlink based on specific condition.
<!-- markdownlint-disable MD028 -->
> By default, the hyperlink options are disabled for all cells in the pivot table.

> User defined style can be applied to hyperlink using [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#cssclass) property in [`hyperlinkSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/).

## Hyperlink for all cells

The pivot table provides an option to display hyperlinks across **all cells** currently visible in the table. To enable this functionality, set the [`showHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#showhyperlink) property to **true** within the [`hyperlinkSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/).

Once enabled, hyperlinks will be shown consistently in row headers, column headers, value cells, and summary cells.

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

The pivot table provides a way to display hyperlinks specifically in **row header cells** that are currently visible. To enable this functionality, set the [`showRowHeaderHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#showrowheaderhyperlink) property to **true** within the [`hyperlinkSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/).

This ensures that only the row headers will display hyperlinks, while other cell types remain unaffected.

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

The pivot table provides an option to display hyperlinks specifically in column header cells that are currently visible. To enable this functionality, set the [`showColumnHeaderHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#showcolumnheaderhyperlink) property to **true** within the [`hyperlinkSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/) object.

This ensures that only the column headers will display hyperlinks, while other cell types remain unaffected.

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

The pivot table provides support for displaying hyperlinks specifically in value cells that are currently visible. To enable this option, set the [`showValueCellHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#showvaluecellhyperlink) property to **true** within the [`hyperlinkSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/) object.

This ensures that only the value cells will display hyperlinks, while other cell types remain unaffected.

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

The pivot table provides support for displaying hyperlinks specifically in summary cells that are currently visible. To enable this option, set the [`showSummaryCellHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#showsummarycellhyperlink) property to **true** within the [`hyperlinkSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/) object.

This ensures that only the summary cells will display hyperlinks, while other cell types remain unaffected.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs176/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs176/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs176" %}

## Condition based hyperlink

The pivot table supports displaying hyperlinks in specific cells based on defined conditions. This functionality can be configured through code-behind during initial rendering using the [`conditionalSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalSettings/) property.

* [`measure`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalSettings/#measure): Specifies the value field name for which the hyperlink should be shown when the condition is met.
* [`conditions`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalSettings/#conditions): Specifies the operator type such as **Equals**, **GreaterThan**, **LessThan**, etc.
* [`value1`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalSettings/#value1): Sets the starting value for the condition.
* [`value2`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalSettings/#value2): Sets the ending value for the condition (used in range-based comparisons).

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

## Header based hyperlink

The pivot table supports displaying hyperlinks in cells based on specific row or column headers. This functionality can be enabled using the [`headerText`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#headertext) property, which is configured through code-behind during initial rendering.

In the below code example, the value **FY 2015.Q1.Units Sold** is assigned to [`headerText`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#headertext), which means the pivot table will show hyperlinks only in cells that match this specific header combination.

N> The **dot(.)** character in **FY 2015.Q1.Units Sold** is used by default to identify the header levels in the pivot table's row and column. It can be changed by setting the [headerDelimiter](https://ej2.syncfusion.com/angular/documentation/api/pivotview/valueSortSettingsModel/#headerdelimiter) in the [valueSortSettings](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#valuesortsettings) property to any other delimiter instead of the default separator.

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

The pivot table triggers the [`hyperlinkCellClick`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#hyperlinkcellclick) event whenever a hyperlink cell is clicked. This event allows you to either customize the clicked cell or retrieve information about it.

It provides two parameters:

* [`currentCell`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperCellClickEventArgs/#currentcell): Refers to the clicked cell element, which can be modified as needed.
* [`cancel`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperCellClickEventArgs/#cancel): If set to **true**, prevents any changes from being applied to the cell.
* [`data`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperCellClickEventArgs/#data): Contains detailed information about the clicked cell, including its value, row and column headers, position, and whether it’s a summary cell.
* [`nativeEvent`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperCellClickEventArgs/#nativeevent): Represents the original browser event triggered by the click, useful for advanced event handling.

<!-- markdownlint-disable-next-line MD034 -->
In the example below, when a hyperlink cell is clicked, a custom attribute (**data-url**) is added to the cell to redirect users to the Syncfusion Angular Pivot Table Hyperlink [Demo](https://ej2.syncfusion.com/demos/#/tailwind3/pivot-table/hyper-link.html). The [`cancel`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperCellClickEventArgs/#cancel) property is set to **false** to enable this interaction.

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

* [Apply condition based hyperlink for specific row or column](./how-to/apply-condition-based-hyper-link-for-specific-row-or-column)