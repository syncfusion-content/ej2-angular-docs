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

Category axis are used to represent, the string values instead of numbers.

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

>Note: To use category axis, we need to inject `CategoryService` into the `@NgModule.providers` and set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis/#valuetype-any) of axis to `Category`.

<!-- markdownlint-disable MD036 -->

## Labels Placement

<!-- markdownlint-disable MD036 -->

By default, category labels are placed between the ticks in an axis, this can also be placed on ticks
using [`labelPlacement`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis/#labelplacement) property.

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

Range of the category axis can be customized using [`minimum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis/#minimum), [`maximum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis/#maximum) and [`interval`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis/#interval) property of the axis.

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

Category axis also can be rendered based on the index values of data source. This can be achieved by defining the `isIndexed` property to `true` in the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs24/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs24/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs24" %}