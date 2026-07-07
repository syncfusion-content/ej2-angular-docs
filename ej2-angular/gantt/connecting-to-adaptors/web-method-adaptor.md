---
layout: post
title: Angular Gantt Chart - Web Method Adaptor | Syncfusion
description: Angular Gantt Web Method adaptor explains how the adaptor conveys task-related requests and task modification payloads to server web methods.
control: WebMethod Adaptor
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# WebMethodAdaptor in Syncfusion Angular Gantt

The [WebMethodAdaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors/web-method-adaptor) enables the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt to communicate with server web methods and legacy endpoints by packaging task data requests and task modification payloads into a structured request envelope the server can deserialize. Use this adaptor when backend exposes web methods that handle task requests and updates via HTTP POST operations, especially if need to integrate with legacy systems or custom endpoints. Unlike other adaptors, `WebMethodAdaptor` is designed for scenarios where standard REST or OData endpoints are not available.

For backend configuration and expected request/response shapes, consult the WebMethod adaptor backend setup documentation for platform. After the backend is prepared, configure the DataManager in the Angular application to use the WebMethod adaptor as the Gantt data source.

For detailed server‑side configuration and further implementation details, refer to the [DataManager WebMethod Adaptor documentation](https://ej2.syncfusion.com/angular/documentation/data/adaptors/web-method-adaptor), which covers endpoint setup, query processing, and best practices for integrating WebMethod‑based services.

**Project structure (conceptual):**

- Frontend: an Angular project hosting the Gantt and a DataManager configured for WebMethod endpoints.
- Backend: a web methods service that receives the adaptor's request envelope, processes task queries and mutation payloads, and returns JSON task records and related metadata.

```
WebMethodAdaptor/
├── WebMethodAdaptor.client/     # Angular frontend (Angular CLI project).
│   ├── src/
│   │   ├── styles.css
│   │   └── app/
│   │       ├── app.component.ts      # Add WebMethodAdaptor here.
│   │       └── app.component.html    # Gantt template here.
│   └── package.json
└── WebMethodAdaptor.Server/     # ASP.NET Core backend (API).
    ├── Controllers/                 # API controllers (will be created here).
    ├── Models/                      # Data models (will be created here).
    └── Program.cs                   # Server configuration.
```

## Angular Gantt frontend setup using WebMethod adaptor

This section describes at a conceptual level, how the Gantt consumes task data from web methods and submits task changes. Implementation and package installation steps are covered in platform‑specific setup guides and are intentionally omitted here.

### Step 1: Packages and dependencies

- Ensure Angular project includes the Syncfusion Gantt and data packages required to render the Gantt and to use the DataManager and WebMethodAdaptor.
- Open a terminal in the **WebMethodAdaptor.client** directory. Once inside the folder, confirm that **package.json** is present, then run the following commands to install the required Syncfusion<sup style="font-size:70%">&reg;</sup> packages:

```bash
npm install @syncfusion/ej2-angular-gantt --save
npm install @syncfusion/ej2-data --save
```

### Step 2: CSS and component styling

- Include the required Syncfusion theme and component styles so the Gantt and its input controls render correctly. Add these imports to **styles.css**:

```css
/* Basic Gantt Chart styles */
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-gantt/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-treegrid/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";

/* For editing, toolbar, and dialog features */
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";

/* For rich text editor in dialog notes tab */
@import "../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css";
```

### Step 3: Configure DataManager with WebMethodAdaptor

- Configure a DataManager instance that targets web method endpoints and specifies the WebMethodAdaptor. The Gantt uses that DataManager to fetch tasks, request related datasets, and submit task create/update/delete payloads wrapped in the expected envelope.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component, OnInit } from '@angular/core';
import { DataManager, WebMethodAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public data: DataManager;
  public taskFields: any;
  public editSettings: any;
  public toolbar: string[];

  ngOnInit(): void {
    this.data = new DataManager({
      url: 'https://localhost:xxxx/api/Gantt', // Here xxxx represents the port number.
      adaptor: new WebMethodAdaptor(),
      crossDomain: true
    });
    this.taskFields = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Dependency',
      parentID: 'ParentID',
    };
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      allowTaskbarEditing: true
    };
    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Indent', 'Outdent'];
  }
}
{% endhighlight %}

