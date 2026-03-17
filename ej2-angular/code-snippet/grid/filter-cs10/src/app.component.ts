import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { FilterService, GridComponent, GridModule, GroupService, PageService, PageSettingsModel, SortService } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [ GridModule, ButtonModule],
  providers: [PageService, SortService, FilterService, GroupService],
  standalone: true,
  selector: 'app-root',
  template: `<button ejs-button cssClass="e-primary" (click)="onClick()">Clear filter</button><ejs-grid #grid [dataSource]='data' [allowPaging]='true' [allowSorting]='true'
                [allowFiltering]='true' [pageSettings]='pageSettings'>
                 <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' textAlign='Right' width=120></e-column>
                 </e-columns>
              </ejs-grid>`,
})
export class AppComponent implements OnInit {
  @ViewChild('grid') public grid?: GridComponent;
  public data?: object[];
  public pageSettings?: PageSettingsModel;

  ngOnInit(): void {
    this.data = data;
    this.pageSettings = { pageSize: 6 };
  }
  public onClick(): void {
    this.grid?.clearFiltering(); //clear filtering for all columns
  }
}