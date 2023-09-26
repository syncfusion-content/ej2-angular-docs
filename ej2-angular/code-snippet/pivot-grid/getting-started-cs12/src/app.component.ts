

import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, CalculatedFieldService, PivotView,
    FieldListService, ToolbarService, CalculatedFieldCreateEventArgs } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';
import { Button } from '@syncfusion/ej2-buttons';

@Component({
  selector: 'app-container',
  providers: [FieldListService, CalculatedFieldService,],
  template: `<div style="height: 480px;"><ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings width=width showToolbar='true' [toolbar]='toolbarOptions' allowCalculatedField='true' showFieldList='true' (calculatedFieldCreate)='calculatedFieldCreate($event)'></ejs-pivotview></div>`
})
export class AppComponent implements OnInit {
  public dataSourceSettings?: IDataOptions;
  public width?: string;

    @ViewChild('pivotview',{static: false})
    public pivotGridObj?: PivotView;
toolbarOptions: any;

    calculatedFieldCreate(args: CalculatedFieldCreateEventArgs):void {
       if(args.calculatedField?.formatString === '') {
            args.cancel = true;
        }
    }

    ngOnInit(): void {
        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }, { name: 'Total', caption: 'Total Amount', type: 'CalculatedField' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: [],
            calculatedFieldSettings: [{ name: 'Total', formula: 'Math.round("Sum(Amount)") > abs("Sum(Sold)") ? min("Sum(Amount)", "Sum(Sold)") : Math.sqrt("Sum(Sold)")' }]
        };
        this.width = '100%';
    }
}



