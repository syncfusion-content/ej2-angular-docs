

import { Component } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, DrillThroughService, DrillThroughEventArgs } from '@syncfusion/ej2-angular-pivotview';
import { CellEditSettings } from '@syncfusion/ej2-pivotview/src/pivotview';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  providers: [DrillThroughService],
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [editSettings]='editSettings' width=width (drillThrough)='drillThrough($event)'></ejs-pivotview>`
})

export class AppComponent {

    public width?: string;
    public dataSourceSettings?: IDataOptions;
    public editSettings?: CellEditSettings;

    drillThrough(args:DrillThroughEventArgs | any) {
        for (var i = 0; i < args.gridColumns.length; i++) {
            if (args.gridColumns[i].field === 'Country') {
                args.gridColumns[i].editType = 'dropdownedit';
                //args.gridColumns[i].editType = 'numericedit';
                //args.gridColumns[i].editType = 'textedit';
                //args.gridColumns[i].editType = 'booleanedit';
                //args.gridColumns[i].editType = 'datepickeredit';
                //args.gridColumns[i].editType = 'datetimepickeredit';
            }
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

        this.editSettings = {
            allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', allowCommandColumns: false,
            allowEditOnDblClick: true, showConfirmDialog: true, showDeleteConfirmDialog: false
        } as CellEditSettings;
    }
 }