{% highlight ts tabtitle="app.component.html" %}
<ejs-gantt [dataSource]="data"
           [taskFields]="taskFields"
           [editSettings]="editSettings"
           [toolbar]="toolbar"
           height="400px">
  <e-columns>
    <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90" type="number" isPrimaryKey="true"></e-column>
    <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="270" type="string"></e-column>
    <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="150" format="yMd" type="dateTime"></e-column>
    <e-column field="EndDate" headerText="End Date" textAlign="Right" width="150" format="dd/MM/yyyy hh:mm" type="dateTime"></e-column>
    <e-column field="Duration" headerText="Duration" textAlign="Right" width="90" type="string"></e-column>
    <e-column field="Progress" headerText="Progress" textAlign="Right" width="120" type="number"></e-column>
  </e-columns>
</ejs-gantt>
{% endhighlight %}
{% endtabs %}

**Server-side data operations**

When task sets are large or when scheduling rules must be applied consistently, the server receives responsibility for processing task queries and task modifications. Using web methods, the server applies scheduling rules, dependency validation, and any project‑specific business logic before returning task records or acknowledging changes. The `Syncfusion.EJ2.AspNet.Core` package supports this approach by providing built‑in methods that efficiently handle these operations on the server, ensuring smooth performance even with heavy data loads.

## CRUD operations

The DataManager with WebMethodAdaptor supports Create, Read, Update, and Delete workflows for task entities. In Gantt usage, these operations cover task creation, task edits (including taskbar edits and resulting scheduling recalculations), dependency creation or modification, and task deletion.

**Mapping CRUD operations to service endpoints**

CRUD operations are conveyed to the service using standard WebMethod conventions. The WebMethodAdaptor works with a single task endpoint for task operations:

| Operation | HTTP Method | URL Example | Description |
|-----------|-------------|-------------|-------------|
| **Read** | POST | `/api/Gantt` | Get all records. |
| **Create** | POST | `/api/Gantt` | Add a new record. |
| **Update** | POST | `/api/Gantt` | Update record. |
| **Delete** | POST | `/api/Gantt` | Delete record. |

### Step 1: Server-side controller

Add the required controller method to **GanttController.cs**. Replace the entire controller with this complete version:

{% tabs %}
{% highlight cs tabtitle="GanttController.cs - Complete CRUD Implementation" %}
using Microsoft.AspNetCore.Mvc;
using Syncfusion.EJ2.Base;
using WebMethodAdaptorDemo.Server.Models;

namespace WebMethodAdaptorDemo.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GanttController : ControllerBase
    {
        [HttpGet]
        public List<GanttTask> GetOrderData()
        {
            return GanttDataAdaptor.GetGanttTasks().ToList();
        }

        [HttpPost]
        public object Post([FromBody] CRUDModel<GanttTask> data)
        {

            if (data == null)
                return BadRequest();

            // Work against the single backing list once
            var tasks = GanttDataAdaptor.GetGanttTasks(); // assume List<GanttTask>

            if (data.action == "batch")
            {
                // Added: assign TaskID if missing and add to backing list
                if (data.added != null)
                {
                    int nextId = tasks.Any() ? tasks.Max(t => t.TaskID) + 1 : 1;
                    foreach (var task in data.added)
                    {
                        if (task.TaskID == 0)
                            task.TaskID = nextId++;
                        tasks.Add(task);
                    }
                }

                // Changed: update existing items safely (check for null)
                if (data.changed != null)
                {
                    foreach (var task in data.changed)
                    {
                        var existing = tasks.FirstOrDefault(t => t.TaskID == task.TaskID);
                        if (existing == null) continue;

                        existing.TaskName = task.TaskName;
                        existing.StartDate = task.StartDate;
                        existing.EndDate = task.EndDate;
                        existing.Duration = task.Duration;
                        existing.Progress = task.Progress;
                        existing.Dependency = task.Dependency;
                        existing.ParentID = task.ParentID;
                    }
                }

                // Deleted: remove by TaskID
                if (data.deleted != null)
                {
                    foreach (var task in data.deleted)
                    {
                        var existing = tasks.FirstOrDefault(t => t.TaskID == task.TaskID);
                        if (existing != null)
                            tasks.Remove(existing);
                    }
                }
            }

            // Return the updated data and count
            var dataSource = tasks.AsQueryable();
            int totalRecordsCount = tasks.Count;
            return Ok(new { result = dataSource, count = totalRecordsCount });
        }
    }

    /// <summary>
    /// Wrapper class for WebMethodAdaptor requests.
    /// WebMethodAdaptor wraps DataManagerRequest inside a 'value' property.
    /// </summary>
    public class DataManager
    {
        public required DataManagerRequest Value { get; set; }
    }

    public class CRUDModel<T>
        where T : class
    {
        public string? action { get; set; }
        public string? keyColumn { get; set; }
        public object? key { get; set; }
        public T? value { get; set; }
        public List<T>? added { get; set; }
        public List<T>? changed { get; set; }
        public List<T>? deleted { get; set; }
        public IDictionary<string, object>? @params { get; set; }
    }
}
{% endhighlight %}
{% endtabs %}

