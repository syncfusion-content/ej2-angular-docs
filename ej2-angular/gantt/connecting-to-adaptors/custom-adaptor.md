---
layout: post
title: Angular Gantt Chart - Custom Adaptor | Syncfusion
description: Angular Gantt Chart CustomAdaptor explains creating a custom data adaptor to transform requests and responses, enabling custom backends and behaviors.
control: Custom Adaptor
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Custom Remote Data Binding in Syncfusion Angular Gantt Chart

The `CustomAdaptor` in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt Chart is a powerful extension mechanism that customizes any existing adaptor ([RemoteSaveAdaptor](./remote-save-adaptor), [WebMethodAdaptor](./web-method-adaptor), [ODataV4Adaptor](./odatav4-adaptor), [GraphQLAdaptor](./graphql-adaptor)) to meet specific application requirements. Use this adaptor when the built-in adaptors do not fully match backend requirements and need to customize request or response pipeline. Instead of creating an adaptor from scratch, `CustomAdaptor` intercepts and customizes the HTTP request/response pipeline used by the Syncfusion Angular Gantt Chart.

For detailed guidance, refer to the [DataManager CustomAdaptor documentation](https://ej2.syncfusion.com/angular/documentation/data/adaptors/custom-adaptor), which explains the usage of custom adaptors in depth. For detailed server-side setup and further implementation details, see the [DataManager ODataV4Adaptor documentation](https://ej2.syncfusion.com/angular/documentation/data/adaptors/odatav4-adaptor), covering endpoint configuration, query handling, and recommended practices for integrating OData V4 services.

Once the project creation and backend setup are complete, the next step is to render the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt Chart component on the client side.

**Project structure:**

- Frontend: An Angular project that hosts the Gantt Chart component and configures the Custom DataManager by extending ODataV4Adaptor.
- Backend: An OData v4 service that exposes task entities and supports the query options that client will use.

```
CustomAdaptor/
├── CustomAdaptor.client/       # Angular frontend (Angular CLI project).
│   ├── src/
│   │   ├── styles.css
│   │   └── app/
│   │       ├── app.component.ts         # Add CustomAdaptor usage here.
│   │       ├── app.component.html       # Gantt template here.
│   │       └── custom-adaptor.ts        # Extend ODataV4Adaptor here.
│   └── package.json
└── CustomAdaptor.Server/      # ASP.NET Core backend (API).
    ├── Controllers/                 # API controllers (will be created here).
    ├── Models/                      # Data models (will be created here).
    └── Program.cs                   # Server configuration.
```

## Angular Gantt Chart setup and client-side configuration

This section explains how the Gantt Chart interacts with a `CustomAdaptor` for extending OData v4 services. Implementation and package installation steps are covered in platform-specific setup guides and are intentionally omitted here.

### Step 1: Packages and dependencies

- Ensure Angular project includes the Syncfusion Gantt Chart and data packages required to render the Gantt Chart and to use the DataManager and ODataV4Adaptor.
- Open a terminal in the **CustomAdaptor.client** directory. Once inside the folder, confirm that **package.json** is present, then run the following commands to install the required Syncfusion<sup style="font-size:70%">&reg;</sup> packages:

```bash
npm install @syncfusion/ej2-angular-gantt --save
npm install @syncfusion/ej2-data --save
```

### Step 2: CSS and component styling

- Include the required Syncfusion theme and component styles so the Gantt Chart and its input controls render correctly. Add these imports to **styles.css**:

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

### Step 3: Create Angular Gantt Chart component with CustomAdaptor

Integrating a `CustomAdaptor` with the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt Chart requires configuring the `DataManager` as the communication bridge between the Gantt Chart component and the backend data source. The `CustomAdaptor` serves as a powerful customization layer that provides complete control over how data operations are transmitted to the server.

#### Step 3.1: Creating an Extended ODataV4Adaptor

The first step involves creating a `CustomAdaptor` by extending the existing `ODataV4Adaptor` class. This extension allows modification of the default behavior to meet specific application requirements.

Create a new TypeScript file named **custom-adaptor.ts** in the project's app directory. This file will house the custom adaptor class definition.

**Understanding the CustomAdaptor implementation:**

The example below demonstrates a `CustomAdaptor` class that extends `ODataV4Adaptor`.

| Method            | Execution Phase                          | Purpose & Key Actions                                                                 |
|-------------------|------------------------------------------|---------------------------------------------------------------------------------------|
| `processResponse` | After receiving server response, before Gantt Chart rendering |
| `processQuery`    | Before sending request to server         | Sets custom OData endpoint URL and adds extra query parameters → enables dynamic URLs and request tracking/identification |
| `beforeSend`      | Immediately before the HTTP request is sent  | Adds `Authorization: Bearer` header using token from `window` → automatically authenticates every API request |

{% tabs %}
{% highlight ts tabtitle="custom-adaptor.ts" %}
import { ODataV4Adaptor, DataManager, Query, RequestOptions } from '@syncfusion/ej2-data';

export class CustomAdaptor extends ODataV4Adaptor {
    processResponse() {
        const original = super.processResponse.apply(this, arguments);
        return original;
    }
    processQuery(dm: DataManager, query: Query) {
        dm.dataSource.url = 'https://localhost:xxxx/odata/GanttTasks'; // Here xxxx represents the port number.
        query.addParams('Syncfusion in Angular Gantt Chart', 'true');
        const result = super.processQuery.apply(this, arguments);
        return result;
    }
    beforeSend(dm: DataManager, request: RequestOptions, settings: any) {
        request.headers.set('Authorization', `Bearer ${(window as any).token}`);
        super.beforeSend(dm, request, settings);
    }
}
{% endhighlight %}
{% endtabs %}

#### Step 3.2: Integrating CustomAdaptor into Angular Gantt Chart

After creating the custom adaptor class, integrate it with the Angular Gantt Chart in the main application file (**app.component.ts** and **app.component.html**). Import the necessary modules and configure the Gantt Chart to use the `CustomAdaptor`:

- Import `DataManager` from `@syncfusion/ej2-data` to act as the link between the Gantt Chart and the OData service.
- Import `CustomAdaptor` from the local **./custom-adaptor** file to apply custom request and response logic.
- Create DataManager instance by setting the service endpoint URL (e.g., https://localhost:xxxx/odata/GanttTasks) in the `url` property.
- Assign `CustomAdaptor` to the `adaptor` property so that querying operations use the customized pipeline.
- Bind DataManager to the Gantt Chart `dataSource` property, enabling the Gantt Chart to automatically apply the custom logic during data communication.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component, OnInit } from '@angular/core';
import { DataManager } from '@syncfusion/ej2-data';
import { CustomAdaptor } from './custom-adaptor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public data: DataManager;
  public taskFields: any;
  public resourceFields: any;
  public resources: any[];
  public editSettings: any;
  public toolbar: string[];

  ngOnInit(): void {
    this.data = new DataManager({
      url: 'https://localhost:xxxx/odata/GanttTasks', // Here xxxx represents the port number.
      adaptor: new CustomAdaptor(),
      key: 'TaskID',
      crossDomain: true
    });
    this.resourceFields = {
      id: 'resourceId',
      name: 'resourceName',
      unit: 'resourceUnit',
      group: 'resourceGroup'
    };
    this.resources = [
      { resourceId: 1, resourceName: 'Martin Tamer' },
      { resourceId: 2, resourceName: 'Rose Fuller' },
      { resourceId: 3, resourceName: 'Margaret Buchanan' },
      { resourceId: 4, resourceName: 'Fuller King' },
      { resourceId: 5, resourceName: 'Davolio Fuller' },
      { resourceId: 6, resourceName: 'Van Jack' },
      { resourceId: 7, resourceName: 'Fuller Buchanan' },
      { resourceId: 8, resourceName: 'Jack Davolio' },
      { resourceId: 9, resourceName: 'Tamer Vinet' },
      { resourceId: 10, resourceName: 'Vinet Fuller' },
      { resourceId: 11, resourceName: 'Bergs Anton' },
      { resourceId: 12, resourceName: 'Construction Supervisor' }
    ];
    this.taskFields = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Dependency',
      parentID: 'ParentID',
      segments: 'Segments',
      resourceInfo: 'ResourceInfos',
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
           [resourceFields]="resourceFields"
           [resources]="resources"
           [editSettings]="editSettings"
           [toolbar]="toolbar"
           [showColumnMenu]="true"
           [allowReordering]="true"
           [allowResizing]="true"
           [allowRowDragAndDrop]="true"
           [enableContextMenu]="true"
           [allowFiltering]="true"
           [allowSorting]="true"
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

When tasks, dependencies or resource assignments are numerous or governed by centralized business rules, the server commonly performs processing that would be costly or inconsistent on the client. For Gantt Chart scenarios, server responsibilities typically include selecting tasks for a requested timeline range, applying visibility rules, resolving dependencies, and producing any roll-up or hierarchical values required by the client. The `Syncfusion.EJ2.AspNet.Core` package supports this approach by providing built-in methods that efficiently handle these operations on the server, ensuring smooth performance even with heavy data loads.

## CRUD operations

The DataManager with `CustomAdaptor` supports **Create** (add records), **Read** (view records), **Update** (modify records), and **Delete** (remove records) workflows for task entities. In Gantt Chart usage, these operations cover task creation, task edits (including taskbar edits and resulting scheduling recalculations), dependency creation or modification, and task deletion.

**Mapping CRUD operations to service endpoints**

CRUD operations are conveyed to the service using standard OData conventions. The `CustomAdaptor` works with ODataV4Adaptor with a single task endpoint and standard HTTP methods:

| Operation | HTTP Method | URL Example | Description |
|-----------|-------------|-------------|-------------|
| **Read** | GET | `/odata/GanttTasks` | Get all records. |
| **Create** | POST | `/odata/GanttTasks` | Add a new record. |
| **Update** | PATCH | `/odata/GanttTasks(1)` | Update record with key "1". |
| **Delete** | DELETE | `/odata/GanttTasks(1)` | Delete record with key "1". |

### Step 1: Server-side controller

Add the required controller method to **GanttController.cs**. Replace the entire controller with this complete version:

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
        var data = GanttDataAdaptor.GetAllRecords();
        return Ok(data.AsQueryable());
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

### Step 2: Client-side Gantt Chart configuration

Angular Gantt Chart enables full CRUD functionality by configuring the required [toolbar](https://ej2.syncfusion.com/angular/documentation/api/gantt/index-default#toolbar) buttons (`Add`, `Edit`, `Update`, `Delete`, and `Cancel`) and enabling adding, editing, updating, and deleting through the `editSettings` property. This setup allows the Gantt Chart to handle all basic data operations directly from the UI.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component, OnInit } from '@angular/core';
import { DataManager } from '@syncfusion/ej2-data';
import { CustomAdaptor } from './custom-adaptor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public data: DataManager;
  public taskFields: any;
  public resourceFields: any;
  public resources: any[];
  public editSettings: any;
  public toolbar: string[];

  ngOnInit(): void {
    this.data = new DataManager({
      url: 'https://localhost:xxxx/odata/GanttTasks', // Here xxxx represents the port number.
      adaptor: new CustomAdaptor(),
      key: 'TaskID',
      crossDomain: true
    });
    this.resourceFields = {
      id: 'resourceId',
      name: 'resourceName',
      unit: 'resourceUnit',
      group: 'resourceGroup'
    };
    this.resources = [
      { resourceId: 1, resourceName: 'Martin Tamer' },
      { resourceId: 2, resourceName: 'Rose Fuller' },
      { resourceId: 3, resourceName: 'Margaret Buchanan' },
      { resourceId: 4, resourceName: 'Fuller King' },
      { resourceId: 5, resourceName: 'Davolio Fuller' },
      { resourceId: 6, resourceName: 'Van Jack' },
      { resourceId: 7, resourceName: 'Fuller Buchanan' },
      { resourceId: 8, resourceName: 'Jack Davolio' },
      { resourceId: 9, resourceName: 'Tamer Vinet' },
      { resourceId: 10, resourceName: 'Vinet Fuller' },
      { resourceId: 11, resourceName: 'Bergs Anton' },
      { resourceId: 12, resourceName: 'Construction Supervisor' }
    ];
    this.taskFields = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Dependency',
      parentID: 'ParentID',
      segments: 'Segments',
      resourceInfo: 'ResourceInfos',
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
           [resourceFields]="resourceFields"
           [resources]="resources"
           [editSettings]="editSettings"
           [toolbar]="toolbar"
           [showColumnMenu]="true"
           [allowReordering]="true"
           [allowResizing]="true"
           [allowRowDragAndDrop]="true"
           [enableContextMenu]="true"
           [allowFiltering]="true"
           [allowSorting]="true"
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

> For detailed editing setup, refer to the [editing documentation](https://ej2.syncfusion.com/angular/documentation/gantt/managing-tasks/editing-tasks).

## Run the application

Run the application in Angular development environment, accessible on a URL like **https://localhost:xxxx**. Verify the API returns data at **https://localhost:xxxx/odata/GanttTasks**, where **xxxx** is the port. Gantt Chart displays data fetched from the backend API.

## Troubleshooting

| Issue                     | Cause                                                                 | Solution                                                                                                     |
|---------------------------|-----------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| Empty response            | Service not returning task records or required metadata               | Verify service returns records with fields like parent ids, resources, and start/end dates                  |
| 404 responses             | Incorrect route or endpoint configuration                             | Confirm DataManager URLs are correct and endpoints exist                                                     |
| 500 or server errors      | Server-side exceptions or improper request handling                   | Check server logs, validate parameters, and ensure scheduling/dependency logic is error-free                |
| Cross-origin errors       | CORS not enabled or misconfiguration                                     | Ensure cross-origin requests are allowed when frontend and backend are on different domains                 |
| Related data mismatches   | Remote datasets not returning expected values                         | Confirm related endpoints return correct data for display and dependency mapping                            |

## Complete sample repository

For the complete working implementation of this example, refer to the [GitHub](https://github.com/SyncfusionExamples/ej2-angular-gantt-chart-samples/tree/master/CustomAdaptor) repository.


## See also
- [Hybrid data binding](./remote-save-adaptor)
- [RESTful CRUD Operations in ASP.NET Web Forms](./web-method-adaptor)
- [Data binding](https://ej2.syncfusion.com/angular/documentation/gantt/data-binding)