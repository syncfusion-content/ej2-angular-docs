---
layout: post
title: Events in Angular Gantt component | Syncfusion
description: Learn about all events available in the Angular Gantt component of Syncfusion Essential JS 2, including their behavior and usage.
platform: ej2-angular
control: Gantt Events
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Events in Angular Gantt Component

The Syncfusion Angular Gantt Chart component offers comprehensive support for visualizing project schedules, task management, and timeline tracking through interactive charts. This documentation provides insights into leveraging the component's rich event-driven architecture to customize and control Gantt operations effectively. Events in the Gantt chart enable you to execute custom logic and integrations, offering flexibility for both simple and complex scenarios.

## actionBegin

The [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/gantt/#actionbegin) event triggers before the Gantt component processes actions such as **adding**, **editing(cell, dialog, taskbar)**, **deleting**, **sorting**, **filtering**, **dependency changes**, and **zooming**. It provides detailed contextual information through the [ActionBeginArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/actionBeginArgs/) argument. The argument type and structure depend on the triggered operation. Each argument type provides specific properties to help you inspect and modify the action.

Below are detailed descriptions of each argument type's properties, and their purposes.

**1. [ActionBeginArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/actionBeginArgs/)**

| **Property**             | **Type**       | **Description**                                                                 |
|--------------------------|----------------|---------------------------------------------------------------------------------|
| `action`                 | string       | Defines the type of action being performed.                                     |
| `fromItem`              | IGanttData   | Specifies the predecessor task in a dependency relationship.                    |
| `isValidLink`           | boolean      | Indicates whether the dependency link is valid.                                 |
| `mergeSegmentIndexes`   | Object[]     | Contains indexes of segments to be merged during a context click action.        |
| `newPredecessorString`  | string       | Represents the updated predecessor string.                                      |
| `newTaskData`           | object      | Holds the newly added task data, excluding custom Gantt properties.  |
| `predecessor`           | IPredecessor | Defines the predecessor object involved in the action.                          |
| `recordIndex`           | number      | Specifies the index of the record being acted upon.                             |
| `splitDate`             | Date         | Indicates the date at which a task is split during a context click action.      |
| `target`                | Element      | Refers to the target HTML element involved in the action.                       |
| `toItem`                | IGanttData   | Specifies the successor task in a dependency relationship.                      |
| `type`                  | string       | Defines the type of event triggered.                                            |

**2. [ITimeSpanEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/iTimeSpanEventArgs/) (Taskbar editing)**

| **Property**           | **Type**   | **Description**                                                                 |
|------------------------|------------|---------------------------------------------------------------------------------|
| `cancel`              | boolean  | Set to **true** to cancel the current action before it is processed.             |
| `isTimelineRoundOff`  | boolean  | Indicates whether timeline rounding is applied during taskbar editing.         |
| `projectStartDate`    | Date     | Start date of the overall project. Useful for validating task boundaries.      |
| `projectEndDate`      | Date    | End date of the overall project. Useful for validating task boundaries.        |
| `requestType`         | string   | Describes the type of request. For taskbar editing, values include **taskbarEditing**. |

**3. [ITaskAddedEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/iTaskAddedEventArgs/) (Adding/Editing/Deleting tasks)**

| **Property**        | **Type**     | **Description**                                                                 |
|---------------------|--------------|---------------------------------------------------------------------------------|
| `action`            | string     | Specifies the type of action, such as **beforeAdd** or **beforeDelete**.           |
| `cancel`            | boolean    | Set to **true** to cancel the current action.                                    |
| `data`              | object     | Contains the original task data before modification.                           |
| `modifiedRecords`   | object[]   | Array of records that were modified during the action.                         |
| `modifiedTaskData`  | object[]   | Array of task data after modification.                                         |
| `newTaskData`       | object     | Data of the newly added task, if applicable.                                   |
| `recordIndex`       | number     | Index of the record being modified or added.                                   |
| `requestType`       | string     | Describes the type of request, such as **beforeAdd** or **beforeDelete**.         |
| `rowPosition`       | string     | Indicates the position where the new row is added. Possible values: **Top**, **Bottom**, **Above**, **Below**. |

**4. [FilterEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs/) (Filtering)**

| **Property**             | **Type**     | **Description**                                                                 |
|--------------------------|--------------|---------------------------------------------------------------------------------|
| `cancel`                 | boolean    | Set to **true** to cancel the filtering action.                                |
| `columns`                | object[]   | Array of columns involved in filtering.                                        |
| `currentFilterObject`    | object     | Filter object representing the current filter condition.                       |
| `currentFilteringColumn` | string     | Name of the column currently being filtered.                                   |
| `requestType`            | string     | Describes the type of request, typically **filtering**.                        |
| `type`                   | string     | Event type identifier.                                                         |

**5. [SortEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/sortEventArgs/) (Sorting)**

| **Property**     | **Type**   | **Description**                                                                 |
|------------------|------------|---------------------------------------------------------------------------------|
| `cancel`         | boolean  | Set to **true** to cancel the sorting action.                                  |
| `columnName`     | string   | Name of the column being sorted.                                               |
| `direction`      | string   | Sort direction: **Ascending** or **Descending**.                               |
| `requestType`    | string   | Describes the type of request, typically **sorting**.                          |
| `type`           | string   | Event type identifier.                                                         |

**6. [IDependencyEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/iDependencyEventArgs/) (Dependency editing)**

| **Property**              | **Type**   | **Description**                                                                 |
|---------------------------|------------|---------------------------------------------------------------------------------|
| `fromItem`                | object   | Source task object in the dependency link.                                     |
| `isValidLink`             | boolean  | Indicates whether the new dependency link is valid.                            |
| `newPredecessorString`    | string   | New predecessor string after editing.                                          |
| `predecessor`             | string   | Original predecessor string before editing.                                    |
| `requestType`             | string  | Describes the type of request, typically **validateDependency** or **updateDependency**. |
| `toItem`                  | object   | Target task object in the dependency link.                                     |

**7. [ZoomEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/zoomEventArgs/) (Zooming)**

| **Property**     | **Type**   | **Description**                                                                 |
|------------------|------------|---------------------------------------------------------------------------------|
| `cancel`         | boolean  | Set to **true** to cancel the zoom action.                                     |
| `name`           | string   | Name of the event.                                                             |
| `requestType`    | string   | Describes the type of request, typically **zooming**.                          |
| `timeline`       | object   | Timeline settings after zoom is applied.                                       |

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttModule, IDependencyEventArgs, ITaskAddedEventArgs, ITimeSpanEventArgs, ZoomEventArgs} from '@syncfusion/ej2-angular-gantt';
import { FilterEventArgs, SortEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [ GanttModule ],
  providers: [EditService, ToolbarService, SelectionService],
  standalone: true,
  selector: 'app-root',
  template:
    `<ejs-gantt id="ganttactionBegin" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"
      [editSettings]="editSettings" [toolbar]="toolbar" [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate" [height]="height" (actionBegin)="actionBegin($event)">
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild('ganttID')
    public ganttObj?: GanttComponent;
    public isRowDropped: boolean = false;
    public data?: object[];
    public taskSettings?: object;
    public columns?: object[];
    public toolbar?: string[];
    public editSettings?: object;
    public height?: string;
    public projectStartDate?: Date;
    public projectEndDate?: Date;
    public ngOnInit(): void {
        this.data =  [
            {
                TaskID: 1,
                TaskName: 'Project Initiation',
                StartDate: new Date('04/02/2024'),
                EndDate: new Date('04/21/2024'),
                subtasks: [
                    {  TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
                    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50  },
                    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
                ]
            },
            {
                TaskID: 5,
                TaskName: 'Project Estimation',
                StartDate: new Date('04/02/2024'),
                EndDate: new Date('04/21/2024'),
                subtasks: [
                    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
                    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
                    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
                ]
            },
        ];
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        };
        this.columns = [
            { field: 'TaskID', headerText: 'Task ID' },
            { field: 'TaskName', headerText: 'Task Name' },
            { field: 'StartDate', headerText: 'Start Date' },
            { field: 'Duration', headerText: 'Duration' },
            { field: 'Progress', headerText: 'Progress' }
        ];
        this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        };
        this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'ZoomIn','ZoomOut','ZoomToFit'];
        this.height = '550px';
        this.projectStartDate = new Date('03/31/2024');
        this.projectEndDate = new Date('05/30/2024');
    }
    public actionBegin(
      args: ITimeSpanEventArgs | ITaskAddedEventArgs | IDependencyEventArgs | ZoomEventArgs | FilterEventArgs | SortEventArgs
    ): void {
      // Executes logic before saving a task or dependency.
      if (args.requestType === 'beforeSave') {
        console.log('Action: Before save');
      } 
      // Executes logic before applying a filter to the Gantt data.
      else if (args.requestType === 'filtering') {
        console.log('Action: Filtering');
      } 
      // Executes logic before sorting the Gantt data.
      else if (args.requestType === 'sorting') {
        console.log('Action: Sorting');
      } 
      // Executes logic before zooming in or out of the Gantt chart.
      else if (args.requestType === 'beforeZoomIn' || args.requestType === 'beforeZoomOut') {
        console.log('Action: Zooming');
      }
    }
}
```

## actionComplete

The [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/gantt/#actioncomplete) event is triggered after the Gantt component successfully completes an operation such as **adding**, **editing(cell, dialog, taskbar)**, **deleting**, **sorting**, **filtering**, **dependency changes**, and **zooming**. It provides detailed contextual information about the completed action through the [ActionCompleteArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/actionCompleteArgs/) argument. The structure of this argument varies depending on the type of operation performed, and includes specific properties that allow you to inspect the outcome and implement custom logic based on the completed action. Below are detailed descriptions of each argument type's properties, and their purposes.

**1. [ActionCompleteArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/actionCompleteArgs/)**

| **Property**       | **Type**                | **Description**                                                                 |
|--------------------|-------------------------|---------------------------------------------------------------------------------|
| `action`           | string               | Defines the action performed during the event.                                 |
| `keyEvent`         | Event                 | Defines the key event triggered.                                               |
| `newTaskData`      | object                | Specifies the newly added task data without custom Gantt properties.           |
| `recordIndex`      | number                | Defines the index of the record involved in the event.                         |
| `timeline`         | ZoomTimelineSettings  | Defines the settings applied to the Zoom timeline.                             |
| `type`             | string                | Defines the type of the event.                                                 |

**2. [FilterEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs/) (Filtering)**

| **Property**             | **Type**     | **Description** |
|--------------------------|--------------|-----------------|
| `cancel`                 | boolean    | Set to **true** to cancel the filtering action. |
| `columns`                | object[]   | Array of columns involved in filtering. |
| `currentFilterObject`    | object     | Filter object representing the current filter condition. |
| `currentFilteringColumn` | string     | Name of the column currently being filtered. |
| `requestType`            | string     | Describes the type of request like **filtering**, **filterAfterOpen**. |
| `type`                   | string     | Event type identifier. |

**3. [SortEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/sortEventArgs/) (Sorting)**

| **Property**     | **Type**   | **Description** |
|------------------|------------|-----------------|
| `cancel`         | boolean  | Set to **true** to cancel the sorting action. |
| `columnName`     | string   | Name of the column being sorted. |
| `direction`      | string   | Sort direction: **Ascending** or **Descending**. |
| `requestType`    | string   | Describes the type of request, typically **sorting**. |
| `type`           | string   | Event type identifier. |

**4. [ITaskAddedEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/iTaskAddedEventArgs/) (Adding/Editing/Deleting tasks)**

| **Property**        | **Type**     | **Description** |
|---------------------|--------------|-----------------|
| `action`            | string     | Specifies the type of action, such as **add** or **delete**. |
| `cancel`            | boolean   | Set to **true** to cancel the current action. |
| `data`              | object    | Contains the original task data before modification. |
| `modifiedRecords`   | object[]   | Array of records that were modified during the action. |
| `modifiedTaskData`  | object[]   | Array of task data after modification. |
| `newTaskData`       | object     | Data of the newly added task (if applicable). |
| `recordIndex`       | number    | Index of the record being modified or added. |
| `requestType`       | string     | Describes the type of request, such as **beforeSave**, **beforeDelete**. |
| `rowPosition`       | string     | Indicates the position where the new row is added. Possible values: **Top**, **Bottom**, **Above**, **Below**. |

**5. [ZoomEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/zoomEventArgs/) (Zooming)**

| **Property**     | **Type**   | **Description** |
|------------------|------------|-----------------|
| `cancel`         | boolean  | Set to **true** to cancel the zoom action. |
| `name`           | string   |  Name of the event |
| `requestType`    | string   | Describes the type of request, typically **zooming**. |
| `timeline`       | object  | Timeline settings after zoom is applied. |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ActionCompleteArgs, EditService, FilterService, GanttComponent, GanttModule, IKeyPressedEventArgs, ITaskAddedEventArgs, SelectionService, SortService, ToolbarService, ZoomEventArgs} from '@syncfusion/ej2-angular-gantt';
import { FilterEventArgs, SortEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [ GanttModule ],
  providers: [EditService, ToolbarService, SelectionService, SortService, FilterService],
  standalone: true,
  selector: 'app-root',
  template:
    `<ejs-gantt id="ganttactionComplete" #ganttID height="200px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" allowFiltering=true allowSorting=true
      [editSettings]="editSettings" [toolbar]="toolbar" [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate" [height]="height" (actionComplete)="actionComplete($event)">
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild('ganttID')
    public ganttObj?: GanttComponent;
    public isRowDropped: boolean = false;
    public data?: object[];
    public taskSettings?: object;
    public columns?: object[];
    public toolbar?: string[];
    public editSettings?: object;
    public height?: string;
    public projectStartDate?: Date;
    public projectEndDate?: Date;
    public ngOnInit(): void {
        this.data =  [
            {
                TaskID: 1,
                TaskName: 'Project Initiation',
                StartDate: new Date('04/02/2024'),
                EndDate: new Date('04/21/2024'),
                subtasks: [
                    {  TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
                    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50  },
                    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
                ]
            },
            {
                TaskID: 5,
                TaskName: 'Project Estimation',
                StartDate: new Date('04/02/2024'),
                EndDate: new Date('04/21/2024'),
                subtasks: [
                    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
                    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
                    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
                ]
            },
        ];
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        };
        this.columns = [
            { field: 'TaskID', headerText: 'Task ID' },
            { field: 'TaskName', headerText: 'Task Name' },
            { field: 'StartDate', headerText: 'Start Date' },
            { field: 'Duration', headerText: 'Duration' },
            { field: 'Progress', headerText: 'Progress' }
        ];
        this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        };
        this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ZoomIn','ZoomOut','ZoomToFit', 'Search'];
        this.height = '550px';
        this.projectStartDate = new Date('03/31/2024');
        this.projectEndDate = new Date('05/30/2024');
    }
    public actionComplete(args: ActionCompleteArgs | FilterEventArgs | SortEventArgs | ZoomEventArgs | ITaskAddedEventArgs) {
    // Handle different types of actions based on requestType.
    switch (args.requestType) {
        case 'filtering':
            // Cast args to FilterEventArgs to access filtering-specific properties.
            const filterArgs = args as FilterEventArgs;
            console.log('Filtering applied on column:', filterArgs.currentFilteringColumn);
            console.log('Filter condition:', filterArgs.currentFilterObject);
            break;

        case 'sorting':
            // Cast args to SortEventArgs to access sorting-specific properties.
            const sortArgs = args as SortEventArgs;
            console.log(`Sorted column: ${sortArgs.columnName}`);
            console.log(`Sort direction: ${sortArgs.direction}`);
            break;

        case 'save':
            // Cast args to ITaskAddedEventArgs to access task save-specific properties.
            const taskArgs = args as ITaskAddedEventArgs;
            console.log('Task saved:', taskArgs.modifiedTaskData); // Modified task data after save
            console.log('Original data:', taskArgs.data); // Original task data before modification
            break;

        case 'delete':
            // Cast args to ITaskAddedEventArgs to access task delete-specific properties.
            const deleteArgs = args as ITaskAddedEventArgs;
            console.log('Deleted records:', deleteArgs.modifiedRecords); // Records deleted from Gantt.
            break;

        case 'AfterZoomIn':
        case 'AfterZoomOut':
        case 'AfterZoomToProject':
            // Cast args to ZoomEventArgs to access zoom-specific properties.
            const zoomArgs = args as ZoomEventArgs;
            console.log('Zoom action:', zoomArgs.requestType); // Type of zoom action performed.
            console.log('Updated timeline settings:', zoomArgs.timeline); // Timeline settings after zoom.
            break;

        default:
            // Handle any other unspecified actions.
            console.log('Other action:', args.requestType);
            break;
    }
  }
}
```

## actionFailure

The [actionFailure](https://ej2.syncfusion.com/angular/documentation/api/gantt/#actionfailure) event is triggered when an operation in the Gantt encounters an error due to configuration issues, invalid data, or missing modules. It returns a [FailureEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/failureEventArgs/#failureeventargs/) object containing detailed information about the failure, including the following property:

| **Property**     | **Type**   | **Description** |
|------------------|------------|-----------------|
| `error`         | Error   |Defines the error information. |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, ReorderService } from '@syncfusion/ej2-angular-gantt';

import { Component, ViewEncapsulation, ViewChild, OnInit, NgModule } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { FailureEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GanttModule],
  providers: [ReorderService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt
      id="ganttDefault"
      #ganttID
      height="430px"
      (actionFailure)="actionFailure($event)"
      [dataSource]="data"
      [allowReordering]="true"
      [taskFields]="taskSettings"
      [treeColumnIndex]="1"
      [splitterSettings]="splitterSettings">      
      <e-columns>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
      </e-columns>
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @ViewChild('ganttID') public gantt?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      }
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      child: 'subtasks'
    };

    this.splitterSettings = {
      position: '50%'
    };
  }

  public actionFailure(args: FailureEventArgs): void {
    // Log the error details to the browser console for debugging.
    console.log(args);

    // Create a span element to display the error message above the Gantt chart.
    let span: HTMLElement = document.createElement('span');

    // Insert the span before the Gantt chart element in the DOM.
    ((this.gantt?.element as HTMLElement).parentNode as ParentNode).insertBefore(span, (this.gantt as GanttComponent).element);

    // Style the error message in red for visibility.
    span.style.color = '#FF0000';

    // Display the error message from the event args or a fallback message.
    span.innerHTML = args.error ? (args.error as Error).message : 'Unknown error';
  }
}
```

## beforeExcelExport

The [beforeExcelExport](https://ej2.syncfusion.com/angular/documentation/api/gantt/#beforeexcelexport) event is triggered before initiating data export from the Gantt component to Excel or CSV format. This event enables conditional control over the export process, such as canceling the operation or applying format-specific logic.

The event argument is an `object` containing the following properties:

| **Property** | **Type**   | **Description**                                                   |
|--------------|------------|-------------------------------------------------------------------|
| `cancel`     | boolean  | Set to **true** to cancel the export.                             | 
| `isCsv`      | boolean  | Indicates if the export is CSV (**true**) or Excel (**false**).   | 
| `name`       | string   | Event name, typically **beforeExcelExport**.                      | 

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService, ExcelExportService } from '@syncfusion/ej2-angular-gantt';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, ExcelExportService],
  standalone: true,
  selector: 'app-root',
  template:
    `<ejs-gantt id="ganttbeforeExcelExport" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"
      [editSettings]="editSettings" [toolbar]="toolbar" [projectStartDate]="projectStartDate" allowExcelExport='true'
      [projectEndDate]="projectEndDate" [height]="height" (beforeExcelExport)="beforeExcelExport($event)" (toolbarClick)="toolbarClick($event)">
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;
  public isRowDropped: boolean = false;
  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];
    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };
    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'ExcelExport', 'CsvExport'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }
  public toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'ganttbeforeExcelExport_excelexport') {
      this.ganttObj!.excelExport();
    } else if (args.item.id === 'ganttbeforeExcelExport_csvexport') {
      this.ganttObj!.csvExport();
    }
  };
  public beforeExcelExport(args: any): void {
    // Log export action.
    console.log(`[${args.name}] Exporting to ${args.isCsv ? 'CSV' : 'Excel'} at ${new Date().toISOString()}`);
  }
}
```

## beforePdfExport

The [beforePdfExport](https://ej2.syncfusion.com/angular/documentation/api/gantt/#beforepdfexport) event is triggered before exporting Gantt data to a PDF file. This event provides an opportunity to conditionally cancel the export or modify behavior based on the current Gantt configuration.

The event provides an argument of type `object` with the following properties:

| **Property**   | **Type**   | **Description**                                                  |
|----------------|------------|------------------------------------------------------------------|
| `cancel`       | boolean  | Set **true** to cancel PDF export.                               |
| `ganttObject`  | Object   | Reference to the Gantt Chart instance.                           |
| `name`         | string   | Event name, typically **beforePdfExport**.                       |
| `requestType`  | string  | Type of request, typically **beforePdfExport**.                  |

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService, PdfExportService } from '@syncfusion/ej2-angular-gantt';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, PdfExportService],
  standalone: true,
  selector: 'app-root',
  template:
    `<ejs-gantt id="ganttbeforePdfExport" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"
      [editSettings]="editSettings" [toolbar]="toolbar" [projectStartDate]="projectStartDate" allowPdfExport='true'
      [projectEndDate]="projectEndDate" [height]="height" (beforePdfExport)="beforePdfExport($event)" (toolbarClick)="toolbarClick($event)">
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;
  public isRowDropped: boolean = false;
  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];
    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };
    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }
  public toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'ganttbeforePdfExport_pdfexport') {
      this.ganttObj!.pdfExport();
    }
  };
  public beforePdfExport(args: any): void {
    // Log export action.
    console.log(`[${args.name}] PDF export triggered at ${new Date().toISOString()}`);
  }
}
```

## beforeTooltipRender

The [beforeTooltipRender](https://ej2.syncfusion.com/angular/documentation/api/gantt/#beforetooltiprender) event is triggered before rendering a tooltip for interactive elements within the Gantt component. This includes taskbars, timeline headers, and connector lines. The event allows dynamic customization or suppression of tooltip content based on contextual data.

The event provides an argument of type [BeforeTooltipRenderEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/beforeTooltipRenderEventArgs/) with the following properties:

| **Property** | **Type**   | **Description**                                                   |
|--------------|------------|-------------------------------------------------------------------|
| `args`       | Object   | Context info like target element and interaction type.            |
| `content`    | string   | Tooltip content before rendering.                                 |
| `cancel`     | boolean  | Set **true** to prevent tooltip display.                          |
| `data`       | Object  | Related Gantt data, such as task or header info.                  |

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, BeforeTooltipRenderEventArgs } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService],
  standalone: true,
  selector: 'app-root',
  template:
    `<ejs-gantt id="ganttbeforeTooltipRender" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"
      [editSettings]="editSettings" [toolbar]="toolbar" [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate" [height]="height" (beforeTooltipRender)="beforeTooltipRender($event)">
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;
  public isRowDropped: boolean = false;
  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];
    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };
    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }
  public beforeTooltipRender(args: BeforeTooltipRenderEventArgs): void {
    console.log(`Tooltip for ${args.args.target.className} at ${new Date().toISOString()}`);

    // Customize taskbar tooltip.
    if (args.args.target.classList.contains('e-gantt-child-taskbar')) {
      const task = args.data as any;
      if (task.Duration === 5) {
        args.cancel = true; // Block tooltip for invalid duration.
        return;
      }
      args.content = `<div><b>${task.TaskName}</b><br>Progress: ${task.Progress}%<br>Duration: ${task.Duration} days</div>`;
    }

  }
}
```

## cellDeselected

The [cellDeselected](https://ej2.syncfusion.com/angular/documentation/api/gantt/#celldeselected) event is triggered when a selected cell in the Gantt component is deselected. This occurs when the selection is cleared by clicking outside the cell, selecting a different cell or row, or through programmatic control. This event is typically used to validate cell data after deselection, synchronize external state, or trigger updates based on cell-level interactions.

The event provides an argument of type [CellDeselectEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/cellDeselectEventArgs/) with the following properties:

| **Property**      | **Type**         | **Description**                         |
|-----------------|----------------|---------------------------------------------|
| `cancel`        | boolean      | Set to **true** to cancel the deselection.  |
| `cellIndexes`   | object[]     | Row and column indices of deselected cells. |                       
| `cells`         | NodeList     | DOM elements of the deselected cells.        |
| `data`          | Object       | Row data associated with the deselected cell.| 

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { SelectionSettingsModel, CellDeselectEventArgs } from '@syncfusion/ej2-angular-grids';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService],
  standalone: true,
  selector: 'app-root',
  template:
    `<ejs-gantt id="ganttcellDeselected" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"
      [editSettings]="editSettings" [toolbar]="toolbar" [projectStartDate]="projectStartDate" [selectionSettings]="selectionSettings"
      [projectEndDate]="projectEndDate" [height]="height" (cellDeselected)="cellDeselected($event)">
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;
  public isRowDropped: boolean = false;
  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public selectionSettings?: SelectionSettingsModel;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];
    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };
    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.selectionSettings = {
                mode: 'Cell',
                type: 'Multiple'
        };
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }
  public cellDeselected(args: CellDeselectEventArgs): void {
    // Log deselected cell details.
    args.cellIndexes.forEach(index => {
        index.cellIndexes.forEach(colIndex => {
          console.log(`Cell deselected at row ${index.rowIndex}, column ${colIndex} at ${new Date().toISOString()}`);
        });
      });
  }
}
```

## cellDeselecting

The [cellDeselecting](https://ej2.syncfusion.com/angular/documentation/api/gantt/#celldeselecting) event is triggered when a previously selected cell in the Gantt component is deselected. This occurs when the selection is cleared either through user interaction or programmatic control. This event is typically used to validate cell data after deselection, synchronize external state, or trigger updates based on cell-level interactions.

The event provides an argument of type [CellDeselectEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/cellDeselectEventArgs/) with the following properties:

| **Property**   | **Type**     | **Description**                                                   |
|----------------|--------------|-------------------------------------------------------------------|
| `cancel`       | boolean    | Set to **true** to cancel the deselection action.                 |
| `cellIndexes`  | object[]   | Row and column indices of the cells being deselected.             |
| `cells`        | NodeList   | DOM elements representing the deselecting cells.                  |
| `data`         | Object    | Row data associated with the deselecting cell.                    |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { SelectionSettingsModel, CellDeselectEventArgs } from '@syncfusion/ej2-angular-grids';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService],
  standalone: true,
  selector: 'app-root',
  template:
    `<ejs-gantt id="ganttcellDeselecting" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"
      [editSettings]="editSettings" [toolbar]="toolbar" [projectStartDate]="projectStartDate" [selectionSettings]="selectionSettings"
      [projectEndDate]="projectEndDate" [height]="height" (cellDeselecting)="cellDeselecting($event)">
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;
  public isRowDropped: boolean = false;
  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public selectionSettings?: SelectionSettingsModel;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];
    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };
    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.selectionSettings = {
                mode: 'Cell',
                type: 'Multiple'
        };
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }
  public cellDeselecting(args: CellDeselectEventArgs): void {
    // Log deselecting cell details.
    if (args.cellIndexes) {
      args.cellIndexes.forEach(index => {
        index.cellIndexes.forEach(colIndex => {
          console.log(`Cell deselecting at row ${index.rowIndex}, column ${colIndex} at ${new Date().toISOString()}`);
        });
      });
    }
  }
}
```

## cellEdit

The [cellEdit](https://ej2.syncfusion.com/react/documentation/api/gantt/#celledit) event is triggered when a cell enters edit mode in the Gantt Chart component. This event allows customization of the editing behavior, such as validating input, modifying cell values, or preventing edits based on specific conditions. It helps ensure that data changes meet application requirements before being applied.

The event provides an argument of type [CellEditArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/cellEditArgs/) with the following properties:

| **Property**       | **Type**         | **Description**                          |
|--------------------|------------------|------------------------------------------|
| `cancel`           | boolean        | Set to **true** to cancel the cell edit action.|
| `cell`             | Element        | Cell element currently being edited.     |
| `columnName`       | string         | Field name of the edited column.         |
| `columnObject`     | Object        | Metadata of the edited column.           |
| `foreignKeyData`   | Object         | Foreign key data, if applicable.         |
| `isForeignKey`     | boolean        | Indicates if column is a foreign key.    |
| `primaryKey`       | string         | Primary key field in the data source.    |
| `row`              | HTMLElement    | Row element containing the edited cell.  |
| `rowData`          | Object         | Data of the row associated with the edited cell.|
| `type`             | string         | Type of edit action (e.g., **edit**).          |
| `validationRules`  | Object         | Validation rules applied to the cell, if any.  |
| `value`            | any            | The current value of the cell before editing starts.|


```typescript
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, CellEditArgs } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService],
  standalone: true,
  selector: 'app-root',
  template:
    `<ejs-gantt id="ganttcellEdit" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"
      [editSettings]="editSettings" [toolbar]="toolbar" [projectStartDate]="projectStartDate" 
      [projectEndDate]="projectEndDate" [height]="height" (cellEdit)="cellEditHandler($event)">
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;
  public isRowDropped: boolean = false;
  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];
    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };
    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }
  public cellEditHandler(args: CellEditArgs): void {
     // Log edit action.
    console.log(`Editing cell in column ${args.columnName} for task ${(args.rowData as any).TaskName} at ${new Date().toISOString()}`);

    // Prevent editing TaskID column.
    if (args.columnName === 'StartDate') {
      args.cancel = true;
      alert('Editing Start date is not allowed.');
      return;
    }
  }
}
```

