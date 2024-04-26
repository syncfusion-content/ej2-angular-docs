import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, EditService } from '@syncfusion/ej2-angular-grids'
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'




import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangeEventArgs, DropDownListComponent, } from '@syncfusion/ej2-angular-dropdowns';
import { data } from './datasource';
import { GridComponent, EditSettingsModel  } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        ToolbarModule,
        DropDownListAllModule
    ],

providers: [ToolbarService, EditService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height='200px' [editSettings]='editSettings'>
                <ng-template #toolbarTemplate let-data>
                <div style="display: flex">
                    <label style="padding: 10px 10px 26px 0">
                        Change the value:
                    </label>
                    <ejs-dropdownlist #dropDown style="margin-top:5px" (change)="onChange($event)" [dataSource]='dropDownData' [placeholder]='placeholder' width="120px"></ejs-dropdownlist>
                </div>
                    </ng-template>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?:EditSettingsModel ;
    public placeholder = 'Select a value'

    @ViewChild('grid')
    public grid: GridComponent;
    @ViewChild('dropDown')
    public dropDown: DropDownListComponent;

    ngOnInit(): void {
        this.data = data;
        this.editSettings={ allowEditing: true, allowAdding: true, allowDeleting: true }
    }

    public dropDownData = [{ text: 'Edit' }, { text: 'Delete' }, { text: 'Update' }];
    public onChange(args: ChangeEventArgs): void {
        const selectedRow = this.grid.getSelectedRecords()[0];
        if (args.itemData.text === 'Update') {
            this.grid.endEdit();
        }
        if (args.itemData.text === 'Edit') {
            this.grid.startEdit();
        }
        if (args.itemData.text === 'Delete') {
            this.grid.deleteRecord(selectedRow as string);
        }
        (this.dropDown as DropDownListComponent).value = '';
        (this.dropDown as DropDownListComponent).placeholder = args.itemData.text as string;
    }
}



