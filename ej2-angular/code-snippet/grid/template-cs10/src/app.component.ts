import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule,  } from '@angular/platform-browser'
import { GridModule, GridComponent, Column, ColumnModel } from '@syncfusion/ej2-angular-grids'
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'

@Component({
    imports: [
        GridModule,
        ButtonModule,
        DropDownListModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `
    <button ejs-button id="button" cssClass="e-outline" (click)="addTemplateColumn()">Add Column</button>
    <ejs-grid style="margin-top: 10px" id='grid' #grid [dataSource]='dataSet' height='315px'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width=80></e-column>
            <e-column field='CustomerID' headerText='Customer Name' width=100>
            </e-column>
            <e-column field='Freight' headerText='Freight' width=80></e-column>
            <ng-template let-data #template>
                <ejs-dropdownlist id="data.OrderID" [dataSource]="dataSet" [value]="data.ShipCountry" [fields]='fields' index=0></ejs-dropdownlist>
            </ng-template>
            <ng-template #headerTemplate let-data>
                <div>
                <span class="e-icons e-location"></span> Ship Country
                </div>
            </ng-template>
        </e-columns>
    </ejs-grid>`,
})
export class AppComponent implements OnInit {

    public dataSet?: object[];
    @ViewChild('grid')
    public grid: GridComponent;
    @ViewChild('template')
    public template: object;  
    @ViewChild('headerTemplate')
    public headerTemplate: object;
    public fields: Object = { text: 'ShipCountry', value: 'ShipCountry'};

    public addTemplateColumn() {
        var templateColumnValues = {field: 'ShipCountry', headerText: 'Ship Country', width: 100, headerTemplate: this.headerTemplate, template: this.template};
        this.grid.columns.push(templateColumnValues as Column & string & ColumnModel);
        this.grid.refreshColumns();
    }

    ngOnInit(): void {
        this.dataSet = data;
    }
}





