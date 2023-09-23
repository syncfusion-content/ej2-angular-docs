import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
  selector: 'app-root',
  template: `<div style="padding:0px 0px 20px 0px">
            <label> Enable/Disable Row Hover</label>
            <ejs-switch id="switch" [(checked)]="enableRowHover" 
            (change)="toggleRowHover()"></ejs-switch>
            </div>
            <ejs-grid id='Grid' [dataSource]='data' [enableHover]="enableRowHover">
              <e-columns>
                  <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
                  width=120></e-column>
                  <e-column field='CustomerID' headerText='Customer ID' width=150>
                  </e-column>
                  <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                  <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
              </e-columns>
            </ejs-grid>`,
  // styleUrls:['./app.component.css']
})
export class AppComponent implements OnInit {

  public data?: object[];
  public enableRowHover: boolean = true;

  ngOnInit(): void {
    this.data = data;
  }
  toggleRowHover(): void {
    this.enableRowHover = !this.enableRowHover;
  }
  
}
