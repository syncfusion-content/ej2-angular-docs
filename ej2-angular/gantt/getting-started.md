---
layout: post
title: Getting Started with Syncfusion Angular Gantt Chart
description: Learn how to install and render your first Angular Gantt Chart with hierarchical task data, field mapping, and timeline visualization.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Gantt Chart

The **Syncfusion Angular Gantt Chart** is a UI component designed to visualize and manage project schedules using a timeline view. It supports hierarchical task structures, automatic scheduling, and rich interactive features.

This guide demonstrates how to create an Angular application, configure task data, and render a basic Gantt Chart.

## Prerequisites

Ensure the following prerequisites are installed:
- Node.js **18.19 or later**
- npm or yarn package manager
- Basic knowledge of Angular framework

## Installation

Create a new Angular application using the Angular CLI:

```bash
npm install -g @angular/cli
```
Once the Angular CLI is installed, run the following command to generate a new application:

```bash
ng new syncfusion-angular-app
```

* This command will prompt you to configure settings like enabling Angular routing and choosing a stylesheet format.

```bash
? Which stylesheet format would you like to use? (Use arrow keys)
> CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less            [ http://lesscss.org                                             ]
```

* By default, a CSS-based application is created. Use SCSS if required:

```bash
ng new syncfusion-angular-app --style=scss
```

* During project setup, when prompted for the Server-side rendering (SSR) option, choose the appropriate configuration.

![Initial_setup](./images/SSR.png)

* Select the required AI tool or 'none' if you do not need any AI tool.

![Initial_setup](./images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> This guide uses Angular 21+ with standalone components. For compatibility with other Angular versions, see the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility).

Install the Gantt Chart package using the Angular CLI command:

```bash
ng add @syncfusion/ej2-angular-gantt
```

This command performs the following automatically:

- Installs required dependencies
- Imports the Gantt module
- Registers default theme styles in `angular.json`.

## Add theme styles

The Gantt Chart component requires specific CSS files for proper rendering.

Import the basic Gantt Chart styles into `src/styles.css` using the Tailwind theme (you can also use `material3.css`, `bootstrap5.css`, or other available themes):

```css
@import '../node_modules/@syncfusion/ej2-gantt/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-treegrid/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
```

> **Note:** Additional styles are required when enabling advanced features such as editing, toolbar, or dialogs:
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

**Understanding Style Application**
 
The imported CSS files are added to the global stylesheet (`src/styles.css`). Angular automatically applies these styles to all components in the application, so no additional configuration is required in the TypeScript (`.ts`) files.

## Create sample task data

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

## Configure task fields mapping

Map the data fields to Gantt Chart properties using `taskFields`:

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
| `duration` | Task duration in days | Yes |
| `parentID` | Parent task ID for hierarchy | No |

## Render the Angular Gantt Chart Component

Update the component file to render the Gantt Chart using the sample data and task settings defined earlier. Modify the `src/app/app.ts` file (for Angular 20+) with the following code:

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
        {TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('2024-04-15'), EndDate: new Date('2024-04-25')},
        {TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('2024-04-15'), Duration: 5, ParentID: 5},
        {TaskID: 7, TaskName: 'Estimate project cost', StartDate: new Date('2024-04-15'), Duration: 5, ParentID: 5}
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

> **Note for Angular 19 and earlier versions:**  
> The Gantt Chart component configuration should be defined in the `app.component.ts` file.

## Run the application

```bash
ng serve --open
```

## Output

The Gantt Chart displays:

- Task hierarchy with parent-child relationships
- Timeline view showing task bars
- Automatically calculated dates based on duration

The chart displays two parent tasks (Project initiation, Project estimation) with subtasks shown in a tree structure. Task bars are rendered on the timeline, sized according to their duration and start dates.

You can preview the following sample by clicking the **Preview Sample** button.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/gantt/getting-started/run-application-cs1/src/app.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/getting-started/run-application-cs1" %}

## Next Steps

- **[Key Elements](https://ej2.syncfusion.com/angular/documentation/gantt/events)** - Learn about UI components and interactions
- **[Feature Modules](https://ej2.syncfusion.com/angular/documentation/gantt/module)** - Enable advanced features with module injection
- **[Overview](https://ej2.syncfusion.com/angular/documentation/gantt/overview)** - Explore all available features
