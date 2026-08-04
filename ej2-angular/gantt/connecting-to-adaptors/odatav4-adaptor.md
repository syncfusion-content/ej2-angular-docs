---
layout: post
title: Angular Gantt Chart - OData v4 Adaptor | Syncfusion
description: Angular Gantt Chart OData v4 adaptor explains integration with OData v4 services and how the adaptor conveys task-related requests and updates.
control: ODataV4 Adaptor
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# OData Remote Data Binding in Syncfusion Angular Gantt

The [ODataV4Adaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors/odatav4-adaptor) in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular DataManager enables seamless integration between the Angular Gantt chart and OData v4 services by translating the Gantt's task data requests and update actions into OData‑formatted requests and by interpreting OData responses. Use this adaptor when backend exposes OData v4 endpoints and require standardized query capabilities with server-side processing. ODataV4Adaptor is intended specifically for OData-compliant services and is not required for standard REST or custom web-method endpoints.

For detailed server‑side configuration and further implementation details, refer to the [DataManager ODataV4Adaptor documentation](https://ej2.syncfusion.com/angular/documentation/data/adaptors/odatav4-adaptor), which covers endpoint setup, query processing, and best practices for integrating OData V4 services.

Once the project creation and backend setup are complete, the next step is to render the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt chart component on the client side.

**Project structure:**

- Frontend: an Angular project that hosts the Gantt component and configures the DataManager with an ODataV4Adaptor.
- Backend: an OData v4 service that exposes task entities and supports the query options the client will use.

```
ODataV4Adaptor/
├── OdataV4Adaptor.client/       # Angular frontend (Angular CLI project).
│   ├── src/
│   │   ├── styles.css
│   │   └── app/
│   │       └── app.component.ts      # Add odatav4 adaptor here.
│   └── package.json
└── ODataV4Adaptor.Server/      # ASP.NET Core backend (API).
    ├── Controllers/                 # API controllers (will be created here).
    ├── Models/                      # Data models (will be created here).
    └── Program.cs                   # Server configuration.
```

## Angular Gantt frontend setup using Syncfusion ODataV4Adaptor

This section explains how the Gantt interacts with an OData v4 service. Implementation and package installation steps are covered in platform‑specific setup guides and are intentionally omitted here.

### Step 1: Packages and dependencies

- Ensure Angular project includes the Syncfusion Gantt and data packages required to render the Gantt and to use the DataManager and ODataV4Adaptor.
- Open a terminal in the **OdataV4Adaptor.client** directory. Once inside the folder, confirm that **package.json** is present, then run the following commands to install the required Syncfusion<sup style="font-size:70%">&reg;</sup> packages:

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

### Step 3: Configure DataManager with ODataV4Adaptor

- Configure a DataManager instance that points to the OData v4 task endpoint and specifies the ODataV4Adaptor. The Gantt then uses that DataManager as its source for task records and related datasets.

Conceptually, the adaptor formats timeline and task‑related requests (for example, requests scoped to a taskbar edit, requests to fetch related resources, or requests that convey task modifications) as OData v4 queries the server can process.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component } from '@angular/core';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`
})
export class AppComponent {
  public data = new DataManager({
    url: 'https://localhost:xxxx/odata/GanttTasks', // Here xxxx represents the port number.
    adaptor: new ODataV4Adaptor(), // Handles all ODataV4 communication
    key: 'TaskID',
    crossDomain: true // Enables cross-domain requests
  });
  public taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Dependency',
    parentID: 'ParentID',
  };
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

**Server-side data operations**

When tasks, dependencies or resource assignments are numerous or governed by centralized business rules, the server commonly performs processing that would be costly or inconsistent on the client. For Gantt scenarios, server responsibilities typically include selecting tasks for a requested timeline range, applying visibility rules, resolving dependencies, and producing any roll‑up or hierarchical values required by the client. The `Syncfusion.EJ2.AspNet.Core` package supports this approach by providing built‑in methods that efficiently handle these operations on the server, ensuring smooth performance even with heavy data loads.

## CRUD operations

The DataManager with ODataV4Adaptor supports **Create** (add records), **Read** (view records), **Update** (modify records), and **Delete** (remove records) workflows for task entities. In Gantt usage, these operations cover task creation, task edits (including taskbar edits and resulting scheduling recalculations), dependency creation or modification, and task deletion.

**Mapping CRUD operations to service endpoints**

CRUD operations are conveyed to the service using standard OData conventions. The ODataV4Adaptor works with a single task endpoint and standard HTTP methods:

| Operation | HTTP Method | URL Example | Description |
|-----------|-------------|-------------|-------------|
| **Read** | GET | `/odata/GanttTasks` | Get all records. |
| **Create** | POST | `/odata/GanttTasks` | Add a new record. |
| **Update** | PATCH | `/odata/GanttTasks(1)` | Update record with key "1". |
| **Delete** | DELETE | `/odata/GanttTasks(1)` | Delete record with key "1". |

### Step 1: Complete server-side controller

Add the required controller method **GanttController.cs**. Replace the entire controller with this complete version:

{% tabs %}
{% highlight cs tabtitle="GanttController.cs - Complete CRUD Implementation" %}

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Formatter;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using ODataV4Adaptor.Server.Models;

[Route("[controller]")]
public class GanttTasksController : ODataController
{
    [EnableQuery]
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(GanttDataAdaptor.GetAllRecords().AsQueryable());
    }

    [HttpPost]
    [EnableQuery]
    public IActionResult Post([FromBody] GanttDataAdaptor task)
    {
        if (task == null)
            return BadRequest();

        GanttDataAdaptor.GetAllRecords().Add(task);
        return Created(task);
    }

    [HttpPatch("{key}")]
    [EnableQuery]
    public IActionResult Patch([FromODataUri] int key, [FromBody] GanttDataAdaptor updateRecord)
    {
        var task = GanttDataAdaptor.GetAllRecords()
            .FirstOrDefault(t => t.TaskID == key);

        if (task == null || task.TaskID != updateRecord.TaskID)
            return NotFound();
        task = updateRecord;
        
        return Ok(task);
    }

    [HttpDelete("{key}")]
    [EnableQuery]
    public IActionResult Delete(int key)
    {
        var task = GanttDataAdaptor.GetAllRecords()
            .FirstOrDefault(t => t.TaskID == key);

        if (task == null)
            return NotFound();

        GanttDataAdaptor.GetAllRecords().Remove(task);
        return NoContent();
    }
}

{% endhighlight %}
{% endtabs %}

### Step 2: Client-side gantt configuration

Angular Gantt enables full CRUD functionality by configuring the required [toolbar](https://ej2.syncfusion.com/angular/documentation/api/gantt/index-default#toolbar) buttons (`Add`, `Edit`, `Update`, `Delete`, and `Cancel`) and enabling adding, editing, updating, and deleting through the `editSettings` property. This setup allows the Gantt to handle all basic data operations directly from the UI.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component } from '@angular/core';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`
})
export class AppComponent {
  public data = new DataManager({
    url: 'https://localhost:xxxx/odata/GanttTasks', // Here xxxx represents the port number.
    adaptor: new ODataV4Adaptor(), // Handles all ODataV4 communication
    key: 'TaskID',
    crossDomain: true // Enables cross-domain requests
  });
  public taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Dependency',
    parentID: 'ParentID',
  };
  public editSettings = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    allowTaskbarEditing: true
  };
  public toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Indent', 'Outdent'];
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

