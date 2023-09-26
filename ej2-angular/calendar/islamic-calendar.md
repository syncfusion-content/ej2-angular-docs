---
layout: post
title: Islamic calendar in Angular Calendar component | Syncfusion
description: Learn here all about Islamic calendar in Syncfusion Angular Calendar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Islamic calendar 
documentation: ug
domainurl: ##DomainURL##
---

# Islamic calendar in Angular Calendar component

In addition to the Gregorian calendar, the Calendar control supports displaying the Islamic calendar (Hijri calendar). **Islamic calendar** or **Hijri calendar** is a `lunar calendar` consisting of 12 months in a year of 354 or 355 days. To know more about Islamic calendar, please refer this [wikipedia](https://en.wikipedia.org/wiki/Islamic_calendar).

Also, it consists of all Gregorian calendar functionalities as like min and max date, week number, start day of the week, multi selection, enable RTL, start and depth view, localization, highlight and customize the specific dates.

By default, calendar mode is in **Gregorian**. You can enable the Islamic mode by setting the **calendarMode** as **Islamic**. Also, need to import and injecting the `IslamicService` module into the `providers` section of root `NgModule` or component class from `ej2-angular-calendars` as shown below.

> import { IslamicService, Calendar } from '@syncfusion/ej2-angular-calendars';

The following example demonstrates how to display the Islamic Calendar (Hijri Calendar).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/calendar/islamic-calendar-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/calendar/islamic-calendar-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/islamic-calendar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/islamic-calendar-cs1" %}