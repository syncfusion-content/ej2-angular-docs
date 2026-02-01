---
layout: post
title: Data Markers in Angular Gantt Chart Component | Syncfusion
description: Learn here all about data markers in Syncfusion Angular Gantt Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data markers 
documentation: ug
domainurl: ##DomainURL##
---

# Data Markers in Angular Gantt Chart Component

Data markers are visual indicators that highlight significant events, milestones, or important dates within individual project tasks. These markers provide immediate visual context about critical moments in task timelines, enabling effective identification of key dates and tracking of important events at the task level. Understanding data markers implementation ensures effective project visualization and milestone tracking throughout project development cycles.

Data markers utilize specific properties to define their appearance, positioning, and interactive behavior within task timelines:

**Date specification**: The [date](https://ej2.syncfusion.com/angular/documentation/api/gantt/iIndicator#date) property establishes the exact timeline position where the marker appears. This date value determines marker placement relative to the task's start and end dates, ensuring accurate event representation.

**Visual styling**: The [iconClass](https://ej2.syncfusion.com/angular/documentation/api/gantt/iIndicator#iconclass) property defines the CSS class that controls marker visual appearance. This property enables custom styling through icon fonts, background images, or CSS-based graphics to distinguish different marker types.

**Identification**: The [name](https://ej2.syncfusion.com/angular/documentation/api/gantt/iIndicator#name) property provides unique identification for each marker. This name serves as an internal reference and can be used for programmatic marker manipulation or event handling.

**Interactive content**: The [tooltip](https://ej2.syncfusion.com/angular/documentation/api/gantt/iIndicator#tooltip) property supplies descriptive text that displays when users hover over markers. This property enhances user experience by providing detailed context about marker significance and related event information.

**Tooltip Rendering Requirements**: Data marker tooltips render only when the tooltip property contains valid content values. Empty or undefined tooltip properties result in no tooltip display, maintaining clean visual presentation for markers without additional descriptions.

## Data mapping and configuration properties

Data markers represent schedule events for specific tasks through visual indicators positioned at designated dates within task timelines. The component renders markers as icon-based elements that display at precise timeline locations, providing instant visual reference for important task-related events.

**Data structure requirements**: Data markers are defined in the data source as arrays of objects containing marker specifications. Each marker object includes date information, visual styling, identification details, and optional tooltip content for enhanced user interaction.

**Mapping configuration**: The marker array connects to the Gantt Chart component through the [taskFields.indicators](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields#indicators) property mapping. This configuration establishes the relationship between data source marker definitions and component rendering logic.

**Multiple marker support**: Tasks can display multiple data markers simultaneously, allowing comprehensive event tracking within individual task contexts. Each marker maintains independent configuration while sharing the same task timeline space.
The following implementation demonstrates comprehensive data marker integration within a Gantt chart, showcasing multiple markers per task with varied styling and tooltip configurations:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/datamarkers/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/datamarkers/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/datamarkers/default-cs1" %}

## Custom event bind to data markers

Data markers support interactive functionality through click event binding, enabling custom actions when markers are selected. This interaction capability allows the implementation of detailed views, status updates, or navigation to related information based on marker context.

**Event binding implementation**: Click events are bound to data markers using the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/gantt#databound) event of the Gantt Chart component. This event fires after data binding completes, ensuring all marker elements are rendered and available for event attachment.

**DOM element selection**: Data markers render with the CSS class **.e-indicator-span**, which serves as the selector for identifying marker elements within the DOM. This class provides a reliable reference for event binding regardless of marker styling or content variations.

The following implementation demonstrates how to open the edit dialog for a specific task when its data marker is clicked:

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { GanttComponent, GanttAllModule, ToolbarService, EditService } from '@syncfusion/ej2-angular-gantt';

@Component({
    imports: [GanttAllModule],
    providers: [ToolbarService, EditService],
    standalone: true,
    selector: 'app-root',
    template: `
        <ejs-gantt #gantt height="450px" [dataSource]="data" [taskFields]="taskSettings"  [editSettings]="editSettings" [toolbar]="toolbar" (dataBound)="dataBound()">
        </ejs-gantt>`
})

export class AppComponent implements OnInit {
    @ViewChild('gantt', { static: true }) public ganttInstance?: GanttComponent;
    public data?: object[];
    public taskSettings?: object;
    public editSettings?: object;
    public toolbar?: string[];

    public ngOnInit(): void {
        this.data = [
            {
                TaskID: 1,
                TaskName: 'Project Initiation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    {
                        TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50,
                        Indicators: [
                            {
                                'date': new Date('04/08/2019'),
                                'iconClass': 'e-btn-icon e-notes-info e-icons',
                                'name': 'Review Meeting',
                                'tooltip': 'Review and approve project requirements'
                            }
                        ]
                    },
                    {
                        TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 70,
                        Indicators: [
                            {
                                'date': new Date('04/08/2019'),
                                'iconClass': 'e-btn-icon e-notes-info e-icons',
                                'name': 'Quality Check',
                                'tooltip': 'Soil quality inspection checkpoint'
                            }
                        ]
                    }
                ]
            }
        ];

        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks',
            indicators: 'Indicators'
        };
        this.editSettings = {
            allowEditing: true,
        };
    }

    public dataBound(): void {
        const elements = document.querySelectorAll('.e-indicator-span');
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener('click', (event: Event) => {
                // Find the task row that contains the clicked indicator.
                const indicatorElement = event.target as HTMLElement;
                const taskRow = indicatorElement.closest('tr.e-chart-row') as HTMLElement;
                if (taskRow && this.ganttInstance) {
                    // Get the task ID from the row data
                    const rowIndex = parseInt(taskRow.getAttribute('data-rowindex') || '0', 10);
                    const record = this.ganttInstance.flatData[rowIndex] as GanttRecord;
                    if (record && record.ganttProperties.taskId) {
                        // Open edit dialog for the specific task.
                        this.ganttInstance.openEditDialog(record.ganttProperties.taskId);
                    }
                }
            });
        }
    }
}

interface GanttProperties {
    taskId: number | string;
    taskName?: string;
    startDate?: Date;
    endDate?: Date;
    duration?: number;
    progress?: number;
    [key: string]: any;
}

interface GanttRecord {
    ganttProperties: GanttProperties;
    [key: string]: any;
}
```
![Custom event bind to data markers](images/custom-event-datamarkers.gif)

**Event handler considerations**: The click event handler locates the parent task row using DOM traversal methods, extracts the task information from the current view data, and calls the [openEditDialog](https://ej2.syncfusion.com/angular/documentation/api/gantt#openeditdialog) method with the appropriate task ID to display the edit dialog for the selected task.

## Apply custom styling for indicator span

You can programmatically modify the styling of the indicator by targeting the `.e-indicator-span` class.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/datamarkers/indicator-customize/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/datamarkers/indicator-customize/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/datamarkers/indicator-customize" %}