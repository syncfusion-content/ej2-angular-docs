---
layout: post
title: Observable in Angular Gantt component | Syncfusion
description: Learn how to bind Observables in the Syncfusion Angular Gantt component for reactive data updates and real-time task management.
platform: ej2-angular
control: Observable
documentation: ug
domainurl: ##DomainURL##
---

# Observable in Angular Gantt component

The Angular Gantt component supports [Observable](https://v17.angular.io/guide/observables) data binding, enabling reactive updates to reflect task changes, such as real-time schedule adjustments, without manual intervention. By piping Observables through the [async](https://v17.angular.io/api/common/AsyncPipe) pipe, the component automatically subscribe to data changes, updates the UI, and manages subscription to prevent memory leaks. This is ideal for handling asynchronous data from APIs or WebSockets, ensuring efficient synchronization in project management scenarios. Observables require a data structure with `result` (an array of task data) and `count` (total record count) for proper binding, supporting features like virtual scrolling. Taskbars and grid rows include ARIA labels for accessibility, and the UI adapts to responsive designs, though large datasets may need caching for performance.

## Bind Observables with async pipe

Bind data to the Gantt component using an Observable with the async pipe, which subscribe on initialization, unsubscribe on destruction, and triggers change detection only on new emissions. The Observable must emit an object with:
- `result`: Array of tasks with properties like **id**, **TaskName**, and **StartDate**.
- `count`: Total number of tasks.

The following example demonstrates Observable binding:

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

The following example implements a service for fetching tasks:

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

## Limitations

Full CRUD operations (Create, Read, Update, Delete) are not supported with Observable binding in the Gantt component, as direct data manipulation is limited. Use traditional data binding with direct methods for full CRUD support.

## See also
- [How to bind data to the Gantt component?](https://ej2.syncfusion.com/angular/documentation/gantt/data-binding)
- [How to manage task editing?](https://ej2.syncfusion.com/angular/documentation/gantt/managing-tasks/editing-tasks)
- [How to handle virtual scrolling?](https://ej2.syncfusion.com/angular/documentation/gantt/scrolling/virtual-scrolling)