---
layout: post
title: Angular Gantt - Remote Save Adaptor | Syncfusion
description: Angular Gantt Remote Save adaptor explains the hybrid workflow where the full task set is fetched once and CRUD is persisted via a batch endpoint.
control: RemoteSave Adaptor
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Binding with RemoteSaveAdaptor in Syncfusion Angular Gantt

The [RemoteSaveAdaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors/remote-save-adaptor) in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt chart provides a hybrid data workflow. Use this adaptor when want to fetch the complete task set once, perform client-side operations for responsiveness, and persist edits back to the server via batch CRUD requests. Choose RemoteSaveAdaptor when fast client-side interaction is required while maintaining server-side data persistence. Unlike fully remote adaptors, it combines local data operations with remote synchronization.

For detailed server‑side configuration and further implementation details, refer to the [DataManager RemoteSaveAdaptor documentation](https://ej2.syncfusion.com/angular/documentation/data/adaptors/remote-save-adaptor), which explains endpoint setup, request handling, and best practices for synchronizing CRUD operations with remote services.

This guide describes the conceptual project layout and patterns for wiring the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt chart to a backend that implements a batch CRUD endpoint.

**Project structure:**

- Frontend: an Angular project that hosts the Gantt and loads the full task dataset into a `DataManager` configured with `RemoteSaveAdaptor`.
- Backend: a web API that serves the complete task list and exposes a batch endpoint that accepts added/changed/deleted records in a single payload.

```
RemoteSaveAdaptor/
├── RemoteSaveAdaptor.client/        # Angular frontend (Angular CLI project).
│   ├── src/
│   │   ├── styles.css
│   │   └── app/
│   │       ├── app.component.ts      # Add RemoteSaveAdaptor here.
│   │       └── app.component.html    # Gantt template here.
│   └── package.json
└── RemoteSaveAdaptor.Server/        # ASP.NET Core backend (API).
    ├── Controllers/                 # API controllers (will be created here).
    ├── Models/                      # Data models (will be created here).
    └── Program.cs                   # Server configuration.
```

## Angular Gantt frontend setup using RemoteSaveAdaptor

This section describes at a conceptual level, how the Gantt consumes task data from remote save and submits task changes. Implementation and package installation steps are covered in platform‑specific setup guides and are intentionally omitted here.

### Step 1: Packages and dependencies

- Ensure Angular project includes the Syncfusion Gantt and data packages required to render the Gantt and to use the DataManager and RemoteSaveAdaptor.
- Open a terminal in the **RemoteSaveAdaptor.client** directory. Once inside the folder, confirm that **package.json** is present, then run the following commands to install the required Syncfusion<sup style="font-size:70%">&reg;</sup> packages:

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

### Step 3: Configure DataManager with RemoteSaveAdaptor

- Configure a DataManager instance that loads the full task dataset from the server and specifies the RemoteSaveAdaptor. The Gantt then uses that DataManager as its source for task records and related datasets, and persists CRUD changes via a batch endpoint.

Conceptually, the adaptor fetches all data once, enables fast client-side operations, and synchronizes changes back to the server in batches.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component, OnInit } from '@angular/core';
import { DataManager, RemoteSaveAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public data: DataManager | null = null;
  public taskFields: any;
  public editSettings: any;
  public toolbar: string[];

  ngOnInit(): void {
    const serviceUrl = 'https://localhost:xxxx/api/gantt'; // Here xxxx represents the port number.
    fetch(serviceUrl)
      .then(response => response.json())
      .then(result => {
        this.data = new DataManager({
          json: result,
          adaptor: new RemoteSaveAdaptor(),
          batchUrl: `${serviceUrl}/Batch`,
          enableOffline: true
        });
      });
    this.taskFields = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      allowTaskbarEditing: true
    };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  }
}
{% endhighlight %}

{% highlight ts tabtitle="app.component.html" %}
<ejs-gantt [dataSource]="data"
           [taskFields]="taskFields"
           [editSettings]="editSettings"
           [toolbar]="toolbar"
           [enableContextMenu]="true"
           height="400px">
  <e-columns>
    <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90" type="number" isPrimaryKey="true"></e-column>
    <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="270" type="string"></e-column>
    <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="150" format="yMd" type="dateTime"></e-column>
    <e-column field="EndDate" headerText="End Date" textAlign="Right" width="150" format="dd/MM/yyyy hh:mm" type="dateTime"></e-column>
    <e-column field="Duration" headerText="Duration" textAlign="Right" width="90" type="number"></e-column>
    <e-column field="Progress" headerText="Progress" textAlign="Right" width="120" type="number"></e-column>
  </e-columns>
</ejs-gantt>
{% endhighlight %}
{% endtabs %}

**Server-side batch endpoint**

The server receives a batch payload that contains `added`, `changed`, and `deleted` arrays. The batch endpoint applies each section in turn—assigning identifiers for new tasks if required, updating existing records, and removing deleted items—then returns a response the client can reconcile against its local state.

### Step 1: Server-side controller

Add the required controller method to **GanttController.cs**. Replace the entire controller with this complete version:

{% tabs %}
{% highlight cs tabtitle="GanttController.cs - Batch Handler" %}
using GanttServerSample.Models;
using Microsoft.AspNetCore.Mvc;

namespace GanttServerSample.Controllers
{
    [Route("api/[controller]")]
    public class GanttController : ControllerBase
    {
        /// <summary>
        /// GET endpoint – returns all Gantt tasks
        /// Used by Angular Gantt for initial data load
        /// </summary>
        [HttpGet]
        public List<GanttTask> GetGanttData()
        {
            return GanttData.GetAllTasks().ToList();
        }

