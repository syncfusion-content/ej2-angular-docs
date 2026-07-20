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

The [Angular Gantt Chart](https://www.syncfusion.com/angular-components/angular-gantt-chart) is a UI component designed to visualize and manage project schedules using a timeline view. It supports hierarchical task structures, automatic scheduling, and rich interactive features.

This guide demonstrates how to create an Angular application, configure task data, and render a basic Gantt Chart.

## Prerequisites

Ensure the following prerequisites are installed:
- Node.js **20.11 or later** (required by Angular 20/21)
- npm or yarn package manager
- Basic knowledge of Angular framework
- A valid Syncfusion<sup style="font-size:70%">&reg;</sup> license key for commercial use. You can obtain a key from your [Syncfusion account](https://www.syncfusion.com/account) and register it as shown in the [licensing documentation](https://ej2.syncfusion.com/angular/documentation/licensing/license-key-registration).

## Installation

Create a new Angular application using the Angular CLI:

```bash
npm install -g @angular/cli
```
Once the Angular CLI is installed, run the following command to generate a new application:

```bash
ng new syncfusion-angular-app
```

This command will prompt you for several configuration options:

**Stylesheet Format** — Choose your preferred stylesheet format:
- `CSS` (default) — Standard CSS
- `SCSS` — Sass with full CSS features (recommended for complex styling)
- `Sass (Indented)` — Indented Sass syntax
- `Less` — Less CSS preprocessor

To skip the prompts and use SCSS directly:
```bash
ng new syncfusion-angular-app --style=scss
```

**Server-side Rendering (SSR)** — When prompted, choose:
- `Yes` — If you need server-side rendering for performance
- `No` — For standard client-side rendering (recommended for most cases)

![Initial_setup](./images/SSR.png)

**Deployment Presets** — Select the required AI tool or choose `none` if not needed.

![Initial_setup](./images/Ai.png)

Once the project is created, navigate to your application directory:

```bash
cd syncfusion-angular-app
```

> This guide uses Angular 21+ with standalone components. For compatibility with other Angular versions, see the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility).

Install the Gantt Chart package using the Angular CLI command:

```bash
ng add @syncfusion/ej2-angular-gantt
```

This command performs the following automatically:

- Installs the `@syncfusion/ej2-angular-gantt` package and dependencies
- Imports the Gantt Chart module into your application
- Registers default theme styles in `angular.json`

## Add theme styles

The Gantt Chart component requires specific CSS files for proper rendering. Syncfusion provides multiple themes for the Gantt Chart component. For a complete list of available themes, refer to the [theme packages](https://ej2.syncfusion.com/angular/documentation/appearance/overview#theme-packages).

To apply the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme, install the corresponding theme package by using the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

The installed theme package includes an `index.css` file that automatically imports all the required dependency styles. Import the following stylesheet into `src/styles.css`:

```css
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/gantt/index.css';
```

## Create sample task data

Define a simple task list with hierarchical relationships. The data includes two parent tasks (TaskID 1 and 5) with child tasks linked via `ParentID`. Each task must have a `StartDate` and either a `Duration` (in days) or `EndDate` to render properly.

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
| `duration` | Task duration in days | Either Duration or EndDate |
| `endDate` | Task end date | Either Duration or EndDate |
| `parentID` | Parent task ID for hierarchy | No |

## Render the Angular Gantt Chart Component

Update the component file to render the Gantt Chart using the sample data and task settings defined earlier.

### For Angular 20+ (Standalone Components)

Modify the `src/app/app.ts` file with the following code:

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

**Key Properties**:
- `imports: [GanttModule]` — Imports the Gantt Chart module for use in this component
- `standalone: true` — Indicates this is a standalone component (Angular 14+)
- `template` — Defines the component's HTML inline; `[dataSource]="data"` binds the task data and `[taskFields]="taskSettings"` maps the field names
- `encapsulation: ViewEncapsulation.None` — Disables view encapsulation to allow global styles to apply to the Gantt Chart

### For Angular 19 and Earlier (Module-Based)

If using Angular 19 or earlier, define the component in `src/app/app.component.ts`:

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public data = [/* ... task data ... */];
    public taskSettings = {/* ... field mappings ... */};
}
```

Then add to `src/app/app.module.ts`:

```typescript
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [GanttModule],
    // ... other declarations
})
export class AppModule { }
```

And create `src/app/app.component.html`:

```html
<ejs-gantt [dataSource]="data" [taskFields]="taskSettings"></ejs-gantt>
```

## Run the application

Start the development server with:

```bash
ng serve --open
```

This command:
- Compiles the Angular application
- Starts a local development server on `http://localhost:4200` (default port)
- Opens the application in your default browser (the `--open` flag)

**Troubleshooting**:
- **Port 4200 already in use**: Run `ng serve --port 4300` to use a different port
- **Module not found errors**: Ensure all dependencies are installed with `npm install`
- **Styles not applied**: Verify all CSS imports in `src/styles.css` are correct
- **Blank page**: Check the browser console for errors and ensure the element `<ejs-gantt>` is rendering

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

## Error handling

Proper error handling helps identify and resolve issues during development. The Gantt Chart provides events to capture validation and configuration errors.

### Common error scenarios

- **Missing taskFields mapping** — If `taskFields` is not properly configured, the Gantt Chart cannot map data fields to task properties. Ensure all required fields (`id`, `name`, `startDate`) are mapped.
- **Invalid date format** — Task dates must be valid JavaScript Date objects. Invalid dates prevent proper rendering.
- **Missing dataSource** — Ensure `dataSource` is bound to the component with task data.
- **Unsupported field types** — The `id` field must be numeric or string; Duration must be numeric.
- **Module not imported** — Verify that `GanttModule` is imported in the component (standalone) or module declaration.

### Handling errors with actionFailure event

Use the `actionFailure` event to capture and handle errors:

```typescript
@Component({
    template: `<ejs-gantt [dataSource]="data" [taskFields]="taskSettings" (actionFailure)="onActionFailure($event)"></ejs-gantt>`
})
export class App {
    public data = [/* ... */];
    public taskSettings = {/* ... */};
    
    onActionFailure(args: any) {
        console.error('Gantt Chart Error:', args.error);
        alert(`Configuration Error: ${args.error}`);
    }
}
```

## Next Steps

- **[Key Elements](https://ej2.syncfusion.com/angular/documentation/gantt/events)** - Learn about UI components and interactions
- **[Feature Modules](https://ej2.syncfusion.com/angular/documentation/gantt/module)** - Enable advanced features with module injection
- **[Overview](https://ej2.syncfusion.com/angular/documentation/gantt/overview)** - Explore all available features

N> Looking for the full Angular Gantt Chart component overview, features, pricing, and documentation? Visit the [Angular Gantt Chart](https://www.syncfusion.com/angular-components/angular-gantt-chart) page.
