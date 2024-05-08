---
layout: post
title: Comparative bar in Angular Bullet chart component | Syncfusion
description: Learn here all about Comparative bar in Syncfusion Angular Bullet chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Comparative bar 
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Comparative bar in Angular Bullet chart component

The line marker that runs perpendicular to the orientation of the graph is known as the **Comparative Measure** and it is used as a target marker to compare against the feature measure value. This is also called as the **Target Bar** in the Bullet Chart. To display the target bar, the [`targetField`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#targetfield) should be mapped to the appropriate field from the datasource.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs13" %}

## Types of target bar

The shape of the target bar can be customized using the [`targetTypes`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#targettypes) property and it supports **Circle**, **Cross**, and **Rect** shapes. The default type of the target bar is **Rect**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs14" %}

## Target bar customization

The following properties can be used to customize the target bar. Also, you can bind the color for the target bar from [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#datasource) for the bullet chart.

* [`targetColor`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#targetcolor) - Specifies the fill color of Target Bar.
* [`targetWidth`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#targetwidth) - Specifies the width of Target Bar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs15" %}