---
layout: post
title: Dimensions in Angular 3D Chart control | Syncfusion
description: Learn here all about dimensions in Syncfusion Angular 3D Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: 3D Chart
documentation: ug
domainurl: ##DomainURL##
---

# Dimensions in Angular 3D Chart control

## Size for container

The 3D chart can be rendered to its container size and it can be set via inline or CSS as demonstrated below.

```javascript
    <div id='container'>
        <div id='element' style="width:650px; height:350px;"></div>
    </div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/chart-dimension/chart-dimension-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/chart-dimension/chart-dimension-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/chart-dimension/chart-dimension-cs1" %}

<!-- markdownlint-disable MD036 -->

## Size for chart

<!-- markdownlint-disable MD036 -->

The size of the 3D chart can be set directly through [`width`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3DModel/#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3DModel/#height) properties.

**In Pixel**

The size of the 3D chart can be set in pixel as demonstrated below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/chart-dimension/chart-dimension-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/chart-dimension/chart-dimension-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/chart-dimension/chart-dimension-cs2" %}

**In Percentage**

By setting the value in percentage, 3D chart gets its dimension with respect to its container. For example, when the height is **50%**, chart renders to half of the container height.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/chart-dimension/chart-dimension-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/chart-dimension/chart-dimension-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/chart-dimension/chart-dimension-cs3" %}

>Note: When you do not specify the size, it takes `450px` as the height and window size as its width.