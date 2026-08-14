---
layout: post
title: How to add dynamic template in Angular Toast | Syncfusion
description: Change Syncfusion Angular Toast templates dynamically when calling the show method, enabling multiple layouts from a single component.
platform: ej2-angular
control: Add dynamic template 
documentation: ug
domainurl: ##DomainURL##
---

# How to add dynamic template in Angular Toast

Toast can support to change templates in dynamically, with displaying in multiple toasts. We can change Toast properties while calling in [`show`](https://ej2.syncfusion.com/angular/documentation/api/toast/index-default#show) method.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/toast/toast-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs8" %}