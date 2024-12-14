---
layout: post
title: Prevent State Change in Angular Switch component | Syncfusion
description: Learn here all about Prevent State Change in Syncfusion Angular Switch component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Prevent State Change 
documentation: ug
domainurl: ##DomainURL##
---

# Prevent State Change in Angular Switch component

The [beforeChange](https://ej2.syncfusion.com/angular/documentation/api/switch/#beforechange) event is triggered before the switch's state is altered. This event provides an opportunity to intercept and potentially cancel the change action before it is applied. It allows for implementing conditional logic or validating the change prior to it being rendered on the UI.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/switch/before-change-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/switch/before-change-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/switch/before-change-cs1" %}