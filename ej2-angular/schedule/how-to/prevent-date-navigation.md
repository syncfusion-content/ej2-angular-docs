---
layout: post
title: Prevent date navigation in Angular Schedule component | Syncfusion
description: Learn here all about Prevent date navigation in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Prevent date navigation 
documentation: ug
domainurl: ##DomainURL##
---

# Prevent date navigation in Angular Schedule component

We can prevent navigation while clicking on the date header by simply removing `e-navigate` class from header cells which can be achieved in the `renderCell` event as shown in the below demo.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs50/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs50/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs50" %}