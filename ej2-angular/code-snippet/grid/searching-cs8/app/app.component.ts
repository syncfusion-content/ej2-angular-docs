
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { ToolbarItems, SearchEventArgs, GridComponent, QueryCellInfoEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
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
            (this.key as any) = (args.searchString as any).toLowerCase();
        }
    }
    queryCellInfo(args: QueryCellInfoEventArgs) {
        if ((this.key as any) != '') {
          var cellContent = (args.data as any)[(args.column as any).field];
          var parsedContent = cellContent.toString().toLowerCase();
          if (parsedContent.includes((this.key as any).toLowerCase())) {
            var i = 0;
            var searchStr = '';
            while (i < (this.key as any).length) {
              var index = parsedContent.indexOf((this.key as any)[i]);
              searchStr = searchStr + cellContent.toString()[index];
              i++;
            }
            (args.cell as any).innerHTML = (args.cell as any).innerText.replaceAll(
              searchStr,
              "<span class='customcss'>" + searchStr + '</span>'
            );
          }
        }
    }
}



