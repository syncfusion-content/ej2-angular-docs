import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { SortDirection, SortEventArgs } from '@syncfusion/ej2-grids';
import {
  L10n,
  loadCldr,
  setCulture,
  setCurrencyCode,
} from '@syncfusion/ej2-base';
import { sortData } from './datasource';
import * as cagregorian from './ca-gregorian.json';
import * as currencies from './currencies.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';
import * as numberingSystems from './numberingSystems.json';

@Component({
  selector: 'app-container',
  template: ` <ejs-treegrid #treegrid [dataSource]='data' height='315' [treeColumnIndex]='1'  [allowSorting]='true' locale='ar' childMapping='subtasks' >
                <e-columns>
                    <e-column field='Category' headerText='Category' textAlign='Right' width=140></e-column>
                    <e-column field='orderName' headerText='Order Name' textAlign='Left' width=200></e-column>
                    <e-column field='orderDate' headerText='Order Date' [sortComparer]="sortComparer" textAlign='Right' format='yMd' width=150></e-column>
                    <e-column field='price' headerText='Price' format='C2' type="number" [sortComparer]="sortComparer" textAlign='Right' width=80></e-column>
                </e-columns>
            </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
  public data?: Object[];
  public initialSort?: Object;
  public message?: string;

  @ViewChild('treegrid')
  public treegrid?: TreeGridComponent;
  public formatOptions?: object;

  ngOnInit(): void {
    this.data = sortData;
    setCulture('ar');
    setCurrencyCode('QAR');
    loadCldr(cagregorian, currencies, numbers, timeZoneNames, numberingSystems);
    this.formatOptions = { type: 'date', format: 'yyyy/MMM/dd' };
  }
  public sortComparer = (
    reference: number | Date | string,
    comparer: number | Date | string,
    sortOrder: 'Ascending' | 'Descending'
  ) => {
    const referenceDate = new Date(reference);
    const comparerDate = new Date(comparer);
    if (typeof reference === 'number' && typeof comparer === 'number') {
      // Numeric column sorting
      return sortOrder === 'Ascending'
        ? comparer - reference
        : reference - comparer;
    } else if (
      !isNaN(referenceDate.getTime()) &&
      !isNaN(comparerDate.getTime())
    ) {
      // Date column sorting
      return sortOrder === 'Ascending'
        ? comparerDate.getTime() - referenceDate.getTime()
        : referenceDate.getTime() - comparerDate.getTime();
    } else {
      // Default sorting for other types
      const intlCollator = new Intl.Collator(undefined, {
        sensitivity: 'variant',
        usage: 'sort',
      });
      const comparisonResult = intlCollator.compare(
        String(reference),
        String(comparer)
      );
      return sortOrder === 'Ascending' ? -comparisonResult : comparisonResult;
    }
  };
}
