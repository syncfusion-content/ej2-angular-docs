---
layout: post
title: Prevent toast close with mobile swipe in Angular Toast component | Syncfusion
description: Learn here all about Prevent toast close with mobile swipe in Syncfusion Angular Toast component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Prevent toast close with mobile swipe 
documentation: ug
domainurl: ##DomainURL##
---

# Prevent toast close with mobile swipe in Angular Toast component

You can prevent the toast close with mobile swipe action by setting [beforeClose](https://ej2.syncfusion.com/angular/documentation/api/toast/#beforeClose) argument cancel value to true while argument type as a swipe. The following code shows how to prevent toast close with mobile swipe.

The following sample demonstrates preventing toast close with mobile swipe element displaying with custom code blocks.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toast/toast-cs13/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/toast/toast-cs13/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs13" %}