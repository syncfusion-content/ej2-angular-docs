import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ColumnModel, FilterService, GridComponent, GridModule, GroupService, PageService, SortService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule, ButtonModule ],
    providers: [ PageService, SortService, FilterService, GroupService],
    standalone: true,
    selector: 'app-root',
    template: `<button ejs-button id='add' cssClass="e-info" (click)='addColumns()'> Add Column</button>
               <button ejs-button id='delete' cssClass="e-info" (click)='deleteColumns()'> Delete Column</button>
                <ejs-grid #grid [dataSource]='data' [height]='280' >
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=120 ></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }
    addColumns(): void {
        const grid = this.grid!;
        const cols = grid.columns as ColumnModel[];
        cols.push(
            { field: 'EmployeeID', headerText: 'EmployeeID', width: 120 },
            {
                field: 'OrderDate',
                headerText: 'Order Date',
                width: 120,
                type: 'date',
                format: 'yMd',
            }
        );
        grid.refreshColumns();
    }
    deleteColumns(): void {
        (this.grid as GridComponent).columns.pop();
        (this.grid as GridComponent).refreshColumns();
    }
}
