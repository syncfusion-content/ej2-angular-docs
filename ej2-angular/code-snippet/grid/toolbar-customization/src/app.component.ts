import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EditService, EditSettingsModel, GridComponent, GridModule, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
    imports: [GridModule],
    providers: [ToolbarService, EditService],
    standalone: true,
    selector: 'app-root',
    template: `
    <div style="margin-left:80px"><p style="color:red;" id="message">{{message}}</p></div>
    <ejs-grid id='Grid' #grid [dataSource]='data' height='270px' [toolbar]='toolbar' [editSettings]='editSettings' (toolbarClick)='clickHandler($event)'>
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
    public toolbar?: ToolbarItems[] | object;
    public editSettings?: EditSettingsModel;
    public message?: string;
    @ViewChild('grid')
    public grid: GridComponent;
    public latestOrderID: number = 101

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }

    clickHandler(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_add') { // 'Grid_add' -> Grid component id + _ + toolbar item name
            args.cancel = true;
            const newRecord = {
                OrderID: this.latestOrderID,
                CustomerID: 'TOMSP',
                ShipName: 'Hanari Carnes',
                ShipCity: 'Lyon',
            };
            this.latestOrderID += 1;
            (this.grid as GridComponent).addRecord(newRecord);
            this.message = 'The default add action is cancelled, and a new record is added at the 0 index of the grid using the addRecord method.';
        }
    }
}