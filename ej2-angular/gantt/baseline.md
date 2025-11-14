---
layout: post
title: Baseline in Angular Gantt component | Syncfusion
description: Learn here all about Baseline in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Baseline 
documentation: ug
domainurl: ##DomainURL##
---

# Baseline in Angular Gantt component

The baseline feature in the Gantt component enables comparison between original planned schedules and actual task execution timelines. This visualization provides clear insights into schedule deviations, helping assess project performance and identify areas requiring attention. Baseline functionality displays both the original planned timeline and current progress side-by-side for comprehensive project tracking.

Before implementing baseline functionality, ensure the data source includes baseline date fields and configure the [taskFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/) object with appropriate field mappings. The baseline feature requires proper field mapping to display planned versus actual timelines effectively.

**Baseline fields**:
- [baselineStartDate](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#baselinestartdate): Represents the originally planned start date of a task. This value is used to compare against the actual start date to identify schedule deviations.
- [baselineEndDate](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#baselineenddate): Represents the originally planned end date of a task. It is used to compare against the actual end date.
- [baselineDuration](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#baselineduration): Represents the total planned duration of the task. This value is critical for baseline visualization. To represent a baseline milestone, this property must be explicitly set to **0**. Setting `baselineStartDate` and `baselineEndDate` to the same value without setting `baselineDuration` to **0** will result in a one-day baseline task, not a milestone.

## Implement baseline

To enable baseline, configure the Gantt component by setting [renderBaseline](https://ej2.syncfusion.com/angular/documentation/api/gantt/#renderbaseline) to **true**, mapping `baselineStartDate`, `baselineEndDate`, and optionally `baselineDuration` in `taskFields`. To customize appearance set the [baselineColor](https://ej2.syncfusion.com/angular/documentation/api/gantt/#baselinecolor) property or the .**e-baseline-bar** CSS class for advanced styling.

```typescript
export let projectData = [
    {
        TaskID: 1,
        TaskName: 'Project Planning',
        StartDate: new Date('02/04/2019'),
        EndDate: new Date('02/08/2019'),
        baselineStartDate: new Date('02/02/2019'),
        baselineEndDate: new Date('02/06/2019'),
        baselineDuration: '5' // Regular baseline.
    },
    {
        TaskID: 2,
        TaskName: 'Milestone Review',
        StartDate: new Date('02/10/2019'),
        EndDate: new Date('02/10/2019'),
        baselineStartDate: new Date('02/09/2019'),
        baselineEndDate: new Date('02/09/2019'),
        baselineDuration: '0' // Milestone baseline.
    }
];
public baselineColor: string = 'rgba(255, 107, 107, 0.8)'; // Semi-transparent red baseline.
```

```css
.e-gantt .e-gantt-chart .e-baseline-bar {
    height: 4px;
    border-radius: 2px;
    opacity: 0.9;
    background-color: #4CAF50; 
}
```

The following example demonstrates complete baseline configuration with proper field mapping:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/baseline/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/baseline/default-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/baseline/default-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/baseline/default-cs1" %}

> For a comprehensive demonstration of baseline functionality, explore the [interactive sample](https://ej2.syncfusion.com/angular/demos/#/tailwind3/gantt/baseline).

## Customize basline using event

You can customize the baseline bar in the Gantt chart using the [queryTaskbarInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#querytaskbarinfo) event.
 
```ts
import { IQueryTaskbarInfoEventArgs } from '@syncfusion/ej2-angular-gantt'
function queryTaskbarInfo(args: IQueryTaskbarInfoEventArgs) 
{
	var element = args.rowElement.querySelector('.e-baseline-bar ');
    if (element) 
    {
		element.style.background = 'linear-gradient(red, yellow)';
	}
}
```
