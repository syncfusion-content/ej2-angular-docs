---
layout: post
title: Observable in Angular Gantt Chart Component | Syncfusion
description: Learn how to bind observables in the Syncfusion Angular Gantt Chart component for reactive data updates and real-time task management.
platform: ej2-angular
control: Observable
documentation: ug
domainurl: ##DomainURL##
---

# Observable in Angular Gantt Chart Component

The Angular Gantt Chart component supports [Observable](https://v17.angular.io/guide/observables) data binding, enabling reactive updates to reflect task changes, such as real-time schedule adjustments, without manual intervention. By piping Observables through the [async](https://v17.angular.io/api/common/AsyncPipe) pipe, the component automatically subscribes to data changes, updates the UI, and manages subscription to prevent memory leaks. This is ideal for handling asynchronous data from APIs or WebSockets, ensuring efficient synchronization in project management scenarios. Observables require a data structure with `result` (an array of task data) and `count` (total record count) for proper binding, supporting features like virtual scrolling. Taskbars and grid rows include ARIA labels for accessibility, and the UI adapts to responsive designs, though large datasets may need caching for performance.

## Bind Observables with async pipe

Bind data to the Gantt Chart component using an Observable with the async pipe. The component subscribes on initialization, unsubscribe automatically on destruction, and updates only when new values are emitted.
The Observable must emit an object with:
- `result`: Array of tasks with properties like **id**, **TaskName**, and **StartDate**.
- `count`: Total number of tasks.

The following example demonstrates Observable binding in the `app.component.ts` file:

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-treegrid';
import { Observable } from 'rxjs';
import { TaskStoreService } from './task-store.service';

@Component({
    selector: 'app-root',
    template: `
        <ejs-gantt #gantt id='ganttContainer' [dataSource]='tasks | async' height='450px' rowHeight='25'
        [allowSorting]='true' [taskFields]='taskSettings' [editSettings]='editSettings' [toolbar]='toolbar'>
        </ejs-gantt>`,
    providers: [TaskStoreService]
})

export class AppComponent implements OnInit {
    @ViewChild('gantt', { static: true }) public ganttChart: GanttComponent;
    public tasks: Observable<DataStateChangeEventArgs>;
    public taskSettings: object;
    public editSettings: object;
    public toolbar: string[];

    constructor(private taskService: TaskStoreService) {
        this.tasks = taskService;
    }

    ngOnInit(): void {
        this.taskSettings = {
            id: 'id',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentID',
            resourceInfo: 'resources'
        };
        this.editSettings = {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
            allowTaskbarEditing: true
        };
        this.toolbar = ['Add', 'Edit', 'Delete'];
        const state: any = { skip: 0, take: 10 };
        this.taskService.execute(state);
    }
}
```

This configuration binds task data via an Observable, enabling reactive updates.

## Fetch real-time data

Fetch task data using Observables with APIs or WebSockets for real-time updates, such as live task progress changes. The service must emit an object with `result` and `count`.

The following example demonstrates the implementation of the `service.ts` file for fetching tasks:

```typescript
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class TaskStoreService extends Subject<any> {
    private apiUrl = 'api/tasks';

    constructor(private http: HttpClient) {
        super();
    }

    public execute(state: any): void {
        this.getTasks(state).subscribe(x => super.next(x));
    }

    getTasks(state: any): Observable<any> {
        return this.http.get<any[]>(this.apiUrl).pipe(
            map(response => ({
                result: state.take > 0 ? response.slice(state.skip, state.skip + state.take) : response,
                count: response.length
            }))
        );
    }
}
```

This service fetches tasks from an API, supporting pagination for large datasets.

## CRUD operations with Observable binding

The Gantt Chart component supports CRUD operations such as add, edit, and delete when using Observable data binding. For every such operation, it triggers the `dataSourceChanged` event, which serves as a unified mechanism for handling data modifications, allowing developers to process create, update, and delete actions programmatically and efficiently synchronize these changes with the underlying data source.

Handle the `dataSourceChanged` event, perform the required operation in the service, and emit the updated data through the Observable using the `next` method to refresh the UI.

### Handle CRUD operations

The `dataSourceChanged` event serves as an entry point to capture CRUD actions and route them to the backend service for processing

Based on the action type available in the event arguments (`add`, `edit`, or `delete`), perform the corresponding operation in the service. After completing the operation, call the `endEdit()` method to notify the Gantt Chart component that the process is completed.

For CRUD operations `app.component.ts` file can be defined as shown below:

```typescript
import { Component, ViewChild, OnInit } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-angular-treegrid';
import { DataSourceChangedEventArgs } from '@syncfusion/ej2-grids';
import { Observable } from 'rxjs';
import { TaskStoreService } from './task-store.service';
import { TaskModel } from './task-model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public tasks!: Observable<DataStateChangeEventArgs>;
  public editSettings: any;
  public projectStartDate: any;
  public projectEndDate: any;
  public toolbar!: string[];
  public taskFields!: any;
  @ViewChild('gantt', { static: false })
  public gantt!: GanttComponent;

  constructor(private taskService: TaskStoreService) {
    // Observable binding
    this.tasks = this.taskService;
  }
    // Triggers for CRUD operations
    public dataSourceChanged(args: DataSourceChangedEventArgs): void {
        if (args.action === 'add') {
            const task: TaskModel = { ...(args.data as any).taskData }; 
            this.taskService.addRecord(task).subscribe(() => {
                // Notify Gantt that the operation is complete
                args.endEdit();
            });
        }

        if (args.action === 'edit') {
            // VERY IMPORTANT: extract only row data
            const task: TaskModel = { ...(args.data as any).taskData };
            this.taskService.updateRecord(task).subscribe(() => {
                // Notify Gantt that the operation is complete
                args.endEdit();
            });
        }

        if (args.requestType === 'delete') {
            let deletedRecords = args.data as any[];
            // Single record delete
            if (deletedRecords.length === 1) {
                const id = deletedRecords[0]?.taskData?.id ?? deletedRecords[0]?.id;
                if (id) {
                    this.taskService.deleteRecord(id).subscribe(() => {
                        // Notify Gantt that the operation is complete
                        args.endEdit();
                    });        
                }
            }
            else {
                // Multi record delete
                this.taskService.deleteMultipleRecords(deletedRecords)
                .subscribe(() => args.endEdit());
            }
        }
    }
    
    ngOnInit(): void {
        this.taskFields = {
            id: 'id',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentID'
        };
        this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
        };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.projectStartDate = new Date('02/09/2026');
        this.projectEndDate = new Date('08/08/2026');;
        const state: any = { skip: 0, take: 24 };
        // Initial load data
        this.taskService.execute(state);
    }
}
```
> Note: Call the `endEdit()` method after processing the CRUD operation to finalize the action in the Gantt Chart component.

For CRUD operations `app.component.html` file can be defined as shown below:

```html
<ejs-gantt 
    #gantt
    [dataSource] = "tasks | async"
    [taskFields] = "taskFields"
    [editSettings]="editSettings"
    [toolbar] = "toolbar"
    [allowSelection] = "true" 
    height = "570"
    [projectStartDate] = "projectStartDate"
    [projectEndDate] = "projectEndDate"
    (dataSourceChanged) = "dataSourceChanged($event)"
