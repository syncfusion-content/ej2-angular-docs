---
layout: post
title: WebMCP tool integration for Angular Gantt Chart | Syncfusion
description: Learn how to integrate WebMCP with Syncfusion Angular Gantt Chart to enable AI interaction, configure tools, manage access, and monitor execution.
platform: ej2-angular
control: WebMCP
documentation: ug
domainurl: ##DomainURL##
---

# WebMCP Tools Integration for Syncfusion® Angular Gantt Chart

WebMCP allows AI assistants running in the browser to interact directly with Syncfusion® Angular Gantt Chart components through natural language prompts.

Instead of relying on DOM inspection or simulating user interactions, AI assistants can interact directly with component APIs through WebMCP tools. This approach provides more reliable and accurate results.

Once connected, an AI assistant can perform tasks such as:

- Manage project tasks and task updates.
- Schedule and reschedule work across the project timeline.
- Manage task dependencies and hierarchy.
- Search, filter, sort, and navigate the project timeline.
- Expand and collapse records.
- Export project data and review undo and redo history.

The Angular Gantt Chart component provides WebMCP tools that enable AI agents to manage tasks, schedule projects, handle dependencies and hierarchies, navigate timelines, perform search, filtering, and sorting operations, export project data, and execute undo and redo actions.

> WebMCP is currently an experimental browser capability and requires a Chromium-based browser with WebMCP support enabled. Availability and required browser flags may change as the specification evolves.

## Prerequisites

