

import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, ConditionalFormattingService, PivotView,
    FieldListService, ToolbarService, ToolbarItems } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  providers: [FieldListService, ToolbarService ],
  template: `<div><ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings showFieldList='true' width=width showToolbar='true' [toolbar]='toolbarOptions'></ejs-pivotview></div>`
})
export class AppComponent implements OnInit {
  public dataSourceSettings?: IDataOptions;
  public width?: string;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj?: PivotView;
    public toolbarOptions?: ToolbarItems[];
    ngOnInit(): void {
        this.toolbarOptions = ['FieldList'] as ToolbarItems[];
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
        this.width = '100%';
    }
}



