import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, FilterService, PageService} from '@syncfusion/ej2-angular-grids'
import { MultiSelectModule, CheckBoxSelectionService,DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component, OnInit,ViewChild } from '@angular/core';
import { data } from './datasource';
import { FilterSettingsModel,GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        MultiSelectModule,
        DropDownListAllModule,
        ButtonModule
    ],

providers: [FilterService, PageService,CheckBoxSelectionService],
standalone: true,
    selector: 'app-root',
    template: `
    <button ejs-button cssClass="e-outline" (click)="onSingleValueFilter()">Filter with single value</button>
    <button ejs-button cssClass="e-outline" style="margin-left:5px" (click)="onMultipleValueFilter()">Filter with multiple values</button>
    <ejs-grid #grid style="padding: 10px 10px" [dataSource]='data' [allowFiltering]='true' [filterSettings]='filterOptions' height='273px'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public filterOptions?: FilterSettingsModel;
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data; 
        this.filterOptions= {type:'Excel'};          
    }
    onSingleValueFilter() {
        (this.grid as GridComponent).clearFiltering();
        // filter OrderID column with single value
        (this.grid as GridComponent).filterByColumn('OrderID', 'equal', 10248); 
    }
    onMultipleValueFilter() {
        (this.grid as GridComponent).clearFiltering();
        // filter CustomerID column with multiple values
        (this.grid as GridComponent).filterByColumn('CustomerID', 'equal', [
            'VINET',
            'TOMSP',
            'ERNSH',
        ]); 
    }
}



