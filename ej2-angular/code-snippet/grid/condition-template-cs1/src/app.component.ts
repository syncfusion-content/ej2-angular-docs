

import { Component, OnInit } from '@angular/core';
import { categoryData } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='315px'>
                    <e-columns>
                        <e-column headerText='Discontinued' width='150' textAlign='Center'>
                          <ng-template #template let-data>
                            <div *ngIf="data.Discontinued; else elseblock">
                                 <input type="checkbox" checked>
                            </div>
                          </ng-template>
                          <ng-template #elseblock><input type="checkbox"></ng-template>
                       </e-column>
                        <e-column field='ProductID' headerText='Product ID' width=150></e-column>
                        <e-column field='CategoryName' headerText='Category Name' width=150></e-column>
                        <e-column field='ProductName' headerText='Product Name' width=150></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = categoryData;
    }
}



