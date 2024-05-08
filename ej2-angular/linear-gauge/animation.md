---
layout: post
title: Animation in Angular Linear Gauge component | Syncfusion
description: Learn here all about animation in Syncfusion Angular Linear Gauge component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Linear Gauge 
documentation: ug
domainurl: ##DomainURL##
---

# Animation in Angular Linear gauge component

All of the elements in the Linear Gauge, such as the axis lines, ticks, labels, ranges, pointers, and annotations, can be animated sequentially by using the [animationDuration](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge#animationduration) property. The animation for the Linear Gauge is enabled when the `animationDuration` property is set to an appropriate value in milliseconds, providing a smooth rendering effect for the component. If the `animationDuration` property is set to **0**, which is the default value, the animation effect is disabled. If the animation is enabled, the component will behave in the following order.

1. The axis line, ticks, labels, and ranges will all be animated at the same time.
2. If available, pointers will be animated in the same way as [pointer animation](https://ej2.syncfusion.com/angular/documentation/linear-gauge/pointers#pointer-animation).
3. If available, annotations will be animated.

The animation of the Linear Gauge is demonstrated in the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/animation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/animation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/animation-cs1" %}

> Only the pointer of the Linear Gauge can be animated individually, not the axis lines, ticks, labels, ranges, and annotations. You can refer this [link](https://ej2.syncfusion.com/angular/documentation/linear-gauge/pointers#pointer-animation) to enable only pointer animation.


