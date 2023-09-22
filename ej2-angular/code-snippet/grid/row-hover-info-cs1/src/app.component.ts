import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, RowDataBoundEventArgs } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
  selector: 'app-root',
  template: `<div id='show' style="padding:0px 0px 20px 0px;" ></div>
            <ejs-grid #grid [dataSource]='data' (rowDataBound)='rowDataBound($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
                    width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=140>
                    </e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' 
                    format='C' width=120></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right'
                    format='yMd' width=120></e-column>
                </e-columns>
            </ejs-grid>`,
})
export class AppComponent implements OnInit {

  @ViewChild('grid', { static: true }) public grid?: GridComponent;
  public data?: object[];

  ngOnInit(): void {
    this.data = data;
  }
  rowDataBound(args: RowDataBoundEventArgs): void {
    (args as any).row.addEventListener('mouseover', (e: MouseEvent) => {
      const rowInformation = (this.grid as any).getRowInfo(e.target as HTMLElement);
      console.log(rowInformation);
      (document.getElementById('show') as any).innerHTML = `
        <table style="border-collapse: collapse; width: 600px;">
          <tr style="border: 2px solid;">
            <td style="padding: 2px;"><b>Row Information:</b></td>
          </tr>
          <tr style="border: 2px solid; padding: 8px;">
            <th style="border: 2px solid; padding: 8px; width: 120px;"><b>Class Name</b>
            </th>
            <td style="border: 2px solid; padding: 8px;">${rowInformation.row.className}
            </td>
          </tr>
          <tr style="border: 2px solid;">
            <th style="border: 2px solid; padding: 8px;"><b>Row Index</b>
            </th>
            <td style="border: 2px solid; padding: 8px;">${rowInformation.rowIndex}
          </td>
          </tr>
         </table>`;
    });
  }

}

