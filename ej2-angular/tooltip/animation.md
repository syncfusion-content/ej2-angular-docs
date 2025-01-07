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

To animate the Tooltip, a set of specific animation effects is available, and it can be controlled using the [`animation`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#animation) property. The **animation** property also allows you to set the delay, the duration, and various other effects of your choice.

The [`AnimationModel`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/animationModel) is derived from base to apply the chosen animation effect, duration, etc. on Tooltips.

By default, Tooltip entrance occurs over 150 ms using the `ease-out` timing function. It exits also at 150 ms, but uses `ease-in` timing function.

The default animation effect for the Tooltip is set to `FadeIn` for its open action, and `FadeOut` for its close action.The default `duration` is set to 150 ms and `delay` is set to 0.

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

When the [`effect`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/tooltipAnimationSettings/#effect) is specified as `none`, no effect will be applied to the Tooltip, and the animation will be considered to be turned `off`.

> Some of the above animation effects suits the Tooltip better when its tip pointer is hidden.
> This can be achieved by setting the [`showTipPointer`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#showtippointer) to false.

## Animating via open/close methods

Animations can also be applied on Tooltips dynamically through [`open`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#open) and[ `close`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#close) methods. These methods accept the animation model as an optional parameter. If you pass [`TooltipAnimationSettings`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/tooltipAnimationSettings/#tooltipanimationsettings), the animation uses this model; otherwise, it uses the values from the `animation` property. It is also possible to pass different animations for Tooltips on each target.

Refer to the code snippet below to apply animations using public methods.

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
