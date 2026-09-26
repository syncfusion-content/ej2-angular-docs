---
layout: post
title: How to restrict the maximum toast count in Angular Toast | Syncfusion
description: Cap the maximum number of Syncfusion Angular Toast elements shown at once by canceling the beforeOpen event beyond your defined limit.
platform: ej2-angular
control: Restrict the maximum toast to show 
documentation: ug
domainurl: ##DomainURL##
---

# How to restrict the maximum toast count in Angular Toast

You can restrict the maximum Angular Toast count by event callback function. You can terminate the Angular Toast displaying process by setting cancel event property in [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/toast/index-default#beforeopen) Event.

Here below sample demonstrates restrict Angular Toast displaying up to 3. You can restrict by your own count with custom code blocks.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/toast/toast-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs15" %}