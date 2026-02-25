---
layout: post
title: Customize slider limits in Angular Range Slider component | Syncfusion
description: Learn here all about Customize slider limits in Syncfusion Angular Range Slider component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Range Slider
documentation: ug
domainurl: ##DomainURL##
---

# Customize limits in Angular Range Slider component

Customize the Range Slider limit bar by overriding the `e-limits` CSS class. The limit bar defines the selectable range boundaries. Apply custom background colors or styles to visually distinguish the limit area from the active range. The following code snippet demonstrates how to customize the limit bar appearance.

```css

.e-slider-container.e-horizontal .e-limits {
     background-color: rgba(69, 100, 233, 0.46);
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
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
