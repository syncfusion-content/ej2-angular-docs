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

The days of the week are represented by values from 0 (Sunday) to 6 (Saturday):

* 0 - Sunday
* 1 - Monday
* 2 - Tuesday
* 3 - Wednesday
* 4 - Thursday
* 5 - Friday
* 6 - Saturday

> By default, the first day of the week is determined by the current culture. Setting the firstDayOfWeek property overrides the culture-based default.

The following example demonstrates the Calendar with `Tuesday` as the first day of the week by setting the firstDayOfWeek property to 2.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/getting-started-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/getting-started-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/getting-started-cs10" %}