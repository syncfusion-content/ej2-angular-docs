---
layout: post
title: Animations and transitions in Angular Carousel component | Syncfusion
description: Learn here all about Animations and transitions in Syncfusion Angular Carousel component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Animations and transitions 
documentation: ug
domainurl: ##DomainURL##
---

# Animations and transitions in Angular Carousel component

## Animations

### Fade animation

In Carousel, two built-in animations are provided for slide transitions. You can disable animation using the [`animationEffect`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#animationEffect) property. By default, Slide animation is applied for the transition between slides.

The following demo depicts the example for fade animation,

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/carousel/default-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-cs1" %}

### Custom animation

In Carousel, you can use customized animation effects for slide transitions using the [`Custom`](https://ej2.syncfusion.com/angular/documentation/api/carousel/carouselAnimationEffect) option of the [`animationEffect`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#animationEffect) property and apply custom animation css via [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#cssClass) property.

The following demo depicts the example for `parallax` custom animation,

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/custom-animation-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/carousel/custom-animation-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/custom-animation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/custom-animation-cs1" %}

## Intervals between slides

Using the items property, you can set different intervals for each item to transition between slides. The default interval is `5000 ms` (5 seconds). The following example depicts the code for setting the different intervals between each item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/carousel/default-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-cs2" %}

**Note**: Interval property can accept value in terms of milliseconds.

## Auto play slides

In the carousel, all slides transitions are performed continuously after the specified or default intervals. You can enable or disable the auto slide transition using the [`autoPlay`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#autoplay) property. The following example depicts the code to enable or disable the auto slide transitions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/carousel/default-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-cs3" %}

## Pause on hover

By default, Slide transitions are paused when hovering the mouse pointer over the Carousel element. You can enable or disable this functionality using the [`pauseOnHover`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#pauseonhover) property.

The following example depicts the code to play the slides when hovering the mouse pointer over the Carousel element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/carousel/default-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-cs4" %}

## Looping slides

In the carousel, slides transitions are repeated continuously when you reach the last slide by default. You can enable or disable the infinite slide transition using the [`loop`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#loop) property. The following example depicts the code to enable or disable the infinite slide transitions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/carousel/default-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-cs5" %}

## Slide changing events

Using the [`slideChanging`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#slidechanging) or [`slideChanged`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#slidechanged) events of the Carousel component, you can perform sample end customization while the carousel items are switched.

The following demo depicts the example for carousel events,

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/carousel/default-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-cs6" %}

## Disable touch swiping

In the carousel, you can swipe the carousel slides using touch actions by default. The swipe action can be enabled or disabled using the [`enableTouchSwipe`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#enabletouchswipe) property. The following example depicts the code to disable the swipe action for the slide.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/carousel/default-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-cs7" %}

## Swipe Modes

In the carousel, the [`swipeMode`](../api/carousel/#swipemode) property allows specifying whether the slide transition should occur while performing swiping via touch or mouse. The slide swiping is enabled or disabled using the bitwise operator.

The following are the different swipe modes available in the carousel:

* CarouselSwipeMode.Touch - Allows the user to slide the slides using touch actions.
* CarouselSwipeMode.Mouse - Allows the user to slide the slides using mouse actions.
* CarouselSwipeMode.Touch & CarouselSwipeMode.Mouse - Allows the user to slide the slides using both touch and mouse actions.
* ~CarouselSwipeMode.Touch & ~CarouselSwipeMode.Mouse - Disables both touch and mouse actions.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/swipe-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/carousel/swipe-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/swipe-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/swipe-cs1" %}