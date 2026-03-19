import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule, RadioButtonModule ],
    standalone: true,
    selector: 'app-root',
    template: `
       <ejs-grid [dataSource]='data' height='315px'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=140></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=120></e-column>
            <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' type="date" width=140></e-column>
            <e-column headerText='Order Status' width='180'>
                <ng-template #template let-data>
                    <div style="display: flex; flex-direction: column; align-items: start; gap: 8px;">
                        <ejs-radiobutton label="Pending" name="radio-{{data.OrderID}}" cssClass="e-success" [checked]="data.OrderStatus === 'Pending'">
                        </ejs-radiobutton>
                        <ejs-radiobutton label="Confirmed" name="radio-{{data.OrderID}}" cssClass="e-success" [checked]="data.OrderStatus === 'Confirmed'">
                        </ejs-radiobutton>
                        <ejs-radiobutton label="Shipped" name="radio-{{data.OrderID}}" cssClass="e-success" [checked]="data.OrderStatus === 'Shipped'">
                        </ejs-radiobutton>
                    </div>
                </ng-template>
            </e-column>
          </e-columns>
        </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: object[];

    public ngOnInit(): void {
        this.data = data; 
    }
}