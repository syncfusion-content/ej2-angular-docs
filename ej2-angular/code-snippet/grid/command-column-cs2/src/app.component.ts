import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, EditService, CommandColumnService } from '@syncfusion/ej2-angular-grids'
import { DialogModule } from '@syncfusion/ej2-angular-popups'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { CommandModel, CommandClickEventArgs, GridComponent, Column, IRow, EditSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        DialogModule
    ],

providers: [EditService, CommandColumnService],
standalone: true,
  selector: 'app-root',
  template: `
        <ejs-grid #grid [dataSource]="data" [editSettings]="editSettings" (commandClick)="commandClick($event)" height="310px">
        <e-columns>
            <e-column field="OrderID" headerText="Order ID" textAlign="Right" isPrimaryKey="true" width="100"></e-column>
            <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
            <e-column field="Freight" headerText="Freight" textAlign="Right" editType="numericedit" width="120" format="C2"></e-column>
            <e-column field="ShipCountry" headerText="Ship Country" editType="dropdownedit" width="150"></e-column>
            <e-column headerText="Commands" width="140" [commands]="commands"></e-column>
        </e-columns>
        </ejs-grid>
        <ejs-dialog #dialog header="Row Information" [content]="dialogContent" showCloseIcon="true"
            width="400px" [visible]="dialogVisible" (close)="dialogClose()">
            <ng-template #dialogContent>
                <ng-container *ngIf="rowData">
                    <p><b>ShipName:</b> {{ rowData.ShipName }}</p>
                    <p><b>ShipPostalCode:</b> {{ rowData.ShipPostalCode }}</p>
                    <p><b>ShipAddress:</b> {{ rowData.ShipAddress }}</p>
                </ng-container>
            </ng-template>
        </ejs-dialog>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public commands?: CommandModel[];
    @ViewChild('grid') public grid?: GridComponent;
    public rowData: any;
    public dialogVisible: boolean = false;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowDeleting: true };
        this.commands = [{ buttonOption: { content: 'Details', cssClass: 'e-flat' } }];
    }
    public commandClick(args: CommandClickEventArgs): void {
        this.rowData = args.rowData;
        if (this.rowData) {
            this.dialogVisible = true;
        }
    }
    public dialogClose(): void {
        this.dialogVisible = false;
    }
}
