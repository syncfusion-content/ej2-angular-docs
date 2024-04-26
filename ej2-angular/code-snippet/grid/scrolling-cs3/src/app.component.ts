import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { SwitchModule } from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-buttons';

@Component({
imports: [
        
        GridModule,
        SwitchModule 
    ],

,
standalone: true,
  selector: 'app-root',
  template: `
        <div style="padding:10px 0px 20px 0px">
        <label>Enable/Disable Sticky Header</label>
        <ejs-switch id="switch" (change)="toggleStickyHeader($event)"></ejs-switch>
        </div>
        <div style='height:350px;'>
        <ejs-grid #grid [dataSource]='data'>
            <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width="120"></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width="150"></e-column>
            <e-column field='Frieght' headerText='Freight' textAlign='Right' width="120"></e-column>
            <e-column field='ShipAddress' headerText='Ship Address' width="150"></e-column>
            </e-columns>
        </ejs-grid>
        </div> `
})
export class AppComponent implements OnInit {
  public data?: object[];
  @ViewChild('grid') public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
  }
  toggleStickyHeader(args: ChangeEventArgs): void {
    (this.grid as GridComponent).enableStickyHeader = (args.checked as boolean);
  }
}
