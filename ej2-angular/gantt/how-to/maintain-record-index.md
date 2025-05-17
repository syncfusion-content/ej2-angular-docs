---
layout: post
title: Maintain record index in Angular Gantt component | Syncfusion
description: Learn here all about Maintain record index in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Maintain record index 
documentation: ug
domainurl: ##DomainURL##
---

# Maintain record index in Angular Gantt component

Row dropped record’s index position can be maintained in the Gantt chart by changing the database table index position using the [`rowDrop`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowdrop) event. In this event, the `fromIndex` and `dropIndex` values can be passed to the server side using Ajax request. On the server side, the `insert` and `insertAtTop` methods are used to update the row index position. The following code snippets explain the solution.

```typescript

import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ganttData } from './data';
import { Gantt } from '@syncfusion/ej2-gantt';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="450px" [dataSource]="data" [allowRowDragAndDrop]='true'
       [taskFields]="taskSettings"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    public data: DataManager;
    public taskSettings: object;
    public ngOnInit(): void {
         this.data = new DataManager({
            url: 'https://localhost:44379/Home/UrlDatasource',
            adaptor: new UrlAdaptor,
            crossDomain: true,
            batchUrl: 'https://localhost:44379/Home/BatchUpdate'
        });
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        };
    }
    public rowDrop: function (args) {
        public record = this.flatData[args.fromIndex][this.taskFields.id];
        public record2 = this.flatData[args.dropIndex][this.taskFields.id];
        public data: IGanttData = args.data[0];
        public uri = 'https://localhost:44379/Home/RowDropMethod';
        public dragdropdata = {
             record: data[0].taskData,
             position: args.dropIndex,
             dragidMapping: record,
             dropidMapping: record2
        };
        public ajax = new Ajax(
        {
            url: uri,
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify(dragdropdata),
        });
        ajax.send();
     };
}

```

```typescript

public IActionResult RowDropMethod([FromBody]DragDropData value)
        {
            var data = new CRUDModel();
            copyRecord = true;
            if (value.position == "bottomSegment" || value.position == "topSegment")
            {
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