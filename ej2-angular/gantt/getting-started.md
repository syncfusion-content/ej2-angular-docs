---
layout: post
title: Getting Started with Angular Gantt Component | Syncfusion
description: Learn how to set up and configure the Syncfusion Angular Gantt component for task scheduling, dependency management, and project visualization.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Gantt component

The Syncfusion Angular Gantt component enables visualization and management of project tasks, dependencies, and timelines. It supports hierarchical task structures, resource allocation, critical path analysis, and interactive features like editing, sorting, and filtering. This guide outlines the steps to set up the component, configure its core features, and bind project data for effective project management.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

## Dependencies

The Angular Gantt component relies on specific packages to render tasks, timelines, and interactive features. Below are the required dependencies:
``` bash
|-- @syncfusion/ej2-angular-gantt (Main Gantt package)
    |-- @syncfusion/ej2-angular-base (Angular base components)
    |-- @syncfusion/ej2-gantt (Core Gantt functionality)
        |-- @syncfusion/ej2-base (Base utilities and helpers)
        |-- @syncfusion/ej2-data (Data management and binding)
        |-- @syncfusion/ej2-popups (Dialog and popup components)
        |-- @syncfusion/ej2-grids (Grid functionality for task list)
        |-- @syncfusion/ej2-treegrid (Tree structure for hierarchical tasks)
        |-- @syncfusion/ej2-calendars (Date picker and calendar components)
        |-- @syncfusion/ej2-dropdowns (Dropdown components for editing)
        |-- @syncfusion/ej2-inputs (Input components for task editing)
        |-- @syncfusion/ej2-buttons (Toolbar button components)
```
Install these dependencies using the appropriate npm command based on your Angular version.

## Setup angular environment

