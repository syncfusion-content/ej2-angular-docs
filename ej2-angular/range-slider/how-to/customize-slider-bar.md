---
layout: post
title: Customize slider bar in Angular Range Slider component | Syncfusion
description: Learn here all about Customize slider bar in Syncfusion Angular Range Slider component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Range Slider 
documentation: ug
domainurl: ##DomainURL##
---

# Customize bar in Angular Range Slider component

Customize the Range Slider bar appearance by overriding CSS classes. By default, the slider bar uses the `e-slider-track` class. Override this class to apply custom colors, gradients, or themes to the slider bar. The following code snippet demonstrates how to apply a gradient color to the slider bar.

```css

.e-control.e-slider .e-slider-track .e-range {
           background: linear-gradient(left, #e1451d 0, #fdff47 17%, #86f9fe 50%, #2900f8 65%, #6e00f8 74%, #e33df9 83%, #e14423 100%);
}

```

You can also apply background color for a certain range depending upon slider values, using change event.

```typescript

change(args: SliderChangeEventArgs) => {
    .....
    if (sliderTrack && sliderHandle) {
    let color = 'green';
    if (args.value > 25 && args.value <= 50) {
        color = 'royalblue';
    } else if (args.value > 50 && args.value <= 75) {
        color = 'darkorange';
    } else if (args.value > 75 && args.value <= 100) {
        color = 'red';
    }
    sliderHandle.style.backgroundColor = color;
    sliderTrack.style.backgroundColor = color;
    }
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/bar-customization-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/bar-customization-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/bar-customization-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/bar-customization-cs2" %}
