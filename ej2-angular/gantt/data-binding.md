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

The Gantt uses `DataManager`, which supports both RESTful JSON data services binding and local JavaScript object array binding. The [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#datasource) property can be assigned either with the instance of DataManager or JavaScript object array collection. Gantt provides support to bind two kinds of data,

* Local data
* Remote data

The following video explains the data binding in Gantt chart :

{% youtube "https://www.youtube.com/watch?v=FTdp0r1pPK8" %}

## Local data

To bind local data to Gantt, you can assign a JavaScript object array to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#datasource) property. The local data source can also be provided as an instance of the `DataManager`.

In local data binding, the data source for rendering the Gantt component is retrieved from the same application locally.

The following are the two types of data binding possible with the Gantt component:

* Hierarchical data binding.
* Self-referential data binding (Flat data).

### Hierarchical data binding

The [`child`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#child) property is used to map the child records in hierarchical data.

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

### Self-referential data binding (Flat data)

The Gantt component can be bound with self-referential data by mapping the data source field values to the [`id`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#id) and [`parentID`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#parentid) properties.

* ID field: This field contains unique values used to identify each individual task and it is mapped to the [`id`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#id) property.
* Parent ID field: This field contains values that indicate parent tasks and it is mapped to the [`parentID`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#parentid) property.
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/data-binding/flatdata-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/data-binding/flatdata-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/data-binding/flatdata-cs1" %}

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

### URL Adaptor

In Gantt, we can fetch data from SQL database using `ADO.NET` Entity Data Model and update the changes on CRUD action to the server by using `DataManager` support. To communicate with the remote data we are using `UrlAdaptor` of DataManager property to call the server method and get back resultant data in JSON format. We can know more about `UrlAdaptor` from [`here`](https://ej2.syncfusion.com/javascript/documentation/data/adaptors/?no-cache=1).

> Please refer the [link](https://docs.microsoft.com/en-us/aspnet/mvc/overview/older-versions-1/models-data/creating-model-classes-with-the-entity-framework-cs) to create the `ADO.NET` Entity Data Model in Visual studio,

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

### Load child on demand

To render child records on demand, assign a remote service URL in the instance of DataManager to the Url property. To interact with the remote data source, provide the endpoint URL and also define the [`hasChildMapping`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#hasChildMapping) property in taskFields of Gantt Chart.

The <code>hasChildMapping</code> property maps the field name in the data source, which denotes whether the current record holds any child records. This is useful internally to show expand icon while binding child data on demand.

When [`loadChildOnDemand`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#loadChildOnDemand) is disabled, all the root nodes are rendered in a collapsed state at initial load. On expanding the root node, the child nodes will be loaded from the remote server.

When <code>enableVirtualization</code> is enabled and <code>loadChildOnDemand</code> is disabled, only the current viewport root nodes are rendered in a collapsed state.

When a root node is expanded, its child nodes are rendered and maintained in a collection locally, such that on consecutive expand/collapse actions on the root node, the child nodes are loaded locally instead of from the remote server.

When the <code>loadChildOnDemand</code> is enabled, parent records are rendered in an expanded state.

```typescript

import { Component, OnInit } from '@angular/core';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { VirtualScrollService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
    selector: 'app-container',
    template: `<ejs-gantt id="ganttDefault" [dataSource]="data" [taskFields]="taskSettings" [loadChildOnDemand]="false" [enableVirtualization]="true" [allowSelection]="true"
      [labelSettings]="labelSettings" [columns]="columns" [treeColumnIndex]="1" height="450px" [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate"
      [highlightWeekends]="true"  [taskbarHeight]="20" [rowHeight]="40" [tooltipSettings]="tooltipSettings"  [splitterSettings]="splitterSettings">
  </ejs-gantt>`,
providers: [VirtualScrollService, SelectionService]
})
export class AppComponent implements OnInit {

    public data: object;
    public taskSettings: object;
    public columns: object[];
    public labelSettings: object;
    public splitterSettings: object;
    public tooltipSettings: object;
    public projectStartDate: Date;
    public projectEndDate: Date;

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

```typescript

    public object Get()
        {
            DataOperations operation = new DataOperations();
            var queryString = Request.Query;
            if (tree.Count == 0)
                tree = TreeData.GetTree();
            if (queryString.Keys.Contains("$filter") && !queryString.Keys.Contains("$top"))
            {
                StringValues filter;
                queryString.TryGetValue("$filter", out filter);
                int? fltr;
                if (filter[0].ToString().Split("eq")[1] == " null")
                {
                    fltr = null;
                }
                else
                {
                    fltr = Int32.Parse(filter[0].ToString().Split("eq")[1]);
                }
                IQueryable<TreeData> data1 = tree.Where(f => f.parentID == fltr).AsQueryable();
                return new { result = data1.ToList(), count = data1.Count() };
            }
            StringValues expand;
            queryString.TryGetValue("$expand", out expand);
            if (queryString.Keys.Contains("$expand")) // setting the ExpandStateMapping property whether is true or false
            {
                if (expand[0].ToString().Split(",")[0] == "ExpandingAction")
                {
                    var val = TreeData.GetTree().Where(ds => ds.taskId == int.Parse(expand[0].ToString().Split(",")[1])).FirstOrDefault();
                    val.IsExpanded = true;
                }
                else if (expand[0].ToString().Split(",")[0] == "CollapsingAction")
                {
                    var val = TreeData.GetTree().Where(ds => ds.taskId == int.Parse(expand[0].ToString().Split(",")[1])).FirstOrDefault();
                    val.IsExpanded = false;
                }
            }
            List<TreeData> data = tree.ToList();
            if (queryString.Keys.Contains("$select"))
            {
                data = (from ord in tree
                        select new TreeData
                        {
                            parentID = ord.parentID
                        }
                        ).ToList();
                return data;
            }
            data = data.Where(p => p.parentID == null).ToList();
            int count = data.Count;

            if (queryString.Keys.Contains("$inlinecount"))
            {
                StringValues Skip;
                StringValues Take;
                StringValues loadchild;

                int skip = (queryString.TryGetValue("$skip", out Skip)) ? Convert.ToInt32(Skip[0]) : 0;
                int top = (queryString.TryGetValue("$top", out Take)) ? Convert.ToInt32(Take[0]) : data.Count();

                var GroupData = TreeData.GetTree().ToList().GroupBy(rec => rec.parentID)
                           .Where(g => g.Key != null).ToDictionary(g => g.Key?.ToString(), g => g.ToList());
                foreach (var Record in data.ToList())
                {
                    if (GroupData.ContainsKey(Record.taskId.ToString()))
                    {
                        var ChildGroup = GroupData[Record.taskId.ToString()];
                        if (ChildGroup?.Count > 0)
                            AppendChildren(ChildGroup, Record, GroupData, data);
                    }
                }
                if (expand.Count > 0 && expand[0].ToString().Split(",")[0] == "CollapsingAction")
                {
                    string IdMapping = "taskId";
                    List<WhereFilter> CollapseFilter = new List<WhereFilter>();
                    CollapseFilter.Add(new WhereFilter() { Field = IdMapping, value = expand[0].ToString().Split(",")[1], Operator = "equal" });
                    var CollapsedParentRecord = operation.PerformFiltering(data, CollapseFilter, "and");
                    var index = data.Cast<object>().ToList().IndexOf(CollapsedParentRecord.Cast<object>().ToList()[0]);
                    skip = index;
                }
                else if (expand.Count > 0 && expand[0].ToString().Split(",")[0] == "ExpandingAction")
                {
                    string IdMapping = "taskId";
                    List<WhereFilter> ExpandFilter = new List<WhereFilter>();
                    ExpandFilter.Add(new WhereFilter() { Field = IdMapping, value = expand[0].ToString().Split(",")[1], Operator = "equal" });
                    var ExpandedParentRecord = operation.PerformFiltering(data, ExpandFilter, "and");
                    var index = data.Cast<object>().ToList().IndexOf(ExpandedParentRecord.Cast<object>().ToList()[0]);
                    skip = index;
                }
                return new { result = data.Skip(skip).Take(top), count = data.Count };
            }
            else
            {
                return TreeData.GetTree();
            }
        }
        private void AppendChildren(List<TreeData> ChildRecords, TreeData ParentItem, Dictionary<string, List<TreeData>> GroupData, List<TreeData> data)
        {

            var queryString = Request.Query;
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

        // GET: api/Orders/
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public object Post([FromBody] TreeData[] value)
        {
            //handle insert action
            for (var i = 0; i < value.Length; i++)
            {
                tree.Insert(0, value[i]);
            }
            return value;
        }

        //// PUT: api/Orders
        [HttpPut]

        public object Put([FromBody] TreeData[] value)
        {
            //handle edit action
            if (value.Length == 1 && value[0].isParent == true)
            {
                UpdateDependentRecords(value[0]);
            }
            for (var i = 0; i < value.Length; i++) {
                var ord = value[i];
                TreeData val = tree.Where(or => or.taskId == ord.taskId).FirstOrDefault();
                val.taskId = ord.taskId;
                val.taskName = ord.taskName;
                val.endDate = ord.endDate;
                val.startDate = ord.startDate;
                val.duration = ord.duration;
                val.predecessor = ord.predecessor;
            }
            
            return value;
        }

        private void UpdateDependentRecords(TreeData ParentItem)
        {
            var data = tree.Where(p => p.parentID == ParentItem.taskId).ToList();
            var previousData = tree.Where(p => p.taskId == ParentItem.taskId).ToList();
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
            var currentchildRecords = tree.Where(p => p.parentID == ParentItem.taskId).ToList();
            for (var i = 0; i < currentchildRecords.Count; i++) {
                var currentRecord = currentchildRecords[i];
                ChildRecords.Add(currentRecord);
                if (currentRecord.isParent == true)
                {
                    GetRootChildRecords(currentRecord);
                }
            }
        }

        public object GetTimeDifference(DateTime sdate, DateTime edate)
        {
            return new DateTime(edate.Year, edate.Month, edate.Day, edate.Hour, edate.Minute, edate.Second, DateTimeKind.Utc).Subtract(new DateTime(sdate.Year, sdate.Month, sdate.Day, sdate.Hour, sdate.Minute, sdate.Second, DateTimeKind.Utc)).TotalSeconds;
        }


        // DELETE: api/ApiWithActions
        [HttpDelete("{id:int}")]
        [Route("Orders/{id:int}")]
        public object Delete(int id)
        {
            //handle delete action
            tree.Remove(tree.Where(or => or.taskId == id).FirstOrDefault());
            return Json(id);
        }
        public class CRUDModel<T> where T : class
        {

            public TreeData Value;
            public int Key { get; set; }
            public int RelationalKey { get; set; }
            public List<TreeData> added { get; set; }
            public List<TreeData> changed { get; set; }
            public List<TreeData> deleted { get; set; }
        }
        public class TreeData
        {
            public static List<TreeData> tree = new List<TreeData>();
            [System.ComponentModel.DataAnnotations.Key]
            public int taskId { get; set; }
            public string taskName { get; set; }
            public DateTime startDate { get; set; }
            public DateTime endDate { get; set; }
            public string duration { get; set; }
            public int progress { get; set; }
            public int? parentID { get; set; }
            public string predecessor { get; set; }
            public bool? isParent { get; set; }
            public bool? IsExpanded { get; set; }
            public static List<TreeData> GetTree()
            {
                if (tree.Count == 0)
                {
                    Random rand = new Random();
                    var x = 0;
                    int duration = 0;
                    DateTime startDate = new DateTime(2000, 1, 3, 08, 00, 00);
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
### Limitations

* Filtering, sorting  and searching are not supported in load on demand.
* Only Self-Referential type data is supported with remote data binding in Gantt Chart.
* Load-on-demand supports only the validated data source


### Sending additional parameters to the server

We can pass additional parameters using [`addParams`](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method of [`Query`](https://ej2.syncfusion.com/angular/documentation/api/gantt#query) class. In server side we have inherited and shown the additional parameter value in Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager class itself. We pass an additional parameter in load time using [`load`](https://ej2.syncfusion.com/angular/documentation/api/gantt#load) event. We can also pass additional parameter to the CRUD model. Please Check the below code snippet to send additional parameter to Gantt.

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
    public data: DataManager;
    public taskSettings: object;
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItem[];
    public columns: object[];
    @ViewChild('gantt', {static: true})
    public ganttObj: GanttComponent;
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

During server interaction from the Gantt, some server-side exceptions may occur, and you can acquire those error messages or exception details in client-side using the [`actionFailure`](https://ej2.syncfusion.com/angular/documentation/api/gantt#actionfailure) event.

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

You can use Gantt [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/gantt#datasource) property to bind the data source to Gantt from external Fetch request. In the below code we have fetched the data source from the server with the help of Fetch request and provided that to `dataSource` property by using `onSuccess` event of the Fetch.

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

## Improve performance by disabling validations

The [`autoCalculateDateScheduling`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#autoCalculateDateScheduling) property can help you reduce the time taken for the Gantt chart to render on the initial load. When this API is enabled, parent-child validation, data validation, and predecessor validation are restricted, allowing the Gantt chart to load more quickly. Since we are disabling the validations, data source provided to gantt should have all data such as start date, end date, duration, as proper data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/virtual-scroll-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/virtual-scroll-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/virtual-scroll-cs2" %}

## Limitations

Gantt has the support for both Hierarchical and Self-Referential data binding. When rendering the Gantt control with SQL database, we suggest you to use the Self-Referential data binding to maintain the parent-child relation. Because the complex json structure is very difficult to manage it in SQL tables, we need to write a complex queries and we have to write a complex algorithm to find out the proper record details while updating/deleting the inner level task in Gantt data source. We cannot implement both data binding for Gantt control and this is not a recommended way. If  both child and parentID are mapped, the records will not render properly because, when task id of a record defined in the hierarchy structure is assigned to parent id of another record, in such case the records will not properly render. As the self-referential will search the record with particular id in flat data only, not in the inner level of records. If we map the parentID field,  it will be prioritized and Gantt will be rendered based on the parentID values.
