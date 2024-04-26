---
layout: post
title: Animation in Angular Stepper component | Syncfusion
description:  Learn here all about Animation in Syncfusion Angular Stepper component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Stepper
documentation: ug
domainurl: ##DomainURL##
---

# Animation in Angular Stepper component

The Stepper progress state can be animated, smoothly transitioning from one step to another. You can customize the animation's `duration` and `delay` by using the [animation](https://ej2.syncfusion.com/angular/documentation/api/stepper#animation) property.

You can disable the animation by setting the [enable](https://ej2.syncfusion.com/angular/documentation/api/stepper/animationModel/#enable) property to `false`. By default, the value is `true`.

| Fields | Type | Description |
|------|------|-------------|
| [duration](https://ej2.syncfusion.com/angular/documentation/api/stepper/animationModel/#duration) | `number` | Specifies the duration of the animated transition for each step. The default value is `2000` milliseconds. |
| [delay](https://ej2.syncfusion.com/angular/documentation/api/stepper/animationModel/#delay) | `number` | Specifies the delay to initiate the animated transition for each step in milliseconds. The default value is `0`. |

The example demonstrates the animation `duration` and `delay` settings for the Stepper.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stepper/animation/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stepper/animation/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/stepper/animation/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stepper/animation" %}