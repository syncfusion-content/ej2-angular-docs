---
layout: post
title: How to show slider from hidden state in Angular Range Slider | Syncfusion
description: Reveal a hidden Angular Range Slider on user interaction and call the refresh method so it recomputes dimensions and renders correctly.
platform: ej2-angular
control: Range Slider 
documentation: ug
domainurl: ##DomainURL##
---

# How to show slider from hidden state in Angular Range Slider

Display a hidden Range Slider when triggered by user interaction (e.g., button click). Initialize the Slider with `display: none` CSS, then toggle its visibility and call the [`refresh`](https://ej2.syncfusion.com/javascript/documentation/api/base/component/#refresh) method to recalculate dimensions and render correctly.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/slider/hidden-slider-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/hidden-slider-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/hidden-slider-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/hidden-slider-cs1" %}
