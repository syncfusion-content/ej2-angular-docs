import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { RowDataBoundEventArgs, GridComponent, Column } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315'
               (rowDataBound)='rowDataBound($event)'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=80></e-column>
                        <e-column field='Verified' headerText='Verified' width=130 displayAsCheckBox="true"></e-column>
                    </e-columns>
                </ejs-grid>`
})

export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }
    rowDataBound(args: RowDataBoundEventArgs) {
        let count = 0;
        let data: { [key: string]: object | string } = args.data as { [key: string]: object | string };

        let keys = Object.keys(data);
        for (let i = 0; i < keys.length; i++) {
            if (data[keys[i]] == null || data[keys[i]] == '' || data[keys[i]] == undefined) {
                count++;
            }
        }
        if (count == keys.length) {
            for (let i = 0; i < (this.grid as GridComponent).columns.length; i++) {
                if (((this.grid as GridComponent).columns[i] as Column).displayAsCheckBox) {
                    (args.row as Element).children[i].innerHTML = '';
                }
            }
        }
    }
}