---
layout: post
title: Restrict the maximum toast to show in Angular Toast component | Syncfusion
description: Learn here all about Restrict the maximum toast to show in Syncfusion Angular Toast component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Restrict the maximum toast to show 
documentation: ug
domainurl: ##DomainURL##
---

# Restrict the maximum toast to show in Angular Toast component

You can restrict the maximum toast count by event callback function. You can terminate the toast displaying process by setting cancel event property in [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/toast/#beforeopen) Event.

Here below sample demonstrates restrict toast displaying up to 3. You can restrict by your own count with custom code blocks.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toast/toast-cs15/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/toast/toast-cs15/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs15/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs15" %}