## cellSelected

The [cellSelected](https://ej2.syncfusion.com/angular/documentation/api/gantt/#cellselected) event is triggered after a cell in the Gantt component is selected. This event provides access to the selected cell’s context and enables interaction logic based on cell-level selection. This event is commonly used to apply conditional styling, display contextual information, or trigger logic based on the selected task or field.

The event provides an argument of type [CellSelectEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/cellSelectEventArgs/) with the following properties:

| **Property**             | **Type**           | **Description**                              |
|----------------------------|------------------|----------------------------------------------|
| `cancel`                   | boolean        | Cancel selection if set to **true**.         |
| `cellIndex`                | object         | Index of the selected cell.                  |
| `cells`                    | Element[]      | DOM elements of selected/deselected cells.   |
| `currentCell`              | Element       | Currently selected cell element.             |
| `data`                     | Object        | Row data for the selected cell.              |
| `previousRowCell`          | Element        | Previously selected cell element.            |
| `previousRowCellIndex`     | number        | Index of previously selected cell.           |
| `selectedRowCellIndex`     | object[]       | Indices of selected row and column.          |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { SelectionSettingsModel, CellDeselectEventArgs, CellSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService],
  standalone: true,
  selector: 'app-root',
  template:
    `<ejs-gantt id="ganttcellSelected" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"
      [editSettings]="editSettings" [toolbar]="toolbar" [projectStartDate]="projectStartDate" [selectionSettings]="selectionSettings"
      [projectEndDate]="projectEndDate" [height]="height" (cellSelected)="cellSelected($event)">
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;
  public isRowDropped: boolean = false;
  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public selectionSettings?: SelectionSettingsModel;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];
    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };
    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.selectionSettings = {
                mode: 'Cell',
                type: 'Multiple'
        };
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }
  public cellSelected(args: CellSelectEventArgs) {
    const rowIndex = args.cellIndex?.rowIndex;
    const colIndex = args.cellIndex?.cellIndex;
    console.log(`Cell selected at row ${rowIndex}, column ${colIndex} at ${new Date().toISOString()}`);
  }
}
```

## cellSelecting

The [cellSelecting](https://ej2.syncfusion.com/react/documentation/api/gantt/#cellselecting) event is triggered before a cell is selected in the Gantt Chart component. It enables logic to control selection behavior based on cell context, such as preventing selection under specific conditions or customizing appearance dynamically.

The event provides an argument of type [CellSelectingEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/cellSelectingEventArgs/)  with the following properties:

| **Property**             | **Type**       | **Description**                              |
|--------------------------|------------------|----------------------------------------------|
| `cancel`                 | boolean        | Cancel selection if set to **true**.             |
| `cellIndex`              | object         | Index of the cell being selected.            |
| `cells`                  | Element[]      | DOM elements of selected/deselected cells.   |
| `currentCell`            | Element        | Cell element currently being selected.       |
| `data`                   | Object         | Row data for the selected cell.              |
| `previousRowCell`        | Element        | Previously selected cell element.            |
| `previousRowCellIndex`   | number         | Index of previously selected cell.           |
| `selectedRowCellIndex`   | object[]       | Indices of selected row and column.          |

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { CellSelectingEventArgs, GanttModule } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService],
  standalone: true,
  selector: 'app-root',
  template:
    `<ejs-gantt id="ganttcellSelecting" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"
      [editSettings]="editSettings" [toolbar]="toolbar" [projectStartDate]="projectStartDate" [selectionSettings]="selectionSettings"
      [projectEndDate]="projectEndDate" [height]="height" (cellSelecting)="cellSelecting($event)">
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public selectionSettings?: SelectionSettingsModel;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];
    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };
    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.selectionSettings = {
      mode: 'Cell',
      type: 'Multiple'
    };
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }
  public cellSelecting(args: CellSelectingEventArgs) {
    const rowIndex = args.cellIndex?.rowIndex;
    const colIndex = args.cellIndex?.cellIndex;
    console.log(`Cell selecting at row ${rowIndex}, column ${colIndex} at ${new Date().toISOString()}`);
    // Example: Cancel selection if the cell is in the first row.
    if (rowIndex === 0) {
      args.cancel = true;
    }
  }
}
```

## columnDrag

The [columnDrag](https://ej2.syncfusion.com/react/documentation/api/gantt/#columndrag) event is triggered while a column header is being dragged during reordering. It provides contextual details about the drag operation and enables customization of the column's behavior during the process, such as restricting movement, applying visual styles, or preparing layout adjustments based on the interaction.

The event provides an argument of type [ColumnDragEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/columnDragEventArgs/) with the following properties:

| **Property**       | **Type**         | **Description**                            |
|--------------------|----------------|----------------------------------------------|
| `column`           | Object       | Column object currently being dragged.       |
| `target`           | Element      | Element where column is dragged over.        |
| `draggableType`    | string       | Type of draggable element (e.g., column).    |

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService, ReorderService } from '@syncfusion/ej2-angular-gantt';
import { ColumnDragEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, ReorderService],
  standalone: true,
  selector: 'app-root',
  template:
    `<ejs-gantt id="ganttcolumnDrag" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"
      [editSettings]="editSettings" [toolbar]="toolbar" [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate" [height]="height" allowReordering="true" (columnDrag)="columnDrag($event)">
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];
    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };
    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }
  public columnDrag(args: ColumnDragEventArgs): void {
  // Log the field name of the column being dragged
  console.log(`Column "${args.column?.field}" was dragged.`);

  // Log the target DOM element where the column is being dragged over
  console.log('Target element:', args.target);
  }
}
```

## columnDragStart

The [columnDragStart](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columndragstart) event is triggered when a column header drag operation begins in the Gantt component. This event provides access to the initial drag context and enables customization or restriction of the drag behavior.

The event provides an argument of type [ColumnDragEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/columnDragEventArgs/) with the following properties:

| **Property**       | **Type**       | **Description**                              |
|--------------------|----------------|----------------------------------------------|
| `column`           | Object       | Column object where drag started.            |
| `target`           | Element      | Element where drag operation began.          |
| `draggableType`    | string       | Type of draggable element (e.g., headercell).|

```ts
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService, ReorderService } from '@syncfusion/ej2-angular-gantt';
import { ColumnDragEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, ReorderService],
  standalone: true,
  selector: 'app-root',
  template:
    `<ejs-gantt id="ganttcolumnDragStart" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"
      [editSettings]="editSettings" [toolbar]="toolbar" [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate" [height]="height" allowReordering="true" (columnDragStart)="columnDragStart($event)">
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];
    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };
    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }
  public columnDragStart(args: ColumnDragEventArgs): void {
    // Log the field name of the column where the drag operation started.
    console.log(`Column "${args.column?.field}" was dragged.`);

    // Log the target DOM element where the drag was initiated.
    console.log('Target element:', args.target);
  }

}
```

## columnDrop

The [columnDrop](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columndrop) is triggered when a column header is dropped after a drag operation in the Gantt component.  It provides drop context and supports post-reorder logic such as validation or UI updates.

The event provides an argument of type [ColumnDragEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/columnDragEventArgs/) with the following properties:

| **Property**       | **Type**         | **Description**                             |
|--------------------|----------------|-----------------------------------------------|
| `column`           | Object       | Column object being dropped.                  |
| `target`           | Element      | Element where column is dropped.              |
| `draggableType`    | string       | Type of draggable element (e.g., row, column).|

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService, ReorderService } from '@syncfusion/ej2-angular-gantt';
import { ColumnDragEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, ReorderService],
  standalone: true,
  selector: 'app-root',
  template:
    `<ejs-gantt id="ganttcolumnDrop" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"
      [editSettings]="editSettings" [toolbar]="toolbar" [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate" [height]="height" allowReordering="true" (columnDrop)="columnDrop($event)">
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];
    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };
    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }
  public columnDrop(args: ColumnDragEventArgs): void {
    // Log the field name of the column that was dropped
    console.log(`Column "${args.column?.field}" was dropped.`);

    // Log the target element where the column was dropped
    console.log('Dropped on target element:', args.target);
  }
}
```

## columnMenuClick

The [columnMenuClick](https://ej2.syncfusion.com/react/documentation/api/gantt/#columnmenuclick) event is triggered when a column menu item is selected in the Gantt Chart. It provides access to the clicked item and its associated column, allowing you to customize menu behavior or execute additional logic.

The event provides an argument of type [ColumnMenuClickEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/columnMenuClickEventArgs/) with the following properties:

| **Property** | **Type**   | **Description**                          |
|--------------|------------|------------------------------------------|
| `name`       | string   | Name of the clicked menu item.           |
| `column`     | Object   | Column object linked to the menu item.   |
| `element`    | Element  | DOM element of the clicked menu item.    |
| `item`       | Object   | The menu item object that was clicked.   |

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { ColumnMenuService, FilterService, GanttModule } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService, SortService } from '@syncfusion/ej2-angular-gantt';
import { ColumnMenuClickEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, FilterService, SelectionService, SortService, ColumnMenuService],
  standalone: true,
  selector: 'app-root',
  template:
    `<ejs-gantt id="ganttcolumnMenuClick" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [showColumnMenu]="true" allowFiltering="true" allowSorting="true"
      [editSettings]="editSettings" [toolbar]="toolbar" [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate" [height]="height" (columnMenuClick)="columnMenuClick($event)">
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];
    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };
    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }
  public columnMenuClick(args: ColumnMenuClickEventArgs): void {
    // Example: Log menu item and column field.
    console.log(`Column menu item "${args.item?.text}"`);
    console.log(`Column Field "${args.column?.field}"`)
    // You can add custom logic here, such as showing a dialog or updating UI.
  }
}
```

## columnMenuOpen

The [columnMenuOpen](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columnmenuopen) event is triggered when the column menu is opened in the Gantt component. This event provides access to the menu context and allows customization of its appearance, behavior, or available options.

The event provides an argument of type [ColumnMenuOpenEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/columnMenuOpenEventArgs/) with the following properties:

| **Property**       | **Type**           | **Description**                                 |
|--------------------|--------------------|-------------------------------------------------|
| `cancel`           | boolean          | Set **true** to cancel menu opening.            |
| `name`             | string           | Event name: **columnMenuOpen**.                 |
| `column`           | Object           | Column object linked to the opened menu.        |
| `element`          | Element          | Header element where menu was opened.           |
| `items`            | Object[]         | List of available column menu items.            |
| `left`             | number           | Left position of menu in viewport.              |
| `top`              | number           | Top position of menu in viewport.               |
| `parentItem`       | Object           | Parent item in nested menu structure.           |
| `showSubMenuOn`    | MenuOpenType     | Submenu trigger type: click or hover.           |

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { Column, ColumnMenuService, FilterService, GanttModule } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService, SortService } from '@syncfusion/ej2-angular-gantt';
import { ColumnMenuOpenEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, FilterService, SelectionService, SortService, ColumnMenuService],
  standalone: true,
  selector: 'app-root',
  template:
    `<ejs-gantt id="ganttcolumnMenuOpen" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [showColumnMenu]="true" allowFiltering="true" allowSorting="true"
      [editSettings]="editSettings" [toolbar]="toolbar" [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate" [height]="height" (columnMenuOpen)="columnMenuOpen($event)">
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];
    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };
    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }
  public columnMenuOpen(args: ColumnMenuOpenEventArgs): void {
    console.log(args);
    // cancel the column menu opening for a specific column.
    // Example: Prevent opening the column menu for the "Duration" column.
    if ((args.column as Column).field === "Duration") {
      args.cancel = true;
    }
  }
}
```

## contextMenuClick

The [contextMenuClick](https://ej2.syncfusion.com/angular/documentation/api/gantt/#contextmenuclick) event is triggered when a context menu item is clicked within the Gantt component. This event provides access to the clicked item and the associated context, enabling customization of menu behavior or execution of additional logic.

The event provides an argument of type [ContextMenuClickEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/contextMenuClickEventArgs/) with the following properties:

| **Property**   | **Type**         | **Description**                              |
|----------------|------------------|----------------------------------------------|
| `name`         | string         | Event name: **contextMenuClick**.            |
| `element`      | Element        | DOM element that triggered the menu.         |
| `event`        | PointerEvent   | Pointer event with interaction details.      |
| `item`         | Object         | Clicked menu item with properties.           |
| `type`         | string         | Type of menu item (e.g., **Content**).       |
| `rowData`      | Object        | Data object of the related row.              |

```ts
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule, ContextMenuService, EditService, SortService, ResizeService, ContextMenuClickEventArgs, Column } from '@syncfusion/ej2-angular-gantt'
import { SelectionService } from '@syncfusion/ej2-angular-gantt'

