import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, FilterService, SortService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import {TextBoxModule} from '@syncfusion/ej2-angular-inputs'

import { Component, ViewChild } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { GridComponent, ColumnModel } from '@syncfusion/ej2-angular-grids';
import { Query, DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

const SERVICE_URI: string = 'https://services.syncfusion.com/angular/production/';
@Component({
imports: [
        
        GridModule,
        ButtonModule,
        DropDownListAllModule,
        TextBoxModule
    ],

providers: [PageService, FilterService, SortService],
standalone: true,
  selector: 'app-root',
  template: `<ejs-grid #grid [dataSource]='data' [query]='query' allowSorting='true' allowPaging='true' allowFiltering='true' [pageSettings]='pageSettings' [filterSettings]='filterSettings'>
              <e-columns>
                  <e-column field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right'></e-column>
                  <e-column field='Employees' headerText='Employee Name' width='150'></e-column>
                  <e-column field='Designation' headerText='Designation' width='130' textAlign='Right'></e-column>
                  <e-column field='CurrentSalary' headerText='CurrentSalary' width='120' format='C2' textAlign='Right'></e-column>
              </e-columns>
            </ejs-grid>`
})
export class AppComponent {

  public data: DataManager;
  public query: Query;
  public pageSettings: Object | undefined;
  public filterSettings: Object | undefined;

  @ViewChild('grid')
    public grid?: GridComponent;
  
  ngOnInit(): void {
      this.data = new DataManager({ url: SERVICE_URI + 'api/UrlDataSource', adaptor: new UrlAdaptor });
      this.query = new Query().addParams('dataCount', '10000');
      this.pageSettings = { pageCount: 5 };
      this.filterSettings = { type: 'Excel', enableInfiniteScrolling: true };
  };

}
