import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService, SortService, FilterService } from '@syncfusion/ej2-angular-grids'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'



import { Component, OnInit, ViewChild } from '@angular/core';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';

@Component({
imports: [
        
        GridModule,
        DropDownListAllModule
    ],

providers: [PageService, SortService, FilterService],
standalone: true,
    selector: 'app-root',
    template: `
    <div style="display: flex">
        <label style="padding: 10px 10px 26px 0"> Change the loading indicator type: </label>
        <ejs-dropdownlist
        #dropdown
        style="margin-top:5px"
        index="0"
        width="120"
        [dataSource]="ddlData"
        [fields]='fields'
        (change)="valueChange($event)">
        </ejs-dropdownlist>
    </div>
    <ejs-grid #grid id="grid" style="padding: 10px 10px" [dataSource]='data' [allowPaging]='true' [allowSorting]='true' [allowFiltering]='true' [pageSettings]='pageSettings' [loadingIndicator]='loadingIndicator'>
        <e-columns>
            <e-column field='EmployeeID' headerText='Employee ID' width='130' textAlign='Right'></e-column>
            <e-column field='Employees' headerText='Employee Name' width='145'></e-column>
            <e-column field='Designation' headerText='Designation' width='130'></e-column>
            <e-column field='CurrentSalary' headerText='Current Salary' width='140' format="C2" textAlign='Right'></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: DataManager;
    public loadingIndicator?: any;
    public pageSettings?: object;
    @ViewChild('grid')
    public grid?: GridComponent;
    @ViewChild('dropdown')
    public dropdown?: DropDownListComponent;
    public fields: object = { text: 'value', value: 'id' };
    public ddlData?: object[] = [
        { id: 'Spinner', value: 'Spinner' },
        { id: 'Shimmer', value: 'Shimmer' }
    ]

    ngOnInit(): void {
        this.data = new DataManager({ url: 'https://ej2services.syncfusion.com/js/development/api/UrlDataSource', adaptor: new UrlAdaptor });
        this.loadingIndicator = { indicatorType: 'Spinner' };
        this.pageSettings = { pageCount: 3 };
    }

    valueChange(args: ChangeEventArgs) {
        if ((this.dropdown as DropDownListComponent).value === 'Shimmer') {
            (this.grid as GridComponent).loadingIndicator.indicatorType = 'Shimmer';
            (this.grid as GridComponent).refreshColumns();
        } else {
            (this.grid as GridComponent).loadingIndicator.indicatorType = 'Spinner';
            (this.grid as GridComponent).refreshColumns();
        }
    } 
}


