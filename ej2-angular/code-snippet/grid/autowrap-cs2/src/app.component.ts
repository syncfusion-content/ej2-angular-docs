import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService } from '@syncfusion/ej2-angular-grids'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'

import { Component, OnInit, ViewChild } from '@angular/core';
import { inventoryData } from './datasource';
import { GridComponent, GridLine} from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';

@Component({
imports: [
        
        GridModule,
        DropDownListAllModule
    ],

providers: [PageService],
standalone: true,
    selector: 'app-root',
    template: `
    <div style="display: flex">
    <label style="padding:  10px 10px 26px 0"> Change the grid lines: </label> 
    <ejs-dropdownlist
    style="margin-top:5px"
    id="value"
    #dropdown
    index="0"
    width="100"
    [dataSource]="ddlData"
    (change)="valueChange($event)"></ejs-dropdownlist>
    </div>
    <ejs-grid #grid style="padding: 5px 5px" [dataSource]='data' height='315' gridLines='Default'>
        <e-columns>
            <e-column field='Inventor' headerText='Inventor Name' width='180' textAlign="Right"></e-column>
            <e-column field='NumberofPatentFamilies' headerText="Number of Patent Families" width='180' textAlign="Right"></e-column>
            <e-column field='Country' headerText='Country' width='140'></e-column>
            <e-column field='Active' width='120'></e-column>
            <e-column field='Mainfieldsofinvention' headerText='Main fields of invention' width='200'></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;
    public ddlData: object[] = [
        { text: 'Default', value: 'Default' },
        { text: 'Both', value: 'Both' },
        { text: 'Horizontal', value: 'Horizontal' },
        { text: 'Vertical', value: 'Vertical' },
        { text: 'None', value: 'None' },
    ];

    ngOnInit(): void {
        this.data = inventoryData;
    }

    valueChange(args: ChangeEventArgs): void {
        (this.grid as GridComponent).gridLines = args.value as GridLine
    }
}



