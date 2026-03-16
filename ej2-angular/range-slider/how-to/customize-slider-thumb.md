---
layout: post
title: Customize slider thumb in Angular Range Slider component | Syncfusion
description: Learn here all about Customize slider thumb in Syncfusion Angular Range Slider component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Range Slider
documentation: ug
domainurl: ##DomainURL##
---

# Customize thumb in Angular Range Slider component

Customize the Range Slider thumb (handle) appearance by overriding the `e-handle` CSS class. The following example demonstrates how to apply various thumb shapes—square, circle, and oval—and custom background images. Choose the shape that best suits your application design.

```css

.e-control.e-slider .e-handle {
    background-image: url('https://ej2.syncfusion.com/demos/src/slider/images/thumb.png');
    background-color: transparent;
    height: 25px;
    width: 25px;
}
/* square slider */
.square_slider.e-control.e-slider .e-handle {
    border-radius: 0%;
    background-color: #f9920b;
    border: 0;
}
/* circle slider */
.circle_slider.e-control.e-slider .e-handle {
    border-radius: 50%;
    background-color: #f9920b;
    border: 0;
}
/* oval slider */
.oval_slider.e-control.e-slider .e-handle {
    height: 25px;
    width: 8px;
    top: 3px;
    border-radius: 15px;
    background-color: #f9920b;
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/thumb-customization-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/thumb-customization-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/thumb-customization-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/thumb-customization-cs2" %}