>
</ejs-gantt> 
```

### Process CRUD operations in service and refresh the UI

When handling a CRUD operation within the service, the underlying data source must be updated and the modified result emitted through the Observable. Use the `next` method which is used to push the updated data, ensuring that the Gantt Chart component receives the latest dataset and refreshes the UI accordingly.

The service layer implementation for CRUD operations is defined in the `service.ts` file as shown below:

```typescript
import { Injectable } from '@angular/core';
import { Observable, forkJoin, BehaviorSubject  } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-angular-treegrid';
import { TaskModel } from './task-model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskStoreService extends BehaviorSubject<DataStateChangeEventArgs> {
    private apiUrl = 'api/tasks';

    constructor(private http: HttpClient) {
        // BehaviorSubject must have initial value
        super({ result: [], count: 0 } as DataStateChangeEventArgs)
    }

    public execute(state: any): void {
        if (state) {
            this.getTasks(state).subscribe(result => {
                super.next({
                    result: result.result,
                    count: result.count
                } as DataStateChangeEventArgs);
            });
        }
    }

    // READ for CRUD
    private getTasks(state?: any): Observable<{ result: TaskModel[]; count: number }> {
        return this.http.get<TaskModel[]>(this.apiUrl).pipe(
        map((data: TaskModel[]) => ({
            result: state?.take
            ? data.slice(state.skip, state.skip + state.take)
            : data,
            count: data.length
        }))
        );
    }
    // CREATE NEW RECORD
    public addRecord(task: TaskModel): Observable<TaskModel> {
        return this.http.post<TaskModel>(this.apiUrl, task, httpOptions);
    }

    // UPDATE EXISITNG RECORD
    public updateRecord(task: TaskModel): Observable<TaskModel> {
        return this.http.put<TaskModel>(
            `${this.apiUrl}/${task.id}`,
            task,
            httpOptions
        );
    }

    // DELETE (Single) RECORD
    public deleteRecord(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`, httpOptions);
    }

    // DELETE (Multiple) RECORD
    public deleteMultipleRecords(records: any[]): Observable<any> {
        const deleteCalls = records.map(record =>
            this.http.delete(`${this.apiUrl}/${record.id}`, httpOptions)
        );
        return forkJoin(deleteCalls);
    }
}
```

## Sorting and filtering with Observable binding

The Gantt Chart supports sorting and filtering with Observable data binding, triggering the [dataStateChange](https://ej2.syncfusion.com/angular/documentation/api/gantt/index-default#datastatechange) event for custom or server-side processing. The `dataStateChange` event provides a state object with sorting and filtering details, which must be handled in the service layer to apply the required operations.

Since sorting and filtering are not performed automatically with Observable binding, these actions must be handled manually using the `dataStateChange` event.

### Handle data state change

When sorting or filtering is applied, the Gantt Chart triggers the `dataStateChange` event and passes the current state object. This state includes details of the applied operations, such as sort and filter conditions, which can be processed in the service to return the updated data to the Gantt Chart component.

The `app.component.ts` file for handling sorting and filtering operations is shown below:

```typescript
import { Component, ViewChild, OnInit } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-angular-treegrid';
import { Observable } from 'rxjs';
import { TaskStoreService } from './task-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public tasks!: Observable<DataStateChangeEventArgs>;
  public editSettings: any;
  public projectStartDate: any;
  public projectEndDate: any;
  public toolbar!: string[];
  public taskFields!: any;
  @ViewChild('gantt', { static: false })
  public gantt!: GanttComponent;

  constructor(private taskService: TaskStoreService) {
    // Observable binding
    this.tasks = this.taskService;
  }

  // Triggers for Filter, Sorting actions
  public dataStateChange(state: DataStateChangeEventArgs): void { 
    this.taskService.execute(state);
  }

  ngOnInit(): void {
    this.taskFields = {
      id: 'id',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };
    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
    };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.projectStartDate = new Date('02/09/2026');
    this.projectEndDate = new Date('08/08/2026');;
    const state: any = { skip: 0, take: 24 };
    // Initial data load
    this.taskService.execute(state);
  }
}
```

The `app.component.html` file for handling sorting and filtering operations is shown below:

```html
<ejs-gantt 
    #gantt
    [dataSource] = "tasks | async"
    [taskFields] = "taskFields"
    [editSettings] = "editSettings"
    [toolbar] = "toolbar"
    [allowSorting] = "true"
    [allowFiltering] = "true"
    [allowSelection] = "true"
    height = "570"
    [projectStartDate] = "projectStartDate"
    [projectEndDate] = "projectEndDate"
    (dataStateChange) = "dataStateChange($event)"
>
</ejs-gantt> 
```
### Process sorting and filtering in the service layer

Utilize the state object from the `dataStateChange` event to handle sorting and filtering operations within the service layer.

Apply the specified sort and filter conditions to transform the dataset and emit the processed result through the Observable to update the Gantt Chart component.

The service layer implementation for sorting and filtering is defined in the `service.ts` file as shown below:

```typescript
import { Injectable } from '@angular/core';
import { Observable, forkJoin, BehaviorSubject  } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-angular-treegrid';
import { TaskModel } from './task-model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskStoreService extends BehaviorSubject<DataStateChangeEventArgs> {
    private apiUrl = 'api/tasks';

    constructor(private http: HttpClient) {
        // BehaviorSubject must have initial value
        super({ result: [], count: 0 } as DataStateChangeEventArgs)
    }

    public execute(state: any): void {
        this.getData(state).subscribe(data => this.next(data));
    }

    protected getData(state: any): Observable<DataStateChangeEventArgs> {
        return this.http.get<any[]>(this.apiUrl).pipe(
            map(data => {
                // Filtering
                if (state.where?.length) {
                data = this.applyFiltering(data, state.where);
                }
                // Sorting
                if (state.sorted?.length) {
                data = this.applySorting(data, state.sorted);
                }
                return {
                    result: [...data],
                    count: data.length
                } as DataStateChangeEventArgs;
            })
        );
    }

    // For Handle Filter action
    private applyFiltering(data: any[], where: any[]): any[] {
        const matchedIds = new Set<number>();
        // Match rows
        data.forEach(task => {
            const match = where.every(w => this.evaluatePredicate(task, w));
            if (match) {
                matchedIds.add(task.id);
            }
        });
        // Include parents
        Array.from(matchedIds).forEach(id => {
            this.includeParents(id, data, matchedIds);
        });
        // Include children
        Array.from(matchedIds).forEach(id => {
            this.includeChildren(id, data, matchedIds);
        });
        return data.filter(d => matchedIds.has(d.id));
    }

    private evaluatePredicate(task: any, pred: any): boolean {
        let value = task[pred.predicates[0].field];
        let filterValue = pred.predicates[0].value;
        if (typeof value === 'string') {
            value = value.toLowerCase();
            filterValue = String(filterValue).toLowerCase();
        }
        switch (pred.predicates[0].operator) {
            case 'equal': return value === filterValue;
            case 'startswith': return value?.startsWith(filterValue);
            case 'contains': return value?.includes(filterValue);
            case 'notequal': return value !== filterValue;
            default: return true;
        }
    }

    private includeParents(id: number, data: any[], set: Set<number>): void {
        const task = data.find(t => t.id === id);
        if (task?.ParentID != null && !set.has(task.ParentID)) {
            set.add(task.ParentID);
            this.includeParents(task.ParentID, data, set);
        }
    }

    private includeChildren(id: number, data: any[], set: Set<number>): void {
        data.filter(t => t.ParentID === id).forEach(child => {
            if (!set.has(child.id)) {
                set.add(child.id);
                this.includeChildren(child.id, data, set);
            }
        });
    }

    // For Handle Sort action
    private applySorting(data: any[], sorted: any[]): any[] {
        return data.sort((a, b) => {
            for (const s of sorted) {
                const dir = s.direction === 'descending' ? -1 : 1;
                if (a[s.name] > b[s.name]) return dir;
                if (a[s.name] < b[s.name]) return -dir;
            }
            return 0;
        });
    }
}
```
## Key considerations

- Use the `dataSourceChanged` event for CRUD operations and the `dataStateChange` event for sorting and filtering operations.
- After performing any operation, call `endEdit()` (for CRUD actions) and emit the updated data through the Observable to refresh the UI.

## See also
- [How to bind data to the Gantt Chart component?](https://ej2.syncfusion.com/angular/documentation/gantt/data-binding)
- [How to manage task editing?](https://ej2.syncfusion.com/angular/documentation/gantt/managing-tasks/editing-tasks)
- [How to handle virtual scrolling?](https://ej2.syncfusion.com/angular/documentation/gantt/scrolling/virtual-scrolling)