import { Component, ViewEncapsulation } from '@angular/core';
import { Row } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
         GanttModule
    ],

providers: [SelectionService, ContextMenuService, EditService, SortService, ResizeService],
standalone: true,
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttContextmenu" height="430px" [dataSource]="data" [taskFields]="taskSettings" [enableContextMenu]="true" [allowSorting]="true" [allowResizing]="true" [editSettings]="editSettings" (contextMenuClick)="contextMenuClick($event)"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent{
    public data?: object[];
    public taskSettings?: object;
    public editSettings?: object;
    public ngOnInit(): void {
        this.data = [
            {
                TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'),
            },
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            {
                TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'),
            },
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 9, TaskName: 'Sign Contract', StartDate: new Date('04/04/2019'), Duration: 1, Predecessor: '8', Progress: 30 },
            {
                TaskID: 10, TaskName: 'Project Approval and kick off', StartDate: new Date('04/04/2019'),
                EndDate: new Date('04/21/2019'), Duration: 0, Predecessor: '9'
            },
        ];
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentID'
        };
        this.editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
       };
    }
    // Handle context menu click.
    public contextMenuClick(args: ContextMenuClickEventArgs) {
      // Example: Show which menu item was clicked and the associated row/task.
      console.log('Menu item:', args.item?.text);
      if (args.rowData) {
        console.log('Task:', (args.rowData as any).TaskName);
      } 
      // You can add custom logic here.
    }
}

