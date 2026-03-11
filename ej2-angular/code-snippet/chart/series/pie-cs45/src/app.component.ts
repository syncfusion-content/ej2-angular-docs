import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import { PieSeriesService, AccumulationTooltipService, AccumulationLegendService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { pieData } from './datasource';

@Component({
    imports: [AccumulationChartModule],
    providers: [PieSeriesService, AccumulationTooltipService, AccumulationLegendService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" [tooltip]='tooltip' [legendSettings]='legendSettings'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata?: Object[];
    public tooltip?: Object;
    public legendSettings?: Object;
    ngOnInit(): void {
        this.piedata = pieData;
        this.tooltip = {
            enable: true,
            enableHighlight: true
        };
        this.legendSettings = { visible: false };
    };
}
