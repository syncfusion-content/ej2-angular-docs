---
layout: post
title: How to customize slider ticks label in Angular Range Slider | Syncfusion
description: Style individual Angular Range Slider ticks with custom colors, icons, and per-position styling using the e-tick class and nth-child selectors.
platform: ej2-angular
control: Range Slider
documentation: ug
domainurl: ##DomainURL##
---

# How to customize slider ticks label in Angular Range Slider

Customize slider ticks to enhance visual reference points for slider values. Ticks display at intervals defined by [`smallStep`](https://ej2.syncfusion.com/angular/documentation/api/slider/ticksData/#smallstep) and [`largeStep`](https://ej2.syncfusion.com/angular/documentation/api/slider/ticksData/#largestep). Override the default `e-tick` CSS class to apply custom colors, icons, and styles. The following code snippet demonstrates how to customize tick appearance.

```typescript

.e-scale .e-tick.e-custom::before {
    content: '\e967';
    position: absolute;
}

```

Use the CSS `:nth-child()` selector to apply different colors to specific tick positions. This allows individual ticks to display unique colors based on their position in the slider.

```typescript

.e-scale :nth-child(1)::before {
    color: red;
}

```

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/slider/ticks-customization-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/ticks-customization-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/ticks-customization-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/ticks-customization-cs2" %}
