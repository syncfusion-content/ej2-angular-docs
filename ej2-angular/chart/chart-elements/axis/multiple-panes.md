---
layout: post
title: Multiple panes in Angular Chart component | Syncfusion
description: Learn here all about Multiple panes in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Multiple panes 
documentation: ug
domainurl: ##DomainURL##
---

# Multiple panes in Angular Chart component

Chart area can be divided into multiple panes using [`rows`](https://ej2.syncfusion.com/angular/documentation/api/chart/rowDirective) and [`columns`](https://ej2.syncfusion.com/angular/documentation/api/chart/columnDirective).

## Rows

To split the chart area vertically into number of rows, use [`rows`](https://ej2.syncfusion.com/angular/documentation/api/chart/rowDirective) property of the chart.

* You can allocate space for each row by using the [`height`](https://ej2.syncfusion.com/angular/documentation/api/chart/rowDirective#height) property. The value can be either in percentage or in pixel.
* To associate a vertical axis to a particular row, specify its index to [`rowIndex`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#rowindex-number) property of the axis.
* To customize each row’s bottom line, use [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart/rowDirective#border-bordermodel) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/multiple-panes-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/multiple-panes-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/multiple-panes-cs2" %}

For spanning the vertical axis along multiple row, you can use [`span`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#span) property of an axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/multiple-panes-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/multiple-panes-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/multiple-panes-cs3" %}

## Columns

To split the chart area horizontally into number of columns, use [`columns`](https://ej2.syncfusion.com/angular/documentation/api/chart/columnDirective) property of the chart.

* You can allocate space for each column by using the [`width`](https://ej2.syncfusion.com/angular/documentation/api/chart/columnDirective#width)
property. The given width can be either in percentage or in pixel.
* To associate a horizontal axis to a particular column, specify its index to [`columnIndex`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#columnindex) property of the axis.
* To customize each column’s bottom line, use [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart/columnDirective#border) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/multiple-panes-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/multiple-panes-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/multiple-panes-cs4" %}

For spanning the horizontal axis along multiple column, you can use [`span`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#span) property of an axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/multiple-panes-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/multiple-panes-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/multiple-panes-cs5" %}
