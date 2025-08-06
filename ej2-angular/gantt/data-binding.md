---
layout: post
title: Data binding in Angular Gantt component | Syncfusion
description: Learn here all about Data binding in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data binding 
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Angular Gantt component

Data binding in the Syncfusion Angular Gantt component facilitates the connection between the component and dynamic data sources. This allows you to efficiently manage and visualize projects using both local and remote data sources. Understanding and implementing data binding effectively ensures your Gantt chart accurately represents and interacts with project data.

The Gantt uses `DataManager`, which supports both RESTful JSON data services binding and local JavaScript object array binding. The [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#datasource) property can be assigned either with the instance of DataManager or JavaScript object array collection. 

The following video explains the data binding in Gantt chart :

{% youtube "https://www.youtube.com/watch?v=FTdp0r1pPK8" %}

## Local data

To bind local data to Gantt, you can assign a JavaScript object array to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#datasource) property. The local data source can also be provided as an instance of the `DataManager`.

In local data binding, the data source for rendering the Gantt component is retrieved from the same application locally.

The following are the two types of data binding possible with the Gantt component:

* Hierarchical data binding.
* Self-referential data binding.

### Hierarchical data binding

Hierarchical data binding is ideal for complex parent-child relationships. Each parent task can have multiple child tasks. These child tasks can be nested within their parent tasks, creating a hierarchical structure. Use the [`child`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#child) field to map these relationships in your data structure.

The following code example shows how to bind the hierarchical local data into the Gantt component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/data-binding/hierarchydata-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/data-binding/hierarchydata-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/data-binding/hierarchydata-cs1" %}

### Self-referential data binding

Self-referential data binding (also known as flat data) uses ID fields to reference relationships between tasks. Map unique task identifiers to the [`id`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#id) and parent identifiers to the [`parentID`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#parentid)  field, to create a task hierarchy without nested objects.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/data-binding/flatdata-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/data-binding/flatdata-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/data-binding/flatdata-cs1" %}

`Note:` When using hierarchical data, link child records to their parent using the `child` property. For self-referential data, make sure each task’s parent-child relationship is defined by mapping `id` and `parentID` fields correctly.

## Remote data

To bind remote data to the Gantt component, assign service data as an instance of `DataManager` to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#datasource) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/data-binding/remotedata-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/data-binding/remotedata-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/data-binding/remotedata-cs1" %}

`Note:` DataManager can connect to various backend including RESTful services, OData, and others. Ensure the proper URL and adaptor are configured.

### URL Adaptor

In Gantt, we can fetch data from SQL database using `ADO.NET` Entity Data Model and update the changes on CRUD action to the server by using `DataManager` support. To communicate with the remote data we are using `UrlAdaptor` of DataManager property to call the server method and get back resultant data in JSON format. We can know more about `UrlAdaptor` from [`here`](https://ej2.syncfusion.com/javascript/documentation/data/adaptors/?no-cache=1).

> Please refer the [link](https://docs.microsoft.com/en-us/aspnet/mvc/overview/older-versions-1/models-data/creating-model-classes-with-the-entity-framework-cs) to create the `ADO.NET` Entity Data Model in Visual Studio,

We can define data source for Gantt as instance of DataManager using `url` property of DataManager. Please Check the below code snippet to assign data source to Gantt.

```typescript

import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data: DataManager;
    public taskSettings: object;
    public columns: object[];
    public ngOnInit(): void {
        this.data = new DataManager({
            url: '/Home/UrlDatasource',
            adaptor: new UrlAdaptor
        });
        this.taskSettings = {
            id: 'TaskId',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'SubTasks'
        };
        this.columns = [
            { field: 'TaskName', headerText: 'Task Name', width: '250', clipMode: 'EllipsisWithTooltip' },
            { field: 'StartDate' },
            { field: 'Duration' }
        ];
    }
}

```

```typescript
GanttDataSourceEntities db = new GanttDataSourceEntities();
public ActionResult UrlDatasource(DataManagerRequest dm)
{
    List<GanttData>DataList = db.GanttDatas.ToList();
    var count = DataList.Count();
    return Json(new { result = DataList, count = count });
}

```

`Note:` UrlAdaptor facilitates communication with remote servers through RESTful endpoints, supporting CRUD operations.

### Load-on-demand

To render child records on demand, assign a remote service URL in the instance of DataManager to the Url property. To interact with the remote data source, provide the endpoint URL and also define the [`hasChildMapping`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#hasChildMapping) property in taskFields of Gantt Chart.

The <code>hasChildMapping</code> property maps the field name in the data source, which denotes whether the current record holds any child records. This is useful internally to show expand icon while binding child data on demand.

When [`loadChildOnDemand`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#loadChildOnDemand) is enabled, all the root nodes are rendered in a collapsed state at initial load. On expanding the root node, the child nodes will be loaded from the remote server.

When <code>enableVirtualization</code> and <code>loadChildOnDemand</code> are enabled, only the current viewport root nodes are rendered in a collapsed state.

When a root node is expanded, its child nodes are rendered and maintained in a collection locally, such that on consecutive expand/collapse actions on the root node, the child nodes are loaded locally instead of from the remote server.

When the <code>loadChildOnDemand</code> is disabled, parent records are rendered in an expanded state.

The following code example describes the behavior of the loadChildOnDemand feature of Gantt chart.

```typescript

import { Component, OnInit } from '@angular/core';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { VirtualScrollService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
    selector: 'app-container',
    template: `<ejs-gantt id="ganttDefault" [dataSource]="data" [taskFields]="taskSettings" [loadChildOnDemand]="true" [enableVirtualization]="true" [allowSelection]="true"
      [labelSettings]="labelSettings" [columns]="columns" [treeColumnIndex]="1" height="450px" [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate"
      [highlightWeekends]="true"  [taskbarHeight]="20" [rowHeight]="40" [tooltipSettings]="tooltipSettings"  [splitterSettings]="splitterSettings">
  </ejs-gantt>`,
providers: [VirtualScrollService, SelectionService]
})
export class AppComponent implements OnInit {

    public data?: object;
    public taskSettings?: object;
    public columns?: object[];
    public labelSettings?: object;
    public splitterSettings?: object;
    public tooltipSettings?: object;
    public projectStartDate?: Date;
    public projectEndDate?: Date;

    ngOnInit(): void {
        this.data = new DataManager({
        url: 'https://services.syncfusion.com/angular/production/api/GanttLoadOnDemand',
        adaptor: new WebApiAdaptor,
        crossDomain: true
    });
        this.taskSettings = {
            id: 'taskId',
            name: 'taskName',
            startDate: 'startDate',
            endDate: 'endDate',
            duration: 'duration',
            progress: 'progress',
            hasChildMapping: "isParent",
            parentID: "parentID"
        };
        this.tooltipSettings= {
          showTooltip: true
        };
        this.splitterSettings = {
          columnIndex: 3
        };
        this.columns =  [
            { field: 'taskId', width:80 },
            { field: 'taskName', headerText: 'Name', width: '200', clipMode: 'EllipsisWithTooltip' },
            { field: 'startDate' },
            { field: 'duration' },
            { field: 'progress' },
        ];
        this.projectStartDate = new Date('01/02/2000');
        this.projectEndDate = new Date('01/06/2002');
    }
}

```

The following code example describes handling of Load on demand at server end.

**1. Data model**

Define your tree structure for Gantt, including required fields.

```typescript
// TreeData.cs
public class TreeData
{
    [System.ComponentModel.DataAnnotations.Key]
    public int taskId { get; set; }                 // Unique Task ID
    public string taskName { get; set; }
    public DateTime startDate { get; set; }
    public DateTime endDate { get; set; }
    public string duration { get; set; }
    public int progress { get; set; }
    public int? parentID { get; set; }              // Null for root
    public string predecessor { get; set; }
    public bool? isParent { get; set; }             // Used for hasChildMapping
    public bool? IsExpanded { get; set; }           // For tracking state

    public static List<TreeData> tree = new List<TreeData>();

    // Generates a sample tree on first use
    public static List<TreeData> GetTree()
    {
        if (tree.Count == 0)
        {
            Random rand = new Random();
            var x = 0;
            int duration = 0;
            DateTime startDate = new DateTime(2000, 1, 3, 8, 0, 0);
            for (var i = 1; i <= 50; i++)
            {
                startDate = startDate.AddDays(i == 1 ? 0 : 7);
                DateTime childStartDate = startDate;
                TreeData Parent = new TreeData()
                {
                    taskId = ++x,
                    taskName = "Task " + x,
                    startDate = startDate,
                    endDate = childStartDate.AddDays(26),
                    duration = "20",
                    progress = rand.Next(100),
                    predecessor = null,
                    isParent = true,
                    parentID = null,
                    IsExpanded = false
                };
                tree.Add(Parent);
                for (var j = 1; j <= 4; j++)
                {
                    childStartDate = childStartDate.AddDays(j == 1 ? 0 : duration + 2);
                    duration = 5;
                    tree.Add(new TreeData()
                    {
                        taskId = ++x,
                        taskName = "Task " + x,
                        startDate = childStartDate,
                        endDate = childStartDate.AddDays(5),
                        duration = duration.ToString(),
                        progress = rand.Next(100),
                        parentID = Parent.taskId,
                        predecessor = (j > 1 ? (x - 1) + "FS" : ""),
                        isParent = false,
                        IsExpanded = false
                    });
                }
            }
        }
        return tree;
    }
}
```
**2. Core API logic (get endpoint for load-on-demand)**

This endpoint serves initial root tasks and children on expand.

```typescript
// GanttController.cs (snippet)
public object Get()
{
    DataOperations operation = new DataOperations();
    var queryString = Request.Query;
    if (TreeData.tree.Count == 0)
        TreeData.tree = TreeData.GetTree();

    // Return children for a specific parent (on expand)
    if (queryString.Keys.Contains("$filter") && !queryString.Keys.Contains("$top"))
    {
        StringValues filter;
        queryString.TryGetValue("$filter", out filter);
        int? fltr = (filter[0].ToString().Split("eq")[1] == " null") ?
            null : Int32.Parse(filter[0].ToString().Split("eq")[1]);
        IQueryable<TreeData> data1 = TreeData.tree.Where(f => f.parentID == fltr).AsQueryable();
        return new { result = data1.ToList(), count = data1.Count() };
    }

    // Update expansion/collapse state from Gantt
    StringValues expandVal;
    queryString.TryGetValue("$expand", out expandVal);
    if (queryString.Keys.Contains("$expand") && expandVal.Count > 0)
    {
        var state = expandVal[0].ToString().Split(",")[0];
        var taskId = int.Parse(expandVal[0].ToString().Split(",")[1]);
        var task = TreeData.tree.FirstOrDefault(ds => ds.taskId == taskId);
        if (state == "ExpandingAction") task.IsExpanded = true;
        else if (state == "CollapsingAction") task.IsExpanded = false;
    }

    List<TreeData> data = TreeData.tree.ToList();

    // (Optional: handle $select and $inlinecount for virtualization scenarios if needed)

    // Return all root tasks by default
    data = data.Where(p => p.parentID == null).ToList();
    return new { result = data, count = data.Count };
}
```
**3. Recursive children handling (for virtualization/expand-collapse tree state)**

```typescript
// GanttController.cs (additional snippet)
private void AppendChildren(List<TreeData> ChildRecords, TreeData ParentItem,
        Dictionary<string, List<TreeData>> GroupData, List<TreeData> data)
{
    string TaskId = ParentItem.taskId.ToString();
    var index = data.IndexOf(ParentItem);
    foreach (var Child in ChildRecords)
    {
        string ParentId = Child.parentID.ToString();
        if (TaskId == ParentId && (bool)ParentItem.IsExpanded)
        {
            if (data.IndexOf(Child) == -1)
                ((IList)data).Insert(++index, Child);
            if (GroupData.ContainsKey(Child.taskId.ToString()))
            {
                var DeepChildRecords = GroupData[Child.taskId.ToString()];
                if (DeepChildRecords?.Count > 0)
                    AppendChildren(DeepChildRecords, Child, GroupData, data);
            }
        }
    }
}
```
**4. CRUD endpoints (add, update, delete)**

These are kept modular, but together they provide all expected Gantt CRUD support.

```typescript
[HttpPost]
public object Post([FromBody] TreeData[] value)
{
    // Insert new tasks
    for (var i = 0; i < value.Length; i++)
    {
        TreeData.tree.Insert(0, value[i]);
    }
    return value;
}

[HttpPut]
public object Put([FromBody] TreeData[] value)
{
    if (value.Length == 1 && value[0].isParent == true)
    {
        UpdateDependentRecords(value[0]);
    }
    for (var i = 0; i < value.Length; i++)
    {
        var ord = value[i];
        TreeData val = TreeData.tree.FirstOrDefault(or => or.taskId == ord.taskId);
        if (val != null)
        {
            val.taskId = ord.taskId;
            val.taskName = ord.taskName;
            val.endDate = ord.endDate;
            val.startDate = ord.startDate;
            val.duration = ord.duration;
            val.predecessor = ord.predecessor;
        }
    }
    return value;
}

[HttpDelete("{id:int}")]
[Route("Orders/{id:int}")]
public object Delete(int id)
{
    // Remove task by id
    TreeData.tree.Remove(TreeData.tree.FirstOrDefault(or => or.taskId == id));
    return Json(id);
}
```
**5. Utility methods for gantt hierarchical operations**

```typescript
// Recursively update children when parent is updated
private void UpdateDependentRecords(TreeData ParentItem)
{
    var data = TreeData.tree.Where(p => p.parentID == ParentItem.taskId).ToList();
    var previousData = TreeData.tree.Where(p => p.taskId == ParentItem.taskId).ToList();
    var previousStartDate = previousData[0].startDate;
    var previousEndDate = previousData[0].endDate;
    double sdiff = (double)GetTimeDifference((DateTime)previousStartDate, (DateTime)ParentItem.startDate);
    double ediff = (double)GetTimeDifference((DateTime)previousEndDate, (DateTime)ParentItem.endDate);
    GetRootChildRecords(ParentItem);
    for(var i=0; i<ChildRecords.Count;i++)
    {
        ChildRecords[i].startDate = ((DateTime)ChildRecords[i].startDate).AddSeconds(sdiff);
        ChildRecords[i].endDate = ((DateTime)ChildRecords[i].endDate).AddSeconds(ediff);
    }
}

private void GetRootChildRecords(TreeData ParentItem)
{
    var currentchildRecords = TreeData.tree.Where(p => p.parentID == ParentItem.taskId).ToList();
    for (var i = 0; i < currentchildRecords.Count; i++) {
        var currentRecord = currentchildRecords[i];
        ChildRecords.Add(currentRecord);
        if (currentRecord.isParent == true)
        {
            GetRootChildRecords(currentRecord);
        }
    }
}

// Helper to calculate date difference in seconds
public object GetTimeDifference(DateTime sdate, DateTime edate)
{
    return new DateTime(edate.Year, edate.Month, edate.Day, edate.Hour, edate.Minute, edate.Second, DateTimeKind.Utc)
        .Subtract(new DateTime(sdate.Year, sdate.Month, sdate.Day, sdate.Hour, sdate.Minute, sdate.Second, DateTimeKind.Utc)).TotalSeconds;
}
```

### Limitations

* Filtering, sorting  and searching are not supported in load-on-demand.
* Only Self-Referential type data is supported with remote data binding in Gantt Chart.
* Load-on-demand supports only the validated data source


### Sending additional parameters to the server

We can pass additional parameters using [`addParams`](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method of [`Query`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#query) class. In server side we have inherited and shown the additional parameter value in Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager class itself. We pass an additional parameter in load time using [`load`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#load) event. We can also pass additional parameter to the CRUD model. Please Check the below code snippet to send additional parameter to Gantt.

```typescript

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt, ToolbarItem, EditSettingsModel } from '@syncfusion/ej2-gantt';
import { DataManager, UrlAdaptor, Query } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [editSettings]="editSettings" [toolbar]="toolbar" (load)="load($event)"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: DataManager;
    public taskSettings?: object;
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItem[];
    public columns?: object[];
    @ViewChild('gantt', {static: true})
    public ganttObj?: GanttComponent;
    public ngOnInit(): void {
        this.data = new DataManager({
            url: 'http://localhost:50039/Home/UrlDatasource',
            adaptor: new UrlAdaptor,
            batchUrl: 'http://localhost:50039/Home/BatchSave',
        });
        this.taskSettings = {
            id: 'TaskId',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'SubTasks'
        };
        this.columns = [
            { field: 'TaskName', headerText: 'Task Name', width: '250', clipMode: 'EllipsisWithTooltip' },
            { field: 'StartDate' },
            { field: 'Duration' }
        ];
        this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true
        };
        this.toolbar =  ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ExpandAll', 'CollapseAll'];
        load: function(args) {
            this.ganttObj.query = new Query().addParams('ej2Gantt', "test");
            }
    }
}

```

```typescript

namespace URLAdaptor.Controllers
{
    public class HomeController : Controller
    {
        ...///
        //inherit the class to show age as property of DataManager
        public class Test : DataManagerRequest
        {
            public string ej2Gantt { get; set; }
        }

        public ActionResult UrlDatasource([FromBody]Test dm)
        {
            if (DataList == null)
            {
                ProjectData datasource = new ProjectData();
                DataList = datasource.GetUrlDataSource();
            }
            var count = DataList.Count();
            return Json(new { result = DataList, count = count }, JsonRequestBehavior.AllowGet);
        }

        ...///

        public class ICRUDModel<T> where T : class
        {

            public object key { get; set; }

            public T value { get; set; }

            public List<T> added { get; set; }

            public List<T> changed { get; set; }

            public List<T> deleted { get; set; }

            public IDictionary<string, object> @params { get; set; }

        }
        ...///
    }
}

```

You can find the full sample from here.

#### Handling HTTP error

During server interaction from the Gantt, some server-side exceptions may occur, and you can acquire those error messages or exception details in client-side using the [`actionFailure`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#actionfailure) event.

When binding data to the Gantt component, certain edge cases can cause errors or unexpected behavior. It is important to validate your data and handle these situations gracefully:

- **Missing parentID:** Tasks without a valid `parentID` may not display in the correct hierarchy or could appear as root tasks. Validate all child tasks to ensure they correctly reference existing parent IDs.
- **Duplicate task IDs:** Each task should have a unique `taskID`. If duplicate IDs are present, data operations such as editing or deleting may fail, or the Gantt may not render correctly. Ensure all IDs are unique before binding.
- **Invalid date formats:** Task dates (such as `startDate` and `endDate`) must follow supported date formats (ISO or the one specified in your configuration). Invalid dates will lead to parsing errors or tasks not displaying as expected.

The argument passed to the `actionFailure` event contains the error details returned from the server.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/data-binding/actionFailure-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/data-binding/actionFailure-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/data-binding/actionFailure-cs1" %}

#### Binding with Fetch

You can use Gantt [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#datasource) property to bind the data source to Gantt from external Fetch request. Fetching external data can be beneficial in scenarios where asynchronous data retrieval from servers is required. Utilize the `onSuccess` event of Fetch to handle asynchronous data loading effectively. In the below code we have fetched the data source from the server with the help of Fetch request and provided that to `dataSource` property by using `onSuccess` event of the Fetch.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/data-binding/bindajax-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/data-binding/bindajax-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/data-binding/bindajax-cs1" %}

>Note: If you bind the dataSource from this way, then it acts like a local dataSource. So you cannot perform any server side crud actions.

## Split task

The `Split-task` feature allows you to split a task or interrupt the work during planned or unforeseen circumstances.
We can split the task either in load time or dynamically, by defining the segments either in hierarchical or self-referential way.

### Hierarchical

To split a task at load time in hierarchical way, we need to define the segment details in datasource and this field should be mapped by using the [`taskFields.segments`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#segments) property.

```typescript

[
    {
        TaskID: 1, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50,
        Segments: [
            { StartDate: new Date("04/02/2019"), Duration: 2 },
            { StartDate: new Date("04/04/2019"), Duration: 2 }
        ]
    }
]

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/data-binding/split-task-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/data-binding/split-task-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/data-binding/split-task-cs1" %}

### Self-referential

We can also define segment details as a flat data and this collection can be mapped by using [`segmentData`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#segmentData) property. The segment id field of this collection is mapped by using the [`taskFields.segmentId`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#segmentId) property.

```typescript

  taskFields: {
    segmentId: "segmentId"
  },
  segmentData: [
    { segmentId: 1, StartDate: new Date("02/04/2019"), Duration: 2 },
    { segmentId: 1, StartDate: new Date("02/05/2019"), Duration: 5 },
    { segmentId: 4, StartDate: new Date("04/02/2019"), Duration: 2 },
    { segmentId: 4, StartDate: new Date("04/04/2019"), Duration: 2 }
  ],

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/data-binding/split-selfreferential-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/data-binding/split-selfreferential-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/data-binding/split-selfreferential-cs1" %}

>Note: Segment id field contains id of a task which should be split at load time.

## Handling expandStateMapping

To denote the expand status of a parent task in the Gantt chart, you can define the [expandStateMapping](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#expandstate) property. This property maps to a field name in your data source indicating whether a parent task is expanded or collapsed. Utilizing the expandStateMapping ensures that parent tasks are rendered in their correct expanded or collapsed state based on the mapped values from the data source.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/data-binding/expandState/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/data-binding/expandState/src/main.ts %}
{% endhighlight %}
{% endtabs %}


## Limitations

* Hierarchical and self-referential data binding support: Gantt supports both hierarchical and self-referential data binding. However, it is not feasible to implement both simultaneously in a SQL database context.

* Complex JSON structures: Managing complex JSON structures in SQL tables is challenging. It requires intricate queries and algorithms to accurately update or delete tasks within nested levels.

* Rendering issues with dual mapping: If both child and parentID fields are mapped, rendering issues can occur. Specifically, a task ID from a hierarchy structure linked as a parent ID to another record may not render correctly.

* Self-referential searching: The self-referential function searches only within self-referential data for particular IDs. It does not search within nested levels.

* Prioritization of parentID field: When the parentID field is mapped, it takes precedence in rendering decisions. This can impact how the Gantt chart is displayed based on parent-child data.