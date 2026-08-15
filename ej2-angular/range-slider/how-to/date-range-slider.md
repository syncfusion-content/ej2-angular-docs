---
layout: post
title: How to build a Date Range Slider in Angular Range Slider | Syncfusion
description: Format Angular Range Slider ticks and tooltips as dates by hooking the renderingTicks and tooltipChange events for date-aware display.
platform: ej2-angular
control: Range Slider 
documentation: ug
domainurl: ##DomainURL##
---

# How to build a Date Range Slider in Angular Range Slider

Create a Range Slider that displays date values by formatting ticks and tooltips. Use the [`renderingTicks`](https://ej2.syncfusion.com/angular/documentation/api/slider/#renderingticks) event to format tick labels as dates and the [`tooltipChange`](https://ej2.syncfusion.com/angular/documentation/api/slider/#tooltipchange) event to format tooltip text. The following sample demonstrates how to implement date formatting in a slider.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/slider/how-to-01-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/how-to-01-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/how-to-01-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/how-to-01-cs2" %}
