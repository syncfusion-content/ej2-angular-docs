import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterService, GridComponent, GridModule, GroupService, PageService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule ],
    providers: [GroupService, FilterService, PageService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #Orders [dataSource]='data' [enablePersistence]='true' [allowPaging]='true' [allowFiltering]='true'
           height='210px' (actionBegin)='actionBegin()'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='EmployeeID' headerText='Employee ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`,
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('Orders')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }
    actionBegin() {
        (this.grid as GridComponent).query.addParams('dataSource', 'data');
    }
}
