import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { ContextMenuService, PageService, EditService } from '@syncfusion/ej2-angular-grids'
import {
    ButtonModule,
    CheckBoxModule,
    RadioButtonModule,
    SwitchModule,
} from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, EditSettingsModel, ContextMenuItem } from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-buttons';

@Component({
imports: [
        
        GridModule,
        ButtonModule,
        CheckBoxModule,
        RadioButtonModule,
        SwitchModule,
    ],

providers: [ContextMenuService, PageService, EditService],
standalone: true,
    selector: 'app-root',
    template: `
    <div>
    <label style="padding: 10px 10px">
    Enable or disable context menu items
    </label>
    <ejs-switch id="switch" (change)="switchChange($event)"></ejs-switch>
    </div>
    <ejs-grid  #grid style="padding: 10px 10px" [dataSource]='data' id="grid" allowPaging='true' height='265px'
            [contextMenuItems]="contextMenuItems" [editSettings]='editing' >
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width='90' textAlign="Right" isPrimaryKey='true'></e-column>
                    <e-column field='CustomerID' headerText='Customer Name' width='100'></e-column>
                    <e-column field='Freight' headerText='Freight' format='C2' textAlign="Right" editType='numericedit' width='90'></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
                </e-columns>
            </ejs-grid>`,
})
export class AppComponent implements OnInit {

    public data?: object[];
    public contextMenuItems?: ContextMenuItem[];
    @ViewChild('grid')
    public grid?: GridComponent;
    public editing?: EditSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.contextMenuItems = ['Copy', 'Edit', 'Delete'];
        this.editing = { allowAdding: true, allowDeleting: true, allowEditing: true };
    }

    switchChange(args: ChangeEventArgs) {
        if (args.checked) {
            (this.grid as GridComponent).contextMenuModule.contextMenu.enableItems(['Copy'], false);
        } else {
            (this.grid as GridComponent).contextMenuModule.contextMenu.enableItems(['Copy'], true);
        }
    }

}



