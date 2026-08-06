---
layout: post
title: Prevent Date Navigation in Angular Scheduler | Syncfusion
description: Learn how to prevent date navigation in the Syncfusion Angular Scheduler to lock the view on a specific date or range.
platform: ej2-angular
control: Scheduler
documentation: ug
domainurl: ##DomainURL##
---

# Prevent Date Navigation in Angular Scheduler

We can prevent navigation while clicking on the date header by simply removing `e-navigate` class from header cells which can be achieved in the [`renderCell`](https://ej2.syncfusion.com/angular/documentation/api/schedule#rendercell) event as shown in the below demo.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs50/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs50/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs50" %}