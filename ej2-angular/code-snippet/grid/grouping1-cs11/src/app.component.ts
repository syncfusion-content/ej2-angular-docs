import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterService, GridComponent, GridModule, GroupService, PageService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [GridModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [enablePersistence]='true' [allowPaging]='true' [allowFiltering]='true'
           height='210px' (actionBegin)='actionHandler($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`,
    providers: [GroupService, FilterService, PageService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }

    actionHandler(args: any) {
        (this.grid as any).query.addParams('$filter', 'EmployeeID eq 1');
    }

}
