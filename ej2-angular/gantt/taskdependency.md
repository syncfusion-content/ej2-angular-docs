---
layout: post
title: Task dependency in Angular Gantt component | Syncfusion
description: Learn how to configure task dependencies in the Syncfusion Angular Gantt component for establishing relationships, managing offsets, and handling validation.
platform: ej2-angular
control: Task dependency
documentation: ug
domainurl: ##DomainURL##
---

# Task dependency in Angular Gantt component

Task dependency in the Angular Gantt component establishes relationships between tasks, affecting scheduling where changes to predecessors impact successors. Dependencies are categorized into four types—Start to Start (SS), Start to Finish (SF), Finish to Start (FS), and Finish to Finish (FF)—mapped via the [`taskFields.dependency`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#dependency) property in the data source. Parent dependencies are enabled by default with [`allowParentDependency`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowparentdependency) set to `true`, allowing relationships between parent-parent, child-child, parent-child, and child-parent tasks. Offsets support day, hour, or minute units for precise timing, and validation modes handle conflicts during editing via the [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#actionbegin) event. Connector lines are customized using [`connectorLineWidth`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#connectorlinewidth) and [`connectorLineBackground`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#connectorlinebackground), with the `queryTaskbarInfo` event enabling dynamic styling. Public methods like [`addPredecessor`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#addpredecessor) and [`removePredecessor`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#removepredecessor) allow programmatic management, ensuring accurate visualization with ARIA labels for accessibility and responsive scaling for mobile views.

## Configure task dependencies

Task dependencies are defined in the data source as string values (e.g., '2FS+3d' for Finish to Start with 3-day offset) and mapped using [`taskFields.dependency`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#dependency). Parent dependencies can be enabled by [`allowParentDependency`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowparentdependency) property. By default, the `allowParentDependency` property will be `true`.

The following example establishes dependencies:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/taskdependency/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/taskdependency/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/taskdependency/default-cs1" %}

This code renders connector lines for dependencies like '2FS', updating taskbars on changes.

## Understand task relationship types

Task relationships are categorized into four types based on start and finish dates:
- Start to Start (SS): Successor starts with predecessor.

    ![Start to Start dependency](images/ss.png)

- Start to Finish (SF): Successor finishes when predecessor starts.

    ![Start to Finish dependency](images/sf.png)

- Finish to Start (FS): Successor starts after predecessor finishes (default).

    ![Finish to Start dependency](images/fs.png)

- Finish to Finish (FF): Successor finishes with predecessor.

    ![Finish to Finish dependency](images/ff.png)

Specify types in the data source (e.g., '2SS+1h') for hour-based offsets.

## Configure predecessor offsets with duration units

Predecessor offsets support day, hour, or minute units (e.g., '2FS+3h'), allowing precise delays or leads between tasks.

The following example uses duration units:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/taskdependency/durationunits-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/taskdependency/durationunits-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/taskdependency/durationunits-cs1" %}

This code sets offsets like '2FS+3h', adjusting taskbars accordingly.

## Disable automatic dependency offset updates

Automatic offset updates during taskbar editing are disabled with [`updateOffsetOnTaskbarEdit`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#updateoffsetontaskbaredit) set to `false`, allowing manual updates via the dependency tab or predecessor column.

The following example disables automatic updates:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/taskdependency/durationunits-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/taskdependency/durationunits-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/taskdependency/durationunits-cs2" %}

This code preserves offsets during edits, requiring manual adjustments.

## Handle dependency validation modes

Dependency validation during editing uses the [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#actionbegin) event with `requestType: 'validateLinkedTask'`. The `validateMode` argument defines modes:
- `respectLink`: Prioritizes links, reverting invalid edits.
- `removeLink`: Prioritizes editing, removing conflicting links.
- `preserveLinkWithEditing`: Updates offsets to maintain links (default).

The following example enables `respectLink` mode:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/taskdependency/predecessor-links-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/taskdependency/predecessor-links-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/taskdependency/predecessor-links-cs1" %}

This code reverts edits violating links, ensuring dependency integrity.

## Use validation dialog

When all validation modes are disabled in [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#actionbegin), a dialog prompts users to choose modes like canceling edits or removing links, based on the successor's start date relative to the predecessor.

The following example enables the validation dialog:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/taskdependency/validation-dialog-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/taskdependency/validation-dialog-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/taskdependency/validation-dialog-cs1" %}

This code displays options like "Remove the link and move the task" for conflicts.

## Show or hide dependency lines dynamically

Dependency lines are hidden or shown by toggling `visibility: hidden` on `.e-gantt-dependency-view-container`, allowing dynamic control for focused views.

The following example toggles dependency lines:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/taskdependency/showhide-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/taskdependency/showhide-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/taskdependency/showhide-cs1" %}

This code hides lines on button click, with ARIA updates for accessibility.

## Customize connector lines

Connector lines are styled globally with [`connectorLineWidth`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#connectorlinewidth) and [`connectorLineBackground`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#connectorlinebackground).

The following example sets the connector line background color as red:

```typescript
import { Component } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';

@Component({
    imports: [GanttModule],
    standalone: true,
    selector: 'app-root',
    template: `
        <ejs-gantt 
            id="ganttDefault" 
            height="430px" 
            [dataSource]="taskData" 
            [taskFields]="taskSettings" 
            [projectStartDate]="projectStartDate" 
            [projectEndDate]="projectEndDate"
            [connectorLineWidth]="2"
            [connectorLineBackground]="'red'">
        </ejs-gantt>
    `
})
export class AppComponent {
    public taskData: object[] = [
        { TaskID: 1, TaskName: "Product concept", StartDate: new Date("04/02/2025"), EndDate: new Date("04/08/2025") },
        { TaskID: 2, TaskName: "Define the product usage", StartDate: new Date("04/02/2025"), EndDate: new Date("04/08/2025"), Duration: 1, Progress: 30, ParentId: 1 },
        { TaskID: 3, TaskName: "Define the target audience", StartDate: new Date("04/02/2025"), EndDate: new Date("04/04/2025"), Duration: 2, Progress: 40, ParentId: 1 },
        { TaskID: 4, TaskName: "Prepare product sketch and notes", StartDate: new Date("04/05/2025"), Duration: 2, Progress: 30, ParentId: 1, Predecessor: "2" },
        { TaskID: 5, TaskName: "Concept approval", StartDate: new Date("04/08/2025"), EndDate: new Date("04/08/2025"), Duration: 0, ParentId: 1, Predecessor: "3,4" },
        { TaskID: 6, TaskName: "Market research", StartDate: new Date("04/09/2025"), EndDate: new Date("04/18/2025"), Progress: 30 },
        { TaskID: 7, TaskName: "Demand analysis", Progress: 40, ParentId: 6 },
        { TaskID: 8, TaskName: "Customer strength", StartDate: new Date("04/09/2025"), EndDate: new Date("04/12/2025"), Duration: 4, Progress: 30, ParentId: 7, Predecessor: "5"},
        { TaskID: 9, TaskName: "Market opportunity analysis", StartDate: new Date("04/09/2025"), EndDate: new Date("04/12/2025"), Duration: 4, ParentId: 7, Predecessor: "5" },
        { TaskID: 10, TaskName: "Competitor analysis", StartDate: new Date("04/15/2025"), EndDate: new Date("04/18/2025"), Duration: 4, Progress: 30, ParentId: 6, Predecessor: "7,8" },
    ];
    public taskSettings: object = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentId'
    };

}
```

![Customize connector lines](images/connector-line-bgcolor.png)

## See also
- [How to configure task constraints?](https://ej2.syncfusion.com/angular/documentation/gantt/task-constraints)
- [How to customize taskbars?](https://ej2.syncfusion.com/angular/documentation/gantt/taskbar)
- [How to enable critical path?](https://ej2.syncfusion.com/angular/documentation/gantt/critical-path)