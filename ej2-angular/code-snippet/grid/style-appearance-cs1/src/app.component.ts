import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit } from '@angular/core';
import { PageService, GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService],
standalone: true,
  selector: 'app-root',
  template: `<ejs-grid [dataSource]='data' [allowPaging]='true' [pageSettings]='pageSettings' [selectionSettings]='selectionOptions' height='268px'>
            <e-columns>
                  <e-column field='OrderID' headerText='Order ID' type='number' isPrimaryKey='true' textAlign='Right' width=100></e-column>
                  <e-column field='CustomerID' headerText='Customer ID' type='string' width=120></e-column>
                  <e-column field='Freight' headerText='Freight' type='number' textAlign='Right' format='C' width=100></e-column>
                  <e-column field='ShipName' headerText='Ship Name' type='string' width=180></e-column>
            </e-columns>
            </ejs-grid>`,
      providers: [PageService]
})
export class AppComponent implements OnInit {
  public data?: Object[];
  public grid?: GridComponent;
  public pageSettings?: Object;
  public selectionOptions?: SelectionSettingsModel;

  ngOnInit(): void {
    this.data = data;
    this.pageSettings = { pageSize: 8 };
    this.selectionOptions = { type: 'Multiple' };
  }
}



