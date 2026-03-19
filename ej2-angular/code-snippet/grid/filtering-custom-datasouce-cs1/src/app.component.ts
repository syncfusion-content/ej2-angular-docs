import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { FilterService, FilterSettingsModel, GridModule, PageService, SortService } from '@syncfusion/ej2-angular-grids';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

@Component({
  imports: [GridModule],
  providers: [PageService, SortService, FilterService],
  selector: 'app-root',
  standalone: true,
  template: `<ejs-grid #grid [dataSource]="data" [filterSettings]="filterOptions"  [allowFiltering]="true" [allowPaging]="true" [pageSettings]="pageOptions" [allowSorting]="true" [height]="273" (actionBegin)="actionBegin($event)">
              <e-columns>
                <e-column field="OrderID" headerText="Order ID" width="100" textAlign="Right"></e-column>
                <e-column field="CustomerID" headerText="Customer ID" width="100"></e-column>
                <e-column field="Freight" headerText="Freight" width="100" format="C2"></e-column>
                <e-column field="OrderDate" headerText="Order Date" width="100" format="yMd"></e-column>
              </e-columns>
             </ejs-grid>`
})
export class AppComponent implements OnInit {
  public data: object[] = [];
  public filterOptions: FilterSettingsModel = { type: 'Excel' };
  public pageOptions = { pageSize: 12 };

  public ngOnInit(): void {
    this.data = data;
  }
  
  public actionBegin(args: any): void {
    const hostUrl = 'https://services.syncfusion.com/angular/production/';
    if (args.requestType === "filterBeforeOpen") {
      args.filterModel.options.dataSource = new DataManager({
        url: hostUrl + 'api/Orders',
        adaptor: new WebApiAdaptor(),
      });
    }
  }
}
