import { data } from './datasource';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { ProgressBarModule } from '@syncfusion/ej2-angular-progressbar';

@Component({
    imports: [
        CommonModule,
        GridModule,
        ProgressBarModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='315px'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' width=150></e-column>
                        <e-column field='CustomerID' headerText='Customer Name' width=150>
                        </e-column>
                        <e-column field='Freight' headerText='Freight' width=150>
                            <ng-template #template let-data>
                                <div>
                                    <ejs-progressbar [id]='data.OrderID' type='Linear' height='60' 
                                    [value]='data.Freight' trackThickness=24 progressThickness='20'>
                                    </ejs-progressbar>
                                </div>
                            </ng-template>
                        </e-column>
                    </e-columns>
                </ejs-grid>`,
})
export class AppComponent implements OnInit {
    public data?: object[];

    ngOnInit(): void {
        this.data = data;
    }
}