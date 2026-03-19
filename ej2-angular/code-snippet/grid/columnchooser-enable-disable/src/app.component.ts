import { data } from './datasource';
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { ColumnChooserService, GridComponent, GridModule, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

@Component({
    imports: [ GridModule,SwitchModule],
    providers: [ToolbarService, ColumnChooserService],
    standalone: true,
    selector: 'app-root',
    template: `
      <div style="padding: 5px 0px 5px 0px">
        <label style="padding-right: 10px">Enable and disable search option</label>
        <ejs-switch #switch id="switch" [checked]="true" (change)="change($event)">
        </ejs-switch>
      </div>
      <ejs-grid #grid [dataSource]='data' [toolbar]='toolbarOptions' height='260px' [showColumnChooser]= 'true'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width='120' textAlign="Right"></e-column>
            <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd" textAlign="Right"></e-column>
            <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign="Right"></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
            <e-column field='ShipCity' headerText='Ship City' [visible]='false' width='150'></e-column>
        </e-columns>
      </ejs-grid>`
})
export class AppComponent implements OnInit {
  @ViewChild('grid') public grid?: GridComponent;
  public data?: object[];
  public toolbarOptions?: ToolbarItems[];

  public ngOnInit(): void {
    this.data = data;
    this.toolbarOptions = ['ColumnChooser'];
  }

  public change(args: CustomChangeEventArgs){
    (this.grid as GridComponent).columnChooserSettings.enableSearching=args.checked;
  }
}
interface CustomChangeEventArgs extends ChangeEventArgs {
  checked: boolean;
}