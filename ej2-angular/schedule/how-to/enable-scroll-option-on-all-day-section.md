---
layout: post
title: Enable Scroll in All-Day Section of Angular Schedule | Syncfusion
description: Learn here all about Enable scroll option on all day section in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Enable scroll option on all day section 
documentation: ug
domainurl: ##DomainURL##
---

# Enable scroll option on all day section in Angular Schedule component

When you have larger number of appointments in all-day row, it is difficult to view all the appointments properly. In that case you can enable scroller option for all-day row by setting true to [`enableAllDayScroll`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#enablealldayscroll) whereas its default value is `false`. When setting this property to `true`, individual scroller for all-day row is enabled when it reaches its maximum height on expanding.

>Note: This property is not applicable for Scheduler with height `auto`.

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