        [HttpPost("Batch")]
        public IActionResult BatchUpdate([FromBody] CRUDModel<GanttTask> crud)
        {
            // INSERT
            if (crud.added != null && crud.added.Count > 0)
            {
                foreach (var task in crud.added)
                {
                    task.TaskId = GanttData.GetAllTasks().Max(x => x.TaskId) + 1;
                    GanttData.GetAllTasks().Add(task);
                }
            }
            // UPDATE
            if (crud.changed != null && crud.changed.Count > 0)
            {
                foreach (var task in crud.changed)
                {
                    var data = GanttData.GetAllTasks()
                        .FirstOrDefault(x => x.TaskId == task.TaskId);
                    if (data != null)
                    {
                        data.TaskName = task.TaskName;
                        data.StartDate = task.StartDate;
                        data.EndDate = task.EndDate;
                        data.Duration = task.Duration;
                        data.Progress = task.Progress;
                        data.ParentId = task.ParentId;
                    }
                }
            }
            // DELETE
            if (crud.deleted != null && crud.deleted.Count > 0)
            {
                foreach (var task in crud.deleted)
                {
                    var data = GanttData.GetAllTasks()
                        .FirstOrDefault(x => x.TaskId == task.TaskId);

                    if (data != null)
                    {
                        GanttData.GetAllTasks().Remove(data);
                    }
                }
            }
            return Ok(crud);
        }
    }
    public class CRUDModel<T> where T : class
    {
        public string? action { get; set; }
        public string? key { get; set; }
        public string? table { get; set; }
        public List<T>? added { get; set; }
        public List<T>? changed { get; set; }
        public List<T>? deleted { get; set; }
    }
}
{% endhighlight %}
{% endtabs %}

### Step 2: Client-side gantt configuration

Angular Gantt enables full CRUD functionality by configuring the required [toolbar](https://ej2.syncfusion.com/angular/documentation/api/gantt/index-default#toolbar) buttons (`Add`, `Edit`, `Update`, `Delete`, and `Cancel`) and enabling adding, editing, updating, and deleting through the `editSettings` property. This setup allows the Gantt to handle all basic data operations directly from the UI.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component, OnInit } from '@angular/core';
import { DataManager, RemoteSaveAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public data: DataManager | null = null;
  public taskFields: any;
  public editSettings: any;
  public toolbar: string[];

  ngOnInit(): void {
    const serviceUrl = 'https://localhost:xxxx/api/gantt'; // Here xxxx represents the port number.
    fetch(serviceUrl)
      .then(response => response.json())
      .then(result => {
        this.data = new DataManager({
          json: result,
          adaptor: new RemoteSaveAdaptor(),
          batchUrl: `${serviceUrl}/Batch`,
          enableOffline: true
        });
      });
    this.taskFields = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      allowTaskbarEditing: true
    };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  }
}
{% endhighlight %}

{% highlight ts tabtitle="app.component.html" %}
<ejs-gantt [dataSource]="data"
           [taskFields]="taskFields"
           [editSettings]="editSettings"
           [toolbar]="toolbar"
           [enableContextMenu]="true"
           height="400px">
  <e-columns>
    <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90" type="number" isPrimaryKey="true"></e-column>
    <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="270" type="string"></e-column>
    <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="150" format="yMd" type="dateTime"></e-column>
    <e-column field="EndDate" headerText="End Date" textAlign="Right" width="150" format="dd/MM/yyyy hh:mm" type="dateTime"></e-column>
    <e-column field="Duration" headerText="Duration" textAlign="Right" width="90" type="number"></e-column>
    <e-column field="Progress" headerText="Progress" textAlign="Right" width="120" type="number"></e-column>
  </e-columns>
</ejs-gantt>
{% endhighlight %}
{% endtabs %}

> * For detailed editing setup, refer to the [editing documentation](https://ej2.syncfusion.com/angular/documentation/gantt/managing-tasks/editing-tasks). 

## Run the application

Run the application in Angular development environment, accessible on a URL like **https://localhost:xxxx**. Verify the API returns data at **https://localhost:xxxx/api/gantt/Batch**, where **xxxx** is the port. Gantt displays data fetched from the backend API.

## Troubleshooting

| Issue                     | Cause                                                      | Solution                                                                                 |
|---------------------------|------------------------------------------------------------|------------------------------------------------------------------------------------------|
| Empty initial load        | GET task endpoint not returning required task records      | Verify endpoint returns records with required fields (ids, start/end dates, parent ids) |
| Batch requests not applied| Incorrect batchUrl or unsupported server payload            | Confirm `batchUrl` is correct and server accepts expected payload format                |
| Identifier mismatches     | Server not returning stable keys for new records            | Ensure server returns assigned ids so client can replace temporary ids                  |
| CORS or network errors    | Cross-origin requests blocked or misconfiguration              | Confirm CORS is enabled when frontend and backend are hosted separately                 |

## Complete sample repository

For the complete working implementation of this example, refer to the [GitHub](https://github.com/SyncfusionExamples/ej2-angular-gantt-chart-samples/tree/master/RemoteSaveAdaptor) repository.

## See also
- [Connect to OdataV4 services](./odatav4-adaptor)
- [RESTful CRUD Operations in ASP.NET Web Forms](./web-method-adaptor)
- [Data binding](https://ej2.syncfusion.com/angular/documentation/gantt/data-binding)
