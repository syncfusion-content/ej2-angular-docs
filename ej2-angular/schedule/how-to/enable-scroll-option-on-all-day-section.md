---
layout: post
title: Enable Scroll in All-Day Section of Angular Schedule | Syncfusion
description: Learn here all about Enable scroll option on all day section in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Scheduler
documentation: ug
domainurl: ##DomainURL##
---

# Enable scroll option on all day section in Angular Schedule component

When you have a large number of appointments in the all-day row, it can be difficult to view them properly. In this case, you can enable an individual scroller for the all-day row by setting the [`enableAllDayScroll`](https://ej2.syncfusion.com/angular/documentation/api/schedule#enablealldayscroll) property to `true`, whereas its default value is `false`. When set to `true`, the all-day row displays a scroller when expanded beyond its maximum height.

> Note: This property is not applicable for Scheduler with height `auto`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs46/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs46/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs46" %}

![Scrolling](../images/schedule-scrolling.png)