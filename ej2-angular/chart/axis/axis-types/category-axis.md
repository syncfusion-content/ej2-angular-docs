---
layout: post
title: Category axis in Angular Chart component | Syncfusion
description: Learn here all about Category axis in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Category axis 
documentation: ug
domainurl: ##DomainURL##
---

# Category axis in Angular Chart component

<!-- markdownlint-disable MD036 -->

The category axis is used to represent string-based values instead of numeric values. It is commonly used for displaying discrete categories such as names, labels, or textual groupings along an axis.

To known about category axis, you can check on this video:

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

>Note: To use the category axis, inject `CategoryService` into the `@NgModule.providers` and set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#valuetype-any) property of the axis to `Category`.

<!-- markdownlint-disable MD036 -->

## Labels Placement

<!-- markdownlint-disable MD036 -->

By default, category labels are positioned between the axis tick marks. They can also be aligned directly on the ticks by using the [`labelPlacement`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#labelplacement) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs22/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs22/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs22" %}

## Range

The visible range of the category axis can be customized by using the  [`minimum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#minimum), [`maximum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#maximum) and [`interval`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#interval) properties of the axis. These properties control the start value, end value, and spacing between category labels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs23/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs23/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs23" %}

## Indexed category axis

The category axis can also be rendered based on the index values of the data source. This behavior can be enabled by setting the `isIndexed` property of the axis to **true**, which positions data points according to their index instead of their actual category values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs24/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs24/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs24" %}