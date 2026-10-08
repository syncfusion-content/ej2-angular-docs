import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { FilterService, GridModule, SortService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule ],
    providers: [ SortService, FilterService ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowSorting]='true' [allowFiltering]='true' height=273>
                <e-columns>
                    <e-column type='RowNumber' textAlign='Center'></e-column>
                    <e-column field='ProductID' headerText='Product ID' width=120 [visible]='false' textAlign='Right' [isPrimaryKey]='true' type='number'></e-column>
                    <e-column field='ProductName' headerText='Products' width=160 [allowEditing]='false'></e-column>
                    <e-column field='Category' headerText='Category' width=140 [allowEditing]='false'></e-column>
                    <e-column field='SellingPrice' headerText='Price' width=130 format='C' textAlign='Right'></e-column>
                    <e-column field='AvailableStock' headerText='In-Stock' width=120 textAlign='Right'>
                        <ng-template #template let-rowData>
                            <span>{{ rowData.AvailableStock }} {{ rowData.Unit }}</span>
                        </ng-template>
                    </e-column>
                    <e-column field='SoldStock' headerText='Sold' width=120 textAlign='Right'>
                        <ng-template #template let-rowData>
                            <span>{{ rowData.SoldStock }} {{ rowData.Unit }}</span>
                        </ng-template>
                    </e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: object[];
    ngOnInit(): void {
        this.data = data;
    }
}
