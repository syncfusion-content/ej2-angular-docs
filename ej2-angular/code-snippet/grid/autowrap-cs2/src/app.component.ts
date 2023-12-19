import { Component, OnInit, ViewChild } from '@angular/core';
import { inventoryData } from './datasource';
import {
    GridComponent,
} from '@syncfusion/ej2-angular-grids';

@Component({
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
    public ddlData: Object[] = [
        { text: 'Default', value: 'Default' },
        { text: 'Both', value: 'Both' },
        { text: 'Horizontal', value: 'Horizontal' },
        { text: 'Vertical', value: 'Vertical' },
        { text: 'None', value: 'None' },
    ];

    ngOnInit(): void {
        this.data = inventoryData;
    }

    valueChange(args: any): void {
        (this.grid as any).gridLines = (args as any).value
    }
}



