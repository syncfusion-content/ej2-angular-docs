---
layout: post
title: Events in Angular Gantt component | Syncfusion
description: Checkout and learn here all about Events in in Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Gantt Events
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Events in Angular Gantt Component

The Syncfusion Angular Gantt Chart component offers comprehensive support for visualizing project schedules, task management, and timeline tracking through interactive charts. This documentation provides insights into leveraging the component's rich event-driven architecture to customize and control Gantt operations effectively. Events in the Gantt chart enable you to execute custom logic and integrations, offering flexibility for both simple and complex scenarios.

## actionBegin

The [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/gantt/#actionbegin) event triggers before the Gantt component processes actions like editing, adding, deleting, sorting, filtering, dependency changes, and zoom. The argument type and structure depend on the triggered operation. Each argument type provides specific properties to help you inspect and modify the action.

Below are detailed descriptions of each argument type's properties, and their purposes.

**ITimeSpanEventArgs (Taskbar editing)**

| **Property**           | **Type**   | **Description** |
|------------------------|------------|-----------------|
| `cancel`              | `boolean`  | Set to **true** to cancel the current action before it is processed. |
| `isTimelineRoundOff`  | `boolean`  | Indicates whether timeline rounding is applied during taskbar editing. |
| `projectStartDate`    | `Date`     | Start date of the overall project. Useful for validating task boundaries. |
| `projectEndDate`      | `Date`     | End date of the overall project. Useful for validating task boundaries. |
| `requestType`         | `string`   | Describes the type of request. For taskbar editing, values include **taskbarEditing**. |

**ITaskAddedEventArgs (Adding/Editing/Deleting tasks)**

| **Property**        | **Type**     | **Description** |
|---------------------|--------------|-----------------|
| `action`            | `string`     | Specifies the type of action, such as **beforeAdd** or **beforeDelete**. |
| `cancel`            | `boolean`    | Set to **true** to cancel the current action. |
| `data`              | `object`     | Contains the original task data before modification. |
| `modifiedRecords`   | `object[]`   | Array of records that were modified during the action. |
| `modifiedTaskData`  | `object[]`   | Array of task data after modification. |
| `newTaskData`       | `object`     | Data of the newly added task (if applicable). |
| `recordIndex`       | `number`     | Index of the record being modified or added. |
| `requestType`       | `string`     | Describes the type of request, such as **beforeSave**, **beforeDelete**. |
| `rowPosition`       | `string`     | Indicates the position where the new row is added. Possible values: **Top**, **Bottom**, **Above**, **Below**. |

**FilterEventArgs (Filtering)**

| **Property**             | **Type**     | **Description** |
|--------------------------|--------------|-----------------|
| `cancel`                 | `boolean`    | Set to **true** to cancel the filtering action. |
| `columns`                | `object[]`   | Array of columns involved in filtering. |
| `currentFilterObject`    | `object`     | Filter object representing the current filter condition. |
| `currentFilteringColumn` | `string`     | Name of the column currently being filtered. |
| `requestType`            | `string`     | Describes the type of request, typically **filtering**. |
| `type`                   | `string`     | Event type identifier. |

**SortEventArgs (Sorting)**

| **Property**     | **Type**   | **Description** |
|------------------|------------|-----------------|
| `cancel`         | `boolean`  | Set to **true** to cancel the sorting action. |
| `columnName`     | `string`   | Name of the column being sorted. |
| `direction`      | `string`   | Sort direction: **Ascending** or **Descending**. |
| `requestType`    | `string`   | Describes the type of request, typically **sorting**. |
| `type`           | `string`   | Event type identifier. |

**IDependencyEventArgs (Dependency editing)**

| **Property**              | **Type**   | **Description** |
|---------------------------|------------|-----------------|
| `fromItem`                | `object`   | Source task object in the dependency link. |
| `isValidLink`             | `boolean`  | Indicates whether the new dependency link is valid. |
| `newPredecessorString`    | `string`   | New predecessor string after editing. |
| `predecessor`             | `string`   | Original predecessor string before editing. |
| `requestType`             | `string`   | Describes the type of request, typically **validateDependency** or **updateDependency**. |
| `toItem`                  | `object`   | Target task object in the dependency link. |

**ZoomEventArgs (Zooming)**

| **Property**     | **Type**   | **Description** |
|------------------|------------|-----------------|
| `cancel`         | `boolean`  | Set to **true** to cancel the zoom action. |
| `name`           | `string`   |  Describes the name for the event. |
| `requestType`    | `string`   | Describes the type of request, typically **zooming**. |
| `timeline`       | `object`   | Timeline settings after zoom is applied. |

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

    public actionBegin(args: ITimeSpanEventArgs | ITaskAddedEventArgs | IDependencyEventArgs | ZoomEventArgs | FilterEventArgs | SortEventArgs): void {
      if (args.requestType === 'beforeSave') 
      {
        console.log('Action: Before save');
      } 
      else if (args.requestType === 'filtering') {
        console.log('Action: Filtering');
      } 
      else if (args.requestType === 'sorting') {
        console.log('Action: Sorting');
      } 
      else if ( args.requestType === 'beforeZoomIn' || args.requestType === 'beforeZoomOut') {
        console.log('Action: Zooming');
      }
    }
}

