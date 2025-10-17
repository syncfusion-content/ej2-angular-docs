---
layout: post
title: Taskbar in Angular Gantt component | Syncfusion
description: Learn how to customize taskbars in the Syncfusion Angular Gantt component, including height, templates, and editing interactions.
platform: ej2-angular
control: Taskbar
documentation: ug
domainurl: ##DomainURL##
---

# Taskbar in Angular Gantt component

The taskbar in the Angular Gantt component visually represents tasks on the timeline, showing duration, progress, and dependencies, enabling intuitive project management. Taskbars support customization through properties like [taskbarHeight](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskbarheight) for sizing and [queryTaskbarInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#querytaskbarinfo) event for conditional formatting based on task data like progress. Multi-taskbar support in resource view, enabled by [enableMultiTaskbar](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enablemultitaskbar), summarizes child task progress in collapsed parent taskbars. Connector lines, styled via [connectorLineWidth](https://ej2.syncfusion.com/angular/documentation/api/gantt/#connectorlinewidth) and [connectorLineBackground](https://ej2.syncfusion.com/angular/documentation/api/gantt/#connectorlinebackground), illustrate dependencies. Tooltips, controlled by [tooltipSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt/tooltipSettings/), provide hover details for taskbars, baselines, and timelines, with templates for custom content. Editing interactions include dragging for rescheduling (via [allowTaskbarDragAndDrop](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowtaskbardraganddrop)) and resizing for duration, progress changes, triggering events like [taskbarEditing](https://ej2.syncfusion.com/angular/documentation/gantt/events#taskbarediting) and [taskbarEdited](https://ej2.syncfusion.com/angular/documentation/gantt/events#taskbaredited) for validation. 

## Customize taskbar height

Taskbar height for child and parent tasks is set using the [taskbarHeight](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskbarheight) property, which accepts pixel values and must be less than [rowHeight](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowheight) to avoid overflow.

The following example sets a custom taskbar height:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/taskbar-height-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/taskbar-height-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/appearance-customization/taskbar-height-cs1" %}

This code applies a 40px height to taskbars, ensuring visual consistency while maintaining responsiveness.

## Apply conditional formatting

Conditional formatting replaces default taskbar appearance using the [queryTaskbarInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#querytaskbarinfo) event, accessing task data to modify colors, progress bars, or styles based on criteria like progress.

The following example formats taskbars by progress:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/formatting-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/formatting-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/appearance-customization/formatting-cs1" %}

In the event handler, `args.data.progress` determines `args.taskbarBgColor` and `args.progressBarBgColor`, enabling dynamic styling for critical tasks or milestones.

## Customize gripper icons

Gripper icons for taskbar editing (start, end, progress) are customized by targeting CSS classes like **.e-gantt-left-resize-gripper** or **.e-gantt-right-resize-gripper** with custom styles, overriding default icons for branded appearances.

The following example changes gripper icons:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/change-gripper-icon-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/change-gripper-icon-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/appearance-customization/change-gripper-icon-cs1" %}

Apply CSS to **.e-gantt-progress-resize-gripper** for progress handles, ensuring touch-friendly sizing for responsive interactions.

## Control taskbar and notes icon visibility

Taskbars and notes icons can be hidden dynamically using the [queryTaskbarInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#querytaskbarinfo) and [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#querycellinfo) events, enabling conditional visibility based on task data (e.g., hiding milestones or empty notes for cleaner timelines). Hiding taskbars affects only the timeline element, not the row or labels, and requires `taskFields.notes` for notes icon rendering.

The following example hides taskbars for specific tasks and notes icons for empty notes:

```typescript
import { Component } from '@angular/core';
import { GanttModule, IQueryTaskbarInfoEventArgs, QueryCellInfoEventArgs } from '@syncfusion/ej2-angular-gantt';

@Component({
    imports: [GanttModule],
    standalone: true,
    selector: 'app-root',
    template: `
        <ejs-gantt height="430px" [dataSource]="data" [taskFields]="taskFields"  (queryTaskbarInfo)="queryTaskbarInfo($event)"(queryCellInfo)="queryCellInfo($event)">
        </ejs-gantt>`,
})

export class AppComponent {
    public data: object[] = [
        { TaskId: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
        { TaskId: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0, Progress: 30, Info: 'Measure the total property area alloted for construction', ParentId: 1 },
        { TaskId: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: '2', Info: 'Obtain an engineered soil test of lot where construction is planned.', ParentId: 1 },
        { TaskId: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3', Progress: 30, ParentId: 1 },
        { TaskId: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
        { TaskId: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '4', Progress: 30, Info: 'Develop floor plans and obtain a materials list for estimations', ParentId: 5 },
        { TaskId: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '6', Info: '', ParentId: 5 },
        { TaskId: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: '7', Info: '', ParentId: 5 },
        { TaskId: 9, TaskName: 'Sign Contract', StartDate: new Date('04/04/2019'), Duration: 1, Predecessor: '8', Progress: 30, Info: 'If required obtain approval from HOA' },
        { TaskId: 10, TaskName: 'Project Approval and kick off', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), Duration: 0, Predecessor: '9' }
    ];
    public taskFields: object = {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentId',
        notes: 'Info'
    };

    public queryTaskbarInfo(args: IQueryTaskbarInfoEventArgs): void {
        if ((args.data as any).TaskId >= 7 && (args.data as any).TaskId <= 10) {
            (args.taskbarElement as any).style.visibility = 'hidden';
        }
    }

    public queryCellInfo(args: QueryCellInfoEventArgs): void {
        if (args.column.field === 'Info' && (!(args.data as any).Info || (args.data as any).Info.trim() === '')) {
            const notesIcon = args.cell.querySelector('.e-notes-info');
            if (notesIcon) {
                (notesIcon as any).style.visibility = 'hidden';
            }
        }
    }
}
```

This code hides taskbars for tasks with IDs 7–10 (e.g., estimation tasks) and notes icons for empty `Info` fields, using `queryTaskbarInfo` and `queryCellInfo`. The **.e-notes-info** class ensures robust icon targeting, and `taskFields.notes` enables notes rendering.

## Prevent taskbar editing for specific tasks

Taskbar editing, including dragging, resizing, or adding dependencies, can be prevented for specific tasks (e.g., locked milestones or completed tasks) using the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/gantt/#actionbegin) event for validation and [queryTaskbarInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#querytaskbarinfo) to hide editing UI elements like grippers and connector points. This ensures visual and functional restrictions, with ARIA attributes updated for accessibility.

The following example prevents editing for Task ID 4:

```typescript
import { Component } from '@angular/core';
import { GanttModule, IActionBeginEventArgs, IQueryTaskbarInfoEventArgs, EditService } from '@syncfusion/ej2-angular-gantt';

@Component({
    imports: [GanttModule],
    providers: [EditService],
    standalone: true,
    selector: 'app-root',
    template: `
        <ejs-gantt id="ganttDefault" height="430px" [dataSource]="taskData" [taskFields]="taskSettings"  [labelSettings]="labelSettings" [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" 
        [editSettings]="editSettings" (actionBegin)="actionBegin($event)" (queryTaskbarInfo)="queryTaskbarInfo($event">
        </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None,
    styles: [
        .e-gantt-chart .e-prevent-reschedule .e-right-resize-gripper,
        .e-gantt-chart .e-prevent-reschedule .e-left-resize-gripper,
        .e-gantt-chart .e-prevent-reschedule .e-progress-resize-gripper {
            display: none !important;
        }
        .e-gantt-chart .e-prevent-add-relation-left .e-left-connectorpoint-outer-div {
            display: none !important;
        }
        .e-gantt-chart .e-prevent-add-relation-right .e-right-connectorpoint-outer-div {
            display: none !important;
        }
    ]
})

export class AppComponent {
    public taskData: object[] = [
        { TaskId: 1, TaskName: 'Product Concept', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
        { TaskId: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 30, ParentId: 1 },
        { TaskId: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3, ParentId: 1 },
        { TaskId: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'), Duration: 2, Predecessor: '2', Progress: 30, ParentId: 1 },
        { TaskId: 5, TaskName: 'Concept Approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3,4', Indicators: [{ 'date': '04/10/2019', 'name': '#briefing', 'title': 'Product concept briefing' }] },
        { TaskId: 6, TaskName: 'Market Research', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
        { TaskId: 7, TaskName: 'Demand Analysis', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), ParentId: 6 },
        { TaskId: 8, TaskName: 'Customer strength', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '5', Progress: 30, ParentId: 7 },
        { TaskId: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '5', ParentId: 7 },
        { TaskId: 10, TaskName: 'Competitor Analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '7, 8', Progress: 30, ParentId: 6 }
    ];
    public taskSettings: object = {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentId'
    };
    public labelSettings: object = {
        leftLabel: 'TaskName'
    };
    public projectStartDate: Date = new Date('03/28/2019');
    public projectEndDate: Date = new Date('04/18/2019');
    public editSettings: object = {
        allowTaskbarEditing: true,
    };

    public queryTaskbarInfo(args: IQueryTaskbarInfoEventArgs): void {
        if (args.data.TaskId === 4) {
            args.taskbarElement.style.cursor = 'default';
            args.taskbarElement.classList.add('e-prevent-reschedule', 'e-prevent-add-relation-left', 'e-prevent-add-relation-right');
        }
    }

    public actionBegin(args: IActionBeginEventArgs): void {
        if (args.data?.TaskId === 4 && [
            'ChildDrag', 'ProgressResizing', 'LeftResizing', 'RightResizing',
            'ConnectorPointLeftDrag', 'ConnectorPointRightDrag'
        ].includes(args.taskBarEditAction)) {
            args.cancel = true; // Prevent editing for Task ID 4.
        }
    }
}
```

This code prevents dragging, resizing, and dependency changes for Task ID 4 by canceling edit actions in `actionBegin` and hiding grippers/connector points in `queryTaskbarInfo` using CSS classes defined in the `styles` array. The `EditService` and `allowTaskbarEditing` enable editing for other tasks, while `ViewEncapsulation.None` ensures styles apply to Gantt's DOM. 

## Customize taskbar templates

Taskbar templates allow full replacement of the default taskbar UI, enabling custom designs with elements like progress bars, badges, or icons. Use the [taskbarTemplate](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskbartemplate) property for child tasks, [parentTaskbarTemplate](https://ej2.syncfusion.com/angular/documentation/api/gantt/#parenttaskbartemplate) for parents, [milestoneTemplate](https://ej2.syncfusion.com/angular/documentation/api/gantt/#milestonetemplate) for milestones. The template receives `data` (task object) and `ganttProperties` (e.g., width, progress), with `calculateProgressWidth` for dynamic sizing. Integrate with [queryTaskbarInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#querytaskbarinfo) for conditional logic or styling.

The following example customizes the taskbar template with a progress bar and notification badge showing progress percentage:

```typescript
import { Component } from '@angular/core';
import { GanttModule, IGanttData } from '@syncfusion/ej2-angular-gantt';

@Component({
    imports: [GanttModule],
    standalone: true,
    selector: 'app-root',
    template: `
        <ejs-gantt height="430px" [dataSource]="taskData" [taskFields]="taskSettings"  [labelSettings]="labelSettings" [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [taskbarTemplate]="taskbarTemplate">
        </ejs-gantt>
        <ng-template #taskbarTemplate let-data="data">
            <div
                class="e-gantt-child-taskbar-inner-div e-gantt-child-taskbar"
                style="height:22px; margin-top: -1px"
                tabindex="-1"
                [style.width.px]="data.ganttProperties.width">
                <div
                    class="e-gantt-child-progressbar-inner-div e-gantt-child-progressbar"
                    style="border-style:solid;height:100%;border-top-right-radius:0px;border-bottom-right-radius:0px;"
                    [style.width.px]="calculateProgressWidth(data)">
                </div>
                <div class="e-notification-badge-container">
                    <span class="e-badge e-badge-secondary e-badge-notification e-badge-overlap">{{ data.ganttProperties.progress }}%</span>
                </div>
            </div>
        </ng-template>`
})

export class AppComponent {
    public calculateProgressWidth(data: IGanttData): number {
        return (data.ganttProperties.progress * data.ganttProperties.width) / 100;
    }

    public taskData: object[] = [
        { TaskId: 1, TaskName: 'Product Concept', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
        { TaskId: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 30, ParentId: 1 },
        { TaskId: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3, ParentId: 1 },
        { TaskId: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'), Duration: 2, Predecessor: '2', Progress: 30, ParentId: 1 },
        { TaskId: 5, TaskName: 'Concept Approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3,4', Indicators: [{ 'date': '04/10/2019', 'name': '#briefing', 'title': 'Product concept briefing' }] },
        { TaskId: 6, TaskName: 'Market Research', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
        { TaskId: 7, TaskName: 'Demand Analysis', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), ParentId: 6 },
        { TaskId: 8, TaskName: 'Customer strength', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '5', Progress: 30, ParentId: 7 },
        { TaskId: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '5', ParentId: 7 },
        { TaskId: 10, TaskName: 'Competitor Analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '7, 8', Progress: 30, ParentId: 6 }
    ];
    public taskSettings: object = {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentId'
    };
    public labelSettings: object = {
        leftLabel: 'TaskName'
    };
    public projectStartDate: Date = new Date('03/28/2019');
    public projectEndDate: Date = new Date('04/18/2019');
}
```

This code creates a custom taskbar with a progress bar sized by *calculateProgressWidth(data)* and a notification badge displaying task progress. The template uses *let-data="data"* to access the full task object, ensuring the badge shows the correct progress value.

## Enable multi-taskbar support

In project view, multi-taskbar support, enabled by [enableMultiTaskbar](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enablemultitaskbar), renders parent taskbars summarizing child progress when collapsed, providing aggregated visualization.

The following example enables multi-taskbar:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/projectview-multitaskbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/projectview-multitaskbar-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/projectview-multitaskbar-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/projectview-multitaskbar-cs1" %}

This feature aggregates child progress in parent taskbars, updating dynamically on child changes.

## Customize connector lines

Connector lines for dependencies are styled using [connectorLineWidth](https://ej2.syncfusion.com/angular/documentation/api/gantt/#connectorlinewidth) for thickness and [connectorLineBackground](https://ej2.syncfusion.com/angular/documentation/api/gantt/#connectorlinebackground) for color, enhancing dependency visibility.

The following example customizes connectors:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/dependency-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/dependency-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/appearance-customization/dependency-cs1" %}

These properties apply to all connectors, with the `queryTaskbarInfo` event allowing per-dependency customization via `args.connectorLineBackground`.

## Configure tooltips

Tooltips for taskbars, connectors, baselines, and event markers are enabled by default via [tooltipSettings.showTooltip](https://ej2.syncfusion.com/angular/documentation/api/gantt/tooltipSettings/#showtooltip), set to **true**. Disable for specific elements or customize content with templates.

The following example enables tooltips:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/tooltip/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/tooltip/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/tooltip/default-cs1" %}

Tooltips display on hover, with touch-and-hold support for mobile via the tooltip popup.

## Customize tooltip templates

You can customize the following tooltip types in the Gantt chart using the [tooltipSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt/tooltipSettings/) configuration:

### Taskbar tooltip
Taskbar tooltips are customized using [tooltipSettings.taskbar](https://ej2.syncfusion.com/angular/documentation/api/gantt/tooltipSettings/#taskbar) template, accessing task data for formatted content.

The following example customizes taskbar tooltips:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/tooltip/taskbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/tooltip/taskbar-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/tooltip/taskbar-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/tooltip/taskbar-cs1" %}

The template uses `data` to display fields like **TaskName** and **Progress**, ensuring responsive display.

### Connector line tooltip
Connector tooltips, customized via [tooltipSettings.connectorLine](https://ej2.syncfusion.com/angular/documentation/api/gantt/tooltipSettings/#connectorline), show dependency details like type and offset.

The following example customizes connector tooltips:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/tooltip/dependency-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/tooltip/dependency-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/tooltip/dependency-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/tooltip/dependency-cs1" %}

### Baseline tooltip
A baseline tooltip can be customized using the [tooltipSettings.baseline](https://ej2.syncfusion.com/angular/documentation/api/gantt/tooltipSettings/#baseline) property.

The following example customizes baseline tooltips:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/tooltip/baseline-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/tooltip/baseline-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/tooltip/baseline-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/tooltip/baseline-cs1" %}

### Timeline tooltip
Timeline tooltips, customized with [tooltipSettings.timeline](https://ej2.syncfusion.com/angular/documentation/api/gantt/tooltipSettings/#timeline), display date details.

The following example customizes timeline tooltips:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/tooltip/timeline-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/tooltip/timeline-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/tooltip/timeline-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/tooltip/timeline-cs1" %}

## Tooltip Touch interaction

To perform touch and hold action on a element, refer to [tooltip popup](tooltip/#tooltip).

## See also
- [How to configure task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/taskdependency)
- [How to enable baseline rendering?](https://ej2.syncfusion.com/angular/documentation/gantt/baseline)
- [How to customize labels?](https://ej2.syncfusion.com/angular/documentation/gantt/labels)