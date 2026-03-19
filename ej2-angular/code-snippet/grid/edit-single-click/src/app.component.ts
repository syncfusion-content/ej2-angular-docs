import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { EditService, EditSettingsModel, GridComponent, GridModule, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule,CheckBoxModule ],
    providers: [EditService, ToolbarService ],
    standalone: true,
    selector: 'app-root',
    template: `
        <ejs-grid #grid [dataSource]="data" [editSettings]="editSettings" [toolbar]="toolbar" height="250px">
          <e-columns>
            <e-column field="OrderID" headerText="Order ID" isPrimaryKey="true" textAlign="Right" width="120" [validationRules]='orderIDRules'></e-column>
            <e-column field="CustomerID" headerText="Customer Name" width="120" [validationRules]='customerIDRules'></e-column>
            <e-column field="OrderDate" headerText="Order Date" editType="datepickeredit" format="M/d/yy" textAlign="Right" [validationRules]='dateRules' width="130" type="date"></e-column>
            <e-column field="Freight" headerText="Freight" format="C2" textAlign="Right" width="90" [validationRules]='freightRules'></e-column>
            <e-column field="Verified" headerText="Verified" textAlign="Right" width="90" [validationRules]='verifiedRules'>
              <ng-template #template let-data>
                <ejs-checkbox [(checked)]="data.Verified" (change)="onVerifiedChange(data)"></ejs-checkbox>
              </ng-template>
            </e-column>
          </e-columns>
        </ejs-grid>`
})
export class AppComponent implements OnInit {

   @ViewChild('grid')
    public grid: GridComponent | undefined;
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

  public onVerifiedChange(rowData: object | any): void {
    const rowIndex = (this.grid as GridComponent).getRowIndexByPrimaryKey(
      rowData.OrderID
    );
    (this.grid as GridComponent).updateRow(rowIndex, rowData);
  }    
}