Run the application in Angular development environment, accessible on a URL like **https://localhost:xxxx**. Verify the API returns data at **https://localhost:xxxx/odata/GanttTasks**, where **xxxx** is the port. Gantt displays data fetched from the backend API.

## Troubleshooting

| Issue                     | Cause                                                                 | Solution                                                                                                     |
|---------------------------|-----------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| Empty response            | Service not returning task records or required metadata               | Verify service returns records with fields like parent ids, resources, and start/end dates                  |
| 404 responses             | Incorrect route or endpoint configuration                             | Confirm DataManager URLs are correct and endpoints exist                                                     |
| 500 or server errors      | Server-side exceptions or improper request handling                   | Check server logs, validate parameters, and ensure scheduling/dependency logic is error-free                |
| Cross-origin errors       | CORS not enabled or misconfiguration                                     | Ensure cross-origin requests are allowed when frontend and backend are on different domains                 |
| Related data mismatches   | Remote datasets not returning expected values                         | Confirm related endpoints return correct data for display and dependency mapping                            |

## Complete sample repository

For the complete working implementation of this example, refer to the [GitHub](https://github.com/SyncfusionExamples/ej2-angular-gantt-chart-samples/tree/master/ODataV4Adaptor) repository.


## See also
- [Hybrid data binding](./remote-save-adaptor)
- [RESTful CRUD Operations in ASP.NET Web Forms](./web-method-adaptor)
- [Data binding](https://ej2.syncfusion.com/angular/documentation/gantt/data-binding)