Use the [Angular CLI](https://github.com/angular/angular-cli) to create and configure an Angular application. Install the CLI globally with:

```bash
npm install -g @angular/cli
```

Create a new Angular application:

```bash
ng new my-app
cd my-app
```

## Install Syncfusion Angular Gantt Package

Syncfusion provides two package formats for the Angular Gantt component: Ivy-compatible for Angular 12 and above, and ngcc-compiled for older versions. Choose the appropriate package based on your Angular version to ensure compatibility and optimal performance.

For Angular 12 and above (Ivy-compatible):

```bash
npm install @syncfusion/ej2-angular-gantt --save
```

For Angular versions below 12 (ngcc-compiled):

```bash
npm install @syncfusion/ej2-angular-gantt@ngcc --save
```

In `package.json`, specify the ngcc package version explicitly, e.g.:

```json
"@syncfusion/ej2-angular-gantt": "20.2.38-ngcc"
```

If the ngcc tag is omitted, the Ivy package installs by default, which may cause compatibility issues for Angular versions below 12. Verify your Angular version to avoid runtime errors. Syncfusion® Angular packages (version 20.2.36 and above) are compatible with the Angular Ivy rendering engine, supporting Angular version 12 and above.

## Add CSS references

Include Syncfusion’s theme CSS files to ensure consistent styling for the Gantt component. Add the following imports to `[src/styles.css]`:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import '../node_modules/@syncfusion/ej2-treegrid/styles/material.css';
@import '../node_modules/@syncfusion/ej2-gantt/styles/material.css';
```

These styles ensure proper rendering of taskbars, timelines, and interactive elements like dialogs and toolbars.

## Integrate Gantt component

Add the Gantt component to the application by modifying `app.component.ts`. Use the `<ejs-gantt>` directive to initialize the component and configure it with properties to display project data.

```typescript
import { Component, OnInit } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';

@Component({
    imports: [GanttModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-gantt></ejs-gantt>`
})

export class AppComponent implements OnInit {
    ngOnInit(): void {}
}
```

This basic setup renders an empty Gantt chart. Configure additional properties like `dataSource` and `taskFields` to populate tasks.

## Bind data to Gantt

The Gantt component binds to project data through the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/gantt/#datasource) property, which accepts an array of JavaScript objects or a `DataManager` instance. The [taskFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskfields) property maps data source fields to task attributes (e.g., id, name, startDate, duration).

The following example demonstrates binding hierarchical task data:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/binding-data-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/binding-data-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/getting-started/binding-data-cs1" %}

The code defines a data source with parent and child tasks, mapping fields like `TaskID` to `id` and `subtasks` to `child`. 

## Inject feature modules

Enhance the Gantt component by injecting feature modules to enable capabilities like editing, sorting, and filtering. Inject modules into the `providers` array of the root `NgModule` or component. Common modules include:
- [EditService](https://ej2.syncfusion.com/angular/documentation/api/gantt/#editmodule): Enables task editing via cells, dialogs, or taskbars.
- [FilterService](https://ej2.syncfusion.com/angular/documentation/api/gantt/#filtermodule): Supports column-based menu filtering.
- [SortService](https://ej2.syncfusion.com/angular/documentation/api/gantt/#sortmodule): Allows task sorting by column values.
- [SelectionService](https://ej2.syncfusion.com/angular/documentation/api/gantt/#selectionmodule): Enables row and cell selection.
- [ToolbarService](https://ej2.syncfusion.com/angular/documentation/api/gantt/#toolbar): Adds toolbar actions like Add, Edit, and Delete.
- [DayMarkersService](https://ej2.syncfusion.com/angular/documentation/api/gantt/#daymarkersmodule): Highlights specific days in the timeline.
- [CriticalPathService](https://ej2.syncfusion.com/angular/documentation/api/gantt/#criticalpathmodule): Identifies and highlights critical tasks.

The following example injects modules to enable editing, sorting, and toolbar features:

```typescript
import { Component } from '@angular/core';
import { GanttModule , EditService, FilterService, SortService, ToolbarService } from '@syncfusion/ej2-angular-gantt';

@Component({
    imports: [GanttModule],
    standalone: true,
    providers: [EditService, FilterService, SortService, ToolbarService],
    selector: 'app-root',
    template: `
       <ejs-gantt [dataSource]="data" [taskFields]="taskFields" [toolbar]="toolbar" [allowFiltering]='true' [allowSorting]= 'true'>
       </ejs-gantt>`
})

export class AppComponent {
    public data: object[] = [];
    public taskFields: object = {};
    public toolbar: string[] = ['Add', 'Edit', 'Delete'];
}
```

Injecting `EditService` enables task modifications, while `ToolbarService` adds interactive toolbar buttons. Omitting required modules disables corresponding features, leading to runtime limitations.

## Configure timeline

The [timelineSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineSettings/) property customizes the Gantt chart’s timeline, defining time units (e.g., days, weeks) and formatting for the top and bottom tiers. Set `projectStartDate` and `projectEndDate` to establish the timeline’s range, or let the component calculate them from task data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/timeline-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/timeline-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/getting-started/timeline-cs1" %}

The code configures a two-tier timeline with weekly and daily views, ensuring clear visualization of task durations.

## Enable toolbar

The [toolbar](https://ej2.syncfusion.com/angular/documentation/api/gantt/#toolbar) property adds interactive buttons (e.g., Add, Edit, Delete, ExpandAll, CollapseAll) to the Gantt chart. Inject `ToolbarService` to enable this feature. The following example adds common toolbar actions:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/getting-started/toolbar-cs1" %}

The `toolbar` array specifies actions, and `ToolbarService` ensures their functionality. Missing `ToolbarService` prevents toolbar rendering.

## Enable editing

Editing allows modification of tasks through cells, dialogs, taskbars, or dependency lines. Enable editing by setting [editSettings.allowEditing](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowediting) and [editSettings.allowTaskbarEditing](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowtaskbarediting) to **true** and injecting `EditService`.

### Cell editing

Set [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#mode) to **Auto** for cell editing. Double-click a cell in the TreeGrid to edit task details. Inject `EditService` to enable this feature.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/editing-cell-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/editing-cell-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/getting-started/editing-cell-cs1" %}

The code enables cell editing, allowing inline updates to task fields like `TaskName` or `Duration`. Double-clicking on the chart side opens the edit dialog if `mode` is `Auto`.

### Dialog editing

Set [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#mode) to **Dialog** to edit tasks via a dialog. Double-click anywhere on the treegrid pane or chart pane to open the dialog.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/editing-dialog-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/editing-dialog-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/getting-started/editing-dialog-cs1" %}

The dialog provides a comprehensive interface for editing task properties, ensuring precise updates.

### Taskbar editing

Enable taskbar editing by setting [editSettings.allowTaskbarEditing](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowtaskbarediting) to **true**. Drag or resize taskbars to adjust task start dates or durations.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/editing-taskbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/editing-taskbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/getting-started/editing-taskbar-cs1" %}

Taskbar editing allows intuitive adjustments to task schedules directly on the chart.

### Dependency editing

Enable dependency editing by setting [editSettings.allowTaskbarEditing](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowtaskbarediting) to **true** and mapping the [dependency](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#dependency) field in [taskFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskfields). Drag connector lines between taskbars to create or modify dependencies.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/editing-dependency-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/editing-dependency-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/getting-started/editing-dependency-cs1" %}

The code maps the `Predecessor` field to `dependency`, enabling visual dependency management.

## Define task relationships

Task relationships (dependencies) define how tasks depend on each other, impacting scheduling. The Gantt component supports four dependency types:
- **Finish-to-Start (FS)**: The successor task starts after the predecessor finishes.
- **Start-to-Start (SS)**: The successor task starts when the predecessor starts.
- **Finish-to-Finish (FF)**: The successor task finishes when the predecessor finishes.
- **Start-to-Finish (SF)**: The successor task finishes when the predecessor starts.

Map the [dependency](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#dependency) field in [taskFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskfields) to enable relationships. The component validates dependencies during rendering and editing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/task-relationship-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/task-relationship-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/getting-started/task-relationship-cs1" %}

The code defines dependencies like `2FS` to link tasks, ensuring accurate scheduling. Dependency validation prevents scheduling conflicts, such as circular dependencies.

## Assign resources

Assign resources to tasks using the [resources](https://ej2.syncfusion.com/angular/documentation/api/gantt/#resources) property, which accepts a collection of resource objects with fields like id, name, and unit. Map these fields using [resourceFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/resourceFields/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/resources-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/resources-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/getting-started/resources-cs1" %}

## Enable filtering

Filtering reduces visible tasks based on criteria, using menu filters for each column. Enable it by setting [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowfiltering) to **true** and injecting `FilterService`. Customize filtering with [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt/filterSettings/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/filtering-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/filtering-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/getting-started/filtering-cs1" %}

The code enables menu filtering, allowing tasks to be filtered by columns like `TaskName`. Missing `FilterService` disables this feature.

## Enable sorting

Sorting orders tasks by column values. Enable it by setting [allowSorting](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowsorting) to **true** and injecting `SortService`. Customize sorting with [sortSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt/sortSettings/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/sorting-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/sorting-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/getting-started/sorting-cs1" %}

The code enables sorting by columns like `StartDate`, enhancing task organization. Missing `SortService` prevents sorting functionality.

## Define event markers

The [eventMarkers](https://ej2.syncfusion.com/angular/documentation/api/gantt/#eventmarkers) property highlights important dates in the timeline with vertical lines and labels. Inject `DayMarkersService` and configure `day` and `label` for each marker. Invalid `day` values trigger the [actionFailure](https://ej2.syncfusion.com/angular/documentation/api/gantt/#actionfailure) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/event-markers-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/event-markers-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/getting-started/event-markers-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/getting-started/event-markers-cs1" %}

The code adds markers for key project dates, enhancing timeline visibility. Missing `DayMarkersService` prevents marker rendering.

## Handle Errors

The [actionFailure](https://ej2.syncfusion.com/angular/documentation/api/gantt/#actionfailure) event captures configuration errors, such as:
- Invalid `duration` values (non-numeric).
- Incorrect `dependency` formats (e.g., invalid predecessor types).
- Invalid `offset` values in dependencies.
- Missing `taskFields` or `resourceFields` mappings.
- Unmapped `isPrimaryKey` for CRUD operations.
- Invalid `timelineSettings.format` values.
- Missing `hasChildMapping` for load-on-demand data.
- Invalid `day` in `eventMarkers`.

The following example demonstrates handling a missing `isPrimaryKey` configuration:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/exception-handling/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/exception-handling/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/exception-handling/src/data.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/exception-handling" %}

![Gantt Exception Handling](images/error-handling.PNG)
*Alt text: Screenshot of Gantt chart displaying an error message from the actionFailure event due to missing isPrimaryKey configuration.*

The code triggers `actionFailure` when `isPrimaryKey` is not set, displaying error details for debugging.

## Run the Application

Run the application with:

```bash
ng serve --open
```

The following example demonstrates a complete Gantt chart setup:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/run-application-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/run-application-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/getting-started/run-application-cs1" %}

The code integrates data binding, timeline settings, and toolbar features for a fully functional Gantt chart.

## See Also

- [How to configure task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/taskdependency)
- [How to enable virtual scrolling?](https://ej2.syncfusion.com/angular/documentation/gantt/virtual-scroll)
- [How to customize taskbars?](https://ej2.syncfusion.com/angular/documentation/gantt/taskbar)
- [Angular Gantt chart feature tour](https://www.syncfusion.com/angular-components/angular-gantt-chart)
- [Angular Gantt chart example](https://ej2.syncfusion.com/angular/demos/#/fluent2/gantt/overview)