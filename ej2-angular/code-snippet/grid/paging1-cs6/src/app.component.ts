import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { EditService, GridModule, PageService, ToolbarService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [GridModule],
    providers: [PageService, ToolbarService, EditService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowPaging]='true' height='268px' [pageSettings]='pageSettings'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public pageSettings?: Object;

    ngOnInit(): void {
        this.data = data;
        this.pageSettings = { pageSizes: true, pageSize: 12 };
    }
}
