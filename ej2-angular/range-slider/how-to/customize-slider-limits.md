---
layout: post
title: How to customize the slider limits in Angular Range Slider | Syncfusion
description: Customize the Angular Range Slider limit bar background color and style by overriding the e-limits CSS class to highlight restricted zones.
platform: ej2-angular
control: Range Slider
documentation: ug
domainurl: ##DomainURL##
---

# How to customize the slider limits in Angular Range Slider

Customize the Range Slider limit bar by overriding the `e-limits` CSS class. The limit bar defines the selectable range boundaries. Apply custom background colors or styles to visually distinguish the limit area from the active range. The following code snippet demonstrates how to customize the limit bar appearance.

```css

.e-slider-container.e-horizontal .e-limits {
     background-color: rgba(69, 100, 233, 0.46);
}

```

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/slider/limits-customization-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/limits-customization-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/limits-customization-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/limits-customization-cs2" %}
