---
layout: post
title: Animation in Angular Predefined Dialogs | Syncfusion
description: Animate Syncfusion Angular Predefined Dialogs during open and close actions by configuring the animationSettings property with delay, duration, and effect.
platform: ej2-angular
control: Animation 
documentation: ug
domainurl: ##DomainURL##
---

# Animation in Angular Predefined Dialogs

Predefined dialogs can be animated during open and close actions. Customize animation using the `animationSettings` property to configure `delay`, `duration`, and `effect`.

The following sample demonstrates the `Zoom` effect. The dialog opens with `ZoomIn` and closes with `ZoomOut`.

## Alert animation

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/predefined-dialogs/alert-animation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/alert-animation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/alert-animation-cs1" %}

## Confirm animation

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/predefined-dialogs/confirm-animation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/confirm-animation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/confirm-animation-cs1" %}

## Prompt animation

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/predefined-dialogs/prompt-animation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/prompt-animation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/prompt-animation-cs1" %}