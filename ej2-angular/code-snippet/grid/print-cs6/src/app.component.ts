import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data, customerData } from './datasource';
import { GridComponent, ToolbarItems, RowSelectEventArgs, PrintEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #mastergrid id="mastergrid" [dataSource]='masterdata' [selectedRowIndex]="1" [toolbar]='toolbar' (rowSelected)="onRowSelected($event)" (beforePrint)="beforePrint($event)">
        <e-columns>
            <e-column field='ContactName' headerText='Customer Name' width='150'></e-column>
            <e-column field='CompanyName' headerText='Company Name' width='150'></e-column>
            <e-column field='Address' headerText='Address' width='150'></e-column>
            <e-column field='Country' headerText='Country' width='130'></e-column>
        </e-columns>
    </ejs-grid>

    <div class='e-statustext' style="margin:8px">Showing orders of Customer: <b id="key"></b></div>
    
    <ejs-grid #detailgrid id="detailgrid" [dataSource]='data' [allowSelection]='false'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width='100'></e-column>
            <e-column field='Freight' headerText='Freight' format='C2' width='100' type='number'></e-column>
            <e-column field='ShipName' headerText="Ship Name" width='150'></e-column>
            <e-column field='ShipCountry' headerText="Ship Country" width='150'></e-column>
            <e-column field='ShipAddress' headerText="Ship Address" width='150'></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public names?: string[] = ['AROUT', 'BERGS', 'BLONP', 'CHOPS', 'ERNSH'];
    public toolbar?: ToolbarItems[];

    @ViewChild('mastergrid') public mastergrid?: GridComponent;
    @ViewChild('detailgrid') public detailgrid?: GridComponent;

    public masterdata?: Object[];

    public data: object[] = data;

    ngOnInit(): void {
        this.masterdata = customerData.filter((e: object) => (this.names as string[]).indexOf((e as ItemType).CustomerID) !== -1);

        this.toolbar = ['Print'];
    }
    public onRowSelected(args: RowSelectEventArgs): void {
        let selectedRecord: object = args.data as object;
        (this.detailgrid as GridComponent).dataSource = data.filter((record: object) => (record as ItemType).CustomerName === (selectedRecord as ItemType).ContactName).slice(0, 5);
        (document.getElementById('key') as Element).innerHTML = (selectedRecord as ItemType).ContactName;
    }
    public beforePrint(args: PrintEventArgs): void {
        let customElement = document.createElement('div');
        customElement.innerHTML = document.getElementsByClassName('e-statustext')[0].innerHTML + (this.detailgrid as GridComponent).element.innerHTML;
        customElement.appendChild(document.createElement('br'));
        (args.element as Element).append(customElement);
    }
}
interface ItemType{
    CustomerName:string,
    CustomerID:string,
    ContactName:string
  }