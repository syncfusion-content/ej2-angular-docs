---
layout: post
title: Value bar in Angular Bullet chart component | Syncfusion
description: Learn here all about Value bar in Syncfusion Angular Bullet chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Value bar 
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Value bar in Angular Bullet chart component

To display the primary data or the current value of the data being measured known as the **Feature Measure** that should be encoded as a bar. This is called as the **Actual Bar** or the **Feature Bar** in the Bullet Chart, and to display the actual bar the [`valueField`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#valuefield) should be mapped to the appropriate field from the data source.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs36/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs36/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs36/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs36" %}

## Types of actual bar

The shape of the actual bar can be customized using the [`type`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#type) property of the Bullet Chart. The actual bar contains **Rect** and **Dot** shapes. By default, the actual bar shape is Rect.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs37/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs37/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs37/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs37" %}

## Actual bar customization

### Border customization

Using the [`valueBorder`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#valueborder) property of the bullet chart, you can customize the border [`color`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/border/#color) and [`width`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/border/#width) of the actual bar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs38/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs38/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs38/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs38" %}

### Fill color and height Customization

Customize the fill color and height of the actual bar using the [`valueFill`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#valuefill) and [`valueHeight`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#valueheight) properties of the bullet chart. Also, you can bind the color for the actual bar from [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart#datasource) for the bullet chart using [`valueFill`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart#valuefill) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs39/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs39/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs39/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs39" %}