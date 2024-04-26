---
layout: post
title: Category axis in Angular 3D Chart control | Syncfusion
description: Learn here all about category axis in Syncfusion Angular 3D Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: 3D Chart
documentation: ug
domainurl: ##DomainURL##
---

# Category axis in Angular 3D Chart control

The category axis is the horizontal axis of a 3D chart that shows text values rather than numerical values. Compared to the vertical axis, this axis has fewer labels. The following sample shows to render the 3D chart using category axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/category-axis/category-axis-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/category-axis/category-axis-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/category-axis/category-axis-cs1" %}

>Note: To use category axis, we need to inject `Category3DService` module into the `@NgModule.providers` and set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#valuetype) of axis to **Category**.

## Range

The range of the category axis can be customized using [`minimum`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#minimum), [`maximum`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#maximum) and [`interval`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#interval) properties of the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/category-axis/category-axis-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/category-axis/category-axis-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/category-axis/category-axis-cs2" %}

## Indexed category axis

The category axis can also be rendered based on the index values of the data source. This can be achieved by defining the [`isIndexed`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#isindexed) property to **true** in the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/category-axis/category-axis-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/category-axis/category-axis-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/category-axis/category-axis-cs3" %}