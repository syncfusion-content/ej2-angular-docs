

import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, CalculatedFieldService, PivotView, NumberFormattingService,NumberFormattingEventArgs } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';
import { Button } from '@syncfusion/ej2-buttons';

@Component({
  selector: 'app-container',
  providers: [CalculatedFieldService, NumberFormattingService],
  template: `<div class="col-md-8">
  <ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings allowNumberFormatting='true' allowCalculatedField='true' (numberFormatting)='numberFormatting($event)' width=width></ejs-pivotview></div>
  <div class="col-md-2"><button ej-button id='calculatedfield'>number Format</button></div>`
})
export class AppComponent implements OnInit {
  public dataSourceSettings?: IDataOptions;
  public button?: Button;
  public width?: string;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj?: PivotView;

    numberFormatting (args: NumberFormattingEventArgs): void {
        if (args.formatName == 'Amount' ) {
            args.cancel = true;
        }
    }

    ngOnInit(): void {
        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            enableSorting: true,
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }, { name: 'Total', caption: 'Total Amount', type: 'CalculatedField' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: [],
            calculatedFieldSettings: [{ name: 'Total', formula: '"Sum(Amount)"+"Sum(Sold)"' }]
        };

        this.width = '100%';

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#calculatedfield');

        this.button.element.onclick = (): void => {
            this.pivotGridObj?.numberFormattingModule.showNumberFormattingDialog();
        };
    }
}



