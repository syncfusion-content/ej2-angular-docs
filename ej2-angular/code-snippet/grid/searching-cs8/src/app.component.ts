import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, SearchService, ToolbarService } from '@syncfusion/ej2-angular-grids'


import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { ToolbarItems, SearchEventArgs, GridComponent, QueryCellInfoEventArgs, Column } from '@syncfusion/ej2-angular-grids';

interface ColumnData{
  [key: string]: number| string;
  OrderID:number,
  Freight:number,
  CustomerID:string,
  ShipCity:string,
  ShipName:string,
  ShipCountry:string,
  ShipPostalCode:number

}
@Component({
imports: [
        
        GridModule
    ],

providers: [SearchService, ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [toolbar]='toolbarOptions' (actionBegin)="actionBegin($event)" (queryCellInfo)="queryCellInfo($event)" height='400' width='100%'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {
    public key?:string = '';
    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('grid') public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['Search'];
    }
    actionBegin(args:SearchEventArgs) {
        if (args.requestType === 'searching') {
            (this.key as string) = (args.searchString as string).toLowerCase();
        }
    }
    queryCellInfo(args: QueryCellInfoEventArgs) {
        if ((this.key as string) != '') {
          var cellContent = (args.data as ColumnData)[(args.column as Column).field];
          var parsedContent = cellContent.toString().toLowerCase();
          if (parsedContent.includes((this.key as string).toLowerCase())) {
            var i = 0;
            var searchStr = '';
            while (i < (this.key as string).length) {
              var index = parsedContent.indexOf((this.key as string)[i]);
              searchStr = searchStr + cellContent.toString()[index];
              i++;
            }
            (args.cell as HTMLElement).innerHTML = (args.cell as HTMLElement).innerText.replaceAll(
              searchStr,
              "<span class='customcss'>" + searchStr + '</span>'
            );
          }
        }
    }
}





