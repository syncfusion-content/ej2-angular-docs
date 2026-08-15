---
layout: post
title: How to build a Time Range Slider in Angular | Syncfusion
description: Format Angular Range Slider ticks and tooltips as time values by handling the renderingTicks and change events for time-aware display.
platform: ej2-angular
control: Range Slider 
documentation: ug
domainurl: ##DomainURL##
---

# How to build a Time Range Slider in Angular

Format Range Slider values as time by using the [`renderingTicks`](https://ej2.syncfusion.com/angular/documentation/api/slider/#renderingticks) event to format tick labels and the [`change`](https://ej2.syncfusion.com/angular/documentation/api/slider/#change) event to format tooltips. The following sample demonstrates how to implement time formatting in a slider.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/slider/how-to-02-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/how-to-02-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/how-to-02-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/how-to-02-cs2" %}
