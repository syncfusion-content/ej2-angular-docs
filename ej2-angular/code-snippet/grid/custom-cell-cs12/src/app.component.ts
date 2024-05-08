import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { DetailRowService } from '@syncfusion/ej2-angular-grids'


import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule        
    ],

providers: [DetailRowService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [height]='315' [selectionSettings]="selectOptions">
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130 ></e-column>
                        <e-column field='ShipName' headerText='Ship Name' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-grid>`,
})
export class AppComponent implements OnInit {

    public data: any;
    public selectOptions: any= {
        mode: 'Cell',
        type: 'Multiple',
    };
    ngOnInit(): void {
        this.data = data;
    }
}



