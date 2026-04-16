import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridAllModule } from '@syncfusion/ej2-angular-grids'

import { enableRipple } from '@syncfusion/ej2-base';
import { Component } from '@angular/core';

// enable ripple effects
enableRipple(true);

@Component({
  imports: [

    GridAllModule
  ],


  standalone: true,
  selector: 'app-root',
  template: `
  <h1>
    Syncfusion Angular UI Grid!
  </h1>

  <ejs-grid [dataSource]='data'>
    <e-columns>
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
      <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
      <e-column field='ShipCountry' headerText='ShipCountry' width='100'>
        <ng-template #template let-data>
          <div class="template">{{data.ShipCountry}}</div>
        </ng-template>
      </e-column>
    </e-columns>
  </ejs-grid>
  `
})
export class AppComponent {
  public data: Object[] = [
    { OrderID: 10248, CustomerID: 'VINET', ShipCountry: 'France' },
    { OrderID: 10249, CustomerID: 'TOMSP', ShipCountry: 'Germany' },
    { OrderID: 10250, CustomerID: 'HANAR', ShipCountry: 'Brazil' }
  ];
    
}



