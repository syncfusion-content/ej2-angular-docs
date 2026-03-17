import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { FilterService, GridModule, PageService, PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule ],
    providers: [PageService, FilterService,],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowPaging]="true" [allowFiltering]="true" [pageSettings]="pageSettings" [filterSettings]="filterOptions">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public pageSettings?: PageSettingsModel = { pageSize: 6 };
    public filterOptions: Object = { type: 'Excel' };

    ngOnInit(): void {
        this.data = data;
    }
}
