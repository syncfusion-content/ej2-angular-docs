---
layout: post
title: How to change the first day of week in Angular Calendar | Syncfusion®
description: Learn how to set a custom first day of the week in the Syncfusion Angular Calendar using the firstDayOfWeek property with values 0 to 6.
platform: ej2-angular
control: Change the first day of week 
documentation: ug
domainurl: ##DomainURL##
---

# How to change the first day of week in Angular Calendar

The Calendar provides an option to change the first day of the week by using the [`firstDayOfWeek`](https://ej2.syncfusion.com/angular/documentation/api/calendar/index-default#firstdayofweek) property.
Day of the week starts from 0(Sunday) to 6(Saturday).

> By default, the first day of week will be based on culture.

The following example demonstrates the Calendar with `Tuesday` as first day of the week.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/getting-started-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/getting-started-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/getting-started-cs10" %}