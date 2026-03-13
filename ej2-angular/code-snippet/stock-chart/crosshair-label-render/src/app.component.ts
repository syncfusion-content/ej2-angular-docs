import { Component, OnInit } from '@angular/core';
import { ICrosshairLabelRenderEventArgs, StockChartModule } from '@syncfusion/ej2-angular-charts';
import {
  DateTimeService, SplineAreaSeriesService, RangeTooltipService, CrosshairService,
  LineSeriesService, SplineSeriesService, CandleSeriesService, HiloOpenCloseSeriesService,
  HiloSeriesService, RangeAreaSeriesService, TrendlinesService, EmaIndicatorService,
  RsiIndicatorService, BollingerBandsService, TmaIndicatorService, MomentumIndicatorService,
  SmaIndicatorService, AtrIndicatorService, ExportService, AccumulationDistributionIndicatorService,
  MacdIndicatorService, StochasticIndicatorService
} from '@syncfusion/ej2-angular-charts';

import { stockData1 } from './datasource';

@Component({
    imports: [
        StockChartModule
    ],
    providers: [
        DateTimeService, SplineAreaSeriesService, RangeTooltipService, CrosshairService,
        LineSeriesService, SplineSeriesService, CandleSeriesService, HiloOpenCloseSeriesService,
        HiloSeriesService, RangeAreaSeriesService, TrendlinesService, EmaIndicatorService,
        RsiIndicatorService, BollingerBandsService, TmaIndicatorService, MomentumIndicatorService,
        SmaIndicatorService, AtrIndicatorService, ExportService, AccumulationDistributionIndicatorService,
        MacdIndicatorService, StochasticIndicatorService
    ],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-stockchart id="stockchartsplinearea" [primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis"
        [chartArea]="chartArea" [crosshair]="crosshair" (crosshairLabelRender)="crosshairLabelRender($event)">
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]="chartData" xName="x" yName="high" type="SplineArea" [opacity]="0.5">
            </e-stockchart-series>
        </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public chartArea?: Object;
    public crosshair?: Object;
    public chartData?: Object[];

    ngOnInit(): void {
        this.chartData = stockData1;

        this.primaryXAxis = {
            valueType: 'DateTime',
            majorGridLines: { width: 0 },
            crosshairTooltip: { enable: true }
        };

        this.primaryYAxis = {
            lineStyle: { color: 'transparent' },
            majorTickLines: { color: 'transparent', height: 0 },
            crosshairTooltip: { enable: true }
        };

        this.chartArea = {
            border: { width: 0 }
        };

        this.crosshair = {
            enable: true,
            lineType: 'Both'
        };
    }

    crosshairLabelRender(args: ICrosshairLabelRenderEventArgs): void {
        if (args.axisName === 'primaryXAxis') {
            const date = args.value instanceof Date ? args.value : new Date(args.text);
            args.text = date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
        }

        if (args.axisName === 'primaryYAxis') {
            const price = typeof args.value === 'number' ? args.value : Number(args.text);
            args.text = '₹' + price.toLocaleString('en-IN', { maximumFractionDigits: 0 });

            if (price > 310) {
                args.textStyle = args.textStyle || {};
                args.textStyle.color = '#d32f2f';
                args.fill = '#ffebee';
            }
        }
    }
}