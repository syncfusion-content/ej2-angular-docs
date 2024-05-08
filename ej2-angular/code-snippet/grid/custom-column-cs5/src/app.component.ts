import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data, columnDataType } from './datasource';
import { GridComponent, SelectionSettingsModel,RowDataBoundEventArgs  } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService,
                SortService,
                FilterService,
                GroupService],
standalone: true,
    selector: 'app-root',
    template: `<div id="GridParent">
                    <ejs-grid #Grid [dataSource]="data" allowPaging='true' [selectionSettings]='selectionOptions'
                    (rowDataBound)='rowDataBound($event)' (dataBound)='dataBound()' height='273px'>
                        <e-columns>
                            <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                            <e-column field='EmployeeID' headerText='Employee ID' textAlign= 'Right' width=120></e-column>
                            <e-column field='ShipCity' headerText='Ship City'  width=120></e-column>
                            <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                        </e-columns>
                    </ejs-grid>
               </div>`
})
export class AppComponent implements OnInit {
    public data?: object[];
    @ViewChild('Grid') 
    public grid?: GridComponent;
    public selectionOptions?: SelectionSettingsModel;
    public selIndex?: number[] = [];

    ngOnInit(): void {
        this.data = data;
        this.selectionOptions = { type: 'Multiple' };
    }

    public rowDataBound(args: RowDataBoundEventArgs ): void {
            if (((args.data as columnDataType)['EmployeeID'] as number) > 3) {
            this.selIndex?.push(parseInt(((args.row as Element).getAttribute('aria-rowindex') as string), 10));
        }
    }

    public dataBound(): void {
        if (this.selIndex?.length) {
            this.grid?.selectRows(this.selIndex);
            this.selIndex = [];
        }
    }
}
