import { Component, OnInit, ViewChild } from '@angular/core';
import { EditSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import {data} from './datasource';

@Component({
    selector: 'app-root',
    template: `<div style="padding:0px 0px 20px 0px">
                    <button ejs-button id='add' (click)='addRow()'>Add New Row</button>
                </div>
                <ejs-grid #grid id="grid" [dataSource]='data' [editSettings]='editSettings'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right'
                        width=100 isPrimaryKey="true"></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120>
                        </e-column>
                        <e-column field='ShipCity' headerText='ShipCity' width=100>
                        </e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' 
                        format='C' width=100></e-column>
                        <e-column field='ShipName' headerText='Ship Name' width=150>
                        </e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data; // Initialize an empty array
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    }
    addRow() {
        const newRecord = {
            OrderID: this.generateOrderId(),
            CustomerID: this.generateCustomerId(),
            ShipCity: this.generateShipCity(),
            Freight: this.generateFreight(),
            ShipName: this.generateShipName()
        };

        (this.grid as any).addRecord(newRecord, 0);
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
