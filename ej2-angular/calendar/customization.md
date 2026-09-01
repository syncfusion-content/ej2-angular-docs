---
layout: post
title: Customization in Angular Calendar | Syncfusion®
description: Learn how to customize the Syncfusion Angular Calendar by using the renderDayCell event to highlight, disable, and style specific dates.
platform: ej2-angular
control: Customization 
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Angular Calendar

Calendar allows you to customize the entire appearance by using the custom CSS and [`renderDayCell`](https://ej2.syncfusion.com/angular/documentation/api/calendar/renderdaycelleventargs) event to customize each day cell. The `renderDayCell` event provides arguments such as `date` (the cell date), `isDisabled` (whether the date is disabled), `isWeekend` (whether the date is a weekend), and the element-related properties, which can be used to control per-cell rendering.

The following section demonstrates how to disable and highlight the specific dates in the Calendar.

## Disable Weekends

You can disable the weekends of every month in a Calendar by using the [`renderDayCell`](https://ej2.syncfusion.com/angular/documentation/api/calendar/renderdaycelleventargs) event. The `isDisabled` argument from this event allows you to define whether the date is to be disabled or not.

> Set `isDisabled` to true to disable the date value.

The following example demonstrates how to disable weekends of every month.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/getting-started-cs5" %}

## Day Cell Format

You can highlight the specific dates by adding the custom CSS or element to the day cell by using the [`renderDayCell`](https://ej2.syncfusion.com/angular/documentation/api/calendar/renderdaycelleventargs) event.

Below is the list of classes that provides a flexible way to customize the Calendar component.

| **Class Name** | **Description** |
| --- | --- |
| e-calendar | Applied to the calendar root element. |
| e-header | Applied to the Calendar header row. |
| e-title | Applied to the title. |
| e-icon-container | Applied to the previous and next icon container. |
| e-prev | Applied to the previous icon. |
| e-next | Applied to the next icon. |
| e-content | Applied to the calendar content area. |
| e-weekend | Applied to weekend dates. |
| e-other-month | Applied to other month dates. |
| e-day | Applied to each day cell. |
| e-today | Applied to the current date. |
| e-focus | Applied to the focused date cell. |
| e-selected | Applied to selected dates. |
| e-disabled | Applied to disabled dates. |
| e-rtl | Applied to the calendar in right-to-left mode. |
| e-bigger | Applied to the calendar in bigger render mode. |

The following example highlights the world health date (7th April every year) and world forest day (21st March every year) in a Calendar by using the custom icon and tooltip. The icon and tooltip styles are defined in the included `style.css`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/highlight-cs1/src/app.component.ts %}
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

You can highlight the weekends of every month in a Calendar by using the [`renderDayCell`](https://ej2.syncfusion.com/angular/documentation/api/calendar/renderdaycelleventargs) event. The following example demonstrates how to highlight the weekends of every month.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/highlight-weekend-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/highlight-weekend-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/highlight-weekend-cs1" %}

## See Also

* [Add the external button in the Calendar popup](./how-to/set-clear-button-in-calendar)
* [How to skip a month in Calendar](./how-to/skip-a-month-in-calendar)
* [How to change the first day of the week](./how-to/change-the-first-day-of-week)
* [How to customize the Calendar day header](./how-to/customize-the-calendar-day-header)