

import { Component, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, FieldListService, PivotViewComponent, FieldDroppedEventArgs } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  providers: [FieldListService],
  // specifies the template string for the pivot table component
  template: `<div><ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings (onFieldDropped)='fieldDropped($event)' showFieldList='true' width=width></ejs-pivotview></div>`
})

export class AppComponent {

    public width?: string;
    public dataSourceSettings?: IDataOptions;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj?: PivotViewComponent;

    fieldDropped(args: FieldDroppedEventArgs | any): void {
        //Triggers, whenever field list get refreshed.
        args.droppedField.caption = args.droppedField.name + " --> " + args.droppedAxis;
    }

    ngOnInit(): void {

        this.width = '100%';

        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            allowLabelFilter: true,
            allowValueFilter: true,
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



