---
layout: post
title: Customization in Angular Calendar component | Syncfusion
description: Learn here all about Customization in Syncfusion Angular Calendar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customization 
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Angular Calendar component

Calendar allows you to customize the entire appearance by using the custom CSS and [`renderDayCell`](https://ej2.syncfusion.com/angular/documentation/api/calendar/renderDayCellEventArgs/#renderdaycelleventargs) event to customize the each day cell.

This following section demonstrates how to disable, highlights the specific dates in the Calendar.

## Disable Weekends

You can disable the weekends of every month in a Calendar by using the [`renderDayCell`](https://ej2.syncfusion.com/angular/documentation/api/calendar/renderDayCellEventArgs/#renderdaycelleventargs) event. The `isDisabled` argument from this event allows you to define whether the date to be disabled or not.

> Set [`isDisabled`](https://ej2.syncfusion.com/angular/documentation/api/calendar/renderDayCellEventArgs/#renderdaycelleventargs) to true to disable the date value.

The following example demonstrates how to disable weekends of every month.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/calendar/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/calendar/getting-started-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/getting-started-cs5" %}

## Day Cell Format

You can highlight the specific dates by adding the custom CSS or element to the day cell by using [`renderDayCell`](https://ej2.syncfusion.com/angular/documentation/api/calendar/renderDayCellEventArgs/#renderdaycelleventargs).

Below is the list of classes that provides the flexible way to customize the Calendar component.

| **Class Name** | **Description** |
| --- | --- |
| e-calendar | Applied to Calendar. |
| e-header | Applied to header.|
| e-title |Applied to title. |
| e-icon-container | Applied to previous and next icon container.|
| e-prev |  Applied to previous icon.|
| e-next | Applied to next icon.|
| e-weekend | Applied to weekend dates.|
| e-other-month |  Applied to other month dates.|
| e-day | Applied to each day cell.|
| e-selected | Applied to selected dates.|
| e-disabled | Applied to disabled dates.|

The following example highlights the world health date (7th April every year) and world forest day (21st March every year) in a Calendar by using the custom icon and tooltip.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/calendar/highlight-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/calendar/highlight-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="style.css" %}
{% include code-snippet/calendar/highlight-cs1/src/style.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/highlight-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/highlight-cs1" %}

## Highlight Weekends

You can highlight the weekends of every month in a Calendar by using the [`renderDayCell`](https://ej2.syncfusion.com/angular/documentation/api/calendar/renderDayCellEventArgs/#renderdaycelleventargs) event. The following example demonstrates how to highlights the weekends of every month.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/calendar/highlight-weekend-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/calendar/highlight-weekend-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/highlight-weekend-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/highlight-weekend-cs1" %}

## See Also

* [Add the external button in the Calendar popup](./how-to/set-clear-button-in-calendar)
* [How to skip a month in Calendar](./how-to/skip-a-month-in-calendar)
* [How to change the first day of week](./how-to/change-the-first-day-of-week)
* [How to customize the Calendar day header](./how-to/customize-the-calendar-day-header)