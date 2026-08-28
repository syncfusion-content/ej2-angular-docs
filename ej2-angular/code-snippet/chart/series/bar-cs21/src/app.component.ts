import {
    ChartModule,
    BarSeriesService,
    TooltipService,
    CategoryService,
    LegendService,
    IPointRenderEventArgs
} from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { barData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [
        BarSeriesService,
        CategoryService,
        LegendService,
        TooltipService
    ],
    standalone: true,
    selector: 'app-container',
    template: `
        <ejs-chart
            id="chart-container"
            [primaryXAxis]="primaryXAxis"
            [primaryYAxis]="primaryYAxis"
            [title]="title"
            [legendSettings]="legendSettings"
            [tooltip]="tooltip"
            [chartArea]="chartArea"
            (pointRender)="pointRender($event)">

            <e-series-collection>
                <e-series
                    [dataSource]="barData"
                    type="Bar"
                    xName="x"
                    yName="y"
                    name="Smartphone Sales"
                    [columnSpacing]="0.3"
                    legendShape="Rectangle"
                    [cornerRadius]="cornerRadius">
                </e-series>
            </e-series-collection>
        </ejs-chart>
    `
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public barData?: Object[];
    public title?: string;
    public legendSettings?: Object;
    public tooltip?: Object;
    public cornerRadius?: Object;
    public chartArea?: Object;

    public pointRender(args: IPointRenderEventArgs): void {
        const colors: string[] = [
            '#BB8FCE',
            '#4ECDC4',
            '#45B7D1',
            '#F7B731',
            '#5D6D7E',
            '#E17055'
        ];

        args.fill = colors[args.point.index % colors.length];
    }

    public ngOnInit(): void {
        this.barData = barData;

        this.primaryXAxis = {
            valueType: 'Category',
            title: 'Year',
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 }
        };

        this.primaryYAxis = {
            labelFormat: '{value}M',
            title: 'Smartphone Sales (Millions)',
            edgeLabelPlacement: 'Shift',
            majorTickLines: { width: 0 },
            majorGridLines: { width: 0 },
            lineStyle: { width: 0 }
        };

        this.title = 'Global Smartphone Sales by Year (2006–2011)';

        this.legendSettings = {
            visible: true,
            shapeWidth: 9,
            shapeHeight: 9
        };

        this.tooltip = {
            enable: true,
            enableHighlight: true,
            header: '<b>${series.name}</b>',
            format: '${point.x}: <b>${point.y} million</b>'
        };

        this.cornerRadius = {
            topRight: 4,
            bottomRight: 4
        };

        this.chartArea = {
            border: {
                width: 0
            },
            margin: {
                bottom: 12
            }
        };
    }
}