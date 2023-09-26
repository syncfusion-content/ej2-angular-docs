

import { Component, ViewChild } from '@angular/core';
import {
    IDataOptions, PivotView, ToolbarService, ToolbarItems, DisplayOption, IDataSet, DataSourceSettings
} from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  providers: [ToolbarService],
  // specifies the template string for the pivot table component
  template: `<div><ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings  showToolbar='true' width='100%' [displayOption]='displayOption' height='350' [toolbar]='toolbarOptions' (toolbarRender)='beforeToolbarRender($event)'></ejs-pivotview></div>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    public dataSourceSettings?: IDataOptions;
    public toolbarOptions?: ToolbarItems[];
    public displayOption?: DisplayOption;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj?: PivotView;

    beforeToolbarRender(args: any) {
        args.customToolbar.splice(12, 0, {
                prefixIcon: 'e-tool-expand e-icons', tooltipText: 'Expand/Collapse',
                click: this.toolbarClicked.bind(this),
        });
    }
    toolbarClicked(args: any) {
        (this.pivotGridObj!.dataSourceSettings as DataSourceSettings).expandAll = !this.pivotGridObj?.dataSourceSettings.expandAll;
    }
    ngOnInit(): void {
        this.displayOption = { view: 'Both' } as DisplayOption;

        this.toolbarOptions = ['Expand/Collapse'] as any as ToolbarItems[];

        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
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


