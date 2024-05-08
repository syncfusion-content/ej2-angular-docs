import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'
import { EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data ,Order} from './datasource';
import { GridComponent, SelectionSettingsModel, FilterSettingsModel, PageSettingsModel, ToolbarItems, EditSettingsModel, RowDataBoundEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [EditService, ToolbarService, PageService, FilterService],
standalone: true,
    selector: 'app-root',
    template:`<ejs-grid #grid [dataSource]='data' [allowPaging]='true' [allowFiltering]='true' 
             [allowSelection]='true' [selectionSettings]='selectionOptions' 
             [editSettings]='editSettings' [toolbar]='toolbar' 
             [pageSettings]='pageOptions' [filterSettings]='filterOptions' 
             (rowDataBound)='rowDataBound($event)'>
                <e-columns>
                    <e-column type='checkbox' width=120></e-column>
                    <e-column field='List' headerText='List' width=120></e-column>
                    <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' 
                    textAlign='Right' width=150></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150>
                    </e-column>
                    <e-column field='EmployeeID' headerText='Employee ID' width=150>
                    </e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                </e-columns>
             </ejs-grid>`
})

export class AppComponent implements OnInit {

    public data?: object[];
    public selectionOptions?: SelectionSettingsModel;
    public editSettings?: EditSettingsModel;
    public pageOptions?: PageSettingsModel;
    public toolbar?: ToolbarItems[] | object;
    public filterOptions?: FilterSettingsModel;

    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
        this.selectionOptions = { type: 'Multiple', persistSelection: true };
        this.pageOptions = { pageSize: 5 };
        this.filterOptions = { type: 'CheckBox' };
        for (let i: number = 0; i < data.length; i++) {
            (data as Order[])[i as number]['List'] = i + 1;
        }
    }
    public rowDataBound(args: RowDataBoundEventArgs): void {
        args.isSelectable = (args.data as Order).List % 5 === 0;
    }
}



