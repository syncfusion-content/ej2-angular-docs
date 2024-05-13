import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'

import { Component, ViewChild, OnInit } from "@angular/core";
import { GridComponent, RowDataBoundEventArgs, SelectionSettingsModel } from "@syncfusion/ej2-angular-grids";
import { data } from "./datasource";

interface CustomRowDataBoundEventArgs extends RowDataBoundEventArgs {
  column: {
    field: string;
  };
  cell: HTMLElement;
  data: DataType;
}

interface DataType {
  OrderID: number;
  CustomerID: string;
  Freight: number;
  ShipName: string;
  ShipCity: string;
  isNewlyAdded: boolean;
}

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService],
standalone: true,
  selector: 'app-root',
  template: `
      <button  #addtop ejs-button class="e-control e-btn e-lib e-info" (click)="addTopEvent()">Add rows Data</button>
      <button style="margin-left: 20px" #delete ejs-button class="e-control e-btn e-lib e-info" (click)="deleteEvent()">Delete 
      rows</button>
      <button style="margin-left: 20px" #addbottom ejs-button class="e-control e-btn e-lib e-info" (click)="updateEvent()">Update Freight Data</button>
      <div id="message"> {{ message }}</div>
      <div  style="padding-top: 20px">
        <ejs-grid #immutable [dataSource]='rowData' [enableHover]="false" height='350' [enableImmutableMode]="true" allowPaging="true" [selectionSettings]="selectionOptions"
          [pageSettings]="pageSettings"  (rowDataBound)="rowDataBound($event)" (queryCellInfo)="queryCellInfo($event)">
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' isPrimaryKey="true" width='120'
            textAlign='Right'></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width='120'></e-column>
            <e-column field='Freight' headerText='Freight' width='120'></e-column>
            <e-column field='ShipName' headerText='Ship Name' width='120'></e-column>
          </e-columns>
        </ejs-grid>
      </div>`
})
export class AppComponent implements OnInit {

  public pageSettings?: Object = { pageSize: 50 };
  public rowData?: DataType[];
  @ViewChild("immutable")
  public immutablegrid?: GridComponent;
  public intervalId: NodeJS.Timeout;
  public selectionOptions?: SelectionSettingsModel;
  public message: string = '';

  ngOnInit(): void {
    this.rowData = data as DataType[];
    this.selectionOptions = { type: 'Multiple' };
    this.message = `Initial rows rendered: ${this.rowData.length}`;
  }

  queryCellInfo(args: CustomRowDataBoundEventArgs): void {
    if (args.column.field === 'ShipName' && args.data.ShipName === "Gems Chevalier") {
      (args.cell as HTMLElement).style.backgroundColor = 'rgb(210, 226, 129)';
    }
  }
  rowDataBound(args: RowDataBoundEventArgs): void {
    (args.row as HTMLElement).style.backgroundColor = (args.data as DataType).isNewlyAdded ? '' : ' rgb(208, 255, 255)';
  }
  addTopEvent(): void {
    // Set the background color of all rows to red
    (this.immutablegrid as GridComponent).getAllDataRows().forEach(row => {
      (row as HTMLElement).style.backgroundColor = "rgb(208, 255, 255)";
    });
    let count = 0;
    if (count < 1) {
      let newRowData: object[] = [];
      let addedRecords: object = {
        'OrderID': this.generateOrderId(),
        'CustomerID': this.generateCustomerId(),
        'ShipCity': this.generateShipCity(),
        'Freight': this.generateFreight(),
        'ShipName': this.generateShipName(),
        'isNewlyAdded': true
      };
      newRowData.push(addedRecords);
      this.rowData = ([...newRowData, ...this.rowData as DataType[]] as DataType[]);
      count++;
      this.message = `${count} rows rendered after performing the add action`;
    }
  }
  deleteEvent(): void {
    let count = 0;
    if (count < 1 && (this.rowData as DataType[]).length > 0) {
      this.rowData = (this.rowData as DataType[]).slice(1);
      count++;
      this.message = `${count} rows deleted after performing delete action`;
    }
  }
  updateEvent(): void {
    let count = 0;
    let newRowData = (this.rowData as any).map((row: any) => {
      if (row.ShipName === 'Bueno Foods') {
        count++;
        return { ...row, 'ShipName': "Gems Chevalier" };
      } else {
        return row;
      }
    });
    this.rowData = newRowData;
    this.message = ` ${count} rows updated after performing update action`;
  }

  generateOrderId(): number {
    return Math.floor(10000 + Math.random() * 90000);
  }

  generateCustomerId(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  generateShipCity(): string {
    const cities = ['London', 'Paris', 'New York', 'Tokyo', 'Berlin'];
    return cities[Math.floor(Math.random() * cities.length)];
  }

  generateFreight(): number {
    const randomValue = Math.random() * 100;
    return parseFloat(randomValue.toFixed(2));
  }

  generateShipName(): string {
    const names = ['Que Delícia', 'Bueno Foods', 'Island Trading', 'Laughing Bacchus Winecellars'];
    return names[Math.floor(Math.random() * names.length)];
  }

}
