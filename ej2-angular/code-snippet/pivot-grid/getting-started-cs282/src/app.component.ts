

import { Component, OnInit, ViewChild } from '@angular/core';
import { DisplayOption, IDataOptions, IDataSet, PivotViewComponent } from '@syncfusion/ej2-angular-pivotview';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings';
import { Pivot_Data } from './datasource';
import { Button } from '@syncfusion/ej2-buttons';

@Component({
  selector: 'app-container',
  // specifies the template string for the pivot table component
  template: `<span><button ej-button id='save'>Save</button></span><span><button ej-button id='load'>Load</button></span><div><ejs-pivotview #pivotview id='PivotView' height='300' [dataSourceSettings]=dataSourceSettings showGroupingBar='true' ></ejs-pivotview></div>`
})
export class AppComponent implements OnInit {
    public dataSourceSettings?: IDataOptions;
    public chartSettings?: ChartSettings;
    public displayOption?: DisplayOption;
    public saveButton?: Button;
    public loadButton?: Button;
    public layout?: string;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj?: PivotViewComponent;

    ngOnInit(): void {

        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };

        this.saveButton = new Button({ isPrimary: true });
        this.saveButton.appendTo('#save');

        this.saveButton.element.onclick = (): void => {
            this.layout = this.pivotGridObj?.getPersistData();
        };

        this.loadButton = new Button({ isPrimary: true });
        this.loadButton.appendTo('#load');

        this.loadButton.element.onclick = (): void => {
            this.pivotGridObj?.loadPersistData(this.layout as string);
        };
    }
}



