---
layout: post
title: How to prevent toast close with swipe in Angular Toast | Syncfusion
description: Block Syncfusion Angular Toast close on mobile swipe by setting beforeClose args cancel to true when the argument type is a swipe.
platform: ej2-angular
control: Prevent toast close with mobile swipe 
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent toast close with swipe in Angular Toast

You can prevent the toast close with mobile swipe action by setting [beforeClose](https://ej2.syncfusion.com/angular/documentation/api/toast/index-default#beforeClose) argument cancel value to true while argument type as a swipe. The following code shows how to prevent toast close with mobile swipe.

The following sample demonstrates preventing toast close with mobile swipe element displaying with custom code blocks.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/toast/toast-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs13" %}