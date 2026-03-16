---
layout: post
title: Animation in Angular Tooltip component | Syncfusion
description: Learn here all about Animation in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Animation 
documentation: ug
domainurl: ##DomainURL##
---

# Animation in Angular Tooltip component

Animate the tooltip using specific animation effects controlled by the `animation` property. Set the delay, duration, and various animation effects of your choice.

[`AnimationModel`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/animationModel) applies the chosen animation effect and duration to tooltips.

By default, the tooltip entrance occurs over 150 ms using the `ease-out` timing function and exits at 150 ms using the `ease-in` timing function.

The default animation effects are `FadeIn` for opening and `FadeOut` for closing. The default `duration` is 150 ms and `delay` is 0.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs22/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs22/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs22" %}

## Animation effects

The following animation effects are available for tooltips:

* FadeIn
* FadeOut
* FadeZoomIn
* FadeZoomOut
* FlipXDownIn
* FlipXDownOut
* FlipXUpIn
* FlipXUpOut
* FlipYLeftIn
* FlipYLeftOut
* FlipYRightIn
* FlipYRightOut
* ZoomIn
* ZoomOut
* None

When `effect` is set to `none`, no animation is applied to the tooltip.

> Some animation effects work better when the tip pointer is hidden. Set `showTipPointer` to `false` to hide it.

## Animating via open/close methods

Apply animations dynamically to tooltips using the `open` and `close` methods. These methods accept the animation model as an optional parameter. If you pass `TooltipAnimationSettings`, that model is used; otherwise, the values from the `animation` property are used. You can apply different animations to tooltips on each target.

Refer to the following code snippet to apply animations using public methods:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs23/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs23/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs23" %}

## Apply transition

Apply transition effects to tooltips using the `beforeOpen` event as shown in the following code example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs24/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs24/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs24" %}
