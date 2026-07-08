---
layout: post
title: Working days in Angular Schedule component | Syncfusion
description: Learn here all about Working days in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Scheduler
documentation: ug
domainurl: ##DomainURL##
---

# Working days in Angular Schedule component

The Scheduler can be customized on various aspects as well as it inherits almost all the calendar-specific features such as options,

* To set custom time range display on Scheduler
* To set different working hours
* To set different working days
* To set different first day of the week
* To show or hide weekend days
* To show the week number

## Set working days

By default, the Scheduler considers Monday through Friday as working days (`[1, 2, 3, 4, 5]`), where 1 represents Monday, 2 represents Tuesday, and so on. Days not included in this collection are treated as non-working days. When weekend days are hidden, these non-working days are also hidden from the layout.

The Work week and Timeline Work week views display only the defined working days, whereas other views display all days and visually differentiate non-working days with an inactive cell color.

> The working or business hours depiction is valid only on the specified working days.

The following example shows how to configure the Scheduler to use Monday, Wednesday, and Friday as working days.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs89/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs89/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs89" %}

![Set Working Days](images/schedule-workdays.png)

## Hiding weekend days

The [`showWeekend`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#showweekend) property is used to either show or hide the weekend days of a week and it is not applicable on Work week view (as non-working days are usually not displayed on work week view). By default, it is set to `true`. The days which are not a part of the working days collection of a Scheduler are usually considered as non-working or weekend days.

Here, the working days are defined as [1, 3, 4, 5] on Scheduler and therefore the remaining days (0, 2, 6 – Sunday, Tuesday and Saturday) are considered as non-working or weekend days and will be hidden from all the views when [`showWeekend`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#showweekend) property is set to `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs90/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs90/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs90" %}

![Hiding Weekend Days](images/schedule-hide-weekend.png)

## Show week numbers

It is possible to show the week number count of a week in the header bar of the Scheduler by setting true to `showWeekNumber` property. By default, its default value is `false`. In Month view, the week numbers are displayed as a first column.

> The [`showWeekNumber`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#showweeknumber) property is not applicable on Timeline views, as it has the equivalent [`headerRows`](./header-rows#display-week-numbers-in-timeline-views) property to handle such requirement with additional customization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs91/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs91/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs91" %}

![Week Numbers](images/schedule-weeknumber.png)

### Different options for week numbers

By default, week numbers are shown in the Scheduler based on the first day of the year. However, the week numbers can be determined based on the following criteria.

`FirstDay` – The first week of the year is calculated based on the first day of the year.

`FirstFourDayWeek` – The first week of the year begins from the first week with four or more days.

`FirstFullWeek` – The first week of the year begins when meeting the first day of the week (firstDayOfWeek) and the first day of the year.

For more details refer to [CalendarWeekRule remarks](https://docs.microsoft.com/en-us/dotnet/api/system.globalization.calendarweekrule?view=net-5.0#remarks)

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs92/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs92/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs92" %}

 **Note**: Enable the [`showWeekNumber`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#showweeknumber) property to configure the [`weekRule`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#weekrule) property. Also, the `weekRule` property depends on the value of the [`firstDayOfWeek`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#firstdayofweek) property.

## Set working hours

Working hours indicates the work hour limit within the Scheduler, which is visually highlighted with an active color on work cells. The working hours can be set on Scheduler using the [`workHours`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/#workhours) property which is of object type and includes the following sub-options,

* [`highlight`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/workHoursModel/#highlight) – enables/disables the highlighting of work hours.
* [`start`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/workHoursModel/#start) - sets the start time of the working/business hour of a day.
* [`end`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/workHoursModel/#end) - sets the end time limit of the working/business hour of a day.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs93/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs93/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs93" %}

![Set Working Hours](images/schedule-workhours.png)

## Scheduler displaying custom hours

It is possible to display the event Scheduler layout with specific time durations by hiding the unwanted hours. To do so, set the start and end hour for the Scheduler using the [`startHour`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/#starthour) and [`endHour`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/#endhour) properties respectively.

The following code example displays the Scheduler starting from the time range 7:00 AM to 6:00 PM and the remaining hours are hidden on the UI.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs94/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs94/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs94" %}

![Displaying Custom Hours](images/schedule-displayhours.png)

## Setting start day of the week

By default, Scheduler defaults to `Sunday` as its first day of a week. To change the Scheduler's start day of a week with different day, set the [`firstDayOfWeek`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/#firstdayofweek) property with the values ranging from 0 to 6.

> Here, Sunday is always denoted as `0`, Monday as `1` and so on.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs95/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs95/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs95" %}

![Start Day of Week](images/schedule-week-firstday.png)

## Scroll to specific time and date

You can manually scroll to a specific time on Scheduler by making use of the [`scrollTo`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/#scrollto) method as depicted in the following code example.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/schedule/scroll-to-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/scroll-to-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/scroll-to-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/scroll-to-cs1" %}

### How to scroll to current time on initial load

There are scenarios where you may need to load the Scheduler displaying the system's current time on the currently visible view port area. In such cases, the Scheduler needs to be scrolled to a specific time based on the system's current time which is depicted in the following code example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs96/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs96/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs96" %}

> You can refer to our [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Scheduler example](https://ej2.syncfusion.com/angular/demos/#/material/schedule/overview) to knows how to present and manipulate data.

## See Also

* [To display the current time indicator](./timescale#highlighting-current-date-and-time)
* [To set different working hours dynamically](./how-to/set-different-work-hours)
* [To set different working hours for each resources](./resources#set-different-work-hours)
* [To set different working days for each resources](./resources#set-different-work-days)