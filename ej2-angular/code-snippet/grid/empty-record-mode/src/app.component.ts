import { Component } from '@angular/core';
import { ChangeEventArgs, DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { EditService, GridModule, ToolbarService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ DropDownListModule, GridModule ],
    providers: [ EditService, ToolbarService ],
    standalone: true,
    selector: 'app-root',
    template: `
        <div class="control-section">
            <div style="margin-bottom: 20px;">
                <label for="empty-record-mode">Empty Record Mode: </label>
                <ejs-dropdownlist id="empty-record-mode" width="100" [dataSource]="mode"
                    [fields]="{ text: 'Mode', value: 'Id' }" [value]="emptyRecordMode"
                    (change)="onModeChange($event)"></ejs-dropdownlist>
            </div>
            <ejs-grid [dataSource]="data" [toolbar]="toolbar" [emptyRecordMode]="emptyRecordMode" [editSettings]="editSettings">
                <e-columns>
                    <e-column field="OrderID" isPrimaryKey="true" headerText="Order ID" textAlign="Right" [validationRules]="orderidRules" width="140"></e-column>
                    <e-column field="CustomerID" headerText="Customer ID" [validationRules]="customerIdRules" width="140"></e-column>
                    <e-column field="Freight" headerText="Freight" textAlign="Right" editType="numericedit" width="140" format="C2" [validationRules]="freightRules"></e-column>
                    <e-column field="OrderDate" headerText="Order Date" editType="datepickeredit" width="160" format="yMd"></e-column>
                    <e-column field="ShipCountry" headerText="Ship Country" width="150"></e-column>
                    <e-column field="ShipCity" headerText="Ship City" width="150"></e-column>
                    <e-column field="ShipAddress" headerText="Ship Address" width="200"></e-column>
                </e-columns>
            </ejs-grid>
        </div>`,
})
export class AppComponent {
    public data?: Object[];
    public toolbar?: string[];
    public editSettings?: Object;
    public emptyRecordMode?: string;
    public mode?: Object[];
    public orderidRules?: Object;
    public customerIdRules?: Object;
    public freightRules?: Object;

    public ngOnInit(): void {
        this.data = [];
        this.toolbar = [ 'Add', 'Edit', 'Delete', 'Update', 'Cancel' ];
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.emptyRecordMode = 'Sticky';
        this.mode = [
            { Id: 'Sticky', Mode: 'Sticky' },
            { Id: 'Normal', Mode: 'Normal' }
        ];
        this.orderidRules = { required: true, number: true };
        this.customerIdRules = { required: true };
        this.freightRules = { required: true, number: true };
    }

    public onModeChange(args: ChangeEventArgs): void {
        this.emptyRecordMode = args.value as string;
    }
}