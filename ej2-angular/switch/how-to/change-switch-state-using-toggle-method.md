---
layout: post
title: How to change switch state using toggle method in Angular Toggle Switch Button | Syncfusion
description: Toggle Angular Toggle Switch Button state programmatically using the toggle method and handle change events.
platform: ej2-angular
control: Change switch state using toggle method 
documentation: ug
domainurl: ##DomainURL##
---

# How to change switch state using toggle method in Angular Toggle Switch Button

This section explains about how to toggle between the switch states using [`toggle`](https://ej2.syncfusion.com/angular/documentation/api/switch/#toggle) method.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/switch/text-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/switch/text-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/switch/text-cs2" %}

> Switch triggers [`change`](https://ej2.syncfusion.com/angular/documentation/api/switch/#change) event on every state stage to perform custom operations.