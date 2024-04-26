import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { PageService, SortService, FilterService, GroupService, InfiniteScrollService, LazyLoadGroupService,
    EditService, ToolbarService, AggregateService, SearchService, PdfExportService, ExcelExportService,  } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { DataStateChangeEventArgs, DataSourceChangedEventArgs } from '@syncfusion/ej2-angular-grids';
import { CrudService } from './crud.service';
import { Observable } from 'rxjs';
import { Customer } from './customers';
import { query } from '@angular/animations';

@Component({
imports: [
        
        GridModule,HttpClientModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],

providers: [PageService,
                SortService,
                FilterService,
                EditService,
                ToolbarService,
                GroupService,
                PdfExportService, 
                ExcelExportService,
                AggregateService,
                InfiniteScrollService, 
                LazyLoadGroupService,
                SearchService,
                HttpClient ],
standalone: true,
  selector: 'app-root',
  template: `<ejs-grid #grid [dataSource]='data | async' [editSettings]='editSettings' [toolbar]='toolbar' allowPaging="true" allowGrouping="true" 
              [groupSettings]="groupOptions" allowSorting="true" [sortSettings]='sortOptions' allowFiltering="true" [filterSettings]='filterOptions'
              (dataSourceChanged)='dataSourceChanged($event)' (dataStateChange)= 'dataStateChange($event)'>
                <e-columns>
                  <e-column field='id' headerText='Order ID' width='90' textAlign='Right' isPrimaryKey='true' [validationRules]='orderIDRules'></e-column>
                  <e-column field="CustomerName" headerText="Customer Name" width="100"></e-column>
                  <e-column field='ProductID' headerText='Product ID' width=100></e-column>
                  <e-column field='ProductName' headerText='Product Name' format='C2' width=100></e-column>
                </e-columns>
              </ejs-grid>`,
  providers: [CrudService],
})
export class AppComponent implements OnInit {
  public data?: Observable<DataStateChangeEventArgs>;
  public state?: DataStateChangeEventArgs;
  public customers?: Customer[];
  public toolbar?: string[];
  public editSettings?: Object;
  public orderIDRules?: object;
  @ViewChild('grid')
  public grid?: GridComponent;
  public groupOptions?: object;
  public filterOptions?: object;
  public sortOptions?: object;

  constructor(public crudService: CrudService) {
    this.data = crudService;
  }

  public dataStateChange(state: DataStateChangeEventArgs): void {
    const query = (this.grid as GridComponent).getDataModule().generateQuery();
    this.crudService.execute(state, query);
  }

  public dataSourceChanged(state: DataSourceChangedEventArgs): void {
    switch (state.action || state.requestType) {
      case 'add': {
        this.crudService.addRecord(state).subscribe(() => {
          (state as GridComponent).endEdit();
        });
      }
        break;
      case 'edit': {
        this.crudService.updateRecord(state).subscribe(() => (state as GridComponent).endEdit());
      }
        break;
      case 'delete': {
        this.crudService.deleteRecord(state).subscribe(() => {
          (state as GridComponent).endEdit();
        });
      }
        break;
    }
  }

  public ngOnInit(): void {
    this.groupOptions = { columns: ['ProductName'], enableLazyLoading: true, showGroupedColumn: true, };
    this.filterOptions = { columns: [{ field: 'CustomerName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'Maria' }] }
    this.sortOptions = { columns: [{ field: 'ProductID', direction: 'Descending' }] }
    const state = { skip: 0, take: 12, group: this.groupOptions, filter:this.filterOptions, sorted:this.sortOptions };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
    this.orderIDRules = { required: true };
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
    };
    this.crudService.execute(state, query);
  }
}