

import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, DisplayOption, PivotChartService, PivotViewComponent } from '@syncfusion/ej2-angular-pivotview';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { Pivot_Data } from './datasource';
@Component({
    selector: 'app-container',
    providers: [PivotChartService],
    template: `<div id="dropdown-control" style="margin-bottom:5px;">
            <table style="width: 350px;margin-left: 50px;">
                <tbody>
                    <tr style="height: 50px">
                        <td>
                            <div><b>Accumulation Chart:</b>
                            </div>
                        </td>
                        <td>
                            <div>
                                <select id="charttypes" name="ddl-view-mode">
                                    <option value='Pie'>Pie</option>
                                    <option value='Doughnut'>Doughnut</option>
                                    <option value='Funnel'>Funnel</option>
                                    <option value='Pyramid'>Pyramid</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div><ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings
  [chartSettings]='chartSettings' [displayOption]='displayOption'></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public pivotData?: IDataSet[];
    public dataSourceSettings?: IDataOptions;
    public chartSettings?: ChartSettings;
    public displayOption?: DisplayOption;
    public chartTypesDropDown?: DropDownList;
    @ViewChild('pivotview', { static: false })
    public pivotGridObj?: PivotViewComponent;

    onChange(args: ChangeEventArgs): void {
        this.chartSettings = { chartSeries: { type: args.value } } as ChartSettings;
    }
    ngOnInit(): void {
        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            columns: [{ name: 'Year' }, { name: 'Products' }],
            rows: [{ name: 'Country' }, { name: 'Quarter' }],
            formatSettings: [{ name: 'Amount', format: 'C' }],
            values: [{ name: 'Amount' }, { name: 'Sold' }]
        };
        this.displayOption = { view: 'Chart' } as DisplayOption;
        this.chartSettings = { chartSeries: { type: 'Pie' } } as ChartSettings;
        this.chartTypesDropDown = new DropDownList({
            floatLabelType: 'Auto',
            change: this.onChange.bind(this)
        });
        this.chartTypesDropDown.appendTo('#charttypes');
    }
}


