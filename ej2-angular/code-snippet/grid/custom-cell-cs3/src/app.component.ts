import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { DetailRowService } from '@syncfusion/ej2-angular-grids'
import {
    ButtonModule,
    CheckBoxModule,
    RadioButtonModule,
    SwitchModule,
  } from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-buttons';

@Component({
imports: [
        
        GridModule,
        ButtonModule,
        CheckBoxModule,
        RadioButtonModule,
        SwitchModule,      
    ],

providers: [DetailRowService],
standalone: true,
    selector: 'app-root',
    template: `
    <div>
    <label style="padding: 10px 10px">
    Enable or disable HTML Encode
    </label>
    <ejs-switch id="switch" (change)="change($event)"></ejs-switch>
    </div>
    <ejs-grid #grid [dataSource]='data' [height]='315' style="padding: 10px 10px">
        <e-columns>
            <e-column field='OrderID' headerText= 'Order ID' textAlign='Right' width=140></e-column>
            <e-column field='CustomerID' headerText="<strong> Customer ID </strong>" width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=80></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=130 ></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;

    change(args: ChangeEventArgs) {
        if (args.checked) {
            (this.grid as GridComponent).getColumnByField('CustomerID').disableHtmlEncode = false;
        } else {
            (this.grid as GridComponent).getColumnByField('CustomerID').disableHtmlEncode = true;
        }
        (this.grid as GridComponent).refreshColumns();
    }

    ngOnInit(): void {
        this.data = data;
    }
}



