import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel,  GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `
        <button ejs-button id='edit' (click)='clickEvents($event)'>Edit</button>
        <button ejs-button id='add' (click)='clickEvents($event)'>Add</button>
        <button ejs-button id='delete' (click)='clickEvents($event)'>Delete</button>
        <button ejs-button id='updaterow' (click)='clickEvents($event)'>Update Row</button>
        <button ejs-button id='updatecell' (click)='clickEvents($event)'>Update cell</button>
        <div class="control-section"  style="padding-top:20px">
            <ejs-grid #grid id="Grid" [dataSource]='data' [editSettings]='editSettings'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
                    width=120 [validationRules]='orderIDRules' isPrimaryKey='true'>
                    </e-column>
                    <e-column field='CustomerID' [validationRules]='customerIDRules' 
                    headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' 
                    [validationRules]='cityIDRules' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' 
                    [validationRules]='shipIDRules' width=150></e-column>
                </e-columns>
            </ejs-grid>
        </div> `
})
export class AppComponent implements OnInit {
    
    public editSettings?: EditSettingsModel;
    public data?: object[];
    @ViewChild('grid')
    public grid: any;
    public orderIDRules?: object;
    public customerIDRules?: object;
    public freightIDRules?: object;
    public cityIDRules?:object;
    public shipIDRules?:object;


    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true ,};
        this.orderIDRules = { required: true };
        this.cityIDRules = { required: true };
        this. shipIDRules = { required: true };
        this.customerIDRules = { required: true, minLength: 5 };
        this.freightIDRules={required: true, min: 1, max:1000 }
    }
    clickEvents(args:any){
        
        if(args.target.id==='edit')
        {
        this.grid.startEdit();
        }
        else if(args.target.id==='add')
        {
        this.grid.addRecord({ "OrderID": Math.floor(Math.random() * 100000), "CustomerID": this.generateCustomerId(), 
        "ShipCity": this.generateShipCity(), "ShipName": this.generateShipName()  });
        }
        else if(args.target.id==='delete'){

        this.grid.deleteRecord();
        }
        else if(args.target.id==='updaterow')
        {
            this.grid.updateRow(0, {OrderID:10248,CustomerID: 'RTER', ShipCity: 'America', ShipName: 'Hanari'});
        }
        else
        {
            this.grid.setCellValue((this.grid.currentViewData[0] as any).OrderID,'CustomerID','Value Changed'); 
        }
    }
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



