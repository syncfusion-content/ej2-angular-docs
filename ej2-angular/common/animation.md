---
layout: post
title: Animation in Angular Common control | Syncfusion
description: Learn here all about Animation in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Animation Support in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Components

**Animations** enhance the user interface by applying smooth transitions and visual effects to HTML elements through a sequence of frames. Syncfusion<sup style="font-size:70%">&reg;</sup>'s [Animation](https://ej2.syncfusion.com/documentation/api/base/animation/) library provides a robust way to implement these effects in Angular applications.

The [animate](https://ej2.syncfusion.com/documentation/api/base/animation/#animate) method animates specified HTML elements by temporarily adding the `e-animate` and `e-animation-id` attributes, along with the necessary CSS transition or animation styles, which are removed once the effect completes.

## Animation Effects

Animation effects determine how elements transform visually. Specify an effect using the [name](https://ej2.syncfusion.com/documentation/api/base/animation/#name) property of the Animation class.

The base Animation library supports the following common effects (note: some components provide additional or composite effects; refer to individual component documentation for specifics):

- **Fade**: `FadeIn`, `FadeOut` — Elements gradually appear or disappear.
- **Zoom**: `ZoomIn`, `ZoomOut` — Elements scale up or down in size.
- **Slide**: `SlideLeftIn`, `SlideLeftOut`, `SlideRightIn`, `SlideRightOut`, `SlideUpIn`, `SlideUpOut`, `SlideDownIn`, `SlideDownOut` — Elements slide into or out of view from different directions.
- **Rotate**: `RotateIn`, `RotateOut` – Rotate elements during transition
- **Scale**: `ScaleIn`, `ScaleOut` – Resize elements smoothly
For the full and up-to-date list of supported effects, see the [Effect API reference](https://ej2.syncfusion.com/documentation/api/base/effect/#effect). Effects like Rotate or pure Scale are not natively supported in the base library and may be available only in specific components.

The following example demonstrates the `FadeOut` and `ZoomOut` effects:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/animation-multiple-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/animation-multiple-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/animation-multiple-cs1" %}

## Animation Timing Properties

### Duration

The [duration](https://ej2.syncfusion.com/documentation/api/base/animation/#duration) property sets the length of the animation in milliseconds.

A value of `2000` ms results in a 2-second animation. Shorter durations create faster transitions, while longer ones produce slower, more deliberate effects.

Example with a `5000 ms` duration:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/animation-multiple-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/animation-multiple-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/animation-multiple-cs2" %}

### Delay

The [delay](https://ej2.syncfusion.com/documentation/api/base/animation/#delay) property defines the wait time (in milliseconds) before the animation begins.

A `2000` ms delay postpones the start by 2 seconds, which is useful for creating sequenced or staggered animations.

Example with a `2000ms` delay:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/animation-multiple-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/animation-multiple-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/animation-multiple-cs3" %}

## Enable or Disable Animations Globally

Use the `setGlobalAnimation` function from `@syncfusion/ej2-base` to control animations across all Syncfusion Angular components:

- `GlobalAnimationMode.Enable` — Enables animations everywhere, overriding component defaults.
- `GlobalAnimationMode.Disable` — Disables all script-based animations.
- `GlobalAnimationMode.Default` — Respects each component's individual animation settings.

Example disabling animations globally:

{% tabs %}
{% highlight js tabtitle="~/src/src/app.component.ts" %}

import { GlobalAnimationMode, setGlobalAnimation } from "@syncfusion/ej2-base";

setGlobalAnimation(GlobalAnimationMode.Disable);

{% endhighlight %}
{% endtabs %}

> Note: The `setGlobalAnimation` method affects only animations managed by the Syncfusion Animation library (script-level). It does not impact CSS-defined animations applied via classes or inline styles.