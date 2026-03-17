import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangeEventArgs, DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { GridComponent, GridModule, ResizeMode, ResizeService } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [ GridModule, DropDownListAllModule],
  providers: [ResizeService],
  standalone: true,
  selector: 'app-root',
  template: `
  <div style="display: flex">
    <label style="padding: 5px 5px 5px 0"> Change the resize mode: </label>
    <ejs-dropdownlist index="0" width="150" [dataSource]="ddlData" (change)="valueChange($event)"></ejs-dropdownlist>
  </div>
  <ejs-grid #grid style="padding: 5px 5px" [dataSource]='data' [allowResizing]='true' height='290px'>
    <e-columns>
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
      <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
      <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
      <e-column field='Freight' headerText='Freight' width=80></e-column>
    </e-columns>
  </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  @ViewChild('grid')
  public grid?: GridComponent;
  public ddlData: object[] = [
    { text: 'Normal', value: 'Normal' },
    { text: 'Auto', value: 'Auto' },
  ];

  ngOnInit(): void {
    this.data = data;
  }

  valueChange(args: ChangeEventArgs): void {
    (this.grid as GridComponent).resizeSettings.mode = (args.value as ResizeMode);
  }
}
