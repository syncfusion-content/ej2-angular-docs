---
layout: post
title: Calendar Settings in Angular Gantt Chart Component | Syncfusion
description: Learn how to configure project and task calendars in the Syncfusion Angular Gantt Chart to manage working time, holidays, and scheduling.
keywords: angular gantt task calendar, project calendar, syncfusion gantt
platform: ej2-angular
control: Task Calendar - Gantt Chart
documentation: ug
domainurl: ##DomainURL##
---

# Calendar Settings in Angular Gantt Chart Component

The Gantt Chart component supports advanced calendar configuration through the [calendarSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt#calendarsettings) property, enabling management of working hours, holidays, and task-specific scheduling. Calendar settings control how the Gantt Chart calculates task duration, determines working days, and schedules dependencies.

The [calendarSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt#calendarsettings) property contains two key configurations:

- **Project Calendar**: Defines working hours and holidays for the entire project, applied to all tasks by default
- **Task Calendars**: Defines custom working days and holidays for specific tasks, enabling team-specific or shift-based scheduling

## Project calendar

The [calendarSettings.projectCalendar](https://ej2.syncfusion.com/angular/documentation/api/gantt/calendarSettingsModel#projectcalendar) defines the default working hours and non-working days for the entire project. All tasks follow the project calendar unless assigned a task-specific calendar.

### Configure project working hours and exceptions

Working hours are defined per day using start and end times. The following example configures the project to have working hours from 9:00 AM to 5:00 PM with a lunch break from 12:00 PM to 1:00 PM. Calendar exceptions allow overriding working hours for specific dates, enabling custom scheduling for special working days or non-working days that don't fit the standard holiday definition:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/calendar-settings/project-calendar/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/calendar-settings/project-calendar/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/calendar-settings/project-calendar" %}

### Define project holidays

Holidays are non-working dates that exclude time from task calculations. The following example defines holidays for April 10 and April 17, excluding these dates from task scheduling calculations:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/calendar-settings/project-calendar-holiday/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/calendar-settings/project-calendar-holiday/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/calendar-settings/project-calendar-holiday" %}

## Task calendars

Task calendars enable specific tasks to use custom working days and holidays instead of the project calendar. This is useful for managing work across different shifts, regions, or external teams with different availability.

### Assign task-specific calendars with exceptions

To assign a custom calendar to a task, first define the calendar in [calendarSettings.taskCalendar](https://ej2.syncfusion.com/angular/documentation/api/gantt/calendarSettingsModel#taskcalendar), then reference it using the [calendarId](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFieldsModel#calendarid) property in the task data. Calendar exceptions allow defining specific dates with custom working days, enabling team-specific scheduling adjustments such as split shifts or holidays that differ from the main schedule.

When a task is assigned a calendar through `calendarId`, that task follows only the assigned task calendar. The assigned task calendar overrides the project calendar for that task. Working days, holidays, and calendar exceptions defined in the assigned calendar are used when calculating the task schedule and working duration. Other task calendars are not considered when scheduling that task.

The following example defines two task calendars with different working days, task-specific exceptions, and assigns them to specific tasks:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/calendar-settings/task-calendar/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/calendar-settings/task-calendar/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/calendar-settings/task-calendar" %}

### Define task calendar holidays

Task calendars can include holidays that override project calendar holidays for the assigned task. These holidays are considered when calculating the task schedule and working duration. The following example configures a task calendar with specific holidays:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/calendar-settings/task-calendar-holiday/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/calendar-settings/task-calendar-holiday/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/calendar-settings/task-calendar-holiday" %}

## Configure hours per day for task durations

The [hoursPerDay](https://ej2.syncfusion.com/angular/documentation/api/gantt#hoursperday) property defines the number of hours used to represent one day when calculating task durations. Changing `hoursPerDay` recalculates day-based duration values using the existing working duration of the task. This affects how duration is displayed and calculated in days, but does not modify the task's start date, end date, or underlying working duration.

For example, a task with 32 hours of working duration is displayed as 4 days when `hoursPerDay` is set to 8. If `hoursPerDay` is changed to 16, the same task is displayed as 2 days. The task schedule remains unchanged because the underlying working duration is not modified.

The following example demonstrates how changing `hoursPerDay` affects duration calculations.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/calendar-settings/hoursperday/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/calendar-settings/hoursperday/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/calendar-settings/hoursperday" %}

> **Note:** The default `hoursPerDay` value is **8 hours**. When a task has 4 days duration with the `hoursPerDay` value of 6, the total working hours = 4 days × 6 hours = **24 hours**. If the calendar's working time is configured as 24 hours (0:00 to 24:00), these 24 hours fit within a single calendar day, so the task displays as **1 calendar day** on the chart, even though the duration specification is 4 days.

## Impact on task scheduling

Calendar settings directly affect how task duration is calculated and when tasks are scheduled:

- **Working hours**: Task durations ignore non-working hours. A 2-day task completed during 9 AM-5 PM working hours uses the same elapsed time as a 2-day task across multiple days with shorter working hours
- **Holidays**: Tasks skip over holiday dates, extending the end date accordingly to maintain the required working duration
- **Weekends**: By default, weekends are treated as non-working days when [includeWeekend](https://ej2.syncfusion.com/angular/documentation/api/gantt#includeweekend) is set to **false**
- **Task dependencies**: Dependency calculations use the predecessor task's calendar to determine when the successor task can start
- **Task calendars**: Tasks without an assigned task calendar follow the project calendar. Tasks with an assigned task calendar use the working hours, holidays, and exceptions defined in that calendar for scheduling and duration calculations.
- **Duration calculations**: Changing `hoursPerDay` recalculates day-based duration values without changing the scheduled start and end dates.

## See also

- [How to configure holidays?](/ej2-angular/gantt/holidays)
- [How to include weekends in scheduling?](/ej2-angular/gantt/scheduling-tasks#weekend-configuration)