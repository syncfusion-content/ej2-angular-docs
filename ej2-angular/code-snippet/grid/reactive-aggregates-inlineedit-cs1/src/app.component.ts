import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { AggregateService, GroupService, PageService, ToolbarService, EditService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { EditSettingsModel, IEditCell, GridComponent, ToolbarItems, ActionEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [AggregateService, GroupService, PageService, ToolbarService, EditService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height='290px' [allowPaging]='true' [toolbar]='toolbar' [editSettings]='editSettings' (actionBegin)='actionBegin($event)'>
    <e-columns>
        <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' textAlign='right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='OrderDate' headerText='Order Date' format='yMd' width=120></e-column>
        <e-column field='Freight' format='C2' editType='numericedit' [edit]='numericParams' width=150></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
    </e-columns>
    <e-aggregates>
        <e-aggregate>
                <e-columns>
                    <e-column field="Freight" type="sum" format="C2">
                        <ng-template #footerTemplate let-data>Sum: {{data.sum}}</ng-template>
                    </e-column>
                </e-columns>
        </e-aggregate>
    </e-aggregates>
</ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public selectedRecord: object = {};
    public numericParams?: IEditCell;
    @ViewChild('grid') public gridObj?: GridComponent;

    actionBegin({ requestType, rowData }: ActionEventArgs): void {
        if (requestType === 'beginEdit') {
            this.selectedRecord = {};
            this.selectedRecord = rowData as object;
        }
    }
    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Delete', 'Update', 'Cancel'];
        this.numericParams = {
            params: {
                change: ((args: ChangeEventArgs) => {
                    (this.selectedRecord as ItemType).Freight = args.value as string;
                    (this.gridObj as GridComponent).aggregateModule.refresh(this.selectedRecord);
                }).bind(this)
            }
        };
    }

}
interface ItemType{
    Freight:string
}