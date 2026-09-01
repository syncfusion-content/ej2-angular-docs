---
layout: post
title: How to change animation settings in Angular Context Menu | Syncfusion
description: Configure Angular Context Menu open and close animations with the animationSettings property, choosing None, SlideDown, ZoomIn, or FadeIn.
platform: ej2-angular
control: Context Menu
documentation: ug
domainurl: ##DomainURL##
---

# How to change animation settings in Angular Context Menu

The ContextMenu component provides customizable animation effects through the [`animationSettings`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/menuAnimationSettingsModel) property. This allows you to control how the context menu appears and disappears, enhancing the user experience with smooth visual transitions.

The supported animation effects for ContextMenu are:

| Effect | Functionality |
| ------------ | ----------------------- |
| `None` | Displays the context menu instantly without any animation effect. |
| `SlideDown` | Animates the context menu with a sliding motion from top to bottom. |
| `ZoomIn` | Scales the context menu from small to full size with a zoom effect. |
| `FadeIn` | Gradually increases the opacity of the context menu from transparent to visible. |

The `animationSettings` property accepts an object with three configurable options: [`effect`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/menuAnimationSettingsModel#effect) (animation type), [`duration`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/menuAnimationSettingsModel#duration) (animation time in milliseconds), and [`easing`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/menuAnimationSettingsModel#easing) (transition timing function). The default settings use the `SlideDown` effect with a `400` ms duration and the `ease` timing function.

Valid `easing` values follow the standard CSS `transition-timing-function` keywords: `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`, and the `cubic-bezier()` function.

The following sample demonstrates how to configure ContextMenu with `FadeIn` effect and a custom `duration` of `800ms`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/context-menu/template-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/template-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/template-cs2" %}