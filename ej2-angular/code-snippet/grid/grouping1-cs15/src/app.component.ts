import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, GroupService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component, OnInit,ViewChild } from '@angular/core';
import { data } from './datasource';
import { GroupSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        ButtonModule
    ],

providers: [GroupService],
standalone: true,
    selector: 'app-root',
    template: `
    <button ejs-button id="button" cssClass="e-outline" (click)="onExternalGroup()"> Clear Grouping </button>
    <ejs-grid #grid style="padding: 10px 10px" [dataSource]='data' [allowGrouping]='true' [groupSettings]='groupOptions' height='315px'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
        </e-columns>
    </ejs-grid>`,
})
export class AppComponent implements OnInit {

    public data?: object[];
    public groupOptions?: GroupSettingsModel;
    @ViewChild('grid')
    public grid?: GridComponent;
    ngOnInit(): void {
        this.data = data;
        this.groupOptions = { columns: ['CustomerID', 'ShipCity'] };
    }

    onExternalGroup(){
        (this.grid as GridComponent).clearGrouping();
    }
}