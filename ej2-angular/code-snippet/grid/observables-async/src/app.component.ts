import { CrudService } from './crud.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommandColumnService, DataSourceChangedEventArgs, DataStateChangeEventArgs, EditService, FilterService, GridAllModule, GridComponent, isComplexField, PageService, SearchService, SortService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { Query } from '@syncfusion/ej2-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <ejs-grid #grid [dataSource]='data | async' allowPaging="true" allowGrouping="true" [groupSettings]="groupOptions" 
    allowSorting="true" [sortSettings]="sortOptions" allowFiltering="true" [filterSettings]="filterOptions" [editSettings]='editSettings' [toolbar]='toolbar'
    (dataSourceChanged)='dataSourceChanged($event)' (dataStateChange)= 'dataStateChange($event)' height='150px'>
      <e-columns>
        <e-column field='id' headerText='Order ID' width='90' textAlign='Right' [validationRules]='orderIDRules' isPrimaryKey='true'></e-column>
        <e-column field="CustomerName" headerText="Customer Name" width="100"></e-column>
        <e-column field='ProductID' headerText='Product ID' width=100></e-column>
        <e-column field='ProductName' headerText='Product Name' width='160'></e-column>
      </e-columns>
    </ejs-grid>
  </div>`,
  standalone: true,
  imports: [
    CommonModule,
    GridAllModule,
  ],
  providers: [ToolbarService, SortService, EditService, FilterService, PageService, CommandColumnService, SearchService, CrudService]
})
export class AppComponent implements OnInit {
  public data?: Observable<any>;
  public state?: DataStateChangeEventArgs;
  public toolbar?: string[];
  public editSettings?: Object;
  public orderIDRules?: object;
  @ViewChild('grid')
  public grid?: GridComponent;
  public groupOptions?: object;  
  public filterOptions?: object;
  public sortOptions?: object;
  constructor(public crudService: CrudService) {
  }

  dataStateChange(state: DataStateChangeEventArgs): void {
    const query = (this.grid as GridComponent).getDataModule().generateQuery();
    this.crudService.execute(state, query);
  }

  dataSourceChanged(state: DataSourceChangedEventArgs): void {
    console.log('DataSourceChanged event triggered with state:', state);
    switch (state.action || state.requestType) {
      case 'add':
        this.crudService.addRecord(state).subscribe({
          next: () => {
            (state as GridComponent).endEdit();
          }
        });
        break;
      case 'edit':
        this.crudService.updateRecord(state).subscribe({
          next: () => {
            (state as GridComponent).endEdit();
          }
        });
        break;
      case 'delete':
        this.crudService.deleteRecord(state).subscribe({
          next: () => {
            (state as GridComponent).endEdit();
          }
        })
        break;
    }
  }

  public ngOnInit(): void {
    this.groupOptions = { columns: ['ProductName'], enableLazyLoading: true, showGroupedColumn: true, };
    this.filterOptions = { columns: [{ field: 'CustomerName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'Maria' }] }
    this.sortOptions = { columns: [{ field: 'ProductID', direction: 'Descending' }] }
    const state = { skip: 0, take: 12, group: this.groupOptions, filter:this.filterOptions, sorted:this.sortOptions };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
    };
    this.orderIDRules = { required: true };
    const query = new Query();
    this.data = this.crudService.state$;
    this.crudService.execute(state, query);
  }
}