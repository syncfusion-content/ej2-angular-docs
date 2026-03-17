import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule, ChangeEventArgs, CheckBoxModule, RadioButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { GridComponent, GridModule, GroupService, GroupSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [ GridModule,ButtonModule,CheckBoxModule,RadioButtonModule,SwitchModule],
  providers: [GroupService],
  standalone: true,
  selector: 'app-root',
  template: `
    <div>
      <label style="padding: 10px 10px">
      Hide or show grouped columns
      </label>
      <ejs-switch id="switch" (change)="onSwitchChange($event)"></ejs-switch>
    </div>
    <ejs-grid #grid style="padding: 10px 10px" [dataSource]='data' [allowGrouping]='true' [groupSettings]='groupOptions' height='250px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
      </e-columns>
      </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  @ViewChild('grid')
  public grid?: GridComponent;
  public groupOptions?: GroupSettingsModel;

  ngOnInit(): void {
    this.data = data;
    this.groupOptions = { showGroupedColumn: true, columns: ['CustomerID', 'ShipCity'] };
  }

  onSwitchChange(args: ChangeEventArgs) {
    if (args.checked) {
      (this.grid as GridComponent).groupSettings.showGroupedColumn = false;
    } else {
      (this.grid as GridComponent).groupSettings.showGroupedColumn = true;
    }
  }
}