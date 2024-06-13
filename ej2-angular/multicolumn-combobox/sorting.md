---
layout: post
title: Sorting in Angular MultiColumn ComboBox component | Syncfusion
description: Learn here all about Sorting in Syncfusion Angular MultiColumn ComboBox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: MultiColumn ComboBox 
documentation: ug
domainurl: ##DomainURL##
---

# Sorting in Angular MultiColumn ComboBox component

The MultiColumn ComboBox component provides built-in support for sorting data-bound columns in ascending or descending order by using the [allowSorting](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#allowsorting) property. By default, the value is `true`.

To sort a particular column in the MultiColumn ComboBox, click on the grid column header in the popup. Each click on the header toggles the sorting order of the column between [Ascending](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox/sortOrder/) and [Descending](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox/sortOrder/).

## Setting the sort order

You can use the [sortOrder](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#sortorder) property to set the order of the column. It supports three types of sorting [None](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox/sortOrder/), [Ascending](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox/sortOrder/) and [Descending](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox/sortOrder/).

When you click on a column header for the first time, it sorts the column in ascending order. Clicking the same column header again will sort the column in descending order. A repetitive third click on the same column header will clear the sorting.

In the following examples, data sorting is done with `Descending` order.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/sort-order/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/sort-order/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/sort-order" %}

## Sort type

You can use the [sortType](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#sorttype) property to set the type of sorting applied to the columns. It supports tow types [OneColumn](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox/sortType/) and [MultipleColumns](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox/sortType/). By default the `sortType` is oneColumn.

To sort multiple columns press and hold the CTRL key and click on the column headers. This feature is useful when you want to sort your data based on multiple criteria to analyze it in various ways.

In the following examples, data sorting type is set with `MultipleColumns`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/sort-type/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/sort-type/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/sort-type" %}