```

## contextMenuOpen

The [contextMenuOpen](https://ej2.syncfusion.com/angular/documentation/api/gantt/#contextmenuopen) event is triggered when a context menu item is clicked in the Gantt. This event allows customization of menu behavior or execution of additional logic based on the selected item and context.

The event provides an argument of type [ContextMenuOpenEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/contextMenuOpenEventArgs/) with the following properties:

| **Property**       | **Type**         | **Description**                              |
|--------------------|------------------|----------------------------------------------|
| `name`             | string         | Event name: **contextMenuOpen**.             |
| `element`          | Element        | DOM element that triggered the menu.         |
| `event`            | PointerEvent   | Pointer event with interaction details.      |
| `item`             | Object         | Menu item object with properties.            |
| `type`             | string         | Type of menu item (e.g., **Content**).       |
| `rowData`          | Object         | Data object of the related row.              |
| `items`            | Object[]       | List of available context menu items.        |
| `left`             | number         | Left position of menu in viewport.           |
| `top`              | number         | Top position of menu in viewport.            |
| `parentItem`       | Object         | Parent item in nested menu structure.        |
| `showSubMenuOn`    | MenuOpenType   | Submenu trigger type: click or hover.        |

```ts
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule, ContextMenuService, EditService, SortService, ResizeService, ContextMenuClickEventArgs, Column, ContextMenuOpenEventArgs } from '@syncfusion/ej2-angular-gantt'
import { SelectionService } from '@syncfusion/ej2-angular-gantt'

import { Component, ViewEncapsulation } from '@angular/core';
import { Row } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
         GanttModule
    ],

providers: [SelectionService, ContextMenuService, EditService, SortService, ResizeService],
standalone: true,
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttContextmenu" height="430px" [dataSource]="data" [taskFields]="taskSettings" [enableContextMenu]="true" [allowSorting]="true" [allowResizing]="true" [editSettings]="editSettings" (contextMenuOpen)="contextMenuOpen($event)"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent{
    public data?: object[];
    public taskSettings?: object;
    public editSettings?: object;
    public ngOnInit(): void {
        this.data = [
            {
                TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'),
            },
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            {
                TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'),
            },
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 9, TaskName: 'Sign Contract', StartDate: new Date('04/04/2019'), Duration: 1, Predecessor: '8', Progress: 30 },
            {
                TaskID: 10, TaskName: 'Project Approval and kick off', StartDate: new Date('04/04/2019'),
                EndDate: new Date('04/21/2019'), Duration: 0, Predecessor: '9'
            },
        ];
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentID'
        };
        this.editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
       };
    }
    public contextMenuOpen(args: ContextMenuOpenEventArgs) {
      const taskName = (args.rowData as any)?.TaskName;
      console.log(`Context menu opened for task: ${taskName}`);
      // Disable Delete Task item.
      args.disableItems=["Delete Task"];

  }
}
```

## created

The [created](https://ej2.syncfusion.com/angular/documentation/api/gantt/#created) event is triggered when the Gantt component is fully initialized and rendered. This event is useful for executing logic that depends on the component being completely loaded and ready for interaction.

```ts
import { NgModule, ViewChild, viewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule, ContextMenuService, EditService, SortService, ResizeService, GanttComponent } from '@syncfusion/ej2-angular-gantt'
import { SelectionService } from '@syncfusion/ej2-angular-gantt'

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
imports: [
         GanttModule
    ],

providers: [SelectionService, ContextMenuService, EditService, SortService, ResizeService],
standalone: true,
    selector: 'app-root',
    template:
       `<ejs-gantt #ganttID id="gantt" height="430px" [dataSource]="data" [taskFields]="taskSettings" [allowSelection]="true" [allowResizing]="true" [editSettings]="editSettings" (created)="created()"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent{
      @ViewChild('ganttID')
    public ganttObj?: GanttComponent;
    public data?: object[];
    public taskSettings?: object;
    public editSettings?: object;
    public ngOnInit(): void {
        this.data = [
            {
                TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'),
            },
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            {
                TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'),
            },
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 9, TaskName: 'Sign Contract', StartDate: new Date('04/04/2019'), Duration: 1, Predecessor: '8', Progress: 30 },
            {
                TaskID: 10, TaskName: 'Project Approval and kick off', StartDate: new Date('04/04/2019'),
                EndDate: new Date('04/21/2019'), Duration: 0, Predecessor: '9'
            },
        ];
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentID'
        };
        this.editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
       };
    }
    public created(){
      console.log("Gantt component created.");
      if (this.ganttObj) {
        // Select the row at index 6 after component created.
        this.ganttObj.selectedRowIndex = 6;
        console.log("RowIndex 6 is selected on Gantt creation.");
      }
    }
}
```

## dataBound

The [dataBound](https://ej2.syncfusion.com/angular/documentation/api/gantt/#databound) event is triggered after the Gantt component has successfully bound its data source and rendered the task data. This event is useful for executing logic that depends on the data being fully loaded and available in the UI.

```ts
import { NgModule, ViewChild, viewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule, ContextMenuService, EditService, SortService, ResizeService, GanttComponent } from '@syncfusion/ej2-angular-gantt'
import { SelectionService } from '@syncfusion/ej2-angular-gantt'

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
imports: [
         GanttModule
    ],

providers: [SelectionService, ContextMenuService, EditService, SortService, ResizeService],
standalone: true,
    selector: 'app-root',
    template:
       `<ejs-gantt #ganttID id="gantt" height="430px" [dataSource]="data" [taskFields]="taskSettings" [allowSelection]="true" [allowResizing]="true" [editSettings]="editSettings" (dataBound)="dataBound($event)"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent{
      @ViewChild('ganttID')
    public ganttObj?: GanttComponent;
    public data?: object[];
    public taskSettings?: object;
    public editSettings?: object;
    public ngOnInit(): void {
        this.data = [
            {
                TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'),
            },
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            {
                TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'),
            },
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 9, TaskName: 'Sign Contract', StartDate: new Date('04/04/2019'), Duration: 1, Predecessor: '8', Progress: 30 },
            {
                TaskID: 10, TaskName: 'Project Approval and kick off', StartDate: new Date('04/04/2019'),
                EndDate: new Date('04/21/2019'), Duration: 0, Predecessor: '9'
            },
        ];
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentID'
        };
        this.editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
       };
    }

  public dataBound(args: object): void {
      console.log(args);
      // Collapse all parent tasks after data is bound.
      this.ganttObj?.collapseAll();
      console.log("All tasks collapsed after data binding.");
  }
}
```

## destroyed

The [destroyed](https://ej2.syncfusion.com/angular/documentation/api/gantt/#destroyed) event is triggered when the Gantt component is removed from the DOM using the destroy() method. This event is useful for handling cleanup operations and releasing resources associated with the component instance.

The event provides an argument of type `object` with the following properties:

| **Property**      | **Type**        | **Description**                            |
|-------------------|-----------------|--------------------------------------------|
| `name`            | string        | Identifies event as **destroyed**.         |
| `cancel`          | boolean       | Prevents destruction when set to **true**. |

```ts
import { NgModule, ViewChild, viewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule, ContextMenuService, EditService, SortService, ResizeService, GanttComponent } from '@syncfusion/ej2-angular-gantt'
import { SelectionService } from '@syncfusion/ej2-angular-gantt'

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
imports: [
         GanttModule
    ],

providers: [SelectionService, ContextMenuService, EditService, SortService, ResizeService],
standalone: true,
    selector: 'app-root',
    template:
       `<button ejs-button (click)="onclick()">Grid Destroy</button><ejs-gantt #ganttID id="gantt" height="430px" [dataSource]="data" [taskFields]="taskSettings" [allowSelection]="true" [allowSorting]="true" [allowResizing]="true" [editSettings]="editSettings" (destroyed)="destroyed($event)"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent{
      @ViewChild('ganttID')
    public ganttObj?: GanttComponent;
    public data?: object[];
    public taskSettings?: object;
    public editSettings?: object;
    public ngOnInit(): void {
        this.data = [
            {
                TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'),
            },
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            {
                TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'),
            },
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 9, TaskName: 'Sign Contract', StartDate: new Date('04/04/2019'), Duration: 1, Predecessor: '8', Progress: 30 },
            {
                TaskID: 10, TaskName: 'Project Approval and kick off', StartDate: new Date('04/04/2019'),
                EndDate: new Date('04/21/2019'), Duration: 0, Predecessor: '9'
            },
        ];
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentID'
        };
        this.editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
       };
    }

  public destroyed(args: object): void {
  // Log the destroyed event arguments.
  console.log("Gantt component destroyed.", args);
  // You can perform cleanup or reset logic here.
  }

  public onclick(){
    this.ganttObj?.destroy();
  }
}
```

## endEdit

The [endEdit](https://ej2.syncfusion.com/angular/documentation/api/gantt/#endedit) event is triggered after a task is edited using cell editing. It enables post-edit actions such as validation, logging, or syncing changes with external systems.

The event provides an argument of type [ITaskbarEditedEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/iTaskbarEditedEventArgs/) with the following properties:

| **Property**         | **Type**       | **Description**                                      |
|----------------------|----------------|------------------------------------------------------|
| `action`             | string      | Specifies type of task edit action.                  |
| `data`               | IGanttData   | Contains updated data for the task.                  |
| `name`               | string       | Identifies event as **endEdit**                      |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, CellEditArgs, ITaskbarEditedEventArgs } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService],
  standalone: true,
  selector: 'app-root',
  template:
    `<ejs-gantt id="ganttendEdit" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"
      [editSettings]="editSettings" [toolbar]="toolbar" [projectStartDate]="projectStartDate" 
      [projectEndDate]="projectEndDate" [height]="height" (endEdit)="endEditHandler($event)">
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;
  public isRowDropped: boolean = false;
  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];
    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };
    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }
  public endEditHandler(args: ITaskbarEditedEventArgs): void {
    const task = args.data as any;

    // Log the edited task details.
    console.log(`Task "${task.TaskName}" edited. New Duration: ${task.Duration} days`);

    // Validate duration.
    if (task.Duration < 1) {
        alert(`Task "${task.TaskName}" has an invalid duration (${task.Duration} days). Minimum duration is 1 day.`);
        // Optionally, revert the change or notify backend.
    }
  }
}
```

## excelExportComplete

The [excelExportComplete](https://ej2.syncfusion.com/angular/documentation/api/gantt/#excelexportcomplete) event is triggered after the Gantt component has completed exporting data to an Excel file. This event enables post-export actions such as displaying notifications, logging activity, or applying additional formatting to the exported content.

The event provides an argument of type [ExcelExportCompleteArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportCompleteArgs/) with the following property:

| **Property**            | **Type**        | **Description**                                  |
|-------------------------|-----------------|--------------------------------------------------|  
| `promise`               | Promise      | Represents blob data for exported file.          |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, ExcelExportService, Column } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { ExcelExportCompleteArgs } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, ExcelExportService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt id="ganttDefault" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"
      allowExcelExport="true" [editSettings]="editSettings" [toolbar]="toolbar"
      [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [height]="height"
      (toolbarClick)="toolbarClick($event)" (excelExportComplete)="excelExportComplete($event)">
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'ExcelExport'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  public toolbarClick(args: ClickEventArgs): void {
    // Check if the clicked toolbar item is the Excel export button
    if (args.item.id === 'ganttDefault_excelexport') {
      // Trigger Excel export from the Gantt component
      this.ganttObj?.excelExport();
    }
  }

  public excelExportComplete(args: ExcelExportCompleteArgs): void {
    // Log a message indicating that the Excel export has completed
    console.log('Excel export completed');

    // Change the header text of the second column in the exported Excel file
    (args as any).gridInstance.columns[1].headerText = "New HeaderText";

    // Hide the third column in the exported Excel file
    (args as any).gridInstance.columns[2].visible = false;
  }
}
```

## excelExportHeaderQueryCellInfo

The [excelHeaderQueryCellInfo](https://ej2.syncfusion.com/react/documentation/api/gantt/#excelheaderquerycellinfo) event is triggered during the Excel export process when customizing header cells in the exported file. It allows modification of header text, styles, and other properties before they are written to the Excel sheet.

The event provides an argument of type [ExcelHeaderQueryCellInfoEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/excelHeaderQueryCellInfoEventArgs/) with the following properties:

| **Property**   | **Type**         | **Description**                                        |
|----------------|------------------|--------------------------------------------------------|
| `name`         | string        | Identifies event as **excelExportHeaderQueryCellInfo**.|
| `cell`         | ExcelCell      | Represents current Excel header cell.                  |
| `gridCell`     | Cell \| ExcelCell | Refers to related Grid header cell.               |
| `hyperLink`    | Hyperlink      | Contains hyperlink details for header cell.            |
| `image`        | Image          | Contains image details for header cell.                |
| `style`        | ExcelStyle     | Defines style settings for header cell.                |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, ExcelExportService, Column } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { ExcelExportCompleteArgs, ExcelHeaderQueryCellInfoEventArgs } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, ExcelExportService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt id="ganttDefault" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"
      allowExcelExport="true" [editSettings]="editSettings" [toolbar]="toolbar"
      [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [height]="height"
      (toolbarClick)="toolbarClick($event)" (excelHeaderQueryCellInfo)="excelHeaderQueryCellInfo($event)">
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'ExcelExport'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  public toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'ganttDefault_excelexport') {
      (this.ganttObj?.columns[3] as Column).visible = false;
      this.ganttObj?.excelExport();
    }
  }

  public excelHeaderQueryCellInfo(args: ExcelHeaderQueryCellInfoEventArgs): void {
    // Customize header cells during Excel export.
    if ((args.cell as any).value === "Progress") {
        // Modify header appearance.
        args.style = { 
            backColor: '#a569bd',
            fontSize: 15
        };
    }
   
  }
}
```

## excelQueryCellInfo

