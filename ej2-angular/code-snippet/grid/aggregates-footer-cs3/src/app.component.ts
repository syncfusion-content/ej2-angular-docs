import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { AggregateService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [AggregateService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid  #grid [dataSource]='data' height='210px' (dataBound)="dataBound()">
    <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='Freight' width=150></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
    </e-columns>
    <e-aggregates>
        <e-aggregate>
            <e-columns>
                <e-column field="Freight" type="sum">
                    <ng-template #footerTemplate let-data>Sum: {{data.sum}}</ng-template>
                </e-column>
            </e-columns>
        </e-aggregate>
        <e-aggregate>
            <e-columns>
                <e-column field="Freight" type="max">
                    <ng-template #footerTemplate let-data>Max: {{data.max}}</ng-template>
                </e-column>
            </e-columns>
        </e-aggregate>
    </e-aggregates>
</ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }
    dataBound() {
        (this.grid as GridComponent).getHeaderContent().append((this.grid as GridComponent).getFooterContent());
    }
}