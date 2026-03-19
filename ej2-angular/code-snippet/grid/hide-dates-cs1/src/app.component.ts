import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerAllModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AutoCompleteModule, DropDownListModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { EditService, EditSettingsModel, GridComponent, GridModule, PageService, SortService, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [
      GridModule,
      DatePickerAllModule,
      FormsModule,
      TimePickerModule,
      FormsModule,
      TextBoxModule,
      MultiSelectModule,
      AutoCompleteModule,
      DropDownListModule
        ],

    providers: [EditService, ToolbarService, SortService, PageService],
    standalone: true,
    selector: 'app-root',
    template: `
        <ejs-grid #grid [dataSource]="data" [editSettings]="editSettings" [toolbar]="toolbar" height="250px"   (actionBegin)='actionBegin($event)'>
          <e-columns>
            <e-column field="OrderID" headerText="Order ID" isPrimaryKey="true" textAlign="Right" width="120" [validationRules]='orderIDRules'></e-column>
            <e-column field="CustomerID" headerText="Customer Name" width="120" [validationRules]='customerIDRules'></e-column>
            <e-column field="OrderDate" headerText="Order Date" editType="datepickeredit" format="M/d/yy" textAlign="Right" [validationRules]='dateRules' width="130" type="date"></e-column>
            <e-column field="Freight" headerText="Freight" format="C2" textAlign="Right" width="90" [validationRules]='freightRules'></e-column>
          </e-columns>
        </ejs-grid>`
})
export class AppComponent implements OnInit {
  @ViewChild('grid') public grid?: GridComponent;
    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public orderData?: object|any;
    public orderIDRules?: object;
    public customerIDRules?: object;
    public freightRules?: object;
    public dateRules?: object;
    public verifiedRules?: object;

    ngOnInit(): void {
        this.data = data;
        this.orderIDRules = { required: true };
        this.customerIDRules = { required: true  };
        this.dateRules= { required: true  };
        this.verifiedRules= { required: true  };
        this.freightRules = { required: true, min: 1, max: 1000 };
        this.editSettings = {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
        };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
    actionBegin(args: any): void {
      if (args.requestType === 'beginEdit') {
        let minDate = (args as any).rowData['OrderDate'];
        (this.grid as GridComponent).columns.forEach((column) => {
          if ((column as any).field === 'OrderDate') {
            (column as any).edit.params = { min: minDate };
          }
        });
      }
    }
}
