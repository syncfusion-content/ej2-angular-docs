import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Column, GridComponent, GridModule, QueryCellInfoEventArgs, SearchEventArgs, SearchService, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';

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
    imports: [ GridModule ],
    providers: [SearchService, ToolbarService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [toolbar]='toolbarOptions' (actionBegin)="actionBegin($event)" (queryCellInfo)="queryCellInfo($event)" height='273' width='100%'>
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
        const key = (this.key as string) ?? '';
        if (!key) return;

        const cellEl = args.cell as HTMLElement | null | undefined;
        if (!cellEl) return;

        const col = args.column as Column;
        const data = args.data as Record<string, unknown>;
        const cellContent = (data?.[col.field] ?? '') as string;
        if (!cellContent) return;

        const baseText = cellEl.innerText ?? '';
        const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        const highlighted = baseText.replace(
          new RegExp(escapedKey, 'gi'),
          (match) => `<span class="customcss">${match}</span>`
        );

        cellEl.innerHTML = highlighted;
   }
}