```

## actionComplete

The [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/gantt/#actioncomplete) event is triggered after the Gantt component successfully completes an operation such as editing, adding, deleting, sorting, filtering, or zooming. It provides detailed contextual information about the completed action through the [actionCompleteArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/actionCompleteArgs/) argument. The structure of this argument varies depending on the type of operation performed, and includes specific properties that allow you to inspect the outcome and implement custom logic based on the completed action. Below are detailed descriptions of each argument type's properties, and their purposes.

**FilterEventArgs (Filtering)**

| **Property**             | **Type**     | **Description** |
|--------------------------|--------------|-----------------|
| `cancel`                 | `boolean`    | Set to **true** to cancel the filtering action. |
| `columns`                | `object[]`   | Array of columns involved in filtering. |
| `currentFilterObject`    | `object`     | Filter object representing the current filter condition. |
| `currentFilteringColumn` | `string`     | Name of the column currently being filtered. |
| `requestType`            | `string`     | Describes the type of request like **filtering**, **filterAfterOpen**. |
| `type`                   | `string`     | Event type identifier. |

**SortEventArgs (Sorting)**

| **Property**     | **Type**   | **Description** |
|------------------|------------|-----------------|
| `cancel`         | `boolean`  | Set to **true** to cancel the sorting action. |
| `columnName`     | `string`   | Name of the column being sorted. |
| `direction`      | `string`   | Sort direction: **Ascending** or **Descending**. |
| `requestType`    | `string`   | Describes the type of request, typically **sorting**. |
| `type`           | `string`   | Event type identifier. |

**ITaskAddedEventArgs (Adding/Editing/Deleting tasks)**

| **Property**        | **Type**     | **Description** |
|---------------------|--------------|-----------------|
| `action`            | `string`     | Specifies the type of action, such as **add** or **delete**. |
| `cancel`            | `boolean`    | Set to **true** to cancel the current action. |
| `data`              | `object`     | Contains the original task data before modification. |
| `modifiedRecords`   | `object[]`   | Array of records that were modified during the action. |
| `modifiedTaskData`  | `object[]`   | Array of task data after modification. |
| `newTaskData`       | `object`     | Data of the newly added task (if applicable). |
| `recordIndex`       | `number`     | Index of the record being modified or added. |
| `requestType`       | `string`     | Describes the type of request, such as **beforeSave**, **beforeDelete**. |
| `rowPosition`       | `string`     | Indicates the position where the new row is added. Possible values: **Top**, **Bottom**, **Above**, **Below**. |

**ZoomEventArgs (Zooming)**

| **Property**     | **Type**   | **Description** |
|------------------|------------|-----------------|
| `cancel`         | `boolean`  | Set to **true** to cancel the zoom action. |
| `name`           | `string`   |  Describes the name for the event. |
| `requestType`    | `string`   | Describes the type of request, typically **zooming**. |
| `timeline`       | `object`   | Timeline settings after zoom is applied. |

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
        switch (args.requestType) {
            case 'filtering':
            const filterArgs = args as FilterEventArgs;
            console.log('Filtering applied on column:', filterArgs.currentFilteringColumn);
            console.log('Filter condition:', filterArgs.currentFilterObject);
            break;

            case 'sorting':
            const sortArgs = args as SortEventArgs;
            console.log(`Sorted column: ${sortArgs.columnName}`);
            console.log(`Sort direction: ${sortArgs.direction}`);
            break;

            case 'save':
            const taskArgs = args as ITaskAddedEventArgs;
            console.log('Task saved:', taskArgs.modifiedTaskData);
            console.log('Original data:', taskArgs.data);
            break;

            case 'delete':
            const deleteArgs = args as ITaskAddedEventArgs;
            console.log('Deleted records:', deleteArgs.modifiedRecords);
            break;

            case 'AfterZoomIn':
            case 'AfterZoomOut':
            case 'AfterZoomToProject':
            const zoomArgs = args as ZoomEventArgs;
            console.log('Zoom action:', zoomArgs.requestType);
            console.log('Updated timeline settings:', zoomArgs.timeline);
            break;

            default:
            console.log('other action:', args.requestType);
            break;
        }
    }
}
```

## actionFailure

