import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from '@angular/core';
import { Column, ColumnModel, GridComponent} from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule,
        ButtonModule
    ],

,
standalone: true,
    selector: 'app-root',
    template: ` <button ejs-button cssClass="e-success" (click)='changeHeaderText()'>
                Change Header Text</button>
                <div style="padding: 20px 17px 0 0">
                    <ejs-grid #grid [dataSource]='data' [height]='280'>
                        <e-columns>
                            <e-column field='OrderID' textAlign='Right' width=90></e-column>
                            <e-column field='CustomerID' width=120></e-column>
                            <e-column field='Freight' textAlign='Right' format='C2' width=90>
                            </e-column>
                            <e-column field='ShipCity' width=120></e-column>
                        </e-columns>
                    </ejs-grid>
                </div>`
})
export class AppComponent implements OnInit {

    public data?: object[] = [];
    @ViewChild('grid')
    public grid?: GridComponent;
    public headerTextMap: { [key: string]: string } = {
        'OrderID': 'Order ID',
        'CustomerID': 'Customer ID',
        'Freight': 'Freight Charge',
        'ShipCity': 'Ship To City'
    };

    ngOnInit(): void {
        this.data = data;
    }
    changeHeaderText(): void {
        this.grid?.columns.forEach((column: ColumnModel | any) => {
            column.headerText = this.headerTextMap[column.field as string];
        });
        this.grid?.refreshHeader();
    }

}