---
layout: post
title: How to show multiple toasts in positions in Angular Toast | Syncfusion
description: Display multiple Syncfusion Angular Toast elements in different positions by instantiating separate Toast components for each region.
platform: ej2-angular
control: Show multiple toasts in various positions 
documentation: ug
domainurl: ##DomainURL##
---

# How to show multiple toasts in positions in Angular Toast

In default Toast position only updates once visible toasts get destroyed. If You needs to display multiple toasts with different position means needs to initiate another toast for achieving this.

Here below sample demonstrates to add multiple toasts adding in the different position.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/toast/toast-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs17" %}