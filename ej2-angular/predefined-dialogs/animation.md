---
layout: post
title: Animation in Angular Predefined dialogs component | Syncfusion
description: Learn here all about Animation in Syncfusion Angular Predefined dialogs component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Animation 
documentation: ug
domainurl: ##DomainURL##
---

# Animation in Angular Predefined dialogs component

The predefined dialogs can be animated during the open and close actions. Also, user can customize animation's `delay`, `duration` and `effect` of animation by using the `animationSettings` property.

In the below sample, `Zoom` effect is enabled. So, The Dialog will open with `ZoomIn` and close with `ZoomOut` effects.

## Alert animation

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/predefined-dialogs/alert-animation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/alert-animation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/alert-animation-cs1" %}

## Confirm animation

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/predefined-dialogs/confirm-animation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/confirm-animation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/confirm-animation-cs1" %}

## Prompt animation

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/predefined-dialogs/prompt-animation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/prompt-animation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/prompt-animation-cs1" %}