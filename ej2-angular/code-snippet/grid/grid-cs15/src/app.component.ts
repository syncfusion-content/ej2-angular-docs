import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, GridComponent } from '@syncfusion/ej2-angular-grids';
import {
    ButtonModule,
    CheckBoxModule,
    RadioButtonModule,
    SwitchModule,
  } from '@syncfusion/ej2-angular-buttons';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-buttons';
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
imports: [
        GridModule,ButtonModule,
        CheckBoxModule,
        RadioButtonModule,
        SwitchModule
    ],

standalone: true,
    selector: 'app-root',
    template: `
    <div>
        <label style="padding: 10px 10px">
        Enable or disable visible property
        </label>
        <ejs-switch id="switch" (change)="change($event)"></ejs-switch>
    </div>
    <ejs-grid #grid [dataSource]='data' height='315px' style="padding: 10px 10px">
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=140></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=120></e-column>
            <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=140></e-column>
            <e-column field='ShipCity' headerText='Ship City' [visible]='false' width=100></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;

    change(args: ChangeEventArgs) {
        if (args.checked) {
            (this.grid as GridComponent).getColumnByField('ShipCity').visible = true;
        } else {
            (this.grid as GridComponent).getColumnByField('ShipCity').visible = false;
        }
        (this.grid as GridComponent).refreshColumns();
    }

    ngOnInit(): void {
        this.data = data;
    }
}



