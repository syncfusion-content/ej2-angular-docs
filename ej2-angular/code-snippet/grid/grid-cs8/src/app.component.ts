import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'




import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SortService, ColumnMenuService, PageService } from '@syncfusion/ej2-angular-grids';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';
import { SortSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

,
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' id="gridcomp" allowPaging='true' allowSorting='true'
     showColumnMenu='true' [sortSettings]='sortSettings' [columnMenuItems]='columnMenuItems' (columnMenuClick)='columnMenuClick($event)'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width='140' textAlign="Right"></e-column>
            <e-column field='CustomerID' headerText='Customer Name' showInColumnChooser='false'></e-column>
            <e-column field='Freight' headerText='Freight' format='C2' textAlign="Right"></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' [visible]='false' width='150'></e-column>
            <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
        </e-columns>
    </ejs-grid>`,
    providers: [SortService, ColumnMenuService, PageService]
})
export class AppComponent implements OnInit {

    @ViewChild('grid')
    public grid?: GridComponent;
    public data?: object[];
    public columnMenuItems?: any = [{ text: 'Clear Sorting', id: 'gridclearsorting' }];
    public sortSettings?: SortSettingsModel =  {columns: [{direction: 'Ascending', field: 'OrderID'}]};
    public columnMenuClick(args: MenuEventArgs) {
        if ((args as any).item.id === 'gridclearsorting') {
            (this.grid as any).clearSorting();
        }
    }
    ngOnInit(): void {
        this.data = data;
    }
}



