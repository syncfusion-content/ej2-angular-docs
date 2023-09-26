


import { Component, OnInit } from '@angular/core';
import { ChartData } from './chartdata';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [legendSettings]='legend' [crosshair]='crosshair'>
        <e-series-collection>
            <e-series [dataSource]='series1' type='Line' xName='x' yName='y' name='Temperature'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public series1?: Object[];
     public series2?: Object[];
    public crosshair?: Object;
    public title?: string;
    public primaryYAxis?: Object;
    public legend?: Object;
    ngOnInit(): void {
        this.primaryXAxis = {
            valueType: 'DateTime',
            crosshairTooltip: { enable: true, fill: 'green' },
            labelFormat: 'yMMM'
        };
        this.primaryYAxis = {
            crosshairTooltip: { enable: true, fill: 'green' }
        };
        this.crosshair = { enable: true, line: {width: 2, color: 'green'}, fill: 'green' };
        this.series1 = ChartData.prototype.getCrosshairData().series1;
        this.series2 = ChartData.prototype.getCrosshairData().series2;
        this.legend = { visible: true};
        this.title = 'Weather Condition';
    }

}



