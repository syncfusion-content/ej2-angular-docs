import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ColumnModel, FilterService, GridComponent, GridModule, GroupService, PageService, SortService, TextAlign } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [GridModule, ButtonModule ],
    providers: [PageService, SortService, FilterService, GroupService],
    standalone: true,
    selector: 'app-root',
    template: `<button ejs-button id="btnId" cssClass="e-info" (click)='updateColumns()'> Update Columns </button>
                <ejs-grid #grid [dataSource]='data'>
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
    @ViewChild('grid') grid?: GridComponent;
    ngOnInit(): void {
        this.data = data;
    }
    
     updateColumns(): void {
        const grid = this.grid!;
        const cols = grid.getColumns() as ColumnModel[];
        cols[0].textAlign = 'Center' as TextAlign; // Center/Left/Right/Justify
        cols[0].width = 100; // width is number, not string
        cols[2].visible = false;
        cols[1].customAttributes = { class: 'customcss' };

        grid.refreshColumns();
     }
}
