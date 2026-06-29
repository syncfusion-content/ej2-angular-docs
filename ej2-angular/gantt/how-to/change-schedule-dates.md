---
layout: post
title: Update Project Schedule Dates in Angular Gantt Chart Component | Syncfusion
description: Learn how to programmatically update project schedule dates in the Syncfusion Angular Gantt Chart component to adjust timelines and task schedules efficiently.
platform: ej2-angular
control: Schedule dates
documentation: ug
domainurl: ##DomainURL##
---

# Update Project Schedule Dates in Angular Gantt Chart Component

The [updateProjectDates](https://ej2.syncfusion.com/angular/documentation/api/gantt#updateprojectdates) method in the Angular Gantt Chart component enables programmatic adjustment of the project’s start and end dates, seamlessly updating the timeline and task positions for efficient schedule management. By passing valid `Date` objects for the start and end dates, you can shift the entire project timeline, such as moving a project forward by a month to accommodate delays. An optional Boolean `roundOff` parameter, when set to **true**, aligns dates to the timeline’s unit (e.g., days or weeks), ensuring a clean and consistent display. Ensure the Gantt has a defined `dataSource` and [timelineSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt#timelinesettings) to render the updated schedule accurately. Use valid date formats and leverage the `roundOff` option to optimize timeline rendering for clarity.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/how-to/changescheduledates-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/how-to/changescheduledates-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/how-to/changescheduledates-cs1" %}

## See also

- [How to configure timeline settings?](https://ej2.syncfusion.com/angular/documentation/gantt/timeline)
- [How to manage task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/task-dependency)
- [How to configure critical path?](https://ej2.syncfusion.com/angular/documentation/gantt/critical-path)
