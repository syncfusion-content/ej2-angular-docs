
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
  selector: 'app-root',
  template: `<ejs-grid [dataSource]='data'>
                <e-columns>
                    <e-column type='checkbox' width=90></e-column>  
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90 type='number'></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120 type='string'></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90 type='number'></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120 type='date'></e-column>
                    <e-column field='ShippedDate' headerText='Shipped Date' textAlign='Right' format='dd/MM/yyyy hh:mm' width=200 type='dateTime'></e-column>
                    <e-column field='Verified' headerText='Verified' width='100' type='boolean' [displayAsCheckBox]='true'></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];

  ngOnInit(): void {
    this.data = data;
  }
}


