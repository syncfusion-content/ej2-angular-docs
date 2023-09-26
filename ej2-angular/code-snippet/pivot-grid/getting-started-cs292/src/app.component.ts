

import { Component, ViewChild } from '@angular/core';
import {
    IDataOptions, PivotView, ToolbarService, ToolbarItems, DisplayOption, IDataSet, FieldListService
} from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  providers: [ToolbarService, FieldListService],
  // specifies the template string for the pivot table component
  template: `<div><ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings  showToolbar='true' showFieldList='true' width='100%' [displayOption]='displayOption' height='350' [toolbar]='toolbarOptions' (toolbarRender)='beforeToolbarRender($event)' (saveReport)='saveReport($event)'></ejs-pivotview></div>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    public dataSourceSettings?: IDataOptions;
    public toolbarOptions?: ToolbarItems[];
    public displayOption?: DisplayOption;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj?: PivotView;

    saveReport(args: any) {
        let reports = [];
        let isSaved: boolean = false;
        if (localStorage['pivotviewReports'] && localStorage['pivotviewReports'] !== "") {
            reports = JSON.parse(localStorage['pivotviewReports']);
        }
        if (args.report && args.reportName && args.reportName !== '') {
            reports.map(function (item: any): any {
                if (args.reportName === item.reportName) {
                    item.report = args.report; isSaved = true;
                }
            });
            if (!isSaved) {
                reports.push(args);
            }
            localStorage['pivotviewReports'] = JSON.stringify(reports);
        }
    }

    beforeToolbarRender(args: any) {
        args.customToolbar.splice(2, 0, {
            prefixIcon: 'e-rename-report e-icons', tooltipText: 'Custom Button',
            click: this.customButton.bind(this),
        });
        args.customToolbar.splice(3, 0, {
            prefixIcon: 'e-tool-expand e-icons', tooltipText: 'Expand/Collapse',
            click: this.toolbarClicked.bind(this),
        });
        args.customToolbar[0].align = "Left";
        args.customToolbar[1].align = "Center";
        args.customToolbar[2].align = "Right";
    }
    customButton(args: any) {
        // Here you can customize the click event for custom button
    }
    toolbarClicked(args: any) {
        this.pivotGridObj!.dataSourceSettings.expandAll = !this.pivotGridObj!.dataSourceSettings.expandAll;
    }
    ngOnInit(): void {
        this.displayOption = { view: 'Both' } as DisplayOption;

        this.toolbarOptions = ['Save', 'Export', 'FieldList'] as ToolbarItems[];

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


