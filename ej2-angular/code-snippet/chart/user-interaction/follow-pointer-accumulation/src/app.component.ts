import { Component, OnInit } from '@angular/core';
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import { PieSeriesService, AccumulationTooltipService, AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts';

import { data } from './datasource';

@Component({
    imports: [
        AccumulationChartModule
    ],
    providers: [PieSeriesService, AccumulationTooltipService, AccumulationDataLabelService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-accumulationchart id="pie-chart" [enableAnimation]="enableAnimation"
        [tooltip]="tooltip">
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]="chartData" name="Browser" xName="x" yName="y"
                borderRadius="3">
            </e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public chartData?: Object[];
    public enableAnimation?: boolean;
    public tooltip?: Object;

    ngOnInit(): void {
        this.chartData = data;

        this.enableAnimation = true;

        this.tooltip = {
            enable: true,
            format: '<b>${point.x}</b><br>Percentage: <b>${point.y}%</b>',
            followPointer: true
        };
    }
}