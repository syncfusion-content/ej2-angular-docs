---
layout: post
title: Category Axis in Angular Chart | Syncfusion
description: Learn how to configure the Category axis in the Syncfusion Angular Chart component, including range, label placement, and indexed category axis options.
platform: ej2-angular
control: Category Axis 
documentation: ug
domainurl: ##DomainURL##
---

# Category Axis in Angular Chart


The category axis is used to represent string-based values instead of numeric values. It is commonly used for displaying discrete categories such as names, labels, or textual groupings along an axis.

The following snippet renders a column chart with a category-based x-axis.

To learn more about the category axis, watch this video:

{% youtube "https://www.youtube.com/watch?v=7U7X1m_fBrA" %}

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs21/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs21/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs21" %}

>**Note:** To use the category axis, inject `CategoryService` into the `@NgModule.providers` and set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#valuetype-any) property of the axis to `Category`.

<!-- markdownlint-disable MD036 -->

## Range

The visible range of the category axis can be customized by using the [`minimum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#minimum), [`maximum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#maximum) and [`interval`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#interval) properties of the axis. These properties control the start value, end value, and spacing between category labels.

> For a category axis, `minimum`, `maximum`, and `interval` operate on index positions of the categories rather than on the category labels themselves.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs23/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs23/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs23" %}

<!-- markdownlint-disable MD036 -->

## Label Placement

<!-- markdownlint-disable MD036 -->

By default, category labels are positioned between the axis tick marks (`BetweenTicks`). They can also be aligned directly on the ticks (`OnTicks`) by using the [`labelPlacement`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#labelplacement) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs22/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs22/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs22" %}

## Indexed category axis

The category axis can also be rendered based on the index values of the data source. This behavior can be enabled by setting the [`isIndexed`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#isindexed) property of the axis to **true**, which positions data points by their index while reusing the shared category label set. This is useful when multiple series need to be aligned at the same x positions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs24/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs24/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs24" %}

## See Also

* [Numeric Axis](./numeric-axis)
* [DateTime Axis](./date-time-axis)
* [Logarithmic Axis](./logarithmic-axis)