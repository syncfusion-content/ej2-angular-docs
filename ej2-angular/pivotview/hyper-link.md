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

The pivot table supports to show hyperlink option to link data for individual cells that are displayed in the component. Also, the hyperlink can be enabled separately for row headers, column headers, value cells, and summary cells using the [`hyperlinkSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/). It can be configured through code behind, during initial rendering and the settings available to show hyperlink are:

* [`showHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#showhyperlink): It allows to set the visibility of hyperlink in all cells.
* [`showRowHeaderHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#showrowheaderhyperlink): It allows to set the visibility of hyperlink in row headers.
* [`showColumnHeaderHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#showcolumnheaderhyperlink): It allows to set the visibility of hyperlink in column headers.
* [`showValueCellHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#showvaluecellhyperlink): It allows to set the visibility of hyperlink in value cells.
* [`showSummaryCellHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#showsummarycellhyperlink): It allows to set the visibility of hyperlink in summary cells.
* [`headerText`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#headertext): It allows to set the visibility of hyperlink based on header text.
* [`conditionalSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#conditionalsettings): It allows to set the visibility of hyperlink based on specific condition.
<!-- markdownlint-disable MD028 -->
> By default, the hyperlink options are disabled for all cells in the pivot table.

> User defined style can be applied to hyperlink using [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#cssclass) property in [`hyperlinkSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/) .

## Hyperlink for all cells

The pivot table has an option to show hyperlink option for all cells that are currently in display. To do so, user need to set [`showHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#showhyperlink) to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs172/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs172/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs172/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs172" %}

## Hyperlink for row headers

The pivot table has an option to show hyperlink option for row header cells alone that are currently in display. To do so, user need to set [`showRowHeaderHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#showrowheaderhyperlink) to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs173/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs173/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs173/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs173" %}

## Hyperlink for column headers

The pivot table has an option to show hyperlink option for column header cells alone that are currently in display. To do so, user need to set [`showColumnHeaderHyperlink`](hhttps://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#showcolumnheaderhyperlink) to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs174/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs174/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs174/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs174" %}

## Hyperlink for value cells

The pivot table has an option to show hyperlink option for value cells alone that are currently in display. To do so, user need to set [`showValueCellHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#showvaluecellhyperlink) to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs175/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs175/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs175/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs175" %}

## Hyperlink for summary cells

The pivot table has an option to show hyperlink option for summary cells alone that are currently in display. To do so, user need to set [`showSummaryCellHyperlink`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#showsummarycellhyperlink) to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs176/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs176/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs176/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs176" %}

## Condition based hyperlink

The pivot table has an option to show hyperlink in the cells based on specific conditions. It can be configured using the [`conditionalSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalSettings/) through code behind, during initial rendering. The settings required are:

* [`measure`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalSettings/#measure): Specifies the value field name, in-order to set the visibility of hyperlink for the same when condition is met.
* [`conditions`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalSettings/#conditions): Specifies the operator type such as **Equals**, **GreaterThan**, **LessThan**, etc.
* [`value1`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalSettings/#value1): Specifies the start value.
* [`value2`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/conditionalSettings/#value2): Specifies the end value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs177/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs177/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs177/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs177" %}

## Header based hyperlink

The pivot table has an option to show hyperlink in the cells based on specific row or column header. It can be configured using the [`headerText`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/hyperlinkSettings/#headertext) option through code behind, during initial rendering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs178/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs178/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs178/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs178" %}

## Event

The event [`hyperlinkCellClick`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#hyperlinkcellclick) fires on every hyperlink cell click.

It has following parameters - `cancel` and `currentCell`. The parameter `currentCell` is used to customize the host cell element by any means. Meanwhile, when the parameter `cancel` is set to **true**, applied customization will not be updated to the host cell element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs179/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs179/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs179/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs179" %}

## See Also

* [Apply condition based hyperlink for specific row or column](./how-to/apply-condition-based-hyper-link-for-specific-row-or-column)