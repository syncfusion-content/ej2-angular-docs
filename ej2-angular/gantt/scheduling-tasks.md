---
layout: post
title: Scheduling tasks in Angular Gantt component | Syncfusion
description: Learn how to configure task scheduling modes, types, duration units, working time, and holidays in the Syncfusion Angular Gantt component.
platform: ej2-angular
control: Scheduling tasks
documentation: ug
domainurl: ##DomainURL##
---

# Scheduling tasks in Angular Gantt component

Task scheduling in the Angular Gantt component defines and visualizes task start dates, durations, and end dates as taskbars in a project timeline, enabling precise planning and tracking. Configure scheduling with properties like [taskFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskfields) for mapping task data, [taskMode](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskmode) for auto or manual validation, [taskType](https://ej2.syncfusion.com/angular/documentation/api/gantt/#tasktype) for fixed unit, work, or duration, and [durationUnit](https://ej2.syncfusion.com/angular/documentation/api/gantt/#durationunit) for day, hour, or minute units. Working time, set via [dayWorkingTime](https://ej2.syncfusion.com/angular/documentation/api/gantt/#dayworkingtime), and non-working periods, like weekends or holidays, ensure realistic calculations. Events like [dataBound](https://ej2.syncfusion.com/angular/documentation/gantt/events#databound) customize scheduling logic on run-time. Taskbars include ARIA labels for accessibility, describing start, end, and duration, and adapt to responsive designs, though narrow screens may require scrolling for long timelines.

## Configure scheduling modes

Scheduling modes control task date validation:
- **Auto** (default): Validates dates based on dependencies, working time, holidays, and weekends. Parent tasks adjust to child tasks' minimum start and maximum end dates.
- **Manual**: Allows custom dates without automatic validation, editable for parent tasks.
- **Custom**: Renders both auto and manual tasks from the data source.

Configure using:
- [taskMode](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskmode): Sets global mode.
- [taskFields.manual](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#manual): Sets per-task mode.

### Automatically scheduled Tasks

The following example configures auto scheduling:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/task-scheduling/automatic-tasks-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/task-scheduling/automatic-tasks-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/task-scheduling/automatic-tasks-cs1" %}

### Manually scheduled Tasks

The following example configures manual scheduling:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/task-scheduling/manual-tasks-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/task-scheduling/manual-tasks-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/task-scheduling/manual-tasks-cs1" %}

### Custom scheduled

The following example mixes auto and manual tasks:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/task-scheduling/custom-tasks-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/task-scheduling/custom-tasks-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/task-scheduling/custom-tasks-cs1" %}

## Configure task types

Task types define how changes to duration, work, or resource units affect other properties:
- **FixedUnit** (default): Adjusts duration when work changes, maintaining unit allocation.
- **FixedWork**: Adjusts duration when units change, maintaining work amount.
- **FixedDuration**: Adjusts units when work changes, maintaining duration.

Configure using:
- [taskType](https://ej2.syncfusion.com/angular/documentation/api/gantt/#tasktype): Sets global type.
- [taskFields.type](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#type): Sets per-task type.

The following example configures task types:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/work/tasktype-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/work/tasktype-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/work/tasktype-cs1" %}

## Configure duration units

Duration units determine how task length is measured and calculated within the project. The Gantt component supports three duration units that can be applied at both project and individual task levels.

The Gantt component supports the following duration units:
- **Day**: Standard for general planning.
- **Hour**: For detailed task management.
- **Minute**: For short-duration tasks.

Configure using:
- [durationUnit](https://ej2.syncfusion.com/angular/documentation/api/gantt/#durationunit): Sets global unit (default: `day`).
- [taskFields.durationUnit](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#durationunit): Maps per-task units.
- Duration field values: Includes units directly (e.g., "5 minutes").

The following example maps duration units:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/scheduling-tasks/mapping-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/scheduling-tasks/mapping-cs2/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/scheduling-tasks/mapping-cs2/src/data.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/scheduling-tasks/mapping-cs2" %}

**Defining duration unit with duration value:**
The following example defines units in duration values:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/scheduling-tasks/durationfield-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/scheduling-tasks/durationfield-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/scheduling-tasks/durationfield-cs2" %}

## Enable unscheduled tasks

Unscheduled tasks lack start date, end date, or duration, visualized as milestones or single-day tasks. Enable with [allowUnscheduledTasks](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowunscheduledtasks) set to **true** (default: **false**), defaulting to a 1-day duration from the project start.

Available unscheduled task types:
- **Start date only**

    Tasks with only a start date defined, allowing for open-ended planning.

    ![Start date only task](images/startDate-only.png)

- **End date only** 

    Tasks with only an end date defined, useful for deadline-driven activities.

    ![End date only task](images/endDate-only.png)

- **Duration only**

    Tasks with only duration specified, providing flexibility in scheduling timing.

    ![Duration only task](images/duration-only.png)

- **Milestone**

    Special tasks with zero duration representing key project events or deliverables.

    ![Milestone task](images/milestone.png)

The following example enables unscheduled tasks:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/scheduling-tasks/unscheduledtasks-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/scheduling-tasks/unscheduledtasks-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/scheduling-tasks/unscheduledtasks-cs1" %}

### Convert to milestone using method

You can convert a task into a milestone using the [ConvertToMilestone](https://ej2.syncfusion.com/angular/documentation/api/gantt/index-default#converttomilestone) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/scheduling-tasks/unscheduledtasks-method-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/scheduling-tasks/unscheduledtasks-method-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/scheduling-tasks/unscheduledtasks-method-cs1" %}

## Configure working time range

Working time ranges define productive hours per day, ensuring accurate scheduling calculations. Configure with [dayWorkingTime](https://ej2.syncfusion.com/angular/documentation/api/gantt/#dayworkingtime) sets project-wide working hours.

The following example sets working hours from 9 AM to 6 PM:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/scheduling-tasks/workingtimerange-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/scheduling-tasks/workingtimerange-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/scheduling-tasks/workingtimerange-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/scheduling-tasks/workingtimerange-cs1" %}

## Configure weekends and non-working days

Non-working days represent periods when project work cannot be performed, such as weekends, holidays, or planned maintenance periods. These settings ensure realistic project scheduling by excluding non-productive time from calculations.

### Configure work week
Define which days of the week are considered working days using the [workWeek](https://ej2.syncfusion.com/angular/documentation/api/gantt/#workweek) property.

The following example excludes Monday and Tuesday:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/scheduling-tasks/changenonworkingday-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/scheduling-tasks/changenonworkingday-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/scheduling-tasks/changenonworkingday-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/scheduling-tasks/changenonworkingday-cs1" %}

### Weekend configuration
Configure weekends with:
- Default behavior: Saturday and Sunday are non-working.
- Timeline display: [timelineSettings.showWeekend](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineSettings/#showweekend) controls visibility.
- Working weekends: [includeWeekend](https://ej2.syncfusion.com/angular/documentation/api/gantt/#includeweekend) set to **true** includes weekends.

## Customize scheduling with events

Customize scheduling with:
- [dataBound](https://ej2.syncfusion.com/angular/documentation/gantt/events#databound): Adjusts task scheduling after data binding, e.g., switching auto-scheduled tasks to manual mode if their start date precedes the project start date.

The following example uses `dataBound` to switch auto-scheduled tasks to manual mode if their start date is before the project start date (04/01/2025):

```typescript
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, GanttModule } from '@syncfusion/ej2-angular-gantt';

@Component({
    selector: 'app-root',
    template: `
        <ejs-gantt #gantt id='ganttContainer' [dataSource]="data" height="450px" taskMode="Custom"
                   [taskFields]="taskSettings" (dataBound)="dataBound($event)">
        </ejs-gantt>
    `,
    standalone: true,
    imports: [GanttModule]
})

export class AppComponent {
    @ViewChild('gantt', { static: true })
    public ganttChart: GanttComponent;
    public projectStartDate: Date = new Date('04/01/2025');
    public data: object[] = [
        { TaskID: 1, TaskName: 'Plan project', StartDate: new Date('04/03/2025'), Duration: 5, isManual: false },
        { TaskID: 2, TaskName: 'Develop feature', StartDate: new Date('04/03/2025'), Duration: 7, isManual: false },
        { TaskID: 3, TaskName: 'Test module', StartDate: new Date('03/31/2025'), Duration: 3, isManual: false }
    ];

    public taskSettings: object = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        manual: 'isManual'
    };

    public dataBound(args: object): void {
        const tasks = Array.isArray(this.ganttChart.dataSource) ? this.ganttChart.dataSource : [];
        tasks.forEach((task: any) => {
            if (!task.isManual && task.StartDate && new Date(task.StartDate) < this.projectStartDate) {
                task.isManual = true; // Switch to manual mode.
                this.ganttChart.refresh(); // Refresh Gantt to reflect changes.
            }
        });
    }
}
```

## See also
- [How to configure task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/taskdependency)
- [How to manage resources?](https://ej2.syncfusion.com/angular/documentation/gantt/resources)
- [How to configure holidays?](https://ej2.syncfusion.com/angular/documentation/gantt/holidays)