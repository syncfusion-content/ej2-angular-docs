---
layout: post
title: Set Custom Animation in Angular Tab Component | Syncfusion
description: Learn here all about set custom animation in Syncfusion Essential Angular Tab component, it's elements and more.
platform: ej2-angular
control: Set custom animation 
documentation: ug
domainurl: ##DomainURL##
---

# Set Custom Animation in Angular Tab Component

Tab supports custom animations for both previous and next actions from the provided animation option of `Animation` library.
The [`animation`](https://ej2.syncfusion.com/angular/documentation/api/tab/#animation) property also allows you to set [`easing`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabActionSettings/#easing), [`duration`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabActionSettings/#duration), and various other [`effect`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabActionSettings/#effect).

Default animation is given as `SlideLeftIn` for [`previous`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabAnimationSettingsModel/#previous) tab animation and `SlideRightIn` for [`next`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabAnimationSettingsModel/#next) tab animation.
You can also disable the animation by setting the animation effect as `None`. Also, please use the following CSS to disable indicator animation for animation effect as `None`.

```CSS

.e-tab .e-tab-header:not(.e-vertical) .e-indicator, .e-tab .e-tab-header.e-vertical .e-indicator {
    transition: none;
}

```

The sample demonstrates some types of animation that suits Tab. You can check all the animation effects here.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/animation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/animation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/animation-cs1" %}
