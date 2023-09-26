

import { Component, ViewChild } from '@angular/core';
import {
    IDataOptions, PivotView, FieldListService, CalculatedFieldService, NumberFormattingService,
    ToolbarService, ConditionalFormattingService, ToolbarItems, DisplayOption, IDataSet
} from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  providers: [CalculatedFieldService, ToolbarService, ConditionalFormattingService, FieldListService, NumberFormattingService],
  // specifies the template string for the pivot table component
  template: `<div style="height: 480px;"><ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings width='100%' showToolbar='true' height='350' [toolbar]='toolbarOptions' ></ejs-pivotview></div>`
})

export class AppComponent {
    public dataSourceSettings?: IDataOptions;
    public toolbarOptions?: ToolbarItems[];
    public displayOption?: DisplayOption;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj?: PivotView;

    ngOnInit(): void {
        this.displayOption = { view: 'Both' } as DisplayOption;

        this.toolbarOptions = [ 'SubTotal', 'GrandTotal' ] as ToolbarItems[];
        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            enableSorting: true,
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };
    }
 }


