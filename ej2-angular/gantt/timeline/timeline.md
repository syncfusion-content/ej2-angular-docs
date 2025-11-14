---
layout: post
title: Timeline in Angular Gantt component | Syncfusion
description: Learn how to configure timelines in the Syncfusion Angular Gantt component with view modes, zooming, weekend highlighting, and templates.
platform: ej2-angular
control: Timeline
documentation: ug
domainurl: ##DomainURL##
---

# Timeline in Angular Gantt component

The timeline in the Angular Gantt component represents project durations as cells with defined units and formats, supporting in-built view modes like Hour-Minute, Day-Hour, Week-Day, Month-Week, Year-Month, and Minutes for flexible visualization. Configure modes using the [timelineViewMode](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineViewMode/) property, with top and bottom tiers customized via [topTier.unit](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#unit) and [bottomTier.unit](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#unit) in [timelineSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineSettings/). This enables detailed views, such as weekly overviews with daily breakdowns for projects, ensuring accurate timeline representation.

## Configure timeline view modes

Set the timeline view mode using the [timelineViewMode](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineViewMode/) property, with top tier displaying broader units (e.g., weeks) and bottom tier finer ones (e.g., days), ideal for project schedules.

### Week timeline mode

In Week mode, the top tier shows weeks and the bottom tier days, suitable for short-term project tracking.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/timeline/week-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/timeline/week-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/timeline/week-cs1" %}

### Month timeline mode

In Month mode, the top tier shows months and the bottom tier weeks, ideal for medium-term planning.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/timeline/month-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/timeline/month-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/timeline/month-cs1" %}

### Year timeline mode

In Year mode, the top tier shows years and the bottom tier months, suitable for long-term projects.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/timeline/year-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/timeline/year-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/timeline/year-cs1" %}

### Day timeline mode

In Day mode, the top tier shows days and the bottom tier hours, ideal for detailed daily scheduling.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/timeline/day-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/timeline/day-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/timeline/day-cs1" %}

### Hour timeline mode

In Hour mode, the top tier shows hours and the bottom tier minutes, perfect for minute-level task tracking.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/timeline/hour-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/timeline/hour-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/timeline/hour-cs1" %}

### Minutes timeline mode

In Minutes timeline mode, the tier displays minute-level intervals, ideal for tracking short-duration tasks with high precision.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/timeline/minutes-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/timeline/hour-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/timeline/hour-cs1" %}

## Customize week start day

In the Gantt component, you can customize the week start day using the [weekStartDay](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineSettings/#weekstartday) property. By default, the [weekStartDay](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineSettings/#weekstartday) is set to **0**, which specifies the **Sunday** as a start day of the week. But, you can customize the week start day by using the following code example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/timeline/week-startday-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/timeline/week-startday-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/timeline/week-startday-cs1" %}

## Customize automatic timescale update action

In the Gantt component, the schedule timeline will be automatically updated when the tasks date values are updated beyond the project start date and end date ranges. This can be enabled or disabled using the [updateTimescaleView](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineSettings/#updatetimescaleview) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/timeline/timescale-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/timeline/timescale-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/timeline/timescale-cs1" %}

## Dynmically change timeline mode

You can dynamically change the timeline mode in the Gantt Chart by updating the [timelineSettings.timelineViewMode](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineViewMode/) property using the [change](https://ej2.syncfusion.com/angular/documentation/api/combo-box/index-default#change) event of the [ComboBox](https://ej2.syncfusion.com/angular/documentation/combo-box/getting-started) component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/timeline/change-timeline-mode/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/timeline/change-timeline-mode/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/timeline/change-timeline-mode" %}

## Timeline cells tooltip

In the Gantt component, you can enable or disable the mouse hover tooltip of timeline cells using the [timelineSettings.showTooltip](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineSettings/#showtooltip) property. The default value of this property is **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/tooltip/timelinecell-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/tooltip/timelinecell-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/tooltip/timelinecell-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/tooltip/timelinecell-cs1" %}

## Highlight weekends

Highlight weekends by setting [showWeekend](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineSettings/#showweekend) to **true** and [workWeek](https://ej2.syncfusion.com/angular/documentation/api/gantt/#workweek) to define weekdays, aiding in identifying non-working days in a project schedule.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/timeline/show-weekend-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/timeline/show-weekend-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/timeline/show-weekend-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/timeline/show-weekend-cs1" %}

**Limitations:**
* The `showWeekend` feature does not support baselines and not compatible with the manual task mode.
* Non-working hours cannot be excluded when `showWeekend` is set to **false**.
* Holidays are not excluded from the timeline if `showWeekend` is set to **false**.

## Navigating Gantt Timeline

You can adjust the Gantt chart view by shifting the timeline forward or backward by one unit using the following methods:

- [previousTimeSpan](https://ej2.syncfusion.com/angular/documentation/api/gantt/index-default#previoustimespan): Moves the timeline backward by one unit from the current start point.

- [nextTimeSpan](https://ej2.syncfusion.com/angular/documentation/api/gantt/index-default#nexttimespan): Moves the timeline forward by one unit from the current end point.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/timeline/span-time-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/timeline/span-time-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/timeline/span-time-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/timeline/span-time-cs1" %}

## Timeline template

In the Gantt component, you can customize timeline cells using the [timelineTemplate](https://ej2.syncfusion.com/angular/documentation/api/gantt/#timelineTemplate) property, allowing for the customization of HTML content within timeline cells. This feature enhances the visual appeal and enables personalized functionality.

When designing the timeline cells, you can utilize the following context properties within the template:

* `date`: Defines the date of the timeline cells.
* `value`: Defines the formatted date value that will be displayed in the timeline cells.
* `tier`: Defines whether the cell is part of the top or bottom tier.

The following code example how to customize the top tier to display the week's weather details and the bottom tier to highlight working and non-working days, with formatted text for holidays.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/tooltip/timelinecell-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/tooltip/timelinecell-cs2/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/tooltip/timelinecell-cs2/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/tooltip/timelinecell-cs2" %}

## See also
- [How to configure taskbars?](https://ej2.syncfusion.com/angular/documentation/gantt/taskbar)
- [How to zoom the timeline?](https://ej2.syncfusion.com/angular/documentation/gantt/timeline/zooming)
- [How to configure non-working days?](https://ej2.syncfusion.com/angular/documentation/gantt/scheduling-tasks#weekend--non-working-days)