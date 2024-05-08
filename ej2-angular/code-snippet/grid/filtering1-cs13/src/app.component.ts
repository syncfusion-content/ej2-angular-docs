import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, FilterService, PageService} from '@syncfusion/ej2-angular-grids'
import { MultiSelectModule, CheckBoxSelectionService,DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons'



import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { Data } from '@syncfusion/ej2-angular-grids';

const old = Data.prototype.generateQuery;
Data.prototype.generateQuery = function() {
    const query = old.call(this, true);
    (this as any).pageQuery(query);
    return query;
};

@Component({
imports: [
        
        GridModule,
        MultiSelectModule,
        DropDownListAllModule,
        CheckBoxModule
    ],

providers: [FilterService, PageService,CheckBoxSelectionService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowPaging]="true" [pageSettings]='initialPage'
     [allowGrouping]="true" [groupSettings]="groupOptions" [allowPaging]='true'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='ShipCountry' headerText='ShipCountry' width=140></e-column>
                    <e-column field='CustomerID' headerText='Name' width=140></e-column>
                    <e-column field='ShipName' headerText='ShipName' width=140></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                </e-columns>
                </ejs-grid>`
})

export class AppComponent implements OnInit {

    public data?: object[];
    public groupOptions?: object;
    public initialPage?: object;

    ngOnInit(): void {
        this.data = data;
        this.groupOptions = { showGroupedColumn: false, columns: ['ShipCountry'] };
        this.initialPage = { pageSize: 5 };
    }
}



