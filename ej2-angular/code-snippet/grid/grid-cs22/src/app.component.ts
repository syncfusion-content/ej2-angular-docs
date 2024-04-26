import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { EditService, ToolbarService, PageService } from '@syncfusion/ej2-angular-grids';
import { MaskedTextBox } from '@syncfusion/ej2-inputs';
import { data } from './datasource';
import { Column, EditSettingsModel, ToolbarItems, IEditCell, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

,
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [allowPaging]='true' [editSettings]='editSettings' [toolbar]='toolbar'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' isPrimaryKey='true' width="100"></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' type='string'  width="120"></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country'  width="100" ></e-column>
                    <e-column field='Mask' headerText='Mask' width="140" [edit]='params'></e-column>
                </e-columns>
               </ejs-grid>`,
    providers: [ToolbarService, EditService, PageService],
})

export class AppComponent implements OnInit {
    public data?: object[];
    @ViewChild('grid') public grid?: GridComponent;
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public element?: HTMLElement;
    public maskObj?: MaskedTextBox;
    public params?: IEditCell;

    public create = () => {
        (this as any).element = document.createElement('input');
        return (this as any).element;
    };
    public read = () => {
        return ((this as any).maskObj as any).value;
    };
    public destroy = () => {
        ((this as any).maskObj as any).destroy();
    };
    public write = (args: { rowData: Object, column: Column }) => {
        (this as any).maskObj = new MaskedTextBox({
            mask: "0-0-0-0",
            value: ((args as any).rowData as any).Mask
        });
        (this as any).maskObj.appendTo((args as any).element);
    };

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.params = {
            create: this.create,
            read: this.read,
            destroy: this.destroy,
            write: this.write
        };
    }
}



