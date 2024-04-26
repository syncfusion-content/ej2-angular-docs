import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, ReorderService, FilterService, GroupService, ColumnChooserService, 
AggregateService, ToolbarService, SelectionService, RowDDService,   } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { PageSettingsModel, ToolbarItems, SearchSettingsModel, SelectionSettingsModel, 
    FilterSettingsModel, GroupSettingsModel, EditSettingsModel, SortSettingsModel } from '@syncfusion/ej2-angular-grids';
  

@Component({
imports: [
        
        GridModule
    
    ],

providers: [PageService,
        SortService,
        ReorderService,
        FilterService,
        GroupService,
        AggregateService,
        ToolbarService,
        SelectionService,
        RowDDService,
        ColumnChooserService  ],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowPaging]="true" [pageSettings]="pageSettings" [searchSettings]='searchOptions' [toolbar]='toolbarOptions'  [allowReordering]='true' [allowSorting]="true"
    [allowReordering]='true' [allowRowDragAndDrop]='true' [selectionSettings]='selectionOptions' [selectedRowIndex]='6' [allowSorting]="true" [sortSettings]='sortOptions'
    [allowFiltering]="true" [filterSettings]='filterOptions' [allowGrouping]="true" [groupSettings]='groupOptions' [editSettings]='editSettings' [showColumnChooser]= 'true'>
        <e-columns>
            <e-column type="checkbox" width=50></e-column>
            <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
            <e-column field='Freight' headerText='Freight($)' textAlign='Right' format='C2' width=90></e-column>                    
            <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' width=140></e-column>
            <e-column field='ShipName' headerText='Shipped Name' textAlign='Right' width=140></e-column>                
        </e-columns>
        <e-aggregates>
            <e-aggregate>
                <e-columns>
                    <e-column field="Freight" type="sum">
                        <ng-template #footerTemplate let-data>Sum: {{data.sum}} </ng-template>
                    </e-column>
                </e-columns>
            </e-aggregate>
            <e-aggregate>
                <e-columns>
                    <e-column field="Freight" type="sum">
                        <ng-template #groupFooterTemplate let-data>Sum: {{data.sum}} </ng-template>
                    </e-column>
                </e-columns>
            </e-aggregate>
            <e-aggregate>
                <e-columns>
                    <e-column field="Freight" type="max">
                        <ng-template #groupCaptionTemplate let-data>Max: {{data.max}}</ng-template>
                    </e-column>
                </e-columns>
            </e-aggregate>
        </e-aggregates>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public pageSettings?: PageSettingsModel;
    public toolbarOptions?: ToolbarItems[];
    public searchOptions?: SearchSettingsModel;
    public selectionOptions?: SelectionSettingsModel;
    public sortOptions?: SortSettingsModel;
    public filterOptions?: FilterSettingsModel;
    public groupOptions?: GroupSettingsModel;
    public editSettings?: EditSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.pageSettings = { pageCount: 2, pageSizes: true };
        this.searchOptions = { fields: ['ShipCountry'], operator: 'contains', key: 'a', ignoreCase: true };
        this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ColumnChooser'];
        this.selectionOptions = { type: 'Multiple', mode: 'Both' };
        this.sortOptions = { columns: [{ field: 'OrderID', direction: 'Ascending' }, { field: 'ShipCity', direction: 'Descending' }] };
        this.filterOptions = {type:'Excel'};
        this.groupOptions = { columns: ['CustomerID'] };
        this.editSettings = {  allowEditing: true, allowAdding: true, allowDeleting: true, };
      }
}
