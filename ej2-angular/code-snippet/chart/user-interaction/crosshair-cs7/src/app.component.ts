


import { Component, OnInit } from '@angular/core';
import { ChartData } from './chartdata';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [legendSettings]='legend' [crosshair]='crosshair'>
        <e-axes>
            <e-axis [majorGridLines]='majorGridLines'[crosshairTooltip]='crosshair' rowIndex=0 opposedPosition='true'
                [minimum]='0' [maximum]='160' [interval]='20' name='yAxis' title='Rainfall (MM)'>
            </e-axis>
        </e-axes>
        <e-series-collection>
            <e-series [dataSource]='series1' type='Line' xName='x' yName='y' name='Temperature'></e-series>
            <e-series [dataSource]='series2' type='Line' xName='x' yName='y' name='Rainfall' yAxisName='yAxis'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public series1?: Object[];
    public series2?: Object[];
    public majorGridLines?: Object;
    public crosshair?: Object;
    public title?: string;
    public primaryYAxis?: Object;
    public legend?: Object;
    ngOnInit(): void {
        this.primaryXAxis = {
            majorGridLines: { width: 0 },
            valueType: 'DateTime',
            crosshairTooltip: { enable: true },
            labelFormat: 'yMMM'
        };
        this.primaryYAxis = {
            minimum: 10, maximum: 90, interval: 10,
            title: 'Temperature (°F)',
            rowIndex: 0,
            crosshairTooltip: { enable: true }
        };
        this.majorGridLines = { width: 0 };
        this.crosshair = { enable: true };
        this.series1 = ChartData.prototype.getCrosshairData().series1;
        this.series2 = ChartData.prototype.getCrosshairData().series2;
        this.legend = { visible: true };
        this.title = 'Weather Condition';
    }

}



