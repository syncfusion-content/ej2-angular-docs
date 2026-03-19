import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { FilterService, GridComponent, GridModule, GroupService, PageService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule,ButtonModule],
    standalone: true,
    selector: 'app-root',
    template: `<button ejs-button id='restore' (click)='clickHandler()'>Restore to initial state</button>
               <ejs-grid #grid [id]='gridId' [dataSource]='data' [enablePersistence]='true' [allowPaging]='true' [allowFiltering]='true'
           height='210px'>
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
    public gridId?: string = 'OrderDetails'; // id for the Grid component

    ngOnInit(): void {
        this.data = data;
    }
    clickHandler() {
        this.gridId = `OrderDetails` + Math.floor(Math.random() * 10);
        location.reload();
    }
}