- Syncfusion® Angular Gantt Chart component
- Chromium-based Browser (like Chrome, Edge, or Brave)
- [Node.js 24+](https://nodejs.org/en) (LTS recommended).
- WebMCP browser extension installed
- AI API key configured in the extension

## WebMCP setup

Before you can use WebMCP locally, enable the feature flag and install the browser extension:
1. Enable `WebMCP for testing` flag via `chrome://flags/`. Click **"Relaunch"** to restart Chrome.
2. Search for **"WebMCP - Model Context Tool Inspector"** in [Chrome Web Store](https://chromewebstore.google.com/detail/webmcp-model-context-tool/gbpdfapgefenggkahomfgkhfehlcenpd). Click **"Add to Chrome"**.
3. Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to create or copy an API key. Open the WebMCP extension → paste your API key.
The WebMCP extension is now configured and ready to interact with WebMCP-enabled Syncfusion® Angular Gantt Chart component.

## Integrating WebMCP tools

Follow these steps to integrate WebMCP support into Syncfusion® Angular Gantt Chart component.

### Step 1: Create an application

Create an Angular application and integrate the Syncfusion® Angular Gantt Chart component by following the [Getting Started with Angular Gantt Chart](https://ej2.syncfusion.com/angular/documentation/gantt/getting-started) guide. After completing the setup, follow the steps below to enable WebMCP integration.

### Step 2: Enable WebMCP support

Import the WebMcpGanttService module and inject it into the component to make WebMCP functionality available.

```ts
import { Component } from '@angular/core';
import { GanttModule, SelectionService, SortService, FilterService, ToolbarService, EditService, WebMcpGanttService } from '@syncfusion/ej2-angular-gantt';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [WebMcpGanttService, SelectionService, SortService, FilterService, ToolbarService, EditService],
  template: `
    <ejs-gantt
      id="gantt"
      [dataSource]="data"
      [taskFields]="taskFields"
      [editSettings]="editSettings"
      [toolbar]="toolbar"
      [enableWebMcp]="true"
      [allowSorting]="true"
      [allowFiltering]="true"
      [allowSelection]="true"
      height="450px">
    </ejs-gantt>
  `
})
export class AppComponent {

  public editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  };

  public toolbar: string[] = ['Add','Edit','Delete','Update','Cancel'];

  public data: Object[] = [
    { TaskID: 1, TaskName: 'Project Planning', StartDate: new Date('2025-01-06'), Duration: 5, Progress: 70, ChildTasks: [
        { TaskID: 2, TaskName: 'Requirement Analysis', StartDate: new Date('2025-01-06'), Duration: 3, Progress: 100 },
        { TaskID: 3, TaskName: 'Design phase', StartDate: new Date('2025-01-09'), Duration: 4, Progress: 60, Dependency: '2', ChildTasks: [
            { TaskID: 4, TaskName: 'UI Review', StartDate: new Date('2025-01-10'), Duration: 3, Progress: 20, Dependency: '3' }
        ]}
    ]}
  ];

  public taskFields: Object = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Dependency',
    child: 'ChildTasks'
  };
}
```

### Step 3: Register component tools

Set the [enableWebMcp](https://ej2.syncfusion.com/angular/documentation/api/gantt/index-default#enablewebmcp) property to `true` and configure the [webMcpSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt/index-default#webmcpsettings) property to register the component's available tools with the WebMCP runtime.

When `enableWebMcp` is enabled, supported component tools are automatically registered with the WebMCP runtime and become discoverable by authorized WebMCP clients.

For example, a component may expose tools such as:
- `createTask` – Creates one or more project tasks.
- `updateTask` – Updates task information such as dates, duration, or progress.
- `getProjectTasks` – Retrieves the current project task collection.
An AI assistant can discover these tools and invoke them based on user prompts.

```ts
import { Component } from '@angular/core';
import { GanttModule, SelectionService, SortService, FilterService, ToolbarService, EditService, WebMcpGanttService } from '@syncfusion/ej2-angular-gantt';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [WebMcpGanttService, SelectionService, SortService, FilterService, ToolbarService, EditService],
  template: `
    <ejs-gantt
      id="gantt"
      [dataSource]="data"
      [taskFields]="taskFields"
      [editSettings]="editSettings"
      [toolbar]="toolbar"
      [webMcpSettings]="webMcpSettings"
      [enableWebMcp]="true"
      [allowSorting]="true"
      [allowFiltering]="true"
      [allowSelection]="true"
      height="450px">
    </ejs-gantt>
  `
})
export class AppComponent {
  public webMcpSettings = {
    tools: []
  };

  public editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  };

  public toolbar: string[] = ['Add','Edit','Delete','Update','Cancel'];

  public data: Object[] = [
    { TaskID: 1, TaskName: 'Project Planning', StartDate: new Date('2025-01-06'), Duration: 5, Progress: 70, ChildTasks: [
        { TaskID: 2, TaskName: 'Requirement Analysis', StartDate: new Date('2025-01-06'), Duration: 3, Progress: 100 },
        { TaskID: 3, TaskName: 'Design phase', StartDate: new Date('2025-01-09'), Duration: 4, Progress: 60, Dependency: '2', ChildTasks: [
            { TaskID: 4, TaskName: 'UI Review', StartDate: new Date('2025-01-10'), Duration: 3, Progress: 20, Dependency: '3' }
        ]}
    ]}
  ];

  public taskFields: Object = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Dependency',
    child: 'ChildTasks'
  };
}
```

### Step 4: Customize tool registration

Use the [webMcpSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt/index-default#webmcpsettings) property to customize how WebMCP tools are exposed to AI agents. The available settings are listed below.

| Property | Description |
|-----------|-------------|
| `name` | Prefix applied to registered tool names. If name: `gantt` is specified, a tool such as `createTask` may be registered as `gantt_createTask`, allowing multiple component instances to coexist without tool name conflicts. |
| `tools` | List of tool names to expose. Any supported tools not included in this list will not be registered. |
| `exposedTo` | List of trusted domains that are allowed to interact with the component through WebMCP. |

```ts
import { Component } from '@angular/core';
import { GanttModule, SelectionService, SortService, FilterService, ToolbarService, EditService, WebMcpGanttService } from '@syncfusion/ej2-angular-gantt';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [WebMcpGanttService,SelectionService,SortService,FilterService,ToolbarService,EditService],
  template: `
    <ejs-gantt
      id="gantt"
      [dataSource]="data"
      [taskFields]="taskFields"
      [enableWebMcp]="true"
      [webMcpSettings]="webMcpSettings"
      [editSettings]="editSettings"
      [toolbar]="toolbar"
      [allowSorting]="true"
      [allowFiltering]="true"
      [allowSelection]="true"
      (beforeWebMcpToolExecute)="beforeWebMcpToolExecute($event)"
      height="450px">
    </ejs-gantt>
  `
})
export class AppComponent {

  public editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  };

  public toolbar: string[] = ['Add','Edit','Delete','Update','Cancel'];

  public webMcpSettings = {
    name: 'gantt',
    tools: ['createTask', 'deleteTask', 'updateTask', 'getProjectTasks'],
    exposedTo: ['https://www.syncfusion.com/']
  };

  public data: Object[] = [
    { TaskID: 1, TaskName: 'Project Planning', StartDate: new Date('2025-01-06'), Duration: 5, Progress: 70, ChildTasks: [
        { TaskID: 2, TaskName: 'Requirement Analysis', StartDate: new Date('2025-01-06'), Duration: 3, Progress: 100 },
        { TaskID: 3, TaskName: 'Design phase', StartDate: new Date('2025-01-09'), Duration: 4, Progress: 60, Dependency: '2', ChildTasks: [
            { TaskID: 4, TaskName: 'UI Review', StartDate: new Date('2025-01-10'), Duration: 3, Progress: 20, Dependency: '3' }
        ]}
    ]}
  ];

  public taskFields: Object = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Dependency',
    child: 'ChildTasks'
  };

  public beforeWebMcpToolExecute(args: any): void {

    if (args.toolName === 'gantt_updateTask') {
        const hour = new Date().getHours();

        if (hour < 9 || hour > 17) {
            args.cancel = true;
            console.log('Task updates are allowed only between 9:00 AM and 5:00 PM.');
        }
    }
  }
}
```

> Use the `exposedTo` property to restrict WebMCP access to trusted domains. This helps prevent unauthorized WebMCP clients from interacting with your component tools.

### Step 5: Monitor and control tool execution

The [beforeWebMcpToolExecute](https://ej2.syncfusion.com/angular/documentation/api/gantt/index-default#beforewebmcptoolexecute) event is triggered before a tool is executed. This event allows you to:

- Audit tool usage.
- Validate incoming requests.
- Cancel tool execution when necessary.
- Apply custom business rules and security policies.

> AI-generated requests should always be validated before executing write operations. Restrict access using `exposedTo` and perform additional authorization checks within `beforeWebMcpToolExecute` when modifying application data.

```ts
import { Component } from '@angular/core';
import { GanttModule, SelectionService, SortService, FilterService, ToolbarService, EditService, WebMcpGanttService } from '@syncfusion/ej2-angular-gantt';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [WebMcpGanttService,SelectionService,SortService,FilterService,ToolbarService,EditService],
  template: `
    <ejs-gantt
      id="gantt"
      [dataSource]="data"
      [taskFields]="taskFields"
      [enableWebMcp]="true"
      [webMcpSettings]="webMcpSettings"
      [editSettings]="editSettings"
      [toolbar]="toolbar"
      [allowSorting]="true"
      [allowFiltering]="true"
      [allowSelection]="true"
      (beforeWebMcpToolExecute)="beforeWebMcpToolExecute($event)"
      height="450px">
    </ejs-gantt>
  `
})
export class AppComponent {
  public data: Object[] = [
    { TaskID: 1, TaskName: 'Project Planning', StartDate: new Date('2025-01-06'), Duration: 5, Progress: 70, ChildTasks: [
        { TaskID: 2, TaskName: 'Requirement Analysis', StartDate: new Date('2025-01-06'), Duration: 3, Progress: 100 },
        { TaskID: 3, TaskName: 'Design phase', StartDate: new Date('2025-01-09'), Duration: 4, Progress: 60, Dependency: '2', ChildTasks: [
            { TaskID: 4, TaskName: 'UI Review', StartDate: new Date('2025-01-10'), Duration: 3, Progress: 20, Dependency: '3' }
        ]}
    ]}
  ];

  public taskFields: Object = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Dependency',
    child: 'ChildTasks'
  };

  public editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  };

  public webMcpSettings = {
    name: 'gantt',
    tools: ['createTask', 'deleteTask', 'updateTask', 'getProjectTasks'],
    exposedTo: ['https://www.syncfusion.com/']
  };

  public toolbar: string[] = ['Add','Edit','Delete','Update','Cancel'];

  public beforeWebMcpToolExecute(args: any): void {

    if (args.toolName === 'gantt_updateTask') {
        const hour = new Date().getHours();

        if (hour < 9 || hour > 17) {
            args.cancel = true;
            console.log('Task updates are allowed only between 9:00 AM and 5:00 PM.');
        }
    }
  }
}
```

## Best practices

- Expose only the tools required by your application.
- Use the `name` property when multiple component instances exist on the same page.
- Configure `exposedTo` to limit access to trusted domains.
- Monitor tool activity through the `beforeWebMcpToolExecute` event.
- Apply application-specific validation before executing tool operations.

## Explore the demo

Explore the Syncfusion® Angular Gantt Chart component with WebMCP integration through this [demo](https://demos.syncfusion.com/gantt-sdk/gantt-chart/webmcp/index.html).

## See also

- [WebMCP Tools for Angular Gantt Chart](https://ej2.syncfusion.com/angular/documentation/webmcp/components#gantt-chart)
