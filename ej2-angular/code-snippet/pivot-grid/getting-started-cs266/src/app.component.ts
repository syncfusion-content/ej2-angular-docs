

import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet, PivotCellSelectedEventArgs } from '@syncfusion/ej2-angular-pivotview';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings width=width [gridSettings]=gridSettings (cellSelecting)='cellSelecting($event)'></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public dataSourceSettings?: IDataOptions;
    public width?: string;
    public gridSettings?: GridSettings;

    ngOnInit(): void {
        this.width = '100%';

        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            formatSettings: [{ name: 'Amount', format: 'C2', useGrouping: false,
                    minimumSignificantDigits: 1, maximumSignificantDigits: 3 }],
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            filters: []
        };

        this.gridSettings = {
            allowSelection: true,
            selectionSettings: { mode: 'Both', type: 'Multiple' }
        } as GridSettings;
    }

    cellSelecting(args: PivotCellSelectedEventArgs){
        //args.selectedCellsInfo -> get selected cells information.
        //args.pivotValues -> get the pivot values of the pivot table.
    }
}