The [actionFailure](https://ej2.syncfusion.com/angular/documentation/api/gantt/#actionfailure) event is triggered when an operation in the Gantt encounters an error due to configuration issues, invalid data, or missing modules. It returns a [FailureEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/failureEventArgs/#failureeventargs/) object containing detailed information about the failure.

This event is useful for:

- Logging error details for diagnostics.
- Identifying issues such as incorrect task field mappings or broken data sources.
- Displaying feedback through alerts, toast notifications, or dialogs.

**FailureEventArgs**

| **Property**     | **Type**   | **Description** |
|------------------|------------|-----------------|
| `error`         | `Error`   |Defines the error information. |

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

The `beforeExcelExport` event provides an argument of type `Object` with these properties:

| **Property** | **Type**   | **Description** |
|--------------|------------|-------------------------------------------------------------------|
| `cancel`     | `boolean`  | Set to **true** to cancel the export.                               | 
| `isCsv`      | `boolean`  | Indicates if the export is CSV (**true**) or Excel (**false**).       | 
| `name`       | `string`   | Event name, typically **beforeExcelExport**.                      | 

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

The `beforePdfExport` event provides an argument of type `Object` with these properties:

| **Property**   | **Type**   | **Description**                                                  |
|----------------|------------|------------------------------------------------------------------|
| `cancel`       | `boolean`  | Set to **true** to cancel the PDF export.                          |
| `ganttObject`  | `Object`   | Reference to the Gantt component instance.                       |
| `name`         | `string`   | Event name, typically **beforePdfExport**.                       |
| `requestType`  | `string`   | Type of request, typically **beforePdfExport**.                  |

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

The `beforeTooltipRender` event provides an argument of type `BeforeTooltipRenderEventArgs` with these properties:

| **Property** | **Type**   | **Description**                                                   |
|--------------|------------|-------------------------------------------------------------------|
| `args`       | `Object`   | Contains additional context about the tooltip (e.g., target element). |
| `content`    | `string`   | The HTML or text content of the tooltip before rendering.         |
| `cancel`     | `boolean`  | Set to **true** to prevent the tooltip from appearing.              |
| `data`       | `Object`   | Data of the Gantt element (e.g., task data for taskbar tooltips). |

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

The [cellDeselected](https://ej2.syncfusion.com/angular/documentation/api/gantt/#celldeselected) event fires when a selected cell in the Gantt is deselected in these cases:
- Clicking outside a selected cell.
- Selecting a different cell or row.
- Programmatically clearing the selection using Gantt methods.

Use this event to:
- Validate cell data after deselection (e.g., ensure valid task values).
- Update application state based on deselected cells.

The `cellDeselected` event provides an argument of type `CellDeselectEventArgs` with these properties:

| **Property**   | **Type**         | **Description**                                                   |
|----------------|------------------|-------------------------------------------------------------------|
| `cancel`       | `boolean`        | Set to **true** to cancel the deselection action.                  |
| `cellIndexes`  | `object[]` | Array of objects containing row and column indices of deselected cells. | 
| `cells`        | `NodeList`       | DOM elements of the deselected cells.                            |
| `data`         | `Object`         | Data of the row associated with the deselected cell.             | 

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

The `cellDeselecting` event provides an argument of type [CellDeselectEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/cellDeselectEventArgs/) with the following properties:

| **Property**   | **Type**         | **Description**                                                   |
|----------------|------------------|-------------------------------------------------------------------|
| `cancel`       | `boolean`        | Set to **true** to cancel the deselection action.                  |
| `cellIndexes`  | `object[]` | Array of objects containing row and column indices of deselected cells. | 
| `cells`        | `NodeList`       | DOM elements of the Deselecting cells.                            |
| `data`         | `Object`         | Data of the row associated with the Deselecting cell.             | 

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

The [cellEdit](https://ej2.syncfusion.com/angular/documentation/api/gantt/#celledit) event is triggered when a cell in the Gantt component enters edit mode. This event enables customization of the editing experience, enforcement of validation rules, or cancellation of the edit operation based on contextual data. This event is commonly used to restrict editing for specific columns, apply dynamic validation rules, or log edit activity

The `cellEdit` event provides an argument of type [CellEditArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/cellEditArgs/) with these properties:

| **Property**       | **Type**         | **Description**                                                   |
|--------------------|------------------|-------------------------------------------------------------------|
| `cancel`           | `boolean`        | Set to **true** to cancel the cell edit action.                    |
| `cell`             | `Element`        | The element of the cell being edited.                        |
| `columnName`       | `string`         | The field name of the column being edited (e.g., **TaskName**).  |
| `columnObject`     | `Object`         | The column object containing metadata (e.g., **field**, **headerText**). |
| `foreignKeyData`   | `Object`         | Data for foreign key columns, if applicable.                     |
| `isForeignKey`     | `boolean`        | Indicates if the column is a foreign key column.                 |
| `primaryKey`       | `string`         | The primary key field of the data source, if defined.            |
| `row`              | `HTMLElement`    | The DOM element of the row containing the edited cell.           |
| `rowData`          | `Object`         | Data of the row associated with the edited cell.                 |
| `type`             | `string`         | Type of edit action (e.g., **edit**).                           |
| `validationRules`  | `Object`         | Validation rules applied to the cell, if any.                    |
| `value`            | `any`            | The current value of the cell before editing starts.             |

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

| **Property**           | **Type**                                         | **Description**                                                                 |
|------------------------|--------------------------------------------------|---------------------------------------------------------------------------------|
| `cancel`               | `boolean`                                        | Set to **true** to cancel the selection action.                                |
| `cellIndex`            | `object`        | Index of the currently selected cell.                                          |
| `cells`                | `Element[]`                                      | DOM elements of the currently selected/deselected cells.                       |
| `currentCell`          | `Element`                                        | The currently selected cell element.                                           |
| `data`                 | `Object`                                         | Data of the row associated with the selected/deselected cell.                  |
| `previousRowCell`      | `Element`                                        | The previously selected cell element.                                          |
| `previousRowCellIndex` | `number`                                         | Index of the previously selected cell.                                         |
| `selectedRowCellIndex`          | `object[]`      | Array of objects containing row and column indices of selected cells.        |

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

The [cellSelecting](https://ej2.syncfusion.com/angular/documentation/api/gantt/#cellselecting) event is triggered before a cell in the Gantt component is selected. This event allows conditional control over the selection process and can be used to cancel selection based on contextual logic.

The `cellSelecting` event provides an argument of type [CellSelectingEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/cellSelectingEventArgs/) with these properties:

| **Property**           | **Type**                                         | **Description**                                                                 |
|------------------------|--------------------------------------------------|---------------------------------------------------------------------------------|
| `cancel`               | `boolean`                                        | Set to **true** to cancel the selection action.                                   |
| `cellIndex`            | `object`        | Index of the cell being selected.                                               |
| `cells`                | `Element[]`                                      | DOM elements of the currently selected/deselected cells.                        |
| `currentCell`          | `Element`                                        | The cell element being selected.                                                |
| `data`                 | `Object`                                         | Data of the row associated with the cell being selected.                        |
| `previousRowCell`      | `Element`                                        | The previously selected cell element.                                           |
| `previousRowCellIndex` | `number`                                         | Index of the previously selected cell.                                          |
| `selectedRowCellIndex` | `object[]`      | Array of objects containing row and column indices of selected cells.           |

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

The [columnDrag](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columndrag) event is triggered when a column header in the Gantt component is actively being dragged during a reordering operation. This event provides access to the drag context and allows conditional control over the column movement.

The `columnDrag` event provides an argument of type [ColumnDragEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/columnDragEventArgs/) with these properties:

| **Property**   | **Type**   | **Description**                                                  |
|----------------|------------|------------------------------------------------------------------|
| `column`       | `Object`   | The column object being dragged.                                 |
| `target`       | `Element`  | The target element where the column is being dragged over.       |
| `draggableType`| `string`   | Specifies the category of the dragged element, such as **column**, **headercell**, or other draggable types within the Gantt.             |

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

The `columnDragStart` event provides an argument of type [ColumnDragEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/columnDragEventArgs/) with these properties:

| **Property**   | **Type**   | **Description**                                                  |
|----------------|------------|------------------------------------------------------------------|
| `column`       | `Object`   | The column object being dragged.                                 |
| `target`       | `Element`  | The target element where the drag started.                       |
| `draggableType`| `string`   | Specifies the category of the dragged element, such as **column**, **headercell**, or other draggable types within the Gantt.             |

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

The [columnDrop](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columndrop) is triggered when a column header is dropped after a drag operation in the Gantt component. This event provides access to the drop context and enables post-reorder logic such as validation, UI updates, or state synchronization.

The `columnDrop` event provides an argument of type [ColumnDragEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/columnDragEventArgs/) with these properties:

| **Property**   | **Type**   | **Description**                                                  |
|----------------|------------|------------------------------------------------------------------|
| `column`       | `Object`   | The column object being dropped.                                 |
| `target`       | `Element`  | The target element where the column is dropped.                  |
| `draggableType`| `string`   | Specifies the category of the dragged element, such as **column**, **headercell**, **row**, etc.             |

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
    console.log(`Column "${args.column?.field}" was dropped.`);
    console.log('Dropped on target element:', args.target);
  }
}
```

## columnMenuClick

The [columnMenuClick](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columnmenuclick) event is triggered when a column menu item is clicked in the Gantt component. This event provides access to the clicked menu item and the associated column, enabling customization of menu behavior or execution of additional logic.

The `columnMenuClick` event provides an argument of type [ColumnMenuClickEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/columnMenuClickEventArgs/) with these properties:

| **Property** | **Type**   | **Description**                                                                                   |
|--------------|------------|---------------------------------------------------------------------------------------------------|
| `name`       | `string`   | The name of the column menu item that was clicked.                                                |
| `column`     | `Object`   | The column object associated with the clicked menu item.                                          |
| `element`    | `Element`  | The DOM element of the clicked column menu item.                                                  |
| `item`       | `Object`   | The menu item object that was clicked.|

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

The `columnMenuOpen` event provides an argument of type [ColumnMenuOpenEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/columnMenuOpenEventArgs/) with these properties:

| **Property** | **Type**   | **Description**                                                                                   |
|--------------|------------|---------------------------------------------------------------------------------------------------|
| `cancel`     | `boolean`  | Indicates whether to cancel the column menu opening. If set to **true**, the menu will not open.    |
| `name`       | `string`   | The name of the event, which is **columnMenuOpen**.                                                | 
| `column`     | `Object`   | The column object associated with the opened column menu.                                         |
| `element`    | `Element`  | The DOM element of the column header where the menu was opened.                                      |  
| `items`      | `Object[]` | An array of menu items available in the column menu, which can be customized or modified.         |
| `left`       | `number`  | The left position of the column menu relative to the viewport.                                    |
| `top`        | `number`  | The top position of the column menu relative to the viewport.                                    |
| `parentItem` | `Object` | The parent menu item if the column menu is part of a nested menu structure.                        |
| `showSubMenuOn` | `MenuOpenType` | Specifies how the submenu should be opened, such as on click or hover. This can be used to control the interaction behavior of the column menu. |

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

The `contextMenuClick` event provides an argument of type [ContextMenuClickEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/contextMenuClickEventArgs/) with these properties:

| **Property**             | **Type**        | **Description**                                                                                   |
|--------------------------|------------------|---------------------------------------------------------------------------------------------------|
| `name`                   | `string`         | The name of the context menu event, typically **contextMenuClick**.                              |
| `element`                | `Element`        | The DOM element that triggered the context menu event. |
| `event`                  | `PointerEvent`   | The pointer event object containing details like pointer ID, pressure, and coordinates.           |
| `item`       | `Object`   | The menu item object that was clicked, containing properties like **text**, **id**, etc.              |
| `type`                   | `string`         | Type of the context menu item (e.g., **Content**).                                                |
| `rowData`               | `Object`         | The data object associated with the row where the context menu was opened.                        |

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

The [contextMenuOpen](https://ej2.syncfusion.com/angular/documentation/api/gantt/#contextmenuopen) event fires when a context menu item is clicked in the Gantt. This event allows customization of menu behavior or execution of additional logic based on the selected item and context.

The `contextMenuOpen` event provides an argument of type [ContextMenuOpenEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/contextMenuOpenEventArgs/) with these properties:

| **Property**      | **Type**        | **Description**                                                                                   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------|
| `name`            | `string`        | The name of the event, typically **contextMenuOpen**.                                             |
| `element`         | `Element`       | The DOM element that triggered the context menu.                                                  |
| `event`           | `PointerEvent`  | The pointer event object with details like pointer ID, pressure, and coordinates.                 |
| `item`            | `Object`        | The menu item object that was clicked, with properties like **text**, **id**, etc.                    |
| `type`            | `string`        | Type of the context menu item (e.g., **Content**).                                                |
| `rowData`         | `Object`        | The data object for the row where the context menu was opened.                                    |
| `items`           | `Object[]`      | Array of menu items available in the context menu, which can be customized or modified.           |
| `left`            | `number`        | The left position of the context menu relative to the viewport.                                   |
| `top`             | `number`        | The top position of the context menu relative to the viewport.                                    |
| `parentItem`      | `Object`        | The parent menu item if the context menu is part of a nested menu structure.                      |
| `showSubMenuOn`   | `MenuOpenType`  | Specifies how the submenu should be opened (e.g., on click or hover).                             |

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

The [created](https://ej2.syncfusion.com/angular/documentation/api/gantt/#created) event fires when the Gantt component is fully initialized and rendered. This event is useful for executing logic that depends on the component being completely loaded and ready for interaction.

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

The [dataBound](https://ej2.syncfusion.com/angular/documentation/api/gantt/#databound) event fires after the Gantt component has successfully bound its data source and rendered the task data. This event is useful for executing logic that depends on the data being fully loaded and available in the UI.

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

The [destroyed](https://ej2.syncfusion.com/angular/documentation/api/gantt/#destroyed) event fires when the Gantt component is removed from the DOM using the destroy() method. This event is useful for handling cleanup operations and releasing resources associated with the component instance.

The `destroyed` event provides an argument of type `object` with these properties:

| **Property**      | **Type**        | **Description**                                                                                   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------|
| `name`            | `string`        | The name of the event, typically **destroyed**.                                                  |
| `cancel`          | `boolean`       | Indicates whether to cancel the destruction of the Gantt component. If set to **true**, the component will not be destroyed. |

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

The [endEdit](https://ej2.syncfusion.com/angular/documentation/api/gantt/#endedit) event is triggered after a task is edited using cell or taskbar editing. It enables post-edit actions such as validation, logging, or syncing changes with external systems.

The `endEdit` event provides an argument of type [ITaskbarEditedEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/iTaskbarEditedEventArgs/) with these properties:

**ITaskEditedEventArgs (Editing tasks)**

| **Property**         | **Type**       | **Description**                                      |
|----------------------|----------------|------------------------------------------------------|
| `action`             | `string`       | Defines the action.                                 |
| `data`               | `IGanttData`   | Provides the data of the edited task.               |
| `name`               | `string`       | Describes the name for the event.                   |

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

The `excelExportComplete` event provides an argument of type [ExcelExportCompleteArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportCompleteArgs/) with these properties:

| **Property**         | **Type**       | **Description**                                      |
|----------------------|----------------|------------------------------------------------------|  
| `promise`               | `Promise`       | Defines the promise object for blob data. |

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
    if (args.item.id === 'ganttDefault_excelexport') {
      this.ganttObj?.excelExport();
    }
  }

  public excelExportComplete(args: ExcelExportCompleteArgs): void {
    console.log('Excel export completed');
    (args as any).gridInstance.columns[1].headerText = "New HeaderText";
    (args as any).gridInstance.columns[2].visible = false;
  }
}
```

## excelExportHeaderQueryCellInfo

The [excelExportHeaderQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#excelexportheaderquerycellinfo) event is triggered during the Excel export process when customizing header cells in the exported file. It allows modification of header text, styles, and other properties before they are written to the Excel sheet.

The `excelExportHeaderQueryCellInfo` event provides an argument of type [ExcelHeaderQueryCellInfoEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/excelHeaderQueryCellInfoEventArgs/) with these properties:

| **Property**   | **Type**         | **Description**                                                                 |
|----------------|------------------|---------------------------------------------------------------------------------|
| `name`         | `string`         | The name of the event, typically **excelExportHeaderQueryCellInfo**.           |
| `cell`         | `ExcelCell`      | Represents the Excel header cell being processed.                              |
| `gridCell`     | `Cell` \| `ExcelCell` | Defines the grid cell instance related to the header.                      |
| `hyperLink`    | `Hyperlink`      | Contains hyperlink details if the header cell includes a link.                 |
| `image`        | `Image`          | Contains image details if the header cell includes an image.                   |
| `style`        | `ExcelStyle`     | Defines the style of the current cell (e.g., font, background, alignment).     |

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

The [excelQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#excelquerycellinfo) event triggers during the Excel export process when customizing individual data cells in the exported file. It allows modification of cell values, styles, and formatting before they are written to the Excel sheet.

The `excelQueryCellInfo` event provides an argument of type [ExcelQueryCellInfoEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/excelQueryCellInfoEventArgs/) with these properties:

| **Property** | **Type** | **Description** |
|--------------|----------|-----------------|
| `cell`       | `object` | Represents the Excel cell being customized. |
| `column`     | `object` | Metadata of the column associated with the cell. |
| `data`       | `object` | Row data for the current cell. |
| `value`      | `string` | Original value of the cell before export. |
| `style`      | `object` | Style object to customize font, background color, alignment, etc. |
| `colspan`    | `number` | Defines the colspan. |
| `hyperLink`  | `Hyperlink` | Contains hyperlink details if the cell includes a link. |
| `image`        | `Image` | Contains image details if the header cell includes an image. |

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

The `expanded` event provides an argument of type [ICollapsingEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/iCollapsingEventArgs/) with the following properties:

| **Property** | **Type** | **Description** |
|--------------|----------|-----------------|
| `data`       | `object` | The data object of the row that was expanded. |
| `row`        | `HTMLElement` | The actual DOM element of the expanded row. |
| `name`       | `string`   |  Describes the name for the event. |
| `cancel`     | `boolean`  | Set to **true** to cancel the row expanding action. |

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

The [expanding](https://ej2.syncfusion.com/angular/documentation/api/gantt/#expanding) event is triggered before a row is expanded in the Gantt chart. It allows interception of the expansion process and provides an opportunity to cancel it based on custom logic or conditions.

The `expanding` event provides an argument of type  [ICollapsingEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/iCollapsingEventArgs/) with the following properties:

| **Property** | **Type** | **Description** |
|--------------|----------|-----------------|
| `data`       | `object` | The data object of the row that is about to be expanded. |
| `gridRow`        | `HTMLElement` | The actual DOM element of the row being expanded. |
| `chartRow`        | `HTMLElement` | The actual DOM element of the chart row being expanded. |
| `name`       | `string` | Describes the name of the event. |
| `cancel`     | `boolean` | Set to **true** to cancel the row expansion. |

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

The [headerCellInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#headercellinfo) event is triggered while rendering the column header cells in the Gantt chart. It allows customization of header cell appearance and content before they are displayed in the UI.

The `headerCellInfo` event provides an argument of type [HeaderCellInfoEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/headerCellInfoEventArgs/) with the following properties:

| **Property** | **Type** | **Description** |
|--------------|----------|-----------------|
| `cell`       | `HTMLElement` | The actual DOM element of the header cell being rendered. |
| `node`       | `Element`     | The inner content element of the header cell, useful for modifying text or adding icons. 
| `name`       | `string`      | Name of the event. |

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

The [onMouseMove](https://ej2.syncfusion.com/angular/documentation/api/gantt/#onmousemove) event is triggered when the mouse moves over the Gantt area. It enables tracking of cursor movement and interaction with elements under the pointer.

The `onMouseMove` event provides an argument of type [IMouseMoveEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/iMouseMoveEventArgs/) with the following properties:

| **Property**     | **Type**                | **Description** |
|------------------|-------------------------|-----------------|
| `column`         | `Object`                | Defines the column metadata where the mouse interaction occurred. |
| `data`           | `IGanttData`            | Defines the row/task data under the mouse pointer. |
| `date`           | `Date`                  | Defines the timeline date corresponding to the mouse position. |
| `eventMarkers`   | `EventMarkerModel`      | Defines the event markers present in the chart. |
| `indicator`      | `IIndicator`            | Defines the indicator element (e.g., milestone or status icon) under the mouse. |
| `originalEvent`  | `Object`                | The original DOM mouse event object (e.g., **MouseEvent**). |
| `predecessor`    | `PredecessorTooltip`    | Defines the predecessor relationship tooltip data, if applicable. |

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

The [onTaskbarClick](https://ej2.syncfusion.com/angular/documentation/api/gantt/#ontaskbarclick) event is triggered when a taskbar element is clicked in the Gantt chart. It enables custom actions based on the selected task, such as displaying details, navigating to related views, or logging interactions.

The `onTaskbarClick` event provides an argument of type [ITaskbarClickEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/iTaskbarClickEventArgs/) with the following properties:

| **Property**     | **Type**      | **Description**                                                        |
|------------------|---------------|------------------------------------------------------------------------|
| `data`           | `IGanttData`  | The task data associated with the clicked taskbar.                     |
| `rowIndex`       | `number`      | The index of the row where the taskbar was clicked.                    |
| `target`         | `Element`     | The target element where the click occurred.                           |
| `taskbarElement` | `HTMLElement` | The actual taskbar element that was clicked.                           |
| `name`           | `string`      | The name of the event.                                                 |

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

The [pdfColumnHeaderQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#pdfcolumnheaderquerycellinfo) event is triggered before exporting each column header cell to a PDF document in the Gantt chart. It allows customization of header cell content, style, and formatting during the PDF export process.

The `pdfColumnHeaderQueryCellInfo` event provides an argument of type [PdfColumnHeaderQueryCellInfoEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfColumnHeaderQueryCellInfoEventArgs/) 
with the following properties:

| **Type**                   | **Description**             |
|------------------|----------------------------|---------------------------------------------------------------------------------|
| `cell`           | `PdfTreeGridCell`          | Represents the current PDF cell being exported. You can modify its content or style. |
| `column`         | `ColumnModel`              | Refers to the column definition for the current cell. Useful for accessing field names, header text, etc. |
| `headerTemplate` | `ITemplateDetails`         | Contains custom string or image content for the header cell. |
| `image`          | `PdfImage`                 | Allows you to set an image in the header cell. |
| `style`          | `PdfGanttCellStyle`        | Lets you define styles like font, background color, borders, etc. |
| `value`          | `string \| Object`         | The actual value to be displayed in the header cell. You can override this to customize the header text. |

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

The [pdfExportComplete](https://ej2.syncfusion.com/angular/documentation/api/gantt/#pdfexportcomplete) event is triggered after the Gantt component completes the process of exporting data to a PDF file. It enables post-export actions such as handling the generated file, displaying messages, or logging activity.

The `pdfExportComplete` event provides an argument of type `object` with the following properties:

| **Property** | **Type**   | **Description**                                      |
|--------------|------------|------------------------------------------------------|
| `name`    | `string`  | Describes the name for the event. |

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

The [pdfQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#pdfquerycellinfo) event is triggered for each cell while exporting the Gantt component to a PDF file. This event allows customization of the PDF content at the cell level during export.

The `pdfQueryCellInfo` event provides an argument of type [PdfQueryCellInfoEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfQueryCellInfoEventArgs/) with the following properties:

| **Property** | **Type** | **Description** |
|--------------|----------|-----------------|
| `data`       | `object` | Contains the task data and Gantt properties for the current row. |
| `value`      | `Date \| string \| number \| boolean \| PdfTextWebLink \| PdfImage` | The value of the current cell being exported. |
| `column`     | `Column` | Column configuration of the current cell. |
| `style`      | `PdfGanttCellStyle` | Style settings applied to the cell (e.g., font, color, padding). |
| `cell`       | `PdfTreeGridCell` | Represents the actual PDF cell object being rendered. |
| `hyperLink`    | `Hyperlink`      | Contains hyperlink details if the cell includes a link.                 |
| `image`        | `Image`          | Contains image details if the cell includes an image.                   |

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

The [pdfQueryTaskbarInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#pdfquerytaskbarinfo/) event is triggered for each taskbar while exporting the Gantt component to a PDF file. This event allows customization of the taskbar appearance and content in the exported PDF.

The `pdfQueryTaskbarInfo` event provides an argument of type [PdfQueryTaskbarInfoEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfQueryTaskbarInfoEventArgs/) with the following properties:

| **Property**       | **Type**             | **Description**                                                                 |
|--------------------|----------------------|---------------------------------------------------------------------------------|
| `data`             | `IGanttData`         | Specifies the value of the task data.                                          |
| `indicators`       | `IIndicator[]`       | Defines the indicators to be displayed on the taskbar.                         |
| `labelSettings`    | `ILabel`             | Defines the customized string content or image for left, right, and task label.|
| `taskbar`          | `ITaskbarStyle`      | Defines the taskbar style including color, border, and progress bar.           |
| `taskbarTemplate`  | `ITemplateDetails`   | Defines the taskbar element appearance customizations and allows adding images or strings. |


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

The `pdfQueryTimelineCellInfo` event provides an argument of type [pdfQueryTimelineCellInfoEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/pdfQueryTimelineCellInfoEventArgs/) with the following properties:

| **Property** | **Type** | **Description** |
|--------------|----------|-----------------|
| `timelineCell`       | `PdfGanttCellStyle` | The PDF cell object for the timeline cell being rendered. |
| `value`      | `string` | The text value to be displayed in the timeline cell. |

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

The `queryCellInfo` event provides an argument of type [QueryCellInfoEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/querycellinfoeventargs/) with the following properties:

| **Property**       | **Type**         | **Description**                                                                 |
|--------------------|------------------|---------------------------------------------------------------------------------|
| `cell`             | `HTMLElement`    | The DOM element representing the cell being rendered.                          |
| `column`           | `Column`         | The column configuration object for the current cell.                          |
| `data`             | `object`         | The data object for the row associated with the cell.                          |
| `foreignKeyData`   | `object`         | The foreign key data for the cell, if applicable.                              |
| `rowIndex`         | `number`         | The index of the row in which the cell is located.                             |
| `colIndex`         | `number`         | The index of the column in which the cell is located.                          |
| `colspan`          | `number`         | The number of columns the cell spans across.                                   |


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

The `queryTaskbarInfo` event provides an argument of type [IQueryTaskbarInfoEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/iquerytaskbarinfoeventargs/) with the following properties:

| **Property**            | **Type**        | **Description**                                      |
|-------------------------|-----------------|------------------------------------------------------|
| `baselineColor`         | `string`        | Defines the baseline color.                          |
| `data`                  | `IGanttData`    | Defines the data.                                    |
| `leftLabelColor`        | `string`        | Defines the left label color.                        |
| `milestoneColor`        | `string`        | Defines the milestone color.                         |
| `progressBarBgColor`    | `string`        | Defines the progressbar background color.            |
| `rightLabelColor`       | `string`        | Defines the right label color.                       |
| `rowElement`            | `Element`       | Defines the row element.                             |
| `taskLabelColor`        | `string`        | Defines the task label color.                        |
| `taskbarBgColor`        | `string`        | Defines the taskbar background color.                |
| `taskbarBorderColor`    | `string`        | Defines the taskbar border color.                    |
| `taskbarElement`        | `Element`       | Defines the taskbar element.                         |
| `taskbarType`           | `string`        | Defines the taskbar type.                            |

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

The [recordDoubleClick](https://ej2.syncfusion.com/angular/documentation/api/gantt/#recorddoubleclick) event is triggered when a row in the Gantt is double-clicked. It enables interaction with task data through custom actions or UI enhancements.

The `recordDoubleClick` event provides an argument of type [RecordDoubleClickEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/recorddoubleclickeventargs/) with the following properties:

| **Property**       | **Type**       | **Description**                                                  |
|--------------------|----------------|------------------------------------------------------------------|
| `cell`             | `Element`      | Defines the cell element.                                        |
| `cellIndex`        | `number`       | Defines the cell index.                                          |
| `column`           | `Column`       | Defines the column object.                                       |
| `foreignKeyData`   | `Object`       | Defines the foreign key row data associated with this column.    |
| `name`             | `string`       | Defines the name of the event.                                   |
| `row`              | `Element`      | Defines the row element.                                         |
| `rowData`          | `IGanttData`   | Defines the data of the record.                                  |
| `rowIndex`         | `number`       | Defines the row index of the record.                             |
| `target`           | `Element`      | Defines the target element.                                      |

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

The [resizeStart](https://ej2.syncfusion.com/angular/documentation/api/gantt/#resizestart) event is triggered when a column resize action begins in the Gantt chart. It provides an opportunity to intercept the resizing process, apply validations, or restrict resizing for specific columns. This event is useful for customizing layout behavior and tracking user interactions during column adjustments

The `resizeStart` event provides an argument of type [ResizeArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/resizeArgs/) with the following properties:

| **Property**   | **Type**    | **Description**                          |
|----------|---------|--------------------------------------|
| `cancel`   | `boolean` | Defines the cancel option value.     |
| `column`   | `Column`  | Defines the resizing column details. |

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

The [resizeStop](https://ej2.syncfusion.com/angular/documentation/api/gantt/#resizestop) event is triggered when a column resize operation is completed in the Gantt chart. It provides access to the final column dimensions, enabling developers to apply layout updates, persist user preferences, or trigger related UI adjustments. This event supports scenarios such as saving column widths, recalculating dependent components, and enhancing responsiveness based on user-driven changes.

The `resizeStop` event provides an argument of type [ResizeArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/resizeArgs/) with the following properties:

| **Property**   | **Type**    | **Description**                          |
|----------|---------|--------------------------------------|
| `cancel`   | `boolean` | Defines the cancel option value.     |
| `column`   | `Column`  | Defines the resizing column details. |

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

The `resizing` event provides an argument of type [ResizeArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/resizeArgs/) with the following properties:

| **Property**   | **Type**    | **Description**                          |
|----------|---------|--------------------------------------|
| `cancel`   | `boolean` | Defines the cancel option value.     |
| `column`   | `Column`  | Defines the resizing column details. |

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

The `rowDataBound` event provides an argument of type [RowDataBoundEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/rowDataBoundEventArgs/) with the following properties:

| **Property**       | **Type**         | **Description**                                 |
|----------------|--------------|---------------------------------------------|
| `data`         | `IGanttData` | Defines the data collections.               |
| `isSelectable` | `boolean`    | Defines whether the row should be selectable or not. |
| `row`          | `Element`    | Defines the row element.                    |
| `rowHeight`    | `number`     | Defines the row height.                     |

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

The `rowDeselected` event provides an argument of type [RowDeselectEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/rowdeselecteventargs/) with the following properties:

| **Property**               | **Type**               | **Description**                                                  |
|----------------------------|------------------------|------------------------------------------------------------------|
| `data`                     | `IGanttData[]`         | Defines the data collections.                                    |
| `foreignKeyData`           | `Object` \| `Object[]` | Defines the foreign key row data associated with this column.    |
| `isHeaderCheckboxClicked` | `boolean`              | Indicates whether the header checkbox was clicked.               |
| `isInteracted`            | `boolean`              | Indicates whether the event was triggered by interaction.        |
| `row`                      | `Element`              | Defines the deselected row.                             |
| `rowIndex`                 | `number`               | Defines the deselected row index.                       |
| `rowIndexes`               | `number[]`             | Defines the deselected row indexes.                     |
| `target`                   | `Element`              | Defines the target element for row deselect.                     |

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

The `rowDeselecting` event provides an argument of type [RowDeselectEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/rowDeselectEventArgs/) with the following properties:

| **Property**               | **Type**               | **Description**                                                  |
|----------------------------|------------------------|------------------------------------------------------------------|
| `data`                     | `IGanttData[]`         | Defines the data collections.                                    |
| `foreignKeyData`           | `Object` \| `Object[]` | Defines the foreign key row data associated with this column.    |
| `isHeaderCheckboxClicked` | `boolean`              | Indicates whether the header checkbox was clicked.               |
| `isInteracted`            | `boolean`              | Indicates whether the event was triggered by interaction.        |
| `row`                     | `Element`              | Defines the row being deselected.                                |
| `rowIndex`                | `number`               | Defines the index of the row being deselected.                   |
| `rowIndexes`              | `number[]`             | Defines the indexes of the rows being deselected.                |
| `target`                  | `Element`              | Defines the target element for the deselection.                  |

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

The [rowDrag](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowdrag) is triggered while a row is being dragged in the Gantt chart. It enables actions that respond to row dragging, such as displaying visual indicators, enforcing drag restrictions, or tracking user interaction.

The `rowDrag` event provides an argument of type [RowDragEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDragEventArgs/) with the following properties:

| **Property**     | **Type**        | **Description**                                      |
|------------------|-----------------|------------------------------------------------------|
| `data`           | `Object[]`      | Defines the selected row data.                       |
| `dropIndex`      | `number`        | Defines the target element's index.                  |
| `fromIndex`      | `number`        | Defines the drag element's original index.           |
| `originalEvent`  | `object`        | Defines the mouse event.                             |
| `rows`           | `Element[]`     | Defines the selected row’s elements.                 |
| `target`         | `Element`       | Defines the target element from which drag starts.   |


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

The [rowDragStart](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowdragstart) event is triggered when a row drag operation begins in the Gantt chart. It enables actions that respond to drag initiation, such as applying restrictions, customizing visuals, or tracking user interaction.

The `rowDragStart` event provides an argument of type [RowDragEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDragEventArgs/) with the following properties:

| **Property**     | **Type**        | **Description**                                      |
|------------------|-----------------|------------------------------------------------------|
| `data`           | `Object[]`      | Defines the selected row data.                       |
| `dropIndex`      | `number`        | Defines the target element's index.                  |
| `fromIndex`      | `number`        | Defines the drag element's original index.           |
| `originalEvent`  | `object`        | Defines the mouse event.                             |
| `rows`           | `Element[]`     | Defines the selected row’s elements.                 |
| `target`         | `Element`       | Defines the target element from which drag starts.   |

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

The [rowDragStartHelper](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowdragstarthelper) event is triggered before a row drag operation begins in the Gantt chart. It enables actions that respond to drag eligibility checks, such as validating conditions, modifying behavior, or canceling the drag action.

The `rowDragStartHelper` event uses [RowDragEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDragEventArgs/) and provides the following properties:

| **Property**     | **Type**        | **Description**                                      |
|------------------|-----------------|------------------------------------------------------|
| `data`           | `Object[]`      | Defines the selected row data.                       |
| `dropIndex`      | `number`        | Defines the target element's index.                  |
| `fromIndex`      | `number`        | Defines the drag element's original index.           |
| `originalEvent`  | `object`        | Defines the mouse event.                             |
| `rows`           | `Element[]`     | Defines the selected row’s elements.                 |
| `target`         | `Element`       | Defines the target element from which drag starts.   |

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

The [rowDrop](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowdrop) event is triggered after a row has been dropped in a new position in the Gantt chart. It enables actions that respond to row reordering, such as updating data, validating hierarchy changes, or tracking user interaction.

The `rowDrop` event provides an argument of type [RowDragEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/rowDropEventArgs/) with the following properties:

| **Property**       | **Type**         | **Description**                                           |
|--------------------|------------------|-----------------------------------------------------------|
| `data`             | `Object[]`       | Defines the selected row data.                            |
| `dropIndex`        | `number`         | Defines the target element's index.                       |
| `dropPosition`     | `string`         | Defines the drop position of the dragged record.          |
| `dropRecord`       | `IGanttData`     | Defines the dropped record after modification.            |
| `fromIndex`        | `number`         | Defines the drag element's original index.                |
| `modifiedRecords`  | `IGanttData[]`   | Defines the modified records after drop.                  |
| `originalEvent`    | `object`         | Defines the mouse event.                                  |
| `requestType`      | `string`         | Defines the request type.                                 |
| `rows`             | `Element[]`      | Defines the selected row’s elements.                      |
| `target`           | `Element`        | Defines the target element from which drag starts.        |

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

The `rowSelected` event provides an argument of type [RowSelectEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/rowselecteventargs/) with the following properties:

| **Property**               | **Type**               | **Description**                                                  |
|----------------------------|------------------------|------------------------------------------------------------------|
| `data`                     | `IGanttData`           | Defines the data collections.                                    |
| `foreignKeyData`           | `Object` \| `Object[]` | Defines the foreign key row data associated with this column.    |
| `isHeaderCheckboxClicked` | `boolean`              | Indicates whether the header checkbox was clicked.               |
| `isInteracted`            | `boolean`              | Indicates whether the event was triggered by interaction.        |
| `previousRow`             | `Element`              | Defines the previously selected row.                             |
| `previousRowIndex`        | `number`               | Defines the previously selected row index.                       |
| `row`                     | `Element` \| `Element[]`| Defines the selected row.                             |
| `rowIndex`                | `number`               | Defines the selected row index.                       |
| `rowIndexes`              | `number[]`             | Defines the selected row indexes.                     |
| `target`                  | `Element`              | Defines the target element for selection.                        |

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

The [rowSelecting](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowselecting) event is triggered before a row is selected in the Gantt chart. It enables actions that intercept the selection process, such as validating conditions, prompting confirmation, or canceling the selection.

The `rowSelecting` event provides an argument of type [RowSelectingEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/rowselecteventargs/) with the following properties:

| **Property**               | **Type**               | **Description**                                                  |
|----------------------------|------------------------|------------------------------------------------------------------|
| `cancel`                   | `boolean`              | Defines the cancel option value.                                 |
| `data`                     | `IGanttData`           | Defines the data collections.                                    |
| `foreignKeyData`           | `Object` \| `Object[]` | Defines the foreign key row data associated with this column.    |
| `isCtrlPressed`            | `boolean`              | Indicates whether the CTRL key is pressed.                       |
| `isHeaderCheckboxClicked` | `boolean`              | Indicates whether the header checkbox was clicked.               |
| `isInteracted`            | `boolean`              | Indicates whether the event was triggered by interaction.        |
| `isShiftPressed`          | `boolean`              | Indicates whether the SHIFT key is pressed.                      |
| `previousRow`             | `Element`              | Defines the previously selected row.                             |
| `previousRowIndex`        | `number`               | Defines the previously selected row index.                       |
| `row`                     | `Element` \| `Element[]`| Defines the selected/deselected row.                             |
| `rowIndex`                | `number`               | Defines the selected/deselected row index.                       |
| `rowIndexes`              | `number[]`             | Defines the selected/deselected row indexes.                     |
| `target`                  | `Element`              | Defines the target element for selection.                        |

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

The [splitterResizeStart](https://ej2.syncfusion.com/angular/documentation/api/gantt/#splitterresizestart) event is triggered when the splitter bar starts resizing in the Gantt chart layout. It enables actions that respond to resize initiation, such as applying layout constraints, customizing visuals, or tracking user interaction.

The `splitterResizeStart` event provides an argument of type [ResizeArgs](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/resizeArgs/) with the following properties:

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
  public splitterResizeStart(args: ResizeEventArgs): void {
    console.log('Splitter resize started:', args);

    // Prevent resizing if screen width is less than 768 pixels
    if (window.innerWidth < 768) {
      args.cancel = true;
      console.log('Resize cancelled due to small screen width');
    }
  }
}

```

## splitterResized

The [splitterResized](https://ej2.syncfusion.com/angular/documentation/api/gantt/#splitterresized) event is triggered after the splitter bar has been resized in the Gantt chart layout. It enables actions that respond to final layout changes, such as saving pane widths, updating dependent components, or tracking user interaction.

The `splitterResized` event provides an argument of type [ISplitterResizedEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/isplitterresizedeventargs/) with the following properties:

| **Property**     | **Type**               | **Description**                                                  |
|------------------|------------------------|------------------------------------------------------------------|
| `cancel`         | `boolean`              | Defines whether the event is cancelable.                         |
| `element`        | `HTMLElement`          | Defines the splitter container element.                          |
| `event`          | `Event`                | Defines the event that triggered the resize.                     |
| `index`          | `number[]`             | Defines the indexes of the panes being resized.                  |
| `pane`           | `HTMLElement[]`        | Defines the pane elements involved in the resize.                |
| `paneSize`       | `number[]`             | Defines the size of each resized pane.                           |
| `separator`      | `HTMLElement`          | Defines the splitter bar element that was resized.               |

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

The [splitterResizing](https://ej2.syncfusion.com/angular/documentation/api/gantt/#splitterresizing) event is triggered continuously while the splitter bar is being dragged in the Gantt chart layout. It enables actions that respond to real-time layout changes, such as enforcing constraints, updating visuals, or tracking user interaction.

The `splitterResizing` event provides an argument of type `ResizingEventArgs` with the following properties:

| **Property**   | **Type**         | **Description**                                                                 |
|----------------|------------------|---------------------------------------------------------------------------------|
| `name`         | `string`         | Name of the event (`splitterResizing`).                                         |
| `element`      | `HTMLElement`    | The splitter container element.                                                 |
| `event`        | `MouseEvent`     | The mouse event that triggered the resize.                                      |
| `index`        | `number[]`       | Indexes of the panes being resized.                                             |
| `pane`         | `HTMLElement[]`  | Array of pane elements involved in the splitter layout.                         |
| `paneSize`     | `number[]`       | Current sizes of the panes during the resize.                                   |
| `separator`    | `HTMLElement`    | The splitter bar element being dragged.                                         |

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

The [taskbarEdited](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskbaredited) event is triggered after a taskbar has been modified in the Gantt chart. It enables actions that respond to taskbar changes, such as saving updates, validating edits, or updating related components.

The `taskbarEdited` event provides an argument of type [TaskbarEditedEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/itaskbareditedeventargs/) with the following properties:

| **Property**          | **Type**         | **Description**                                           |
|-----------------------|------------------|-----------------------------------------------------------|
| `action`              | `string`         | Defines the action.                                       |
| `cancel`              | `boolean`        | Defines whether the event is cancelable.                  |
| `data`                | `IGanttData`     | Defines the data.                                         |
| `editingFields`       | `ITaskData`      | Defines the editing fields.                               |
| `previousData`        | `ITaskData`      | Defines the previous value of the editing task.           |
| `recordIndex`         | `number`         | Defines the index of the edited task.                     |
| `roundOffDuration`    | `boolean`        | Defines whether the duration should be rounded off.       |
| `segmentIndex`        | `number`         | Defines the segment index.                                |
| `target`              | `Element`        | Defines the target element.                               |
| `taskBarEditAction`   | `string`         | Defines the type of taskbar edit action.                  |

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

The `taskbarEditing` event provides an argument of type [ITaskbarEditedEventArgs](https://ej2.syncfusion.com/angular/documentation/api/gantt/itaskbareditedeventargs/) with the following properties:

| **Property**          | **Type**         | **Description**                                           |
|-----------------------|------------------|-----------------------------------------------------------|
| `action`              | `string`         | Defines the action.                                       |
| `cancel`              | `boolean`        | Defines whether the event is cancelable.                  |
| `data`                | `IGanttData`     | Defines the data.                                         |
| `editingFields`       | `ITaskData`      | Defines the editing fields.                               |
| `previousData`        | `ITaskData`      | Defines the previous value of the editing task.           |
| `recordIndex`         | `number`         | Defines the index of the edited task.                     |
| `roundOffDuration`    | `boolean`        | Defines whether the duration should be rounded off.       |
| `segmentIndex`        | `number`         | Defines the segment index.                                |
| `target`              | `Element`        | Defines the target element.                               |
| `taskBarEditAction`   | `string`         | Defines the type of taskbar edit action.                  |

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

The `toolbarClick` event provides an argument of type `ClickEventArgs` with the following properties:
The `toolbarClick` event provides an argument of type `ClickEventArgs` with the following properties:

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