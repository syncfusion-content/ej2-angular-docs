---
layout: post
title: Animations and transitions in Angular Carousel component | Syncfusion
description: Learn here all about Animations and transitions in Syncfusion Angular Carousel component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Carousel
documentation: ug
domainurl: ##DomainURL##
---

# Animations and transitions in Angular Carousel component

The Angular Carousel component provides built-in animation effects and extensive customization options for slide transitions. These animations enhance the user experience by creating smooth, visually appealing transitions between carousel items.

## Animations

The Carousel component offers two built-in animation effects for slide transitions. The default animation can be controlled using the [`animationEffect`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#animationEffect) property, with Slide animation applied by default.

### Fade animation

The fade animation creates a smooth opacity transition between slides, providing an elegant visual effect where the current slide gradually disappears while the next slide appears.

The following demo demonstrates the fade animation implementation:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-cs1" %}

### Custom animation

The Carousel component supports custom animation effects through the [`Custom`](https://ej2.syncfusion.com/angular/documentation/api/carousel/carouselAnimationEffect/) option of the [`animationEffect`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#animationEffect) property. Custom animations are implemented by applying CSS classes via the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#cssClass) property, allowing complete control over transition effects and timing.

The following demo demonstrates a `parallax` custom animation implementation:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/custom-animation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/custom-animation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/custom-animation-cs1" %}

## Intervals between slides

The Carousel component allows configuring different transition intervals for individual slides using the items property. Each carousel item can have its own timing configuration, providing flexibility for varied content display durations. The default interval is `5000 ms` (5 seconds).

The following example demonstrates setting different intervals for each carousel item:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-cs2" %}

**Note**: The interval property accepts values in milliseconds.

## Auto play slides

The Carousel component supports automatic slide transitions that occur continuously at specified intervals. The automatic slide progression can be controlled using the [`autoPlay`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#autoplay) property, which enables or disables the continuous slide transitions.

The following example demonstrates enabling and disabling automatic slide transitions:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-cs3" %}

## Pause on hover

By default, automatic slide transitions pause when the mouse pointer hovers over the Carousel element, providing users time to interact with the content. This behavior can be controlled using the [`pauseOnHover`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#pauseonhover) property.

The following example demonstrates configuring the carousel to continue playing slides during hover interactions:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-cs4" %}

## Looping slides

The Carousel component provides infinite slide transitions by default, automatically returning to the first slide after reaching the last slide. This continuous looping behavior can be controlled using the [`loop`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#loop) property.

The following example demonstrates enabling and disabling infinite slide transitions:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-cs5" %}

## Slide changing events

The Carousel component provides event handlers that trigger during slide transitions, enabling custom functionality and user interface updates. The [`slideChanging`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#slidechanging) event fires before a slide transition begins, while the [`slideChanged`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#slidechanged) event fires after the transition completes.

The following demo demonstrates implementing carousel event handlers for custom functionality:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-cs6" %}

## Disable touch swiping

The Carousel component supports touch-based slide navigation by default, allowing users to swipe between slides on touch-enabled devices. This touch interaction can be controlled using the [`enableTouchSwipe`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#enabletouchswipe) property.

The following example demonstrates disabling touch swipe functionality for the carousel:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-cs7" %}

## Swipe Modes

In the carousel, the [`swipeMode`](../api/carousel/#swipemode) property allows specifying whether the slide transition should occur while performing swiping via touch or mouse. The slide swiping is enabled or disabled using the bitwise operator.

The following swipe modes are available in the carousel:

* CarouselSwipeMode.Touch - Enables slide transitions using touch actions only.
* CarouselSwipeMode.Mouse - Enables slide transitions using mouse actions only.
* CarouselSwipeMode.Touch & CarouselSwipeMode.Mouse - Enables slide transitions using both touch and mouse actions.
* ~CarouselSwipeMode.Touch & ~CarouselSwipeMode.Mouse - Disables both touch and mouse actions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/swipe-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/swipe-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/swipe-cs1" %}