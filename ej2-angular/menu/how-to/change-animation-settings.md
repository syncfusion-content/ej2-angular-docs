---
layout: post
title: Change animation settings in Angular Menu component | Syncfusion
description: Learn here all about Change animation settings in Syncfusion Angular Menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Menu 
documentation: ug
domainurl: ##DomainURL##
---

# Customize animation settings in Angular Menu component

You can customize the animation behavior of the Angular Menu component using the [`animationSettings`](https://ej2.syncfusion.com/angular/documentation/api/menu/menuAnimationSettingsModel/) property. This allows you to control how the menu appears and disappears, enhancing the user experience with smooth transitions.

## Available animation effects
The following animation effects are supported:

| Effect | Functionality |
| ------------ | ----------------------- |
| None | Specifies the sub menu transform with no animation effect. |
| SlideDown | Specifies the sub menu transform with slide down effect. |
| ZoomIn | Specifies the sub menu transform with zoom in effect. |
| FadeIn | Specifies the sub menu transform with fade in effect. |

The following sample illustrates how to open Menu with `FadeIn` [`effect`](https://ej2.syncfusion.com/angular/documentation/api/menu/menuAnimationSettingsModel/#effect) with the [`duration`](https://ej2.syncfusion.com/angular/documentation/api/menu/menuAnimationSettingsModel/#duration) of `800ms`. Also we can set [`easing`](https://ej2.syncfusion.com/angular/documentation/api/menu/menuAnimationSettingsModel/#easing) for menu items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/getting-started-cs5" %}