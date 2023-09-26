

import { Component } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, CellEditSettings, PivotActionCompleteEventArgs } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',  
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings (actionComplete)='actionComplete($event)' [editSettings]=editSettings width=width></ejs-pivotview>`
})

export class AppComponent {

    public width?: string;
    public editSettings?: CellEditSettings
    public dataSourceSettings?: IDataOptions;

    actionComplete(args: PivotActionCompleteEventArgs): void {
        if (args.actionName == 'New record added' || args.actionName == 'Edited records saved') {
            // Triggers when the editing UI actions such as add and edit are completed.
        }
    }

    ngOnInit(): void {

        this.width = "100%";
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
        this.editSettings = { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Dialog' } as CellEditSettings;
    }
 }



