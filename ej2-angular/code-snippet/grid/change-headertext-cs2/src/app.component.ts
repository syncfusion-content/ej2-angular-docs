import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, EditService, PageService, ToolbarService } from '@syncfusion/ej2-angular-grids'
import { ButtonAllModule } from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule,
        ButtonAllModule
    ],

providers: [EditService, PageService, ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `
        <div style="padding: 5px 0px 20px 0px ">
            <button ejs-button id="sample"  (click)='changeDatasource()'> Refresh Datasource </button>
        </div>
        <ejs-grid #grid [dataSource]='data' [height]='280' >
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=120 ></e-column>
            </e-columns>
        </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: object[];
    @ViewChild('grid') public grid?: GridComponent;
    public  newRecords:object ={};
    ngOnInit(): void {
        this.data = data;
    }
    changeDatasource(): void {

      for (let i = 0; i < 5; i++) {
         this.newRecords = {
            OrderID: this.generateOrderId(),
            CustomerID: this.generateCustomerId(),
            ShipCity: this.generateShipCity(),
            Freight: this.generateFreight(),
            ShipName: this.generateShipName()
        };
      
        ((this.grid as GridComponent).dataSource as object[]).unshift(this. newRecords);
        (this.grid as GridComponent).setProperties({ dataSource:  (this.grid as GridComponent).dataSource as object[] });
      }
    }

    // Generate a random OrderID
    generateOrderId(): number {
        return Math.floor(10000 + Math.random() * 90000);
    }
    // Generate a random CustomerID
    generateCustomerId(): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        for (let i = 0; i < 5; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    // Generate a random ShipCity
    generateShipCity(): string {
        const cities = ['London', 'Paris', 'New York', 'Tokyo', 'Berlin'];
        return cities[Math.floor(Math.random() * cities.length)];
    }
    // Generate a random Freight value
    generateFreight(): number {
        return Math.random() * 100;
    }
    // Generate a random ShipName
    generateShipName(): string {
        const names = ['Que Delícia', 'Bueno Foods', 'Island Trading', 'Laughing Bacchus Winecellars'];
        return names[Math.floor(Math.random() * names.length)];
    }
}