### Step 2: Client-side gantt configuration

Angular Gantt enables full CRUD functionality by configuring the required [toolbar](https://ej2.syncfusion.com/angular/documentation/api/gantt/index-default#toolbar) buttons (`Add`, `Edit`, `Update`, `Delete`, and `Cancel`) and enabling adding, editing, updating, and deleting through the `editSettings` property. This setup allows the Gantt to handle all basic data operations directly from the UI.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component, OnInit } from '@angular/core';
import { DataManager, WebMethodAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public data: DataManager;
  public taskFields: any;
  public editSettings: any;
  public toolbar: string[];

  ngOnInit(): void {
    this.data = new DataManager({
      url: 'https://localhost:xxxx/api/Gantt', // Here xxxx represents the port number.
      adaptor: new WebMethodAdaptor(),
      crossDomain: true
    });
    this.taskFields = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Dependency',
      parentID: 'ParentID',
    };
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      allowTaskbarEditing: true
    };
    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Indent', 'Outdent'];
  }
}
{% endhighlight %}

{% highlight ts tabtitle="app.component.html" %}
<ejs-gantt [dataSource]="data"
           [taskFields]="taskFields"
           [editSettings]="editSettings"
           [toolbar]="toolbar"
           height="400px">
  <e-columns>
    <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90" type="number" isPrimaryKey="true"></e-column>
    <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="270" type="string"></e-column>
    <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="150" format="yMd" type="dateTime"></e-column>
    <e-column field="EndDate" headerText="End Date" textAlign="Right" width="150" format="dd/MM/yyyy hh:mm" type="dateTime"></e-column>
    <e-column field="Duration" headerText="Duration" textAlign="Right" width="90" type="string"></e-column>
    <e-column field="Progress" headerText="Progress" textAlign="Right" width="120" type="number"></e-column>
  </e-columns>
</ejs-gantt>
{% endhighlight %}
{% endtabs %}

> For detailed editing setup, refer to the [editing documentation](https://ej2.syncfusion.com/angular/documentation/gantt/managing-tasks/editing-tasks).

## Run the application

Run the application in Angular development environment, accessible on a URL like **https://localhost:xxxx**. Verify the API returns data at **https://localhost:xxxx/api/Gantt**, where **xxxx** is the port. Gantt displays data fetched from the backend API.

## Troubleshooting

| Issue                     | Cause                                                                                   | Solution                                                                                                              |
|---------------------------|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| Empty response            | Web method not returning task records or required metadata                              | Verify method returns records with parent ids, resource assignments, and start/end dates for the timeline range     |
| 404 responses             | Incorrect web method route or endpoint configuration                                     | Confirm DataManager URLs and routes are correctly configured and accessible                                          |
| 500 or server errors      | Server-side exceptions or improper request parameter handling                            | Check server logs, validate parameter parsing, and ensure scheduling/dependency logic is error-free                  |
| CORS errors               | Cross-origin requests blocked or not configured                                          | Ensure CORS is enabled when frontend and backend are hosted on different origins                                     |
| Related data mismatches   | Remote datasets not returning expected values for relationships and dependencies         | Confirm related endpoints return correct data required for display and dependency resolution                         |

## Complete sample repository

For the complete working implementation of this example, refer to the [GitHub](https://github.com/SyncfusionExamples/ej2-angular-gantt-chart-samples/tree/master/WebMethodAdaptor) repository.

## See also
- [Connect to OdataV4 services](./odatav4-adaptor)
- [Hybrid data binding](./remote-save-adaptor)
- [Data binding](https://ej2.syncfusion.com/angular/documentation/gantt/data-binding)
