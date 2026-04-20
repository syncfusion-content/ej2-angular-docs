---
layout: post
title: Summary customization in Angular Pivotview component | Syncfusion
description: Learn here all about Summary customization in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Summary customization 
documentation: ug
domainurl: ##DomainURL##
---

# Summary customization in Angular Pivotview component

The Pivot Table component allows users to easily customize the display of grand totals and sub-totals. This documentation explains how to control their visibility and positioning to suit your data analysis needs.

## Show or hide grand totals

The Pivot Table component provides options to display or hide grand totals for rows, columns, or both. These options are configured using the following properties within the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings) object:

- [`showGrandTotals`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#showgrandtotals): Controls the visibility of grand totals for both rows and columns. Set this property to **false** to hide grand totals in both directions.
- [`showRowGrandTotals`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#showrowgrandtotals): When set to **false**, this property hides only the row grand totals.
- [`showColumnGrandTotals`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#showcolumngrandtotals): When set to **false**, this property hides only the column grand totals.

> By default, all of these properties—[`showGrandTotals`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#showgrandtotals), [`showRowGrandTotals`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#showrowgrandtotals), and [`showColumnGrandTotals`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#showcolumngrandtotals)—are set to **true** in the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings) object.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs283/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs283/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs283" %}

## Set grand totals position

You can specify the position of grand totals for rows and columns in a Pivot Table by configuring the [`grandTotalsPosition`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#grandtotalsposition) property within the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings) object. You can choose to place the grand totals either at the top or at the bottom of the pivot table, depending on your preference.

To display grand totals at the top of both rows and columns, set the [`grandTotalsPosition`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#grandtotalsposition) property to **Top**. To show grand totals at the bottom (which is the default setting), set it to **Bottom**. This property applies to both row and column grand totals simultaneously.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs284/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs284/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs284" %}

## Show or hide sub-totals

The PivotTable component enables showing or hiding sub-totals for rows, columns, or both. Use the following properties in the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings) object to configure these options:

* [`showSubTotals`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#showsubtotals): Set to `false` to hide all sub-totals for rows and columns.
* [`showRowSubTotals`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#showrowsubtotals): Set to `false` to hide row sub-totals only.
* [`showColumnSubTotals`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#showcolumnsubtotals): Set to `false` to hide column sub-totals only.

> By default, the [`showSubTotals`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#showsubtotals), [`showRowSubTotals`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#showrowsubtotals), and [`showColumnSubTotals`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#showcolumnsubtotals) properties in the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#showsubtotals) object are set to **true**, ensuring sub-totals are visible across the PivotTable.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs285/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs285/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs285" %}

## Show or hide sub-totals for specific fields

The Pivot Table component allows users to show or hide sub-totals for specific fields in the row and column axes using the [`showSubTotals`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#showsubtotals) property. To hide sub-totals for a specific field in either axis, set the [`showSubTotals`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#showsubtotals) property to **false** in the corresponding field configuration within the rows or columns axis.

> By default, the [`showSubTotals`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#showsubtotals) property for fields in both the [`rows`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#row) and [`columns`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#columns) axes is set to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs286/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs286/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs286" %}

## Show sub-totals at top or bottom

You can configure the position of sub-totals within header groups for both rows and columns in the Pivot Table using the [`subTotalsPosition`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#subtotalsposition) property in the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings) object. By default, the [`subTotalsPosition`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#subtotalsposition) property is set to **Auto**, which displays column sub-totals at the bottom and row sub-totals at the top of their respective header groups in the pivot table.

To display sub-totals at the top of header groups for both rows and columns, set the [`subTotalsPosition`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#subtotalsposition) property in [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings) to **Top**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs303/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs303/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs303" %}

To display sub-totals at the bottom of header groups for both rows and columns, set the [`subTotalsPosition`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#subtotalsposition) property in [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings) to **Bottom**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs304/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs304/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs304" %}

## Show or hide totals using toolbar

You can show or hide grand totals and sub-totals in the Pivot Table using the built-in toolbar. To enable the toolbar, set the [`showToolbar`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#showtoolbar) property to **true** in the Pivot Table component. Then, include **GrandTotal** and **SubTotal** in the [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#toolbar) property. This displays "Show/Hide Grand Totals" and "Show/Hide Subtotals" icons in the toolbar, allowing users to quickly manage grand totals and sub-totals in the table.

The toolbar also includes options for "Grand Totals Position" and "Subtotals Position." These options allow users to specify whether grand totals and sub-totals appear at the top or bottom of rows and columns. This flexibility helps users position grand totals and sub-totals to best suit their reporting or data analysis needs.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs287/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs287/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs287" %}