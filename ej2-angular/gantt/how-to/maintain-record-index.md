---
layout: post
title: Maintain Record Index Position in Angular Gantt Chart Component | Syncfusion
description: Learn how to maintain record index positions in the Syncfusion Angular Gantt Chart component using row drag-and-drop for efficient task reordering.
platform: ej2-angular
control: Record index
documentation: ug
domainurl: ##DomainURL##
---

# Maintain Record Index Position in Angular Gantt Chart Component

The Angular Gantt Chart component enables seamless task reordering by maintaining record index positions through the [rowDrop](https://ej2.syncfusion.com/angular/documentation/api/gantt#rowdrop) event, which updates the task order in the data source when a row is dragged and dropped. For example, dragging a task from row 5 to row 2 updates the data source to reflect the new position, preserving project structure. Inject `RowDragAndDropService` and enable `allowRowDragAndDrop` to activate this feature. Use the `rowDrop` event to capture `fromIndex` (source row), `dropIndex` (target row), and `dropPosition` and send them to the server via an Ajax request using `DataManager` with `UrlAdaptor`. On the server side, update the data source (e.g., database) with custom methods like `Insert` or `InsertAtTop`, ensuring hierarchical records with parent-child relationships are correctly handled by updating `parentID` in the task data. Configure valid [taskFields](https://ej2.syncfusion.com/angular/documentation/api/gantt#taskfields) mappings (e.g., id, child) to support hierarchical tasks. This feature integrates with task dependencies, critical path, and virtual scrolling, ensuring reordered tasks align with the project timeline for efficient schedule management.

```typescript
import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { DataManager, UrlAdaptor, Ajax } from "@syncfusion/ej2-data";
import { Gantt, RowDragAndDropService } from "@syncfusion/ej2-gantt";

@Component({
  selector: "app-root",
  template: `<ejs-gantt
    id="ganttDefault"
    height="450px"
    [dataSource]="data"
    [allowRowDragAndDrop]="true"
    [taskFields]="taskSettings"
    (rowDrop)="rowDrop($event)"
  ></ejs-gantt>`,
  encapsulation: ViewEncapsulation.None,
  providers: [RowDragAndDropService],
})
export class AppComponent {
  public data: DataManager;
  public taskSettings: object;
  public ngOnInit(): void {
    this.data = new DataManager({
      url: "https://localhost:44379/Home/UrlDatasource",
      adaptor: new UrlAdaptor(),
      crossDomain: true,
      batchUrl: "https://localhost:44379/Home/BatchUpdate",
    });
    this.taskSettings = {
      id: "TaskID",
      name: "TaskName",
      startDate: "StartDate",
      duration: "Duration",
      progress: "Progress",
      dependency: "Predecessor",
      child: "subtasks",
    };
  }
  public rowDrop(args: any): void {
    const record = this.flatData[args.fromIndex][this.taskFields.id];
    const record2 = this.flatData[args.dropIndex][this.taskFields.id];
    const data: any = args.data[0];
    const uri = "https://localhost:44379/Home/RowDropMethod";
    const dragdropdata = {
      record: data.taskData,
      position: args.dropIndex,
      dragidMapping: record,
      dropidMapping: record2,
    };
    const ajax = new Ajax({
      url: uri,
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(dragdropdata),
    });
    ajax.send();
  }
}
```

```typescript
public IActionResult RowDropMethod([FromBody] DragDropData value)
{
    var data = new CRUDModel();
    copyRecord = true;
    if (value.position == "bottomSegment" || value.position == "topSegment")
    {
        var childCount = 0;
        int parent1 = (int)value.record.parentID;
        childCount += FindChildRecords(parent1);
        if (childCount == 1)
        {
            var i = 0;
            for (; i < DataList.Count; i++)
            {
                if (DataList[i].taskID == parent1)
                {
                    DataList[i].isParent = false;
                    break;
                }
                if (DataList[i].taskID == value.record.taskID)
                {
                    DataList[i].parentID = null;
                    break;
                }
            }
        }
        DataList.Remove(DataList.Where(ds => ds.taskID == value.dragidMapping).FirstOrDefault());
        var j = 0;
        for (; j < DataList.Count; j++)
        {
            if (DataList[j].taskID == value.dropidMapping)
            {
                value.record.parentID = DataList[j].parentID;
                break;
            }
        }
        data.Value = value.record;
        if (value.position == "bottomSegment")
        {
            this.Insert(data, value.dropidMapping);
        }
        else if (value.position == "topSegment")
        {
            this.InsertAtTop(data, value.dropidMapping);
        }
    }
    else if (value.position == "middleSegment")
    {
        DataList.Remove(DataList.Where(ds => ds.taskID == value.dragidMapping).FirstOrDefault());
        value.record.parentID = value.dropidMapping;
        FindDropdata(value.dropidMapping);
        data.Value = value.record;
        this.Insert(data, value.dropidMapping);
    }
    copyRecord = false;
    return Json(new { updatedRecords = value.record });
}
```

## See also

- [How to configure row drag and drop?](https://ej2.syncfusion.com/angular/documentation/gantt/rows/drag-and-drop)
- [How to manage task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/task-dependency)
- [How to configure critical path?](https://ej2.syncfusion.com/angular/documentation/gantt/critical-path)
