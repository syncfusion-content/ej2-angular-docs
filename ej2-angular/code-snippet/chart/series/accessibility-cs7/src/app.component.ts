import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CandleSeriesService, LineSeriesService, AccumulationDistributionIndicatorService, DateTimeService, CrosshairService, TooltipService, LegendService, IAxisLabelRenderEventArgs, TechnicalIndicatorModel } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [CandleSeriesService, LineSeriesService, AccumulationDistributionIndicatorService, DateTimeService, CrosshairService, TooltipService, LegendService],
    standalone: true,
    selector: 'app-container',
    template:
        `<ejs-chart id='chartcontainer' style="display:block;" [title]='title' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
              [axes]='axes' [chartArea]='chartArea' [crosshair]='crosshair' [tooltip]='tooltip' (axisLabelRender)='axisLabelRender($event)' [indicators]='indicators' [legendSettings]='legendSettings'>
            <e-series-collection>
                <e-series [dataSource]='chartData' type='Candle' width=2 xName='x' high='high' low='low' open='open' close='close' volume='volume' name='Apple Inc' [animation]='animation'></e-series>
            </e-series-collection>
        </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public axes?: Object[];
    public chartData?: Object[];
    public crosshair?: Object;
    public title?: string;
    public tooltip?: Object;
    public chartArea?: Object;
    public accessibility?: Object;
    public animation?: Object;
    public indicators?: TechnicalIndicatorModel[];
    public legendSettings?: Object;
    public axisLabelRender(args: IAxisLabelRenderEventArgs): void {
        if (args.axis.name === 'secondary') {
            let value: number = Number(args.text) / 1000000000;
            args.text = String(value) + 'bn';
        }
    };

    ngOnInit(): void {
        this.chartData = chartData;
        this.primaryXAxis = {
            title: 'Months',
            valueType: 'DateTime',
            intervalType: 'Months',
            majorGridLines: { width: 0 },
            crosshairTooltip: { enable: true }
        };
        this.primaryYAxis = {
            title: 'Price (Million Dollars)',
            minimum: 30,
            maximum: 180,
            interval: 30,
        };
        this.axes = [{
            name: 'secondary',
            minimum: -7000000000, maximum: 5000000000,
            interval: 6000000000,
            majorGridLines: { width: 0 },
            opposedPosition: true
        }];
        this.title = 'AAPL - 2016/2017';
        this.crosshair = { enable: true, lineType: 'Vertical' };
        this.chartArea = {
            border: { width: 0 }
        };
        this.tooltip = { enable: true, shared: true };
        this.legendSettings = { visible: false };
        this.indicators = [
            {
                type: 'AccumulationDistribution',
                field: 'Close',
                yAxisName: 'secondary',
                xName: 'x',
                fill: 'blue',
                period: 3,
                seriesName: 'Apple Inc',
                animation: { enable: true },
                accessibility: {
                    accessibilityDescription: 'The Accumulation Distribution indicator is used to assess the buying and selling pressure of Apple Inc. stock.',
                    accessibilityRole: 'indicator'
                }
            }
        ];
    }

}
