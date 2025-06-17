---
layout: post
title: Animation in Angular Common control | Syncfusion
description: Learn here all about Animation in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Animation support in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Components

**Animations** enhance the user interface by executing a series of frames, resulting in smooth transitions and effects. Syncfusion's [Animation](https://ej2.syncfusion.com/documentation/api/base/animation/) library enables these animations effectively.

The [animate](https://ej2.syncfusion.com/documentation/api/base/animation/#animate) method aids in animating HTML elements by temporarily applying `e-animate` and `e-animation-id` attributes, alongside CSS styles, for the effect duration.

## Animation effects

Animation effects are visual changes over time for HTML elements. Various [effects](https://ej2.syncfusion.com/documentation/api/base/effect/#effect) are supported, specified using the [name](https://ej2.syncfusion.com/documentation/api/base/animation/#name) property.

Example code utilizing the `FadeOut` and `ZoomOut` animation effects:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/animation-multiple-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/animation-multiple-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/animation-multiple-cs1" %}

## Animation duration

The animation [duration](https://ej2.syncfusion.com/documentation/api/base/animation/#duration) defines the total time an animation takes to run, measured in milliseconds.

For instance, an animation with a `2000ms` duration completes in 2 seconds. The duration impacts the animation pace—shorter times yield faster movements, while longer durations slow it down.

Example utilizing `5000ms` for animation effects:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/animation-multiple-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/animation-multiple-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/animation-multiple-cs2" %}

## Animation delay

An animation [delay](https://ej2.syncfusion.com/documentation/api/base/animation/#delay) indicates the wait time before an animation initiates, also in milliseconds.

For example, a `2000ms` delay pauses the animation for 2 seconds before it starts. This is valuable for sequential animations or event-triggered actions.

Example using a `2000ms` delay:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/animation-multiple-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/animation-multiple-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/animation-multiple-cs3" %}

## Enable or disable animation globally

Control animations for all Angular components globally with the `setGlobalAnimation` method:

- `GlobalAnimationMode.Enable` – Activates animations for all components.
- `GlobalAnimationMode.Disable` – Deactivates animations for all components.
- `GlobalAnimationMode.Default` – Respects the component-specific animation settings.

The example below demonstrates disabling animations:

{% tabs %}
{% highlight js tabtitle="~/src/src/app.component.ts" %}

import { GlobalAnimationMode, setGlobalAnimation } from "@syncfusion/ej2-base";

setGlobalAnimation(GlobalAnimationMode.Disable);

{% endhighlight %}
{% endtabs %}

> `setGlobalAnimation` method controls script-level animations only, and it is not applicable for direct CSS-level animations (animations defined from CSS classes or properties).