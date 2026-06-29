---
layout: post
title: Maintaining Data in Server in Angular Gantt Chart | Syncfusion
description: Learn how to manage Gantt data in a server using URLAdaptor for batch CRUD operations in the Syncfusion Angular Gantt Chart for seamless project updates.
platform: ej2-angular
control: Maintaining data in server
documentation: ug
domainurl: ##DomainURL##
---

# Maintaining Data in Server in Angular Gantt Chart Component

Maintaining Gantt data in a server enables persistent project updates through RESTful web services, using DataManager’s `UrlAdaptor` to handle CRUD operations with a backend like ASP.NET and ADO.NET Entity Data Model. Configure the data source with a DataManager instance, specifying `url` for fetching data and `batchUrl` for batch updates, ensuring task data aligns with [taskFields](https://ej2.syncfusion.com/angular/documentation/api/gantt#taskfields) mappings (e.g., id, name, startDate). The server processes insert, edit, and delete actions, returning JSON data with `result` for the data list and `count` for the total count. Batch operations handle interdependent tasks, such as updating a child task affecting its parent or predecessors, ensuring hierarchy and dependency integrity without manual adjustments. Use valid `taskFields` mappings and ensure dependency strings avoid circular references for successful operations.

## Configure URL adaptor with batch updates

Configure the Gantt Chart component to fetch and update data using DataManager with `UrlAdaptor`. Set the data source to a DataManager instance with `url` for the server endpoint to retrieve data and `batchUrl` for batch CRUD operations (insert, edit, delete). The server returns JSON with `result` as the data list and `count` as the total records. This setup supports large datasets and batch updates, automatically handling related tasks, such as parent or predecessor adjustments, via the `BatchSave` endpoint.

```typescript
import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { Gantt } from "@syncfusion/ej2-gantt";
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";

@Component({
  selector: "app-root",
  template: `<ejs-gantt
    id="ganttDefault"
    height="430px"
    [dataSource]="data"
    [taskFields]="taskSettings"
    [columns]="columns"
  ></ejs-gantt>`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public data: DataManager;
  public taskSettings: object;
  public columns: object[];
  public ngOnInit(): void {
    this.data = new DataManager({
      url: "/Home/UrlDatasource",
      adaptor: new UrlAdaptor(),
      batchUrl: "Home/BatchSave",
    });
    this.taskSettings = {
      id: "TaskId",
      name: "TaskName",
      startDate: "StartDate",
      duration: "Duration",
      progress: "Progress",
      dependency: "Predecessor",
      child: "SubTasks",
    };
    this.columns = [
      {
        field: "TaskName",
        headerText: "Task Name",
        width: "250",
        clipMode: "EllipsisWithTooltip",
      },
      { field: "StartDate" },
      { field: "Duration" },
    ];
  }
}
```

```typescript
public class ICRUDModel<T> where T : class
{
    public object key { get; set; }
    public T value { get; set; }
    public List<T> added { get; set; }
    public List<T> changed { get; set; }
    public List<T> deleted { get; set; }
}
public ActionResult BatchSave([FromBody]ICRUDModel<GanttData> data)
{
    List<GanttData> uAdded = new List<GanttData>();
    List<GanttData> uChanged = new List<GanttData>();
    List<GanttData> uDeleted = new List<GanttData>();
    //...
    return Json(new { addedRecords = uAdded, changedRecords = uChanged, deletedRecords = uDeleted });
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

## Perform insert action

Handle insert actions by processing the `added` argument in the `BatchSave` endpoint. Add new records to the database using Entity Framework and return them as `addedRecords` in JSON format. This ensures new tasks, including subtasks, integrate seamlessly into the project hierarchy.

```typescript
GanttDataSourceEntities db = new GanttDataSourceEntities();
public ActionResult BatchSave([FromBody]ICRUDModel<GanttData> data)
{
    List<GanttData> uAdded = new List<GanttData>();
    //Performing insert operation.
    if (data.added != null && data.added.Count() > 0)
    {
        foreach (var rec in data.added)
        {
            uAdded.Add(this.Create(rec));
        }
    }
    return Json(new { addedRecords = uAdded });
    //...
}
public GanttData Create(GanttData value)
{
    db.GanttDatas.Add(value);
    db.SaveChanges();
    return value;
}
```

## Perform editing action

Handle editing actions by processing the `changed` argument in the `BatchSave` endpoint. Update modified records in the database using Entity Framework and return them as `changedRecords` in JSON format. This supports updates to task details, ensuring dependent tasks like parents or predecessors adjust automatically.

```typescript
GanttDataSourceEntities db = new GanttDataSourceEntities();
public ActionResult BatchSave([FromBody]ICRUDModel<GanttData> data)
{
    List<GanttData> uChanged = new List<GanttData>();
    //Performing update operation.
    if (data.changed != null && data.changed.Count() > 0)
    {
        foreach (var rec in data.changed)
        {
            uChanged.Add(this.Edit(rec));
        }
    }
    return Json(new { changedRecords = uChanged });
    //...
}
public GanttData Edit(GanttData value)
{
    GanttData result = db.GanttDatas.Where(currentData => currentData.TaskId == value.TaskId).FirstOrDefault();
    if (result != null)
    {
        result.TaskId = value.TaskId;
        result.TaskName = value.TaskName;
        result.StartDate = value.StartDate;
        result.EndDate = value.EndDate;
        result.Duration = value.Duration;
        result.Progress = value.Progress;
        result.Predecessor = value.Predecessor;
        db.SaveChanges();
        return result;
    }
    else
    {
        return null;
    }
}
```

## Perform delete action

Handle delete actions by processing the `deleted` argument in the `BatchSave` endpoint. Remove records and their child subtasks recursively from the database using Entity Framework, returning them as `deletedRecords` in JSON format. This ensures data integrity by cascading deletions through the task hierarchy.

```typescript
GanttDataSourceEntities db = new GanttDataSourceEntities();
public ActionResult BatchSave([FromBody]ICRUDModel<GanttData> data)
{
    List<GanttData> uDeleted = new List<GanttData>();
    //Performing delete operation.
    if (data.deleted != null && data.deleted.Count() > 0)
    {
        foreach (var rec in data.deleted)
        {
            uDeleted.Add(this.Delete(rec.TaskId));
        }
    }
    return Json(new { deletedRecords = uDeleted });
}
public GanttData Delete(string value)
{
    var result = db.GanttDatas.Where(currentData => currentData.TaskId == value).FirstOrDefault();
    db.GanttDatas.Remove(result);
    RemoveChildRecords(value);
    db.SaveChanges();
    return result;
}
public void RemoveChildRecords(string key)
{
    var childList = db.GanttDatas.Where(x => x.ParentId == key).ToList();
    foreach (var item in childList)
    {
        db.GanttDatas.Remove(item);
        RemoveChildRecords(item.TaskId);
    }
}
```

## See also

- [How to bind remote data?](https://ej2.syncfusion.com/angular/documentation/gantt/data-binding#remote-data)
- [How to configure task editing?](https://ej2.syncfusion.com/angular/documentation/gantt/managing-tasks/editing-tasks)
- [How to manage task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/task-dependency)
