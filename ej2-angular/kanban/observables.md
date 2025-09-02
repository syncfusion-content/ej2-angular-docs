---
layout: post
title: Observables in Angular Kanban Component | Syncfusion
description: Learn here all about Observables in Syncfusion Angular Kanban component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Observables
documentation: ug
domainurl: ##DomainURL##
---

# Observables in Angular Kanban Component

An [`Observable`](https://angular.io/guide/observables) is used extensively by Angular since it provide significant benefits over techniques for event handling, asynchronous programming, and handling multiple values.

## Observable binding using async pipe

Kanban data can be consumed from an [`Observable`](https://angular.io/guide/observables) object by piping it through an [`async`](https://angular.io/api/common/AsyncPipe) pipe. The [`async`](https://angular.io/api/common/AsyncPipe) pipe is used to subscribe the observable object and resolve with the latest value emitted by it.

## Data binding

The kanban expects an object from the [`Observable`](https://angular.io/guide/observables). The emitted value should be an object with properties **result** and **count**.

```ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from './task.service';
import { DataStateChangeEventArgs, DataSourceChangedEventArgs } from '@syncfusion/ej2-kanban';
import { CardSettingsModel } from '@syncfusion/ej2-angular-kanban';

@Component({
  selector: 'app-root',
  template: `<ejs-kanban #kanbanObj keyField='Status' [dataSource]='data | async' [cardSettings]='cardSettings' (dataStateChange)= 'dataStateChange($event)'  (dataSourceChanged)='dataSourceChanged($event)'>
    <e-columns>
        <e-column headerText='To Do' keyField='Open'></e-column>
        <e-column headerText='In Progress' keyField='InProgress'></e-column>
        <e-column headerText='Testing' keyField='Testing'></e-column>
        <e-column headerText='Done' keyField='Close'></e-column>
    </e-columns>
</ejs-kanban>`,
  providers: [TasksService]
})
export class AppComponent implements OnInit {
  public data: Observable<DataStateChangeEventArgs>;
    public state: DataStateChangeEventArgs;
    public cardSettings: CardSettingsModel;

    constructor(private service: TasksService) {
        this.data = service;
    }

    public dataSourceChanged(state: DataSourceChangedEventArgs): void {
        if (state.requestType === 'cardCreated') { state.endEdit() }
        else if (state.requestType === 'cardChanged') { state.endEdit() }
        else if (state.requestType === 'cardRemoved') { state.endEdit() }
    }

    public dataStateChange(state: DataStateChangeEventArgs): void {
        this.service.execute(state);
    }

    public ngOnInit(): void {
        let state = { skip: 0, take: 10 };
        this.service.execute(state);
        this.cardSettings = {
            contentField: 'Summary',
            headerField: 'Id'
        };
    }
}

```

```ts
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-angular-kanban'
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TasksService extends Subject<DataStateChangeEventArgs> {
    private BASE_URL = 'https://ej2services.syncfusion.com/production/web-services/api/Kanban';

    constructor(private http: Http) {
        super();
    }

    public execute(state: any): void {
        this.getData(state).subscribe(x => super.next(x));
    }

    protected getData(state: DataStateChangeEventArgs): Observable<DataStateChangeEventArgs> {
        return this.http
           .get(`${this.BASE_URL}`)
           .pipe(map((response: any) => response.json()))
           .pipe(map((response: any) => (<any>{
            result: response
        })))
        .pipe((data: any) => data);
    }
}

```

> You should maintain the same [`Observable`](https://angular.io/guide/observables) instance for every kanban action.
> When initial rendering, the [dataStateChange](https://ej2.syncfusion.com/angular/documentation/api/kanban/#datastatechange) event will not be triggered. You can perform the operation in the **ngOnInit** if you want the kanban to show the cards.

## Perform CRUD operations

The [dataSourceChanged](https://ej2.syncfusion.com/angular/documentation/api/kanban/#datasourcechanged) event is triggered to update the kanban data. You can perform the save operation based on the event arguments and you need to call the `endEdit` method to indicate the completion of the save operation.

```ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from './task.service';
import { DataStateChangeEventArgs, DataSourceChangedEventArgs } from '@syncfusion/ej2-kanban';
import { CardSettingsModel } from '@syncfusion/ej2-angular-kanban';

@Component({
    selector: 'app-root',
    template: `
    <ejs-kanban #kanbanObj keyField='Status' [dataSource]='data | async' [cardSettings]='cardSettings' (dataStateChange)= 'dataStateChange($event)'  (dataSourceChanged)='dataSourceChanged($event)'>
    <e-columns>
        <e-column headerText='To Do' keyField='Open'></e-column>
        <e-column headerText='In Progress' keyField='InProgress'></e-column>
        <e-column headerText='Testing' keyField='Testing'></e-column>
        <e-column headerText='Done' keyField='Close'></e-column>
    </e-columns>
</ejs-kanban>`,
})
export class AppComponent implements OnInit {
    public data: Observable<DataStateChangeEventArgs>;
    public state: DataStateChangeEventArgs;
    public cardSettings: CardSettingsModel;

    constructor(private service: TasksService) {
        this.data = service;
    }

    public dataSourceChanged(state: DataSourceChangedEventArgs): void {
       if (state.requestType === 'cardCreated') {
            this.crudService.addCard(state).subscribe(() => {
                state.endEdit();
            });
        } else if (state.requestType === 'cardChanged') {
            this.crudService.updateCard(state).subscribe(() => {
                state.endEdit();
            });
        } else if (state.requestType === 'cardRemoved') {
            this.crudService.deleteCard(state).subscribe(() => {
                state.endEdit();
            });
        }
    }

    public dataStateChange(state: DataStateChangeEventArgs): void {
        this.service.execute(state);
    }

    public ngOnInit(): void {
        let state = { skip: 0, take: 10 };
        this.service.execute(state);
        this.cardSettings = {
            contentField: 'Summary',
            headerField: 'Id'
        };
    }
}

```

```ts
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-angular-kanban'
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TasksService extends Subject<DataStateChangeEventArgs> {
    private BASE_URL = 'https://ej2services.syncfusion.com/production/web-services/api/Kanban';

    constructor(private http: Http) {
        super();
    }

    public execute(state: any): void {
        this.getData(state).subscribe(x => super.next(x));
    }

    protected getData(state: DataStateChangeEventArgs): Observable<DataStateChangeEventArgs> {
        return this.http
           .get(`${this.BASE_URL}`)
           .pipe(map((response: any) => response.json()))
           .pipe(map((response: any) => (<any>{
            result: response
        })))
        .pipe((data: any) => data);
    }

    /** POST: add a new record  to the server */
    addCard(state: DataSourceChangedEventArgs): Observable<Customer> {
        return this.http.post<Customer>(this.customersUrl, state.addedRecords[0], httpOptions);
    }

    /** DELETE: delete the record from the server */
    deleteCard(state: any): Observable<Customer> {
        const id = state.deletedRecords[0].taskId;
        const url = `${this.customersUrl}/${id}`;
        return this.http.delete<Customer>(url, httpOptions);
    }

    /** PUT: update the record on the server */
    updateCard(state: DataSourceChangedEventArgs): Observable<any> {
        return this.http.put(this.customersUrl, state.changedRecords[0], httpOptions);
    }
}

```
