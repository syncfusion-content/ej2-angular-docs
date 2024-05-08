import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, EditService, ToolbarService, SortService, PageService } from '@syncfusion/ej2-angular-grids'
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs'
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns'
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns'
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor'

import { Component, OnInit, ViewChild } from '@angular/core';
import { columnDataType, data } from './datasource';
import { EditSettingsModel, ToolbarItems, SaveEventArgs, IEditCell, PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { FocusInEventArgs } from '@syncfusion/ej2-angular-inputs';

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
        RichTextEditorAllModule
    ],

providers: [EditService, ToolbarService, SortService, PageService],
standalone: true,
    selector: 'app-root',
    template: `
        <ejs-grid #normalgrid [dataSource]="data" allowPaging="true" [pageSettings]="pageOptions"
        [editSettings]="editSettings" [toolbar]="toolbar" (actionBegin)="actionBegin($event)">
            <e-columns>
                <e-column field="OrderID" headerText="Order ID" width="100" textAlign="Right" isPrimaryKey="true"
                    [validationRules]="orderIDRules">
                </e-column>
                <e-column field="CustomerID" headerText="Customer ID" [validationRules]="customerIDRules" width="100"></e-column>
                <e-column field="Freight" headerText="Freight" width="100" format="C2" textAlign="Right"
                    editType="numericedit" [validationRules]="freightRules">
                </e-column>
                <e-column field="OrderDate" headerText="Order Date" width="100" editType="datetimepickeredit"
                    [format]="formatoptions" textAlign="Right">
                </e-column>
                <e-column field="ShipAddress" headerText="Ship Address" width="150" editType="textarea" [disableHtmlEncode]="false">
                    <ng-template #editTemplate let-data1>
                        <div *ngIf="orderData && orderData.ShipAddress !== undefined">
                            <ejs-richtexteditor id="rteEdit" [(value)]="orderData.ShipAddress" (focus)="onFocus($event)" #rteEdit>
                            </ejs-richtexteditor>
                        </div>
                    </ng-template>
               </e-column>
            </e-columns>
        </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public orderData: object | any;
    public orderIDRules?: Object;
    public customerIDRules?: Object;
    public freightRules?: Object;
    public editParams?: IEditCell;
    public formatoptions?: Object;
    public pageOptions?: PageSettingsModel;
    @ViewChild('normalgrid') public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.orderIDRules = { required: true, number: true };
        this.customerIDRules = { required: true };
        this.freightRules = { required: true };
        this.formatoptions = { type: 'dateTime', format: 'M/d/y hh:mm a' };
        this.editSettings = {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
        };
        this.pageOptions = { pageSizes: true, pageSize: 8 };

        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }

    actionBegin(args: SaveEventArgs) {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            this.orderData = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            (args.data as columnDataType)['ShipAddress'] = this.orderData['ShipAddress'];
        }
    }
    onFocus(args: FocusInEventArgs): void {
        ((args.event as Event).target as EventTarget).addEventListener('keydown', (e) => {
            if ((e as KeyboardEvent).key === 'Enter') {
                e.stopPropagation();
            }
        });
    }

}



