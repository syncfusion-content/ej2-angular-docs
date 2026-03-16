---
layout: post
title: Animation in Angular Tooltip component | Syncfusion
description: Learn here all about Animation in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip 
documentation: ug
domainurl: ##DomainURL##
---

# Animation in Angular Tooltip component

Animate the Tooltip using the [`animation`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#animation) property to control specific animation effects. This property allows you to set the delay, duration, and various other effects.

The [`AnimationModel`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/animationModel) applies the chosen animation effect, duration, and other settings to tooltips.

By default, the tooltip enters over 150 ms using the `ease-out` timing function and exits at 150 ms using the `ease-in` timing function. The default animation effect is `FadeIn` for open actions and `FadeOut` for close actions, with a duration of 150 ms and delay of 0.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs2" %}

## Animation effects

The animation effects that are applicable to Tooltips are:

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

When the [`effect`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/tooltipAnimationSettings/#effect) is set to `none`, no animation is applied to the tooltip.

> Some animation effects work better when the tooltip tip pointer is hidden. Achieve this by setting [`showTipPointer`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#showtippointer) to `false`.

## Animating via open/close methods

Apply animations dynamically using the [`open`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#open) and [`close`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#close) methods. These methods accept an optional animation model parameter. If you pass [`TooltipAnimationSettings`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/tooltipAnimationSettings/#tooltipanimationsettings), it uses this model; otherwise, it uses values from the `animation` property. You can apply different animations to tooltips on each target.

The following code snippet demonstrates applying animations using these methods.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs3" %}

## Apply transition

The transition effect can be applied on Tooltips by using the [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#beforeopen) event as given in the following workaround code example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs4" %}