The [excelQueryCellInfo](https://ej2.syncfusion.com/react/documentation/api/gantt/#excelquerycellinfo) event is triggered during the Excel export process when customizing individual data cells in the exported file. It allows modification of cell values, styles, and formatting before they are written to the Excel sheet.

The event provides an argument of type [ExcelQueryCellInfoEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/excelQueryCellInfoEventArgs/) with the following properties:

| **Property** | **Type**         | **Description**                                        |
|----------------|------------------|------------------------------------------------------|
| `cell`         | object         | Represents current Excel cell being customized.      |
| `column`       | object         | Metadata of column linked to cell.                   |
| `data`         | object         | Row data for the current cell.                       |
| `value`        | string         | Original value before export.                        |
| `style`        | object         | Style settings like font and alignment.              |
| `colspan`      | number         | Specifies number of columns to span.                 |
| `hyperLink`    | Hyperlink      | Hyperlink details if cell includes a link.           |
| `image`        | Image          | Image details if cell includes an image.             |

This event is useful for applying conditional formatting, masking sensitive data, or transforming values during export.

```ts
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, ExcelExportService, Column } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { ExcelQueryCellInfoEventArgs } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, ExcelExportService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt id="ganttDefault" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"
      allowExcelExport="true" [editSettings]="editSettings" [toolbar]="toolbar"
      [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [height]="height"
      (toolbarClick)="toolbarClick($event)" (excelQueryCellInfo)="excelQueryCellInfo($event)">
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'ExcelExport'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  public toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'ganttDefault_excelexport') {
      (this.ganttObj?.columns[3] as Column).visible = false;
      this.ganttObj?.excelExport();
    }
  }

  public excelQueryCellInfo(args: ExcelQueryCellInfoEventArgs): void {
    console.log(args);
    // Customize data cells during Excel export.
    if (args.column.field === "Progress") {
        // Modify data column appearance.
        args.style = { 
            backColor: '#a569bd',
            fontSize: 15
        };
    }
   
  }
}
```

## expanded

The [expanded](https://ej2.syncfusion.com/angular/documentation/api/gantt/#expanded) event is triggered after a row has been expanded in the Gantt chart. It enables actions that respond to row expansion, such as loading additional data, updating UI elements, or tracking user interaction.

The event provides an argument of type [ICollapsingEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/iCollapsingEventArgs/) with the following properties:

| **Property** | **Type**         | **Description**                                      |
|----------------|------------------|------------------------------------------------------|
| `data`         | object         | Data object of the expanded row                     |
| `row`          | HTMLElement    | DOM element of the expanded row                     |
| `name`         | string        | Identifies event as **expanded**                    |
| `cancel`       | boolean       | Prevents expansion when set to **true**             |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, ExcelExportService, Column, ICollapsingEventArgs } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, ExcelExportService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt id="ganttDefault" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"
    [editSettings]="editSettings" [toolbar]="toolbar"
      [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [height]="height"
       (expanded)="onRowExpanded($event)">
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'ExcelExport'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  public onRowExpanded(args: ICollapsingEventArgs): void {
    console.log('Expanded task:', (args.data as { TaskName?: string })?.TaskName);
  }
}

```

## expanding

The [expanding](https://ej2.syncfusion.com/react/documentation/api/gantt/#expanding) event is triggered before a row is expanded in the Gantt Chart. It enables interception of the expansion process and allows cancellation based on custom logic or conditions.

The event provides an argument of type [ICollapsingEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/iCollapsingEventArgs/) with the following properties:

| **Property** | **Type**         | **Description**                                      |
|----------------|------------------|----------------------------------------------------|
| `data`         | object        | Data object of the row being expanded              |
| `gridRow`      | HTMLElement    | DOM element of the Grid row                        |
| `chartRow`     | HTMLElement    | DOM element of the Chart row                       |
| `name`         | string         | Identifies event as **expanding**                  |
| `cancel`       | boolean        | Prevents expansion when set to **true**            |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, ExcelExportService, Column, ICollapsingEventArgs } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, ExcelExportService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt id="ganttDefault" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"
    [editSettings]="editSettings" [toolbar]="toolbar"
      [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [height]="height"
       (expanding)="onRowExpanding($event)">
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'ExcelExport'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

public onRowExpanding(args: ICollapsingEventArgs): void {
  // Prevent expansion of a specific task.
  if ((args.data?.taskData as any).TaskName === 'Project Estimation') {
    args.cancel = true;
    console.log('Expansion cancelled for:',(args.data?.taskData as any).TaskName);
  }
}
}
```

## headerCellInfo

The [headerCellInfo](https://ej2.syncfusion.com/react/documentation/api/gantt/#headercellinfo) event is triggered during the rendering of column header cells in the Gantt Chart. It allows customization of header cell appearance and content before they are displayed in the UI.

The event provides an object of type [HeaderCellInfoEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/headerCellInfoEventArgs/) with the following properties:

| **Property**   | **Type**         | **Description**                                      |
|----------------|------------------|------------------------------------------------------|
| `cell`         | HTMLElement  | Represents the header cell element being rendered.     |
| `node`         | Element      | Refers to the inner content element of the header cell, used to update text or insert icons. |
| `name`         | string       | Identifies the event as **headerCellInfo**.             |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, ExcelExportService, Column } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { Cell, HeaderCellInfoEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, ExcelExportService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt id="ganttDefault" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"
    [editSettings]="editSettings" [toolbar]="toolbar"
      [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [height]="height"
       (headerCellInfo)="headerCellInfo($event)">
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'ExcelExport'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  public headerCellInfo(args: HeaderCellInfoEventArgs): void {    
  // Here you can customize the header cell for a specific column.
  // In this example, we apply a background color to the 'TaskName' column header.
  if ((args.cell as Cell<Column>).column.field === 'TaskName') {
      if (args.node && (args.node as HTMLElement).style) {
        (args.node as HTMLElement).style.backgroundColor = 'lightblue';
      }
    }
  }
}

```

## load

The [load](https://ej2.syncfusion.com/angular/documentation/api/gantt/#load) event is triggered before the Gantt component is rendered. It allows execution of pre-rendering logic such as modifying initial settings, injecting dynamic configurations, or preparing data before the component is displayed.

```ts
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt id="ganttDefault" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [editSettings]="editSettings" [toolbar]="toolbar" [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [height]="height"
       (load)="load()">
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  
  public timelineSettings: object= {
            topTier: {
                unit: 'Week',
                format: 'MMM dd, yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            },
        };

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  public load(): void {
  // Here you can customize the Gantt configuration before it renders.
  // Example: Set default timeline tier format
  this.timelineSettings = {
      topTier: {
                format: 'dd MMM',
                unit: 'Day'
                },
      bottomTier: {
                  unit: 'Hour',
                  count:12
              }
  };
  }
}
```

## onMouseMove

The [onMouseMove](https://ej2.syncfusion.com/react/documentation/api/gantt/#onmousemove) event is triggered when the mouse moves within the Gantt Chart area. It enables tracking of cursor movement and interaction with elements under the pointer.

The event provides an argument of type [IMouseMoveEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/iMouseMoveEventArgs/) with the following properties:

| **Property**  | **Type**                 |**Description**                                       |
|-----------------|-----------------------|---------------------------------------------------------|
| `column`        | Object              | Column metadata at the cursor location.                 |
| `data`          | IGanttData          | Task or row data under the cursor.                      |
| `date`          | Date                | Timeline date corresponding to the cursor position.     |
| `eventMarkers`  | EventMarkerModel    | Event markers present at the current position.          |
| `indicator`     | IIndicator          | Indicator element such as milestone or status icon under the cursor. |
| `originalEvent` | Object              | Native mouse event object (**MouseEvent**).              |
| `predecessor`   | PredecessorTooltip  | Tooltip data for predecessor relationships, if available.|

```ts
import { BrowserModule } from '@angular/platform-browser';
import { Column, GanttModule, IMouseMoveEventArgs } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt id="ganttDefault" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [editSettings]="editSettings" [toolbar]="toolbar"
      [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [height]="height"
       (onMouseMove)="onMouseMove($event)">
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  public onMouseMove(args: IMouseMoveEventArgs): void {
    // Check if the mouse is hovering over a column and log its field name.
    if (args.column) {
      console.log('Hovered column:', (args.column as Column).field);
    }

    // Access the original mouse event to retrieve cursor position.
    // Useful for custom interactions like tooltips or overlays
    if (args.originalEvent) {
      const { clientX, clientY } = args.originalEvent as MouseEvent;
      console.log(`Mouse position: X=${clientX}, Y=${clientY}`);
    }
  }

}

```

## onTaskbarClick

The [onTaskbarClick](https://ej2.syncfusion.com/react/documentation/api/gantt/#ontaskbarclick) event is triggered when a taskbar element is clicked in the Gantt Chart. It supports custom actions based on the selected task, such as displaying task details, navigating to related views, or tracking interactions.

The event provides an argument of type [ITaskbarClickEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/iTaskbarClickEventArgs/) with the following properties:

| **Property**     | **Type**      | **Description**                                 |
|------------------|---------------|-------------------------------------------------|
| `data`           | IGanttData  | Task data associated with the clicked taskbar.  |
| `rowIndex`       | number      | Index of the row where the taskbar was clicked. |
| `target`         | Element     | DOM element where the click occurred.           |
| `taskbarElement` | HTMLElement | Taskbar element that was clicked.               |
| `name`           | string      | Name of the event (**onTaskbarClick**).         |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, ITaskbarClickEventArgs } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt id="ganttDefault" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [editSettings]="editSettings" [toolbar]="toolbar"
      [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [height]="height"
       (onTaskbarClick)="onTaskbarClick($event)">
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

public onTaskbarClick(args: ITaskbarClickEventArgs): void {
  // Access the clicked task's data
  const task = args.data;
  console.log('Clicked Task:', (task as any).TaskName);

  // Get the row index of the clicked task
  console.log('Row Index:', args.rowIndex);

  // Log the clicked taskbar element
  console.log('Taskbar Element:', args.taskbarElement);

  // Log the specific target element (e.g., label, connector)
  console.log('Clicked Element:', args.target);

  // Example: Show a custom tooltip or modal with task details
  alert(`Task "${(task as any)['TaskName']}" clicked at row ${args.rowIndex}`);
}

}

```

## pdfColumnHeaderQueryCellInfo

The [pdfColumnHeaderQueryCellInfo](https://ej2.syncfusion.com/react/documentation/api/gantt/#pdfcolumnheaderquerycellinfo) event is triggered before each column header cell is exported to a PDF document in the Gantt Chart. It enables customization of header cell content, style, and formatting during the export process.

The event provides an argument of type [PdfColumnHeaderQueryCellInfoEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfColumnHeaderQueryCellInfoEventArgs/)  with the following properties:

| **Property**   | **Type**               | **Description**                                 |
|------------------|------------------------|------------------------------------------------ |
| `cell`           | PdfTreeGridCell      | Represents the PDF cell being exported. Supports content and style updates. |
| `column`         | ColumnModel          | Provides column configuration details such as field name and header text.  |
| `headerTemplate` | ITemplateDetails     | Contains template content including text or image for the header cell. |
| `image`          | PdfImage            | Specifies an image to be rendered in the header cell.     |
| `style`          | PdfGanttCellStyle    | Defines visual styles such as font, background color, and borders. |
| `value`          | string \| Object      | Value to be displayed in the header cell. Can be customized. |
| `name`           | string               | Identifies the event as **pdfColumnHeaderQueryCellInfo**. |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { Column, GanttModule, PdfExportService } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { PdfHeaderQueryCellInfoEventArgs } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, PdfExportService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt id="ganttDefault" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [allowPdfExport]="true" [editSettings]="editSettings" [toolbar]="toolbar"  [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [height]="height"
       (pdfColumnHeaderQueryCellInfo)="pdfColumnHeaderQueryCellInfo($event)"  (toolbarClick)="toolbarClick($event)" >
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  
  public timelineSettings: object= {
            topTier: {
                unit: 'Week',
                format: 'MMM dd, yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            },
        };;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  public toolbarClick(args: ClickEventArgs): void {
      if (args.item.id === 'ganttDefault_pdfexport') {
          this.ganttObj!.pdfExport();
      }
  };
  public pdfColumnHeaderQueryCellInfo(args: PdfHeaderQueryCellInfoEventArgs): void {
    // Here you can customize the code.
    if ((args as any).column.field === "TaskName") {
      (args as any).value = "New HeaderText changed";
    }
  }
  
}
```

## pdfExportComplete

The [pdfExportComplete](https://ej2.syncfusion.com/react/documentation/api/gantt/#pdfexportcomplete) event is triggered after the Gantt Chart completes the process of exporting data to a PDF document. It enables post-export operations such as handling the generated file, displaying notifications, or logging export activity.

The event provides an `object` with the following property:

| **Property** | **Type**    | **Description**                                  |
|--------------|-------------|--------------------------------------------------|
| `name`       | string   | Identifies the event as **pdfExportComplete**    |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { Column, GanttModule, PdfExportService } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, PdfExportService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt id="ganttDefault" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [allowPdfExport]="true" [editSettings]="editSettings" [toolbar]="toolbar"  [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [height]="height"
       (pdfExportComplete)="pdfExportComplete($event)" (toolbarClick)="toolbarClick($event)" >
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  
  public timelineSettings: object= {
            topTier: {
                unit: 'Week',
                format: 'MMM dd, yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            },
        };;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  public toolbarClick(args: ClickEventArgs): void {
      if (args.item.id === 'ganttDefault_pdfexport') {
          this.ganttObj!.pdfExport();
      }
  };
  public pdfExportComplete(args: object): void {
  // This method is triggered after the PDF export is completed.
  // You can use it to log export status, show notifications, or handle the exported blob.
  console.log('PDF export completed', args);
  }
  
}
```

## pdfQueryCellInfo

The [pdfQueryCellInfo](https://ej2.syncfusion.com/react/documentation/api/gantt/#pdfquerycellinfo) event is triggered for each cell during the PDF export process in the Gantt Chart. It allows customization of individual cell content, style, and formatting in the exported PDF document.

The event provides an argument of type [PdfExportCompleteArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfQueryCellInfoEventArgs/) with the following properties:

|  **Property** | **Type**           | **Description**                                     |
|---------------|--------------------|-----------------------------------------------------|
| `data`        | object           | Task and Gantt data for the current row.            |
| `value`       | Date \| string \| number \| boolean \| PdfTextWebLink \| PdfImage  | Value displayed in the cell during PDF export. |
| `column`      | Column           | Column configuration for the current cell.          |
| `style`       | PdfGanttCellStyle| Style settings like font, color, and padding.       |
| `cell`        | PdfTreeGridCell  | PDF cell object being rendered and customized.      |
| `hyperLink`   | Hyperlink         | Hyperlink details if the cell includes a link.      |
| `image`       | Image            | Image details if the cell includes an image.        |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { Column, GanttModule, PdfExportService, PdfGanttCellStyle, PdfQueryCellInfoEventArgs } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { PdfColor} from '@syncfusion/ej2-pdf-export';


@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, PdfExportService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt id="ganttDefault" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [allowPdfExport]="true" [editSettings]="editSettings" [toolbar]="toolbar"  [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [height]="height"
       (pdfQueryCellInfo)="pdfQueryCellInfo($event)" (toolbarClick)="toolbarClick($event)" >
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  
  public timelineSettings: object= {
            topTier: {
                unit: 'Week',
                format: 'MMM dd, yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            },
        };;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  public toolbarClick(args: ClickEventArgs): void {
      if (args.item.id === 'ganttDefault_pdfexport') {
          this.ganttObj!.pdfExport();
      }
  };
public pdfQueryCellInfo(args: PdfQueryCellInfoEventArgs): void {
  // Apply custom styling for the "Progress" column.
  if ((args.column as Column).field === 'Progress' && args.style) {
    (args.style as PdfGanttCellStyle)= { backgroundColor: new PdfColor(234, 234, 234) };
  }
  console.log('PDF Cell Info:', args);
}
}

```

## pdfTaskbarInfo

The [pdfQueryTaskbarInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#pdfquerytaskbarinfo/) event is triggered for each taskbar during the PDF export process in the Gantt Chart. This event allows customization of the taskbar appearance and content in the exported PDF document.

The event provides an argument of type [PdfQueryTaskbarInfoEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfQueryTaskbarInfoEventArgs/) with the following properties:

| **Property**     | **Type**             | **Description**                                            |
|------------------  | ---------------------|----------------------------------------------------------|
| `data `            | IGanttData         | Task data for the current taskbar being exported.        |
| `indicators`       | IIndicator[]       | Indicators displayed on the taskbar during PDF export.   |
| `labelSettings`    | ILabel             | Custom content or image for taskbar labels.              |
| `taskbar`          | ITaskbarStyle      | Style settings like color, border, and progress bar.     |
| `taskbarTemplate`  | ITemplateDetails   | Template for taskbar appearance including text or image. |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { Column, GanttModule, PdfExportService, PdfQueryTaskbarInfoEventArgs } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

import { PdfColor } from '@syncfusion/ej2-pdf-export';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, PdfExportService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt id="ganttDefault" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [allowPdfExport]="true" [editSettings]="editSettings" [toolbar]="toolbar"  [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [height]="height"
       (pdfQueryTaskbarInfo)="PdfQueryTaskbarInfo($event)" (toolbarClick)="toolbarClick($event)" >
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  
  public timelineSettings: object= {
            topTier: {
                unit: 'Week',
                format: 'MMM dd, yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            },
        };;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  public toolbarClick(args: ClickEventArgs): void {
      if (args.item.id === 'ganttDefault_pdfexport') {
          this.ganttObj!.pdfExport();
      }
  };
  
public PdfQueryTaskbarInfo(args: PdfQueryTaskbarInfoEventArgs): void {
  args.taskbar.taskColor = new PdfColor(234, 234, 234);;
  args.taskbar.taskColor = new PdfColor(255, 87, 34); 
  args.taskbar.progressColor = new PdfColor(0, 188, 212);
  console.log('PDF Taskbar Info:', args);
}

}
```

## pdfQueryTimelineCellInfo

The [pdfQueryTimelineCellInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#pdfquerytimelinecellinfo) event is triggered for each timeline cell during the PDF export process in the Gantt chart. It allows customization of the appearance, content, and style of timeline cells in the exported PDF document.

The event provides an argument of type [pdfQueryTimelineCellInfoEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfQueryTimelineCellInfoEventArgs/) with the following properties:

| **Property**   | **Type**            | **Description**                                      |
|----------------|---------------------|------------------------------------------------------|
| `timelineCell` | PdfGanttCellStyle | Style settings for the timeline cell being rendered. |
| `value`        | string            | Text content displayed in the timeline cell.         |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { Column, GanttModule, PdfExportService } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, PdfExportService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt id="ganttDefault" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [allowPdfExport]="true" [editSettings]="editSettings" [toolbar]="toolbar"  [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [height]="height"
       (pdfQueryTimelineCellInfo)="pdfQueryTimelineCellInfo($event)" (toolbarClick)="toolbarClick($event)" >
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  
  public timelineSettings: object= {
            topTier: {
                unit: 'Week',
                format: 'MMM dd, yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            },
        };;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  public toolbarClick(args: ClickEventArgs): void {
      if (args.item.id === 'ganttDefault_pdfexport') {
          this.ganttObj!.pdfExport();
      }
  };
  public pdfQueryTimelineCellInfo(args: PdfQueryTimelineCellInfoEventArgs): void {
  // Logs the timeline cell information.
  console.log('Timeline Info:', args.timelineCell);
}
}

```

## queryCellInfo

The [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#querycellinfo) event is triggered for each cell while rendering the Gantt chart in the UI. It allows customization of cell content, appearance, and style before they are displayed.

The event provides an argument of type  [QueryCellInfoEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/querycellinfoeventargs/) with the following properties:

| **Property**       | **Type**         | **Description**                                   |
|--------------------|------------------|---------------------------------------------------|
| `cell`             | HTMLElement    | Represents the cell element being rendered.       |
| `column`           | Column         | Configuration object for the current column.      |
| `data`             | object         | Data object for the row associated with the cell. |
| `foreignKeyData`   | object         | Foreign key data for the cell, if applicable.     |
| `rowIndex`         | number         | Index of the row containing the cell.             |
| `colIndex`         | number         | Index of the column containing the cell.          |
| `colspan`          | number         | Number of columns the cell spans across.          |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { Column, GanttModule, PdfExportService, QueryCellInfoEventArgs } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { Cell } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, PdfExportService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt id="ganttDefault" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [allowPdfExport]="true" [editSettings]="editSettings" [toolbar]="toolbar"  [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [height]="height"
       (queryCellInfo)="queryCellInfo($event)" (toolbarClick)="toolbarClick($event)" >
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  
  public timelineSettings: object= {
            topTier: {
                unit: 'Week',
                format: 'MMM dd, yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            },
        };;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  public toolbarClick(args: ClickEventArgs): void {
      if (args.item.id === 'ganttDefault_pdfexport') {
          this.ganttObj!.pdfExport();
      }
  };
public queryCellInfo(args: QueryCellInfoEventArgs): void {
// Highlight cells in the "Progress" column with low progress
  if ((args.column as Column).field === 'Progress' && (args.data as any).Progress < 70) {
    (args.cell as any).style.backgroundColor = '#fff3cd'; // Light yellow
    (args.cell as any).style.color = '#856404'; // Dark yellow text
     (args.cell as any).title = 'Progress is below 70%';
  }
  console.log('Query Cell Info:', args);
}
}

```

## queryTaskbarInfo

The [queryTaskbarInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#querytaskbarinfo) event is triggered while rendering each taskbar in the Gantt chart. It allows customization of taskbar appearance, content, and behavior before they are displayed in the UI.

The event provides an argument of type [IQueryTaskbarInfoEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/iquerytaskbarinfoeventargs/) with the following properties:

| **Property**            | **Type**        | **Description**                                      |
|-------------------------|-----------------|------------------------------------------------------|
| `baselineColor`         | string        | Color applied to the baseline indicator.             |
| `data`                  | IGanttData    | Task data associated with the taskbar.               |
| `leftLabelColor`        | string        | Color of the left-side label.                        |
| `milestoneColor`        | string        | Color used for milestone taskbars.                   |
| `progressBarBgColor`    | string        | Background color of the progress bar.                |
| `rightLabelColor`       | string        | Color of the right-side label.                       |
| `rowElement`            | Element       | Row element containing the taskbar.                  |
| `taskLabelColor`        | string        | Color of the task label text.                        |
| `taskbarBgColor`        | string        | Background color of the taskbar.                     |
| `taskbarBorderColor`    | string       | Border color of the taskbar.                         |
| `taskbarElement`        | Element       | Defines the taskbar element.                         |
| `taskbarType`           | string        | Defines the taskbar type.                            |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { Column, GanttModule, IQueryTaskbarInfoEventArgs, PdfExportService } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { Cell } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, PdfExportService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt id="ganttDefault" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [allowPdfExport]="true" [editSettings]="editSettings" [toolbar]="toolbar"  [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [height]="height"
       (queryTaskbarInfo)="queryTaskbarInfo($event)" (toolbarClick)="toolbarClick($event)" >
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  
  public timelineSettings: object= {
            topTier: {
                unit: 'Week',
                format: 'MMM dd, yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            },
        };;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  public toolbarClick(args: ClickEventArgs): void {
      if (args.item.id === 'ganttDefault_pdfexport') {
          this.ganttObj!.pdfExport();
      }
  };
  public queryTaskbarInfo(args: IQueryTaskbarInfoEventArgs): void {
  // Log the entire event argument object for debugging
    console.log('Query Cell Info:', args);

    // Set custom background color for the progress bar
    args.progressBarBgColor = "rgba(36, 170, 197, 1)";

    // Set custom colors for the taskbar and its label
    args.taskLabelColor = "rgba(216, 6, 6, 1)";
    args.taskbarBgColor = "rgb(88, 105, 197)";        
    args.taskbarBorderColor = "rgba(79, 181, 63, 1)";      

  }
}
```

## recordDoubleClick

The [recordDoubleClick](https://ej2.syncfusion.com/react/documentation/api/gantt/#recorddoubleclick) event is triggered when a row in the Gantt Chart is double-clicked. It enables custom actions based on the selected task, such as opening detailed views, initiating inline editing, or displaying contextual information.

The event provides an argument of type [RecordDoubleClickEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/recorddoubleclickeventargs/) with the following properties:

| **Property**         | **Type**         | **Description**                                       |
|----------------------|------------------|-------------------------------------------------------|
| `cell`               | Element        | The cell element that was double-clicked.             |
| `cellIndex`          | number         | Index of the clicked cell within the row.             |
| `column`             | Column         | Column configuration for the clicked cell.            |
| `foreignKeyData`     | Object         | Foreign key data linked to the column, if applicable. |
| `name`               | string         | Name of the event (**recordDoubleClick**).            |
| `row`                | Element        | The row element that was double-clicked.              |
| `rowData`            | IGanttData     | Data object representing the selected task.           |
| `rowIndex`           | number         | Index of the row in the data source.                  |
| `target`             | Element        | DOM element that initiated the double-click.          |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { Column, GanttModule, PdfExportService, RecordDoubleClickEventArgs } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, PdfExportService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt id="ganttDefault" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [allowPdfExport]="true" [editSettings]="editSettings" [toolbar]="toolbar"  [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [height]="height"
       (recordDoubleClick)="recordDoubleClick($event)" (toolbarClick)="toolbarClick($event)" >
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  
  public timelineSettings: object= {
            topTier: {
                unit: 'Week',
                format: 'MMM dd, yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            },
        };;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  public toolbarClick(args: ClickEventArgs): void {
      if (args.item.id === 'ganttDefault_pdfexport') {
          this.ganttObj!.pdfExport();
      }
  };
  public recordDoubleClick(args: RecordDoubleClickEventArgs): void {
    // Log the data of the row that was double-clicked.
    console.log('Record Data:', args.rowData);

    // Log the index of the row that was double-clicked.
    console.log('Row Index:', args.rowIndex);

    // You can customize this method to perform actions like opening a detail view, editing the record, or showing a popup with more information.
  }

}

```

## resizeStart

The [resizeStart](https://ej2.syncfusion.com/angular/documentation/api/gantt/#resizestart) event is triggered when a column resize action begins in the Gantt chart. It allows interception of the resize process to apply validations or restrict resizing for specific columns.

The event provides an argument of type [ResizeArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/resizeArgs/) with the following properties:

| **Property** | **Type**    | **Description**                                  |
|--------------|-------------|--------------------------------------------------|
| `cancel`     | boolean   | Prevents column resizing when set to **true**.   |
| `column`     | Column    | Details of the column being resized initially.   |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { Column, GanttModule, ResizeService } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ResizeArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, ResizeService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt id="ganttDefault" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [allowResizing] = "true" [editSettings]="editSettings" [toolbar]="toolbar"  [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [height]="height"
       (resizeStart)="resizeStart($event)">
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  
  public timelineSettings: object= {
            topTier: {
                unit: 'Week',
                format: 'MMM dd, yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            },
        };;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  public resizeStart(args: ResizeArgs): void {

    // Check if the column being resized is 'TaskID'
    if (args.column?.field === "TaskID") {

      // Cancel the resize action for the 'TaskID' column
      args.cancel = true;

      // Show an alert message to inform the user
      alert("Resizing not allowed for TaskID column");
    }

  }
}

```

## resizeStop

The [resizeStop](https://ej2.syncfusion.com/angular/documentation/api/gantt/#resizestop) event is triggered when a column resize operation is completed in the Gantt chart. It enables layout updates, persistence of dimensions, or UI adjustments.

The event provides an argument of type [ResizeArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/resizeArgs/) with the following properties:

| **Property** | **Type**  | **Description**                                                  |
|--------------|-----------|------------------------------------------------------------------|
| `cancel`     | boolean | Cancels the resize operation when set to **true**.               |
| `column`     | Column  | Provides information about the resized column.                   |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { Column, GanttModule, ResizeService } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ResizeArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, ResizeService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt id="ganttDefault" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [allowResizing] = "true" [editSettings]="editSettings" [toolbar]="toolbar"  [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [height]="height"
       (resizeStop)="resizeStop($event)" >
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  
  public timelineSettings: object= {
            topTier: {
                unit: 'Week',
                format: 'MMM dd, yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            },
        };;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  public resizeStop(args: ResizeArgs): void {
    // Log the column details that was resized
    console.log('Resized Column Info:', args.column);

    // You can customize this method to track column size changes, update layout settings, or store user preferences.
  }

}
```

## resizing

The [resizing](https://ej2.syncfusion.com/angular/documentation/api/gantt/#resizing) event is triggered continuously during column resizing in the Gantt chart. It provides access to the current column width and supports dynamic updates to layout, styling, or constraints while the resize operation is in progress. This event is commonly used to enforce minimum or maximum widths, preview layout changes, or display contextual indicators during interaction.

The event provides an argument of type [ResizeArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/resizeArgs/) with the following properties:

| **Property** | **Type**    | **Description**                                  |
|--------------|-------------|--------------------------------------------------|
| `cancel`     | boolean   | Stops resizing dynamically during interaction.   |
| `column`     | Column    | Current column details during resizing process.  |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { Column, GanttModule, ResizeService } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ResizeArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, ResizeService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt id="ganttDefault" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [allowResizing] = "true" [editSettings]="editSettings" [toolbar]="toolbar"  [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [height]="height"
       (resizing)="resizing($event)" >
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  
  public timelineSettings: object= {
            topTier: {
                unit: 'Week',
                format: 'MMM dd, yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            },
        };;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  public resizing(args: ResizeArgs): void {
    // Log the column details that was resizing
    console.log('Resized Column Info:', args.column);

    // You can customize this method to track column size changes, update layout settings, or store user preferences.
  }

}
```

## rowDataBound

The [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowdatabound) event is triggered each time a row is bound to data in the Gantt chart. It enables customization of row appearance and content based on the associated task data. This event supports scenarios such as applying conditional formatting, injecting tooltips or icons, and modifying row structure to reflect task-specific context or status.

The event provides an argument of type [RowDataBoundEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/rowDataBoundEventArgs/) with the following properties:

| **Property**     | **Type**         | **Description**                                               |
|------------------|------------------|---------------------------------------------------------------|
| `data`           | IGanttData     | Task data bound to the current row.                           |
| `isSelectable`   | boolean        | Indicates if the row is selectable or not.                    |
| `row`            | Element        | Row element rendered in the Gantt Chart.                      |
| `rowHeight`      | number         | Height of the row being rendered.                             |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { Column, GanttModule, ResizeService, RowDataBoundEventArgs } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ResizeArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, ResizeService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt id="ganttDefault" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [editSettings]="editSettings" [toolbar]="toolbar"  [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [height]="height"
       (rowDataBound)="rowDataBound($event)" >
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')  
  public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  
  public timelineSettings: object= {
            topTier: {
                unit: 'Week',
                format: 'MMM dd, yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            },
        };;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  public rowDataBound(args: RowDataBoundEventArgs): void {
    // Set the row height to 45 pixels
    args.rowHeight = 45;

    // Log the row data for debugging or inspection
    console.log('Row Data Bound Event:', args);
  }

}
```

## rowDeselected

The [rowDeselected](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowdeselected) event is triggered when a previously selected row is deselected in the Gantt chart. It enables logic execution tied to selection changes, such as removing visual highlights, updating contextual UI elements, or tracking interaction patterns. This event supports scenarios involving both user-driven and programmatic deselection, ensuring consistent behavior across selection workflows.

The event provides an argument of type [RowDeselectEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/rowDeselectEventArgs/) with the following properties:

| **Property**              | **Type**                  | **Description**                              |
|---------------------------|---------------------------|----------------------------------------------|
| `data`                    | IGanttData[]            | Data for the row(s) that were deselected.    |
| `foreignKeyData`          | Object \| Object[]    | Foreign key data linked to deselected row(s).|
| `isHeaderCheckboxClicked` | boolean                 | **True** if header checkbox triggered deselection. |
| `isInteracted`            | boolean                 | **True** if deselection was triggered by interaction. |
| `row`                     | Element                 | Row element that was deselected.             |
| `rowIndex`                | number                  | Index of the deselected row.                 |
| `rowIndexes`              | number[]                | Indexes of all deselected rows.              |
| `target`                  | Element                 | Target element that triggered the deselection.|

```ts
import { BrowserModule } from '@angular/platform-browser';
import { Column, GanttModule, ResizeService, RowDeselectEventArgs } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, ResizeService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt
      id="ganttDefault"
      #ganttID
      [dataSource]="data"
      [taskFields]="taskSettings"
      [columns]="columns"
      [editSettings]="editSettings"
      [toolbar]="toolbar"
      [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate"
      [height]="height"
      (rowDeselected)="rowDeselected($event)">
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID') public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;

  public timelineSettings: object = {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      count: 1
    }
  };

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      }
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  // Triggered after a row is deselected.
  public rowDeselected(args: RowDeselectEventArgs): void {
    // Log the entire event object for debugging.
    console.log('RowDeselected event triggered. Details of the deselected row:', args);
  }
}

```

## rowDeselecting

The [rowDeselecting](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowdeselecting) event is triggered before a selected row is deselected in the Gantt chart. It enables conditional control over the deselection process, allowing validations, confirmation prompts, or logic to prevent deselection based on task state or application rules. This event supports consistent behavior across both interactive and programmatic selection workflows.

The event provides an argument of type [RowDeselectEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/rowDeselectEventArgs/) with the following properties:

| **Property**               | **Type**                | **Description** |
|----------------------------|-------------------------|------------------------------------------|
| `data`                     | IGanttData[]          | Data for the row(s) being deselected. |
| `foreignKeyData`           | Object\| Object[]  | Foreign key data linked to deselected row(s). |
| `isHeaderCheckboxClicked`  | boolean               | **True** if header checkbox triggered deselection. |
| `isInteracted`            | boolean                | **True** if deselection was triggered by interaction.|
| `row`                     | Element                | Row element being deselected.         |
| `rowIndex`                | number                 | Index of the row being deselected.    |
| `rowIndexes`              | number[]               | Indexes of all rows being deselected. |
| `target`                  | Element                | Target element that triggered the deselection.|

```ts
import { BrowserModule } from '@angular/platform-browser';
import { Column, GanttModule, ResizeService, RowDeselectEventArgs } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, ResizeService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt
      id="ganttDefault"
      #ganttID
      [dataSource]="data"
      [taskFields]="taskSettings"
      [columns]="columns"
      [editSettings]="editSettings"
      [toolbar]="toolbar"
      [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate"
      [height]="height"
      (rowDeselecting)="rowDeselecting($event)">
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID') public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;

  public timelineSettings: object = {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      count: 1
    }
  };

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      }
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  // Triggered before a row is deselected.
  public rowDeselecting(args: RowDeselectEventArgs): void {
    // Log the entire event object for debugging.
    console.log('rowDeselecting event triggered. Details of the Deselecting row:', args);
  }
}


```

## rowDrag

The [rowDrag](https://ej2.syncfusion.com/react/documentation/api/gantt/#rowdrag) event is triggered while a row is being dragged in the Gantt Chart. It allows customization during drag operations, such as showing visual indicators, applying drag constraints, or tracking drag operations.

The event provides an argument of type [RowDragEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/rowDropEventArgs/) with the following properties:

| **Property**     | **Type**        | **Description**                                      |
|------------------|-----------------|------------------------------------------------------|
| `data`           | Object[]      | Data for the selected rows being dragged.            |
| `dropIndex`      | number        | Index of the target row where the drop is intended.  |
| `fromIndex`      | number        | Original index of the dragged row.                   |
| `originalEvent`  | object        | Mouse event associated with the drag action.         |
| `rows`           | Element[]     | DOM elements of the selected rows.                   |
| `target`         | Element       | Target element where the drag started.               |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  GanttComponent,
  EditService,
  ToolbarService,
  SelectionService,
  RowDDService,
  GanttModule,
  Column
} from '@syncfusion/ej2-angular-gantt';
import { RowDragEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, RowDDService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt
      id="ganttDefault"
      #ganttID
      [dataSource]="data"
      [taskFields]="taskSettings"
      [columns]="columns"
      [editSettings]="editSettings"
      [toolbar]="toolbar"
      [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate"
      [height]="height"
      [allowRowDragAndDrop]="true"
      (rowDrag)="rowDrag($event)"
      (rowDragStart)="rowDragStart($event)">
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID') public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;

  public timelineSettings: object = {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      count: 1
    }
  };

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      }
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  // Triggered when a row is being dragged.
  public rowDrag(args: RowDragEventArgs): void {
    // Log the entire event object for inspection.
    console.log('Row Drag Event:', args);

    // Show the target element where the row is being dragged.
    console.log('Target Element:', args.target);

    // Show the row element being dragged.
    console.log('Row Element:', args.rows);
  }
}

```

## rowDragStart

The [rowDragStart](https://ej2.syncfusion.com/react/documentation/api/gantt/#rowdragstart) event is triggered when a row drag operation begins in the Gantt Chart. It allows handling of drag initiation, such as applying movement restrictions, customizing visuals, or initiating tracking mechanisms.

The event provides an argument of type [RowDragEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/rowDropEventArgs/) with the following properties:

| **Property**     | **Type**        | **Description**                            |
|------------------|-----------------|--------------------------------------------|
| `data`           | Object[]      | Selected rows data .                       |
| `dropIndex`      | number        | Target index for dropping the dragged row. |
| `fromIndex`      | number        | Original index of the dragged row.         |
| `originalEvent`  | object        | Native mouse event that started the drag.  |
| `rows`           | Element[]     | DOM elements of the dragged rows.          |
| `target`         | Element       |  Element where the drag was initiated.     |

```ts
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService, RowDDService } from '@syncfusion/ej2-angular-gantt';
import { RowDragEventArgs } from '@syncfusion/ej2-angular-grids';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, RowDDService],
  template: `
    <ejs-gantt
      #ganttID
      id="ganttDefault"
      height="550px"
      [dataSource]="data"
      [taskFields]="taskSettings"
      [columns]="columns"
      [editSettings]="editSettings"
      [toolbar]="toolbar"
      [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate"
      (rowDragStart)="rowDragStart($event)"
    ></ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @ViewChild('ganttID', { static: true }) public ganttObj?: GanttComponent;

  public data: object[] = [];
  public taskSettings: object = {};
  public columns: object[] = [];
  public toolbar: string[] = [];
  public editSettings: object = {};
  public projectStartDate?: Date;
  public projectEndDate?: Date;

  public timelineSettings: object = {
    topTier: { unit: 'Week', format: 'MMM dd, yyyy' },
    bottomTier: { unit: 'Day', format: 'dd' }
  };

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      }
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  public rowDragStart(args: RowDragEventArgs): void {
    console.log("Dragged row index:", args.fromIndex);
    console.log("Dragged row data:", args.data);
    console.log("Dragged row element:", (args as any).rows[0]);
    console.log("Target cell:", args.target);

    // Highlight the dragged row.
    (args as any).rows[0].style.backgroundColor = "#ffeeba";
  }
}

```

## rowDragStartHelper

The [rowDragStartHelper](https://ej2.syncfusion.com/react/documentation/api/gantt/#rowdragstarthelper) event is triggered before a row drag operation begins in the Gantt Chart. It allows handling of drag eligibility checks, such as validating conditions, modifying behavior, or canceling the drag action.

The event provides an argument of type [RowDragEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/rowDropEventArgs/) with the following properties:

| **Property**       | **Type**    | **Description**                                  |
|------------------|---------------|--------------------------------------------------|
| `data`           | Object[]    | Selected rows data objects.                      |
| `dropIndex`      | number      | Target index for potential drop.                 |
| `fromIndex`      | number      | Original index of the row being dragged.         |
| `originalEvent`  | object     | Native mouse event that initiated the drag.      |
| `rows`           | Element[]   | DOM elements of the selected rows.               |
| `target`         | Element     | Element where the drag was initiated.            |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { Column, GanttModule, RowDDService } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { RowDragEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, RowDDService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt
      id="ganttDefault"
      #ganttID
      height="450px"
      [dataSource]="data"
      [taskFields]="taskSettings"
      [columns]="columns"
      [editSettings]="editSettings"
      [toolbar]="toolbar"
      [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate"
      (rowDragStartHelper)="rowDragStartHelper($event)"
    ></ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID', { static: true }) public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;

  public timelineSettings: object = {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  };

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      }
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  // Triggered before row drag starts;
  public rowDragStartHelper(args: RowDragEventArgs): void {
    const draggedData = args.data as any;
    if (draggedData?.TaskID === 3) {
      args.cancel = true;
      console.log('Drag cancelled for TaskID 3');
    }
  }
}

```

## rowDrop

The [rowDrop](https://ej2.syncfusion.com/react/documentation/api/gantt/#rowdrop) event is triggered after a row is dropped into a new position in the Gantt Chart. It allows handling of row reordering, such as updating data, validating hierarchy changes, or tracking user actions.

The event provides an argument of type [RowDragEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/rowDropEventArgs/) with the following properties:

| **Property**      | **Type**       | **Description**                                     |
|-------------------|------------------|---------------------------------------------------|
| `data`            | Object[]       | Selected rows data objects.                       |
| `dropIndex`       | number         | Target index for the dropped row.                 |
| `dropPosition`    | string         | Position relative to the target row.              |
| `dropRecord`      | IGanttData     | Dropped record after reordering.                  |
| `fromIndex`       | number         | Original index of the dragged row.                |
| `modifiedRecords` | IGanttData[]   | Records updated after the drop.                   |
| `originalEvent`   | object         | Native mouse event that completed the drag.       |
| `requestType`     | string        | Type of request triggered by the drop.            |
| `rows`            | Element[]      | DOM elements of the dragged rows.                 |
| `target`          | Element        | Element where the drag was initiated.             |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, RowDDService, RowDropEventArgs } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService, RowDDService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt
      id="ganttDefault"
      #ganttID
      height="450px"
      [dataSource]="data"
      [taskFields]="taskSettings"
      [columns]="columns"
      [editSettings]="editSettings"
      [toolbar]="toolbar"
      [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate"
      (rowDrop)="rowDrop($event)"
    ></ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID', { static: true }) public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;

  public timelineSettings: object = {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  };

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      }
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  // Triggered when a row is dropped after drag-and-drop.
  public rowDrop(args: RowDropEventArgs): void {
    const draggedData = args.data as any[];
    if (draggedData.some(task => task.TaskID === 2)) {
      args.cancel = true;
      console.log('Drop cancelled for TaskID 2');
    } else {
      console.log('Row dropped:', draggedData);
    }
  }
}

```

## rowSelected

The [rowSelected](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowselected) event is triggered after a row has been selected in the Gantt chart. It enables actions that respond to selection changes, such as styling the row, displaying related details, or tracking user interaction.

The event provides an argument of type [RowSelectEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/rowselecteventargs/) with the following properties:

| **Property**              | **Type**                  |  **Description**                            |
|---------------------------|---------------------------|---------------------------------------------|
| `data`                    | IGanttData              | Data for the selected row.                  |
| `foreignKeyData`          | Object \| Object[]    | Foreign key data linked to selected row.    | 
| `isHeaderCheckboxClicked`| boolean                  | **True** if header checkbox triggered selection.|
| `isInteracted`            | boolean                 | **True** if selection was triggered by  interaction.|
| `previousRow`             | Element                 | Previously selected row element.             |
| `previousRowIndex`        | number                  | Index of the previously selected row.        |
| `row`                     | Element \| Element[]  | Currently selected row element(s).           | 
| `rowIndex`                | number                  | Index of the selected row.                   |
| `rowIndexes`              | number[]                | Indexes of all selected rows.                |
| `target`                  | Element                 | Target element that triggered the selection. |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, RowSelectEventArgs } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService],
  selector: 'app-root',
  template: `
    <ejs-gantt
      id="ganttDefault"
      #ganttID
      height="450px"
      [dataSource]="data"
      [taskFields]="taskSettings"
      [columns]="columns"
      [editSettings]="editSettings"
      [toolbar]="toolbar"
      [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate"
      (rowSelected)="rowSelected($event)"
    ></ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @ViewChild('ganttID', { static: true }) public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;

  public timelineSettings: object = {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  };

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      }
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  // Triggered after a row is selected.
  public rowSelected(args: RowSelectEventArgs): void {
    console.log('Row selected:', args);

    // Reset background color for all rows
    args.rows.forEach(row => {
      (row as HTMLElement).style.backgroundColor = '';
    });

    // Highlight the selected row
    if (args.row) {
      (args.row as HTMLElement).style.backgroundColor = '#d1ecf1';
    }
  }
}

```

## rowSelecting

The [rowSelecting](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowselecting) event is triggered before a row is selected in the Gantt Chart. It enables actions that intercept the selection process, such as validating conditions, prompting confirmation, or canceling the selection.

The event provides an argument of type [RowSelectingEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/rowselecteventargs/) with the following properties:

| **Property**              | **Type**                  | **Description**                              |
|---------------------------|---------------------------|----------------------------------------------|
| `cancel`                  | boolean                 | Prevents row selection when set to **true**. |
| `data`                    | IGanttData              | Data for the row being selected.             |
| `foreignKeyData`          | Object \| Object[]    | Foreign key data linked to selected row.     |
| `isCtrlPressed`           | boolean                 | **True** if CTRL key was pressed during selection. |
| `isHeaderCheckboxClicked` | boolean                 | **True** if header checkbox triggered selection. |
| `isInteracted`            | boolean                 | **True** if selection was triggered by interaction.|
| `isShiftPressed`          | boolean                 | **True** if SHIFT key was pressed during selection.|
| `previousRow`             | Element                 | Previously selected row element.             |
| `previousRowIndex`        | number                  | Index of the previously selected row.        |
| `row`                     | Element \| Element[]  | Row element(s) being selected or deselected. |
| `rowIndex`                | number                 | Index of the row being selected.             |
| `rowIndexes`              | number[]                | Indexes of all rows being selected.          |
| `target`                  | Element                 | Target element that triggered the selection. |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, RowSelectingEventArgs } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt
      id="ganttDefault"
      #ganttID
      height="450px"
      [dataSource]="data"
      [taskFields]="taskSettings"
      [columns]="columns"
      [editSettings]="editSettings"
      [toolbar]="toolbar"
      [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate"
      (rowSelecting)="rowSelecting($event)"
    ></ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID', { static: true }) public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;

  public timelineSettings: object = {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  };

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      }
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  // Triggered before a row is selected.
  public rowSelecting(args: RowSelectingEventArgs): void {
    const task = args.data as any;

    // Cancel selection if TaskID is 3
    if (task?.TaskID === 3) {
      args.cancel = true;
      console.log('Selection cancelled for TaskID 3');
    }
  }
}

```

## splitterResizeStart

The [splitterResizeStart](https://ej2.syncfusion.com/react/documentation/api/gantt/#splitterresizestart) event is triggered when the splitter bar begins resizing in the Gantt Chart layout.It enables actions that respond to resize initiation, such as applying layout constraints, customizing visuals, or tracking user interaction.

The event provides an argument of type [ResizeArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/resizeArgs/) with the following properties:

| **Property**     | **Type**               | **Description**                          |
|------------------|------------------------|------------------------------------------|
| `cancel`         | boolean              | Defines whether the event is cancelable. |
| `column`         | Column               | Defines the resizing column details.     |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { ResizeArgs } from '@syncfusion/ej2-angular-grids';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt
      id="ganttDefault"
      #ganttID
      height="450px"
      [dataSource]="data"
      [taskFields]="taskSettings"
      [columns]="columns"
      [editSettings]="editSettings"
      [toolbar]="toolbar"
      [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate"
      [height]="height"
      (splitterResizeStart)="splitterResizeStart($event)"
    ></ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID', { static: true }) public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;

  public timelineSettings: object = {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  };

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      }
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  // Triggered when splitter resizing starts.
  public splitterResizeStart(args: ResizeArgs): void {
    console.log('Splitter resize started:', args);

    // Prevent resizing if screen width is less than 768 pixels.
    if (window.innerWidth < 768) {
      args.cancel = true;
      console.log('Resize cancelled due to small screen width');
    }
  }
}
```

## splitterResized

The [splitterResized](https://ej2.syncfusion.com/react/documentation/api/gantt/#splitterresized) event is triggered after the splitter bar has been resized in the Gantt Chart layout. It enables actions that respond to final layout changes, such as saving pane dimensions, updating related components, or tracking user interaction.

The event provides an argument of type [ISplitterResizedEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/isplitterresizedeventargs/) with the following properties:

| **Property**   | **Type**               | **Description**                              |
|----------------|------------------------|----------------------------------------------|
| `cancel`       | boolean              | Indicates if the event is cancelable.        |
| `element`      | HTMLElement          | Splitter container element.                  |
| `event`        | Event                | Event that triggered the resize.             |
| `index`        | number[]             | Indexes of resized panes.                    |
| `pane`         | HTMLElement[]        | Pane elements involved in resizing.          |
| `paneSize`     | number[]             | Final sizes of the resized panes.            |
| `separator`    | HTMLElement          | Splitter bar element that was resized.       |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, ISplitterResizedEventArgs } from '@syncfusion/ej2-angular-gantt';
import { ResizeEventArgs } from '@syncfusion/ej2-layouts';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt
      id="ganttDefault"
      #ganttID
      height="450px"
      [dataSource]="data"
      [taskFields]="taskSettings"
      [columns]="columns"
      [editSettings]="editSettings"
      [toolbar]="toolbar"
      [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate"
      [height]="height"
      (splitterResized)="splitterResized($event)"
    ></ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID', { static: true }) public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;

  public timelineSettings: object = {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  };

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      }
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' }
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  // Triggered after the splitter has been resized.
  public splitterResized(args: ISplitterResizedEventArgs): void {
    const leftPaneSize = (args as any).paneSize[0];
    const rightPaneSize = (args as any).paneSize[1];

    // Save pane sizes to local storage
    localStorage.setItem('ganttLeftPaneWidth', leftPaneSize.toString());
    localStorage.setItem('ganttRightPaneWidth', rightPaneSize.toString());

    console.log('Splitter resized:', leftPaneSize, rightPaneSize);
  }
}

```

## splitterResizing

The [splitterResizing](https://ej2.syncfusion.com/react/documentation/api/gantt/#splitterresizing) event is triggered continuously while the splitter bar is being dragged in the Gantt Chart layout. It enables responsive actions during resizing, such as enforcing layout constraints, updating visual elements, or tracking user interaction.

The event provides an argument of type `ResizingEventArgs` with the following properties:

| **Property**   | **Type**         | **Description**                              |
|----------------|------------------|----------------------------------------------|
| `name`         | string         | Event name: **splitterResizing**.            |
| `element`      | HTMLElement    | Splitter container element.                  |
| `event`        | MouseEvent     | Mouse event triggering the resize.           |
| `index`        | number[]       | Indexes of panes being resized.              |
| `pane`         | HTMLElement[]  | Pane elements involved in resizing.          |
| `paneSize`     | number[]       | Current sizes of the panes.                  |
| `separator`    | HTMLElement    | Splitter bar element being dragged.          |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';

import { ResizeEventArgs, ResizingEventArgs } from '@syncfusion/ej2-layouts';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt id="ganttDefault" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [editSettings]="editSettings" [toolbar]="toolbar"  [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [height]="height"
       (splitterResizing)="splitterResizing($event)" >
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')
  public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  
  public timelineSettings: object= {
            topTier: {
                unit: 'Week',
                format: 'MMM dd, yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            },
        };;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' },
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  splitterResizing(args: ResizingEventArgs): void {
  // Change separator color when splitter resizing.
  const separator = args.separator;
    (separator as HTMLElement).style.backgroundColor = '#4CAF50';
  }

}

```

## taskbarEdited

The [taskbarEdited](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskbaredited) event is triggered after a taskbar is modified in the Gantt Chart. It enables actions that respond to task updates, such as saving changes, validating edits, or updating related components.

The event provides an argument of type [TaskbarEditedEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/itaskbareditedeventargs/) with the following properties:

| **Property**          | **Type**         | **Description**                              |
|-----------------------|------------------|----------------------------------------------|
| `action`              | string         | Type of taskbar edit action.                 |
| `cancel`              | boolean        | Indicates if the event is cancelable.        |
| `data`                | IGanttData     | Data of the edited task.                     |
| `editingFields`       | ITaskData      | Fields being edited in the task.             |
| `previousData`        | ITaskData      | Task data before the edit.                   |
| `recordIndex`         | number         | Index of the edited task.                    |
| `roundOffDuration`    | boolean        | Indicates if duration is rounded off.        |
| `segmentIndex`        | number         | Index of the edited segment.                 |
| `target`              | Element        | Target element of the edit.                  |
| `taskBarEditAction`   | string         | Type of taskbar edit performed.              |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, ITaskbarEditedEventArgs } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt id="ganttDefault" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [editSettings]="editSettings" [toolbar]="toolbar"  [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [height]="height"
       (taskbarEdited)="taskbarEdited($event)" >
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')
  public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  
  public timelineSettings: object= {
            topTier: {
                unit: 'Week',
                format: 'MMM dd, yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            },
        };;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' },
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

  taskbarEdited(args: ITaskbarEditedEventArgs): void {
    // Extract the edited task data.
    const editedTask = args.data;

    // Identify the type of taskbar edit action performed.
    const actionType = args.taskBarEditAction;

    // Retrieve the previous state of the task before editing.
    const previous = args.previousData;

    // Log the event to the console for debugging or tracking.
    console.log('Taskbar Edited!');
    console.log('Action Type:', actionType);
    console.log('Edited Task:', editedTask);
    console.log('Previous Task Data:', previous);

    // Show a confirmation alert to the user with task name and action type.
    alert(`Task "${(editedTask as any).TaskName}" was updated via ${actionType}.`);
  }
}

```

## taskbarEditing

The [taskbarEditing](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskbarediting) event is triggered while a taskbar is being dragged or resized in the Gantt chart. It enables actions that respond to live taskbar edits, such as enforcing constraints, updating tooltips, or canceling the edit based on conditions.

The event provides an argument of type [ITaskbarEditedEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/iTaskbarEditedEventArgs/) with the following properties:

| **Property**          | **Type**         | **Description**                              |
|-----------------------|------------------|----------------------------------------------|
| `action`              | string         | Type of taskbar edit in progress.            |
| `cancel`              | boolean        | Set **true** to cancel the edit.             |
| `data`                | IGanttData     | Data of the task being edited.               |
| `editingFields`       | ITaskData      | Fields currently being modified.             |
| `previousData`        | ITaskData      | Task data before the edit.                   |
| `recordIndex`         | number         | Index of the task being edited.              |
| `roundOffDuration`    | boolean        | Indicates if duration should be rounded.     |
| `segmentIndex`        | number         | Index of the segment being edited.           |
| `target`              | Element        | Target element involved in the edit.         |
| `taskBarEditAction`   | string         | Specific type of taskbar edit action.        |

```ts
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, ITaskbarEditedEventArgs } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt id="ganttDefault" #ganttID height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [editSettings]="editSettings" [toolbar]="toolbar"  [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [height]="height"
       (taskbarEditing)="taskbarEditing($event)" >
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('ganttID')
  public ganttObj?: GanttComponent;

  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public toolbar?: string[];
  public editSettings?: object;
  public height?: string;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  
  public timelineSettings: object= {
            topTier: {
                unit: 'Week',
                format: 'MMM dd, yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            },
        };;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' },
    ];

    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };

    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    this.height = '550px';
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('05/30/2024');
  }

taskbarEditing(args: ITaskbarEditedEventArgs): void {
  const editedTask = args.data;
  const actionType = args.taskBarEditAction;
  const newDuration = (editedTask as any).Duration;

  console.log('Editing in progress...');
  console.log('Action Type:', actionType);
  console.log('New Duration:', newDuration);

  // Example validation: prevent duration less than 2 or more than 5
  if (newDuration < 2 || newDuration > 5) {
    args.cancel = true;
    console.log(`Editing cancelled. Duration must be between 2 and 5 days.`);
  }
}
}

```

## toolbarClick

The [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/gantt/#toolbarclick) event is triggered when any toolbar item is clicked in the Gantt chart. It enables actions that respond to toolbar interactions, such as overriding default behavior, confirming actions, or triggering external workflows.

The event provides an argument of type [ClickEventArgs](https://ej2.syncfusion.com/angular/documentation/api/toolbar/clickEventArgs/) with the following properties:

| **Property**     | **Type**           | **Description**               |
|--------------------|------------------|-------------------------------|
| `name`             | string         | Specifies name of the event   |
| `item`             | object         | Clicked toolbar item info     |
| `originalEvent`    | PointerEvent   | Native DOM event              |
| `cancel`           | boolean        | Cancel default action         |

```ts
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { EditService, SelectionService, ToolbarService } from '@syncfusion/ej2-angular-gantt'

import { ClickEventArgs } from '@syncfusion/ej2-navigations';

import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { ToolbarItem, EditSettingsModel } from '@syncfusion/ej2-angular-gantt';

@Component({
imports: [
         GanttModule
    ],

providers: [EditService, SelectionService, ToolbarService],
standalone: true,
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [editSettings]="editSettings" [toolbar]="toolbar"  (toolbarClick)="toolbarClick($event)"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    public data?: object[];
    public taskSettings?: object;
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItem[];
    public ngOnInit(): void {
        this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
        ]
      },
    ];
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        };
        this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        };
        this.toolbar =  ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ExpandAll', 'CollapseAll','PrevTimeSpan','NextTimeSpan','Indent','Outdent'];
    }
    toolbarClick(args: ClickEventArgs): void {
      if (args.item.id === "ganttDefault_delete") {
        const confirmDelete = confirm('Are you sure you want to delete this task?');
        if (!confirmDelete) {
          args.cancel = true;
        }
      }
      console.log('Toolbar item clicked:', args.item.text);
    }

}
```