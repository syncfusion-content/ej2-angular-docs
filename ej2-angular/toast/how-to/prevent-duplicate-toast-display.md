---
layout: post
title: Prevent duplicate in Angular Toast Component | Syncfusion
description: Learn here all about Prevent duplicate toast display in Syncfusion Essential Angular Toast component, it's elements and more.
platform: ej2-angular
control: Prevent duplicate toast display 
documentation: ug
domainurl: ##DomainURL##
---

# Prevent duplicate toast display in Angular Toast Component

You can prevent identical same toast displaying in a screen by event function. You can terminate the toast displaying process by setting cancel event property in [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/toast/#beforeopen) Event.

Here below sample demonstrates preventing duplicate title Toast element displaying, with custom code blocks.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toast/toast-cs12/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/toast/toast-cs12/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs12" %}