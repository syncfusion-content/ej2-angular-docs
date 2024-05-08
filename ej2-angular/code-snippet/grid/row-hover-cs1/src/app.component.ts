import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { DetailRowService } from '@syncfusion/ej2-angular-grids'
import { SwitchModule } from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit,ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';
import { ChangeEventArgs } from '@syncfusion/ej2-navigations';

@Component({
imports: [
        
        GridModule,
        SwitchModule        
    ],

providers: [DetailRowService],
standalone: true,
  selector: 'app-root',
  template: `<div style="padding:0px 0px 20px 0px">
            <label> Enable/Disable Row Hover</label>
            <ejs-switch id="switch" [checked]="true" 
            (change)="toggleRowHover($event)"></ejs-switch>
            </div>
            <ejs-grid #grid [dataSource]='data'>
              <e-columns>
                  <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
                  width=120></e-column>
                  <e-column field='CustomerID' headerText='Customer ID' width=150>
                  </e-column>
                  <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                  <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
              </e-columns>
            </ejs-grid>`
          
})
export class AppComponent implements OnInit {

  public data?: object[];
  @ViewChild('grid') public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
  }
  toggleRowHover(args:CustomChangeEventArgs): void {
   (this.grid as GridComponent).enableHover = args.checked;
  }
  
}

interface CustomChangeEventArgs extends ChangeEventArgs {
  checked: boolean;
}
