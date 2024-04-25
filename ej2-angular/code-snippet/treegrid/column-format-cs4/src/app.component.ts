import {
  L10n,
  loadCldr,
  setCulture,
  setCurrencyCode,
} from '@syncfusion/ej2-base';
import { Component, OnInit } from '@angular/core';
import { formatData } from './datasource';
import * as cagregorian from './ca-gregorian.json';
import * as currencies from './currencies.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';

@Component({
  selector: 'app-container',
  template: `<ejs-treegrid [dataSource]='data' [locale]='locale' height='315px' [treeColumnIndex]='1' childMapping='subtasks' >
                <e-columns>
                    <e-column field='orderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='orderName' headerText='Order Name' textAlign='Left' width=180></e-column>
                    <e-column field='OrderDate' headerText='OrderDate' [format]='formatOptions' textAlign='Left' width=150></e-column>
                    <e-column field='price' headerText='Price' textAlign='Right' format='c2' type='number' width=80></e-column>
                </e-columns>
              </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
  public data?: object[];
  public formatOptions?: object;
  public locale: string = 'es-AR';

  ngOnInit(): void {
    setCulture('es-AR');
    setCurrencyCode('ARS');
    loadCldr(cagregorian, currencies, numbers, timeZoneNames);
    this.formatOptions = { type: 'date', format: 'yyyy-MMM-dd' };
    this.data = formatData;
  }
}
