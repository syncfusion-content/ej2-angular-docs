---
layout: post
title: Timeline in Angular Gantt component | Syncfusion
description: Learn here all about Timeline in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Timeline 
documentation: ug
domainurl: ##DomainURL##
---

# Timeline in Angular Gantt component

In the Gantt component, timeline is used to represent the project duration as individual cells with defined unit and formats.

## Timeline view modes

Gantt contains the following in-built timeline view modes:

* Hour – Minute
* Day – Hour
* Week – Day
* Month – Week
* Year – Month

Timescale mode in the Gantt component can be defined using the [`timelineViewMode`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineViewMode/) property, and you can define a timescale mode for the top tier and bottom tier using the [`topTier.unit`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#unit) and [`bottomTier.unit`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineTierSettings/#unit) properties.

### Week timeline mode

In the `Week` timeline mode, the upper part of the schedule header displays the weeks, whereas the bottom half of the header displays the days. Refer to the following code example.

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

In the `Month` timeline mode, the upper part of the schedule header displays the months, whereas the bottom header of the schedule displays its corresponding weeks. Refer to the following code example.

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

In the `Year` timeline mode, the upper schedule header displays the years whereas, the bottom header displays its corresponding months. Refer to the following code example.

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

In the `Day` timeline mode, the upper part of the header displays the days whereas, the bottom schedule header displays its corresponding hours. Refer to the following code example.

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

An `Hour` timeline mode tracks the tasks in minutes scale. In this mode, the upper schedule header displays hour scale and the lower schedule header displays its corresponding minutes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/timeline/hour-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/timeline/hour-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/timeline/hour-cs1" %}

## Week start day customization

In the Gantt component, you can customize the week start day using the [`weekStartDay`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineSettings/#weekstartday) property. By default, the [`weekStartDay`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineSettings/#weekstartday) is set to `0`, which specifies the Sunday as a start day of the week. But, you can customize the week start day by using the following code example.

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

In the Gantt component, the schedule timeline will be automatically updated when the tasks date values are updated beyond the project start date and end date ranges. This can be enabled or disabled using the [`updateTimescaleView`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineSettings/#updatetimescaleview) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/timeline/timescale-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/timeline/timescale-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/timeline/timescale-cs1" %}

## Timeline cells tooltip

In the Gantt component, you can enable or disable the mouse hover tooltip of timeline cells using the [`timelineSettings.showTooltip`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineSettings/#showtooltip) property. The default value of this property is `true`. The following code example shows how to enable the timeline cells tooltip in Gantt.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/tooltip/timelinecell-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/tooltip/timelinecell-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/tooltip/timelinecell-cs1" %}

## Timeline template

In the Gantt component, you can customize timeline cells using the [timelineTemplate](https://ej2.syncfusion.com/angular/documentation/api/gantt/#timelineTemplate) property, allowing for the customization of HTML content within timeline cells. This feature enhances the visual appeal and enables personalized functionality.

When designing the timeline cells, you can utilize the following context properties within the template:

* `date`: Defines the date of the timeline cells.
* `value`: Defines the formatted date value that will be displayed in the timeline cells.
* `tier`: Defines whether the cell is part of the top or bottom tier.

The following code example how to customize the top tier to display the week's weather details and the bottom tier to highlight working and non-working days, with formatted text for holidays.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule ,ViewEncapsulation,ViewChild} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule,GanttComponent } from '@syncfusion/ej2-angular-gantt'
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { timelineTemplateData } from './data';

@Component({
imports: [
         GanttModule
    ],
standalone: true,
    selector: 'app-root',
    template: `
    <ejs-gantt 
      id="TimelineTemplate"
      height="430px"
      [dataSource]="data"
      [taskFields]="taskSettings"
      [allowSelection]="true"
      [labelSettings]="labelSettings"
      [treeColumnIndex]="1"
      [columns]="columns"
      [timelineSettings]="timelineSettings"
      [splitterSettings]="splitterSettings"
      [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate"
      [holidays]="holidays"
    >
      <ng-template #timelineTemplate let-data>
        <ng-container [ngIf]="data.tier === 'topTier'">
           <div  class="e-header-cell-label e-gantt-top-cell-text"
            style="width:100%;background-color:#FBF9F1;font-weight:bold;height:100%;display:flex;justify-content:center;align-items:center;"
            title="{{data.date}}"> 
            <div>{{ data.value }}</div>
            <div style="width:20px;height:20px;line-height:normal;padding-left:10px;">
              <img style="width:100%;height:100%;" [src]="imagedate()" >
            </div>
          </div>
        </ng-container>
        <ng-container [ngIf]="data.tier === 'bottomTier'">
           <div  class="e-header-cell-label e-gantt-top-cell-text"
            [ngStyle]="{ 'background-color': bgColor(data.value, data.date) }"
            style="width:100%;text-align:center;height:100%;display:flex;align-items:center;font-weight:bold;justify-content:center;"
            title="{{data.date}}">
            {{ holidayValue(data.value, data.date) }}
          </div>
        </ng-container>
      </ng-template>
    </ejs-gantt>
`,
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent{
 @ViewChild('ganttObj')
  public ganttObj: GanttComponent;
  // Data for Gantt
  public data?: object[];
  public taskSettings?: object;
  public holidays?: object[];
  public labelSettings?: object;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  public timelineSettings?: object;
  public columns?: object[];
  public splitterSettings?: object;
  public bgColor(value: string, date: string): string {
    if (value === "S") {
      return "#7BD3EA"
    }
    const parsedDate = new Date(date);
    for (let i = 0; i < this.ganttObj.holidays.length; i++) {
      const holiday = this.ganttObj.holidays[i];
      const fromDate = new Date(holiday.from);
      const toDate = new Date(holiday.to)
      if (parsedDate >= fromDate && parsedDate <= toDate) {
        return "#97E7E1";
      }
    }
    return "#E0FBE2"
  };
  public imagedate() {
    const getImage = Math.floor(Math.random() * 5) + 1;
    return "./images/" + getImage + ".svg";

  }
  public holidayValue(value: string, date: string) {
    const parsedDate = new Date(date);
    for (let i = 0; i < this.ganttObj.holidays.length; i++) {
      const holiday = this.ganttObj.holidays[i];
      const fromDate = new Date(holiday.from);
      const toDate = new Date(holiday.to)
      if (parsedDate >= fromDate && parsedDate <= toDate) {
        const options: any = { weekday: 'short' };
        return parsedDate.toLocaleDateString('en-US', options).toLocaleUpperCase();
      }
    }
    return value
  }
  public ngOnInit(): void {
    this.data = timelineTemplateData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };
    this.columns = [
      { field: 'TaskID', visible: false },
      { field: 'TaskName', width: 300 },
      { field: 'StartDate' },
      { field: 'EndDate' },
      { field: 'Duration' },
      { field: 'Progress' }
    ];
    this.splitterSettings = {
      columnIndex: 1
    };
    this.timelineSettings = {
      topTier: {
        unit: 'Week',
        format: 'dd/MM/yyyy'
      },
      bottomTier: {
        unit: 'Day',
        count: 1
      },
      timelineUnitSize: 100
    };
    this.holidays = [
      {
        from: new Date('04/04/2019'),
        to: new Date('04/04/2019'),
        label: 'Local Holiday'
      }, {
        from: new Date('04/19/2019'),
        to: new Date('04/19/2019'),
        label: 'Good Friday'
      },
    ];
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('04/23/2024');
    this.labelSettings = {
      leftLabel: 'TaskName',
      taskLabel: 'Progress'
    };
  }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/tooltip/timelinecell-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/tooltip/timelinecell-cs2" %}