---
layout: post
title: Getting Started with Angular Gantt Chart
description: Learn how to install and render your first Angular Gantt Chart with hierarchical task data, field mapping, and timeline visualization.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Gantt Chart

This guide shows how to create an Angular application with the Gantt Chart component, configure task data, and render a timeline view with hierarchical tasks.

## Prerequisites

- Node.js 18.19 or later
- npm or yarn package manager
- Basic knowledge of Angular framework

## Installation

Create a new Angular application using Angular CLI:

```bash
npm install -g @angular/cli
ng new my-gantt-app
cd my-gantt-app
```

> This guide uses Angular 21+ with standalone components. For compatibility with other Angular versions, see the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility).

Install the Gantt Chart package:

```bash
ng add @syncfusion/ej2-angular-gantt
```

This command installs the package, imports the Gantt module, and registers the default theme in `angular.json`.

## Add theme styles

Import the basic Gantt Chart styles in your `src/styles.css`:

```css
@import '../node_modules/@syncfusion/ej2-gantt/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-treegrid/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
```

> **Note:** When using features like editing, toolbar, filtering, or dialogs:
> ```css
> /* For editing, toolbar, and dialog features */
> @import '../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css';
> @import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
> @import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
> @import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
> @import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
> @import '../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css';
> 
> /* For rich text editor in dialog notes tab */
> @import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';
> ```

## Create sample data

Define a simple task list with hierarchical relationships. Each task must have a `StartDate` and either a `Duration` or `EndDate` to render properly.

```typescript
public data = [
    {TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('2024-04-01'), EndDate: new Date('2024-04-15')},
    {TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('2024-04-01'), Duration: 4, ParentID: 1},
    {TaskID: 3, TaskName: 'Perform site survey', StartDate: new Date('2024-04-01'), Duration: 4, ParentID: 1},
    {TaskID: 4, TaskName: 'Soil testing', StartDate: new Date('2024-04-01'), Duration: 3, ParentID: 1},
    {TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('2024-04-15'), EndDate: new Date('2024-04-25')},
    {TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('2024-04-15'), Duration: 5, ParentID: 5},
    {TaskID: 7, TaskName: 'Estimate project cost', StartDate: new Date('2024-04-15'), Duration: 5, ParentID: 5}
];
```

## Configure task fields

Map your data fields to Gantt Chart properties using `taskFields`:

```typescript
public taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    parentID: 'ParentID'
};
```

### Field mapping reference

| Property | Description | Required |
|----------|-------------|----------|
| `id` | Unique task identifier | Yes |
| `name` | Task display name | Yes |
| `startDate` | Task start date | Yes |
| `duration` | Task duration in days | Yes* |
| `parentID` | Parent task ID for hierarchy | No |

*Either `duration` or `endDate` is required for a task to render properly.

## Render the Gantt component

Put it all together in **src/app/app.component.ts** (Angular 19 and below) or **src/app/app.ts** (Angular 20+):

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';

@Component({
    imports: [GanttModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-gantt [dataSource]="data" [taskFields]="taskSettings"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class App {
    public data = [
        {TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('2024-04-01'), EndDate: new Date('2024-04-15')},
        {TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('2024-04-01'), Duration: 4, ParentID: 1},
        {TaskID: 3, TaskName: 'Perform site survey', StartDate: new Date('2024-04-01'), Duration: 4, ParentID: 1},
        {TaskID: 4, TaskName: 'Soil testing', StartDate: new Date('2024-04-01'), Duration: 3, ParentID: 1},
        {TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('2024-04-08'), EndDate: new Date('2024-04-18')},
        {TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('2024-04-08'), Duration: 5, ParentID: 5},
        {TaskID: 7, TaskName: 'Estimate project cost', StartDate: new Date('2024-04-08'), Duration: 5, ParentID: 5}
    ];
    public taskSettings = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        parentID: 'ParentID'
    };
}
```

## Run the application

```bash
ng serve --open
```

## Output

You will see a Gantt Chart with:

- Task hierarchy with parent-child relationships
- Timeline view showing task bars
- Automatically calculated dates based on duration

The chart displays two parent tasks (Product launch, Development) with subtasks shown in a tree structure. Task bars are rendered on the timeline, sized according to their duration and start dates.

You can preview the following sample by clicking the **Preview Sample** button.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/gantt/getting-started/run-application-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/run-application-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/getting-started/run-application-cs1" %}

## Next Steps

- **[Key Elements](https://ej2.syncfusion.com/angular/documentation/gantt/events)** - Learn about UI components and interactions
- **[Feature Modules](https://ej2.syncfusion.com/angular/documentation/gantt/module)** - Enable advanced features with module injection
- **[Overview](https://ej2.syncfusion.com/angular/documentation/gantt/overview)** - Explore all available features
