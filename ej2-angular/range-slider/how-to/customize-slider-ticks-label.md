---
layout: post
title: Customize slider ticks label in Angular Range slider component | Syncfusion
description: Learn here all about Customize slider ticks label in Syncfusion Angular Range slider component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize slider ticks label 
documentation: ug
domainurl: ##DomainURL##
---

# Customize slider ticks label in Angular Range slider component

Slider view can be customized via CSS. By overriding the slider CSS classes, you can customize the ticks. The ticks in slider allows you to easily identify the current value/values of the slider. It contains [`smallStep`](https://ej2.syncfusion.com/angular/documentation/api/slider/ticksData/#smallstep) and [`largeStep`](https://ej2.syncfusion.com/angular/documentation/api/slider/ticksData/#largestep). By default, slider has class `e-tick` for slider ticks. You can override the class as per your requirement.
Refer to the following code snippet to render ticks.

```typescript

.e-scale .e-tick.e-custom::before {
    content: '\e967';
    position: absolute;
}

```

Here, the color for rendered ticks has been applied through nth-child(`child_number`). The color is
applied to the value of the `child_number` in the slider.

```typescript

.e-scale :nth-child(1)::before {
    color: red;
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/ticks-customization-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/slider/ticks-customization-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/ticks-customization-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/ticks-customization-cs2" %}
