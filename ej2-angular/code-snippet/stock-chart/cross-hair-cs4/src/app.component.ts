import { ChartModule, StockChartAllModule, ChartAllModule } from '@syncfusion/ej2-angular-charts';
import { DateTimeService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import { LegendService, CrosshairService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
imports: [
         ChartModule, StockChartAllModule, ChartAllModule
    ],

providers: [ DateTimeService, LineSeriesService, LegendService, CrosshairService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-stockchart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title' [crosshair]='crosshair'>
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]='chartData' type='Candle'></e-stockchart-series>
        </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public crosshair?: Object;
    ngOnInit(): void {
        this.chartData = chartData;
        this.title = 'AAPL Stock Price';
        this.primaryXAxis = {
            majorGridLines: { color: 'transparent' },
            crosshairTooltip: { enable: true, fill: 'green' }
        };
        this.primaryYAxis = {
            lineStyle: { color: 'transparent' },
            majorTickLines: { color: 'transparent', width: 0 },
            crosshairTooltip: { enable: true, fill: 'green' }
        };
        this.crosshair= {
            enable: true,
            line: { width: 2, color: 'green' },
            snapToData: true
        };
    }

}


