


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
    public majorGridLines?: Object;
    public crosshair?: Object;
    public title?: string;
    public primaryYAxis?: Object;
    public legend?: Object;
    ngOnInit(): void {
        this.primaryXAxis = {
            valueType: 'DateTime',
            crosshairTooltip: { enable: true },
            labelFormat: 'yMMM'
        };
        this.primaryYAxis = {
            crosshairTooltip: { enable: true }
        };
        this.crosshair = { enable: true };
        this.series1 = ChartData.prototype.getCrosshairData().series1;
        this.legend = { visible: true };
        this.title = 'Weather Condition';
    }

}



