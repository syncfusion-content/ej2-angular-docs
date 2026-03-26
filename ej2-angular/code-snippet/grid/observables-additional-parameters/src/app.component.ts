import { DataService } from './order.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AggregateService, DataStateChangeEventArgs, EditService, ExcelExportService, FilterService, GridComponent, GridModule, GroupService, PageService, PdfExportService, SortService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { Query } from '@syncfusion/ej2-data';
import { Observable } from 'rxjs';

@Component({
  imports: [CommonModule, GridModule, HttpClientModule,],
  providers: [
      PageService,
      SortService,
      FilterService,
      EditService,
      ToolbarService,
      GroupService,
      PdfExportService, 
      ExcelExportService,
      AggregateService,
      HttpClient,
      DataService
   ],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-grid #grid [dataSource]='data | async' [query]="query" allowPaging='true' [pageSettings]='pageOptions' 
              allowSorting= 'true' allowGrouping= 'true' (dataStateChange)= 'dataStateChange($event)' height='250px'>
                <e-columns>
                  <e-column field='OrderID' headerText='Order ID' width='90' textAlign='Right'></e-column>
                  <e-column field="CustomerID" headerText="Customer Name" width="100"></e-column>
                  <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
                  <e-column field='Freight' headerText='Freight' format='C2' textAlign='Right' width=100></e-column>
                </e-columns>
              </ejs-grid>`
})
export class AppComponent implements OnInit {
  public data?: Observable<DataStateChangeEventArgs>;
  public state?: DataStateChangeEventArgs;
  public pageOptions?: object;
  public query?: Query;
  @ViewChild('grid')
  public grid?: GridComponent;

  constructor(public service: DataService) {
    this.data = service;
  }

  public dataStateChange(state: DataStateChangeEventArgs): void {
    this.service.execute(state, this.query);
  }
  public ngOnInit(): void {
    this.pageOptions = { pageSize: 10, pageCount: 4 };
    const state = { skip: 0, take: 10 };
    this.query = new Query().addParams('Syncfusion_Angular_Grid', 'true');
    this.service.execute(state, this.query);
  }
}