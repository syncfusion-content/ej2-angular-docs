import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { formatData } from './datasource';

@Component({
    imports: [
        TreeGridModule
    ],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='250' [treeColumnIndex]='1' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='orderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='orderName' headerText='Order Name' textAlign='Left' width=150></e-column>
                        <e-column field='unitPrice' headerText='Unit Price' textAlign='Right' format='C' width=100></e-column>
                        <e-column field='price' headerText='Price' textAlign='Right' format='P2'  width=100></e-column>
                        <e-column field='units' headerText='Units' textAlign='Right' format='N'  width=100></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = formatData;
    }
}



