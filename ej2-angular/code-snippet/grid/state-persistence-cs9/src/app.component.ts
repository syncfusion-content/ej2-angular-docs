import { OrdersService } from './order.service';
import { AsyncPipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { DataStateChangeEventArgs, FilterService, GridComponent, GridModule, GroupService, PageService, SortService } from '@syncfusion/ej2-angular-grids';
import { getStateEventArgument } from '@syncfusion/ej2-grids';
import { Observable } from 'rxjs';

@Component({
    imports: [ GridModule, AsyncPipe],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #persistGrid height="170" id="persistGrid" [dataSource]="data | async" [enablePersistence]="true" allowPaging="true" [pageSettings]="pageSettings" allowSorting="true" [sortSettings]="sortSettings" allowFiltering="true" [filterSettings]="filterSettings" allowGrouping="true" [groupSettings]="groupSettings" (created)="created()" (dataStateChange)="dataStateChange($event)">
                  <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120 ></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150 ></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150 ></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150 ></e-column>
                  </e-columns>
                </ejs-grid>`,
        providers: [GroupService, SortService, FilterService, PageService]
    })
export class AppComponent {
    @ViewChild('persistGrid', { static: true }) grid!: GridComponent;
    public data: Observable<DataStateChangeEventArgs>;
    public pageSettings = { pageSize: 12, currentPage: 2 };
    public sortSettings = {
      columns: [{ field: 'OrderID', direction: 'Descending' }],
    };
    public filterSettings = {
      columns: [{field: 'CustomerID', matchCase: false, operator: 'startswith', predicate: 'and', value: 'A' }],
    };
    public groupSettings = { columns: ['ShipCity'] };
    constructor(private service: OrdersService) {
      this.data = service;
    }
    public created(): void {
      const queries = this.grid.getDataModule().generateQuery(); // Generate the initial query state from the Grid's data module.
      const state = getStateEventArgument(queries); // Retrieve the Grid's current state based on the generated query.
      this.service.execute(state); // Send the retrieved state to the service to fetch data accordingly.
    }
    public dataStateChange(state: DataStateChangeEventArgs): void {
      this.service.execute(state);
    }
}