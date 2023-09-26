

import { Component, ViewChild } from '@angular/core';
import { IDataOptions, PivotView, ToolbarService, ToolbarItems, DisplayOption, IDataSet
} from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  providers: [ ToolbarService ],
  // specifies the template string for the pivot table component
  template: `<div style="height: 480px;"><ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings showToolbar='true' width='100%' [displayOption]='displayOption' height='350' [toolbar]='toolbarOptions' [chartTypes]= 'chartTypeOptions'></ejs-pivotview></div>`
})

export class AppComponent {
    public dataSourceSettings?: IDataOptions;
    public toolbarOptions?: ToolbarItems[];
    public displayOption?: DisplayOption;
    public chartTypeOptions?: any;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj?: PivotView;

    ngOnInit(): void {
        this.displayOption = { view: 'Both' } as DisplayOption;
        this.chartTypeOptions = ['Column', 'Bar', 'Line', 'Area'];
        this.toolbarOptions = [ 'Grid','Chart' ] as ToolbarItems[];
        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            enableSorting: true,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
        };
    }
 }


