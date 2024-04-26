import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'



import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule,
        ButtonModule,
        DropDownListModule
    ],

,
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='300'>
                    <e-columns>
                        <e-column headerText='Order Status'width='200'>
                            <ng-template #template let-data>
                                <div>
                                    <ejs-dropdownlist value='Order Placed' [dataSource]='dropData' [popupHeight]='150' [popupWidth]='150' >
                                    </ejs-dropdownlist>
                                </div>
                            </ng-template>
                        </e-column>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                        <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public dropData?: string[];

    ngOnInit(): void {
        this.data = data;
        this.dropData = ['Order Placed', 'Processing', 'Delivered'];
    }
}



