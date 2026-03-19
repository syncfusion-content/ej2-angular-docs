import { data } from './datasource';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [GridModule, CommonModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height="315px">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                    <e-column field='OrderDate'  headerText='Order Date' textAlign='Right' width=120>
                        <ng-template #template let-data>
                            {{ data.OrderDate | date:'dd/MMM/yyyy' }}
                        </ng-template>
                    </e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' textAlign='Right' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public formatOptions?: object;
    public shipFormat?: object;

    ngOnInit(): void {
        this.data = data;

    }
}
