import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, FilterService } from '@syncfusion/ej2-angular-grids'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { FormsModule } from '@angular/forms'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { DataUtil } from '@syncfusion/ej2-data';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        DropDownListAllModule,
        FormsModule
    ],

providers: [PageService,
                FilterService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [allowFiltering]='true' [allowPaging]='true' >
                <e-columns>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=140></e-column>
                    <e-column field='CustomerID' headerText='Name' width=140>
                        <ng-template #filterTemplate let-data>
                            <ejs-dropdownlist id='dropdown' [(ngModel)]="data.Name" [enabled]="data.column.allowFiltering"
                            (change)=onChange($event) [dataSource]='dropdata' [fields]='fields'[popupHeight]='height' ></ejs-dropdownlist>
                       </ng-template>
                    </e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=170></e-column>
                    <e-column field='CustomerID' headerText='CustomerID' width=140></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    @ViewChild('grid')
    public grid?: GridComponent;
    public data?: object[];
    public fields: object = { text: 'Name', value: 'Name' };
    public height = '220px';
    public dropdata: string[] = DataUtil.distinct(data, 'Name') as string[];
    public onChange(args: any): void {
        (this.grid as any).filterByColumn('Name', 'equal', (args as any).value);
    }
    ngOnInit(): void {
        this.data = data;
    }
}



