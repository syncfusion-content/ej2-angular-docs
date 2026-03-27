import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids';
import { DataManager, Query, ReturnOption, WebApiAdaptor } from '@syncfusion/ej2-data';

const SERVICE_URI: string = 'https://services.syncfusion.com/angular/production/';

// Define an interface for Order data.
interface Order {
    OrderID: number;
    CustomerID: string;
    Freight: number;
    OrderDate: string;
}

@Component({
    imports: [ GridModule, CommonModule ],
    providers: [PageService],
    standalone: true,
    selector: 'app-root',
    template: `
        <div style="padding-bottom:20px">
            <button ejs-button (click)="executeQuery($event)">Execute Query</button>
        </div>
        <p *ngIf="statusMessage" style="text-align:center;color:red">{{ statusMessage }}</p>
        <ejs-grid #grid [dataSource]='result' allowPaging='true'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
                <e-column field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right'></e-column>
                <e-column field='Freight' headerText='Freight' width='150' format="C2" textAlign='Right'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='150' ></e-column>
            </e-columns>
        </ejs-grid>`
})

export class AppComponent implements OnInit {
    public statusMessage: string = '';
    public getData!: DataManager;
    public result: Order[] = [];

    public ngOnInit(): void {
       this.getData= new DataManager({ 
            url: SERVICE_URI + 'api/Orders', 
            adaptor: new WebApiAdaptor() 
        });
    }

    public executeQuery(event:MouseEvent): void { 
        this.statusMessage = "Fetching data...";
        this.getData.executeQuery(new Query()).then((e: ReturnOption) => {
            this.result = e.result as Order[];
            this.statusMessage = `Data fetched successfully! Total Records: ${this.result.length}`;
        }).catch(() => {
            this.statusMessage = "Error fetching data!";
        });
    }
}