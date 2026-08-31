---
layout: post
title: How to set custom animation in Angular Tab | Syncfusion
description: Configure custom previous and next animations on the Angular Tab via the animation property with easing, duration, and effect settings.
platform: ej2-angular
control: Tab 
documentation: ug
domainurl: ##DomainURL##
---

# How to set custom animation in Angular Tab

The Tab component supports custom animations for both previous and next tab transitions using the built-in animation options from Syncfusion's Animation library. The [`animation`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel/#animation) property configures [`easing`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabActionSettings/#easing), [`duration`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabActionSettings/#duration), and various animation [`effect`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabActionSettings/#effect) options to create smooth, visually appealing tab transitions.

The default animation configuration uses `SlideLeftIn` for [`previous`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabAnimationSettingsModel/#previous) tab animation and `SlideRightIn` for [`next`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabAnimationSettingsModel/#next) tab animation. To disable animations completely, set the animation effect to `None`.

When disabling animations by setting the effect to `None`, use the following CSS to also disable the indicator animation for a consistent experience:

```CSS

.e-tab .e-tab-header:not(.e-vertical) .e-indicator, .e-tab .e-tab-header.e-vertical .e-indicator {
    transition: none;
}

```

## Steps

1. In the component class, build a single animation object with `previous` and `next` settings, including `duration` (ms), `easing`, and `effect`.
2. Bind that object to the Tab's `animation` property.

```typescript
public animation: object = {
  previous: { duration: 400, easing: 'ease-in', effect: 'SlideLeftIn' },
  next: { duration: 400, easing: 'ease-in', effect: 'SlideRightIn' }
};
```

The following sample demonstrates various animation types that work effectively with the Tab component.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/animation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/animation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/animation-cs1" %}

## Accepted effects and performance

Common values include `FadeIn`, `FadeOut`, `SlideLeftIn`, `SlideRightIn`, `SlideUpIn`, `SlideDownIn`, and `None`. To animate only one direction, configure only that direction in the object. Use short durations (200–400 ms) on lower-end devices to maintain perceived responsiveness.

## See Also

* [Disable default Tab animation effects](./disable-default-tab-animation-effects)