import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'



import { Component } from '@angular/core';
import { IDataSet, PivotView, DrillThroughService, EditCompletedEventArgs, CellEditSettings } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
imports: [
        
        PivotViewAllModule,
        PivotFieldListAllModule
    ],


standalone: true,
  selector: 'app-container',
  providers: [DrillThroughService],
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [editSettings]='editSettings'
              allowDrillThrough='true' [width]=width (editCompleted)='editCompleted($event)'></ejs-pivotview>`
})

export class AppComponent {

    public width?: string;
     public editSettings?: CellEditSettings;
    public dataSourceSettings?: DataSourceSettingsModel;

    editCompleted(args:EditCompletedEventArgs) {
        //triggers when a value cell is edited
    }

    ngOnInit(): void {

        this.width = "100%";

        this.editSettings = { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Normal' } as CellEditSettings;

        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }]
        };
    }
 }



