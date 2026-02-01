---
layout: post
title: Splitter in Angular Gantt Chart Component | Syncfusion
description: Learn how to configure the splitter in the Syncfusion Angular Gantt Chart component for flexible TreeGrid and Chart panel sizing.
control: Splitter
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Splitter in Angular Gantt Chart Component

The splitter in the Angular Gantt Chart component divides the TreeGrid pane and Chart pane, enabling flexible width allocation for project visualization. Configured via the [splitterSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt/splitterSettings) property, the splitter supports pixel or percentage-based positioning, column-based alignment, and predefined view modes. The [setSplitterPosition](https://ej2.syncfusion.com/angular/documentation/api/gantt#setsplitterposition) method adjusts positioning dynamically, while the [splitterResizeStart](https://ej2.syncfusion.com/angular/documentation/gantt/events#splitterresizestart), [splitterResizing](https://ej2.syncfusion.com/angular/documentation/gantt/events#splitterresizing), and [splitterResized](https://ej2.syncfusion.com/angular/documentation/gantt/events#splitterresized) events handle resize interactions. The splitter includes ARIA labels for accessibility, ensuring screen reader compatibility, and adapts to responsive designs, though narrow screens may limit visible columns or timeline segments. By default, both panels are visible with equal width.

## Configure splitter position

Set the splitter position using [splitterSettings.position](https://ej2.syncfusion.com/angular/documentation/api/gantt/splitterSettings#position) with pixel (e.g., "300px") or percentage (e.g., "30%") values to define the TreeGrid pane width, or align to a column edge with [splitterSettings.columnIndex](https://ej2.syncfusion.com/angular/documentation/api/gantt/splitterSettings#columnindex).

The following example sets a percentage-based splitter position. This configuration allocates 50% width to the TreeGrid panel.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/changesplitter/initial-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/changesplitter/initial-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/appearance-customization/changesplitter/initial-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/appearance-customization/changesplitter/initial-cs1" %}

> If both [position](https://ej2.syncfusion.com/angular/documentation/api/gantt/splitterSettings#position) and [columnIndex](https://ej2.syncfusion.com/angular/documentation/api/gantt/splitterSettings#columnindex) are defined in [splitterSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt/splitterSettings), only `position` is applied because it takes precedence over `columnIndex`.

## Configure view modes

Set predefined view modes with [splitterSettings.view](https://ej2.syncfusion.com/angular/documentation/api/gantt/splitterSettings#view):
- **Default**: Displays both TreeGrid and Chart panels.
- **Grid**: Shows only the TreeGrid panel for data-focused views.
- **Chart**: Shows only the Chart panel for timeline visualization.

The following example configures the Grid view mode. This configuration prioritizes the TreeGrid for detailed task analysis.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { GanttComponent, GanttModule, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [GanttModule],
    providers: [SelectionService]
    template: `
       <ejs-gantt #gantt id="ganttContainer" height="475px" width="650px" [dataSource]="data" [taskFields]="taskSettings"
        [allowSelection]="true" [labelSettings]="labelSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings"
        [highlightWeekends]="true" [selectionSettings]="selectionSettings">
        </ejs-gantt>`
})

export class AppComponent implements OnInit {
    @ViewChild('gantt') public gantt: GanttComponent;
    public data: object[];
    public taskSettings: object;
    public labelSettings: object;
    public splitterSettings: object;
    public projectStartDate: Date;
    public projectEndDate: Date;

    public ngOnInit(): void {
        this.data = [
            { TaskID: 1, TaskName: "Product concept", StartDate: new Date("04/02/2025"), EndDate: new Date("04/08/2025") },
            { TaskID: 2, TaskName: "Define the product usage", StartDate: new Date("04/02/2025"), EndDate: new Date("04/08/2025"), Duration: 1, Progress: 30, ParentId: 1, BaselineStartDate: new Date("04/02/2025"), BaselineEndDate: new Date("04/02/2025") },
            { TaskID: 3, TaskName: "Define the target audience", StartDate: new Date("04/02/2025"), EndDate: new Date("04/04/2025"), Duration: 2, Progress: 40, ParentId: 1 },
            { TaskID: 4, TaskName: "Prepare product sketch and notes", StartDate: new Date("04/05/2025"), Duration: 2, Progress: 30, ParentId: 1, Predecessor: "2" },
            { TaskID: 5, TaskName: "Concept approval", StartDate: new Date("04/08/2025"), EndDate: new Date("04/08/2025"), Duration: 0, ParentId: 1, Predecessor: "3,4", Indicators: [{ date: new Date("04/07/2025"), name: "Design Phase", tooltip: "Design phase completed", iconClass: "okIcon e-icons" }] },
            { TaskID: 6, TaskName: "Market research", StartDate: new Date("04/09/2025"), EndDate: new Date("04/18/2025"), Progress: 30, BaselineStartDate: new Date("04/09/2025"), BaselineEndDate: new Date("04/09/2025") },
            { TaskID: 7, TaskName: "Demand analysis", Progress: 40, ParentId: 6 },
            { TaskID: 8, TaskName: "Customer strength", StartDate: new Date("04/10/2025"), EndDate: new Date("04/13/2025"), Duration: 4, Progress: 30, ParentId: 6, BaselineStartDate: new Date("04/12/2025"), BaselineEndDate: new Date("04/13/2025") },
            { TaskID: 9, TaskName: "Market opportunity analysis", StartDate: new Date("04/09/2025"), EndDate: new Date("04/12/2025"), Duration: 4, ParentId: 7, Predecessor: "5" },
            { TaskID: 10, TaskName: "Competitor analysis", StartDate: new Date("04/15/2025"), EndDate: new Date("04/18/2025"), Duration: 4, Progress: 30, ParentId: 6, Predecessor: "7,8" },
            { TaskID: 11, TaskName: "Product strength analysis", StartDate: new Date("04/15/2025"), EndDate: new Date("04/18/2025"), Duration: 4, Progress: 40, ParentId: 6, Predecessor: "9" },];
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentId'
        };
        this.labelSettings = {
            leftLabel: 'TaskName'
        };
        this.splitterSettings = {
            view: 'Grid'
        };
        this.projectStartDate = new Date('03/27/2019');
        this.projectEndDate = new Date('07/06/2019');
    }
}
```
![Splitter view](images/splitter-view.gif)

## Adjust splitter position dynamically

Change the splitter position using the [setSplitterPosition](https://ej2.syncfusion.com/angular/documentation/api/gantt#setsplitterposition) method with pixel, percentage, or column index values, triggered by events like window resizing or button clicks.

The following example adjusts the splitter dynamically:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/changesplitter/dynamic-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/changesplitter/dynamic-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/appearance-customization/changesplitter/dynamic-cs1" %}

## Customize splitter appearance

Customize the splitter’s appearance in the Gantt Chart component by handling the [dataBound](https://ej2.syncfusion.com/angular/documentation/gantt/events#databound), [splitterResizing](https://ej2.syncfusion.com/angular/documentation/gantt/events#splitterresizing) and [splitterResized](https://ej2.syncfusion.com/angular/documentation/gantt/events#splitterresized) events to dynamically adjust styles, such as the background color or visibility of the resize handler. This enhances visual feedback during splitter interactions, improving usability for resizing the TreeGrid and Chart panels. The splitter retains ARIA labels for accessibility, ensuring screen reader compatibility.

The following example customizes the splitter’s background and hides the resize handler during resizing:

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { ResizingEventArgs } from '@syncfusion/ej2-layouts';
import { GanttModule, GanttComponent, EditService, ISplitterResizedEventArgs,SelectionService, ToolbarService, DayMarkersService } from '@syncfusion/ej2-angular-gantt';

@Component({
    selector: 'app-root',
    providers: [EditService, SelectionService, ToolbarService, DayMarkersService],
    standalone: true,
    imports: [GanttModule]
    template: `
        <div class="control-section">
            <ejs-gantt #gantt height="410px" [dataSource]="data" [taskFields]="taskFields" [splitterSettings]="splitterSettings" [treeColumnIndex]="1" (dataBound)="onDataBound()" (splitterResizing)="onSplitterResizing($event)"(splitterResized)="onSplitterResized($event)">
            </ejs-gantt>
        </div>`
})

export class AppComponent implements OnInit {
    @ViewChild('gantt') public ganttInstance?: GanttComponent;
    public data?: object[];
    public taskFields?: object;
    public splitterSettings?: object;
    public projectStartDate?: Date;
    public projectEndDate?: Date;

    public ngOnInit(): void {
        this.data = [
            {
                TaskID: 1,
                TaskName: 'Project initiation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    {
                        TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('04/02/2019'), Duration: 0,
                        Progress: 30, resources: [1], info: 'Measure the total property area allotted for construction'
                    },
                    {
                        TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: '2',
                        resources: [2, 3, 5], info: 'Obtain an engineered soil test of lot where construction is planned.' +
                            'From an engineer or company specializing in soil testing'
                    },
                    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3', Progress: 30 },
                ]
            },
            {
                TaskID: 5,
                TaskName: 'Project estimation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    {
                        TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'),
                        Duration: 3, Predecessor: '4', Progress: 30, resources: 4,
                        info: 'Develop floor plans and obtain a materials list for estimations'
                    },
                    {
                        TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'),
                        Duration: 3, Predecessor: '6', resources: [4, 8], info: ''
                    },
                    {
                        TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'),
                        Duration: 0, Predecessor: '7', resources: [12, 5], info: ''
                    }
                ]
            }
        ];
        this.taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks',
        };
        this.splitterSettings = {
            columnIndex: 2
        };
        this.projectStartDate = new Date('03/25/2019');
        this.projectEndDate = new Date('07/28/2019');
    }

    public onDataBound(): void {
        const splitterBar = this.ganttInstance?.element.querySelector('.e-split-bar') as HTMLElement;
        if (splitterBar) {
            splitterBar.addEventListener('mouseover', () => {
                splitterBar.style.background = 'grey';
                const resizeHandler = splitterBar.querySelector('.e-resize-handler') as HTMLElement;
                if (resizeHandler) {
                    resizeHandler.style.visibility = 'hidden';
                }
            });
            splitterBar.addEventListener('mouseleave', () => {
                splitterBar.style.background = '#dee2e6';
                const resizeHandler = splitterBar.querySelector('.e-resize-handler') as HTMLElement;
                if (resizeHandler) {
                    resizeHandler.style.visibility = 'visible';
                }
            });
        }
    }

    public onSplitterResizing(args: ResizingEventArgs): void {
        const splitterBar = this.ganttInstance?.element.querySelector('.e-split-bar') as HTMLElement;
        if (splitterBar) {
            splitterBar.style.background = 'grey';
            const resizeHandler = splitterBar.querySelector('.e-resize-handler') as HTMLElement;
            if (resizeHandler) {
                resizeHandler.style.visibility = 'hidden';
            }
        }
    }

    public onSplitterResized(args: ISplitterResizedEventArgs): void {
        const splitterBar = this.ganttInstance?.element.querySelector('.e-split-bar') as HTMLElement;
        if (splitterBar) {
            splitterBar.style.background = '#dee2e6';
            const resizeHandler = splitterBar.querySelector('.e-resize-handler') as HTMLElement;
            if (resizeHandler) {
                resizeHandler.style.visibility = 'visible';
            }
        }
    }
}
```

## See also
- [How to configure Gantt columns?](https://ej2.syncfusion.com/angular/documentation/gantt/columns)
- [How to customize the timeline?](https://ej2.syncfusion.com/angular/documentation/gantt/timeline)
- [How to handle scrolling?](https://ej2.syncfusion.com/angular/documentation/gantt/scrolling)