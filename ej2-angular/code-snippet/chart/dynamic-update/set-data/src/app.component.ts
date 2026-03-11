import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { ChartComponent, ColumnSeriesService, CategoryService, IAxisRangeCalculatedEventArgs } from '@syncfusion/ej2-angular-charts';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
imports: [
         ChartModule, ButtonModule
    ],

providers: [ ColumnSeriesService, CategoryService ],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart #chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [chartArea]='chartArea' (axisRangeCalculated)="axisRangeCalculated($event)">
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='x' yName='y' columnWidth=0.5 [cornerRadius]='cornerRadius'></e-series>
        </e-series-collection>
    </ejs-chart>
    <button ej-button id='update' (click)='click()'>Update Data</button>`
})
export class AppComponent implements OnInit {
    @ViewChild('chart')
    public chart?: ChartComponent;
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public chartData?: Object[] = [
        { x: 'Jewellery', y: 75 },
        { x: 'Shoes', y: 45 },
        { x: 'Footwear', y: 73 },
        { x: 'Pet Services', y: 53 },
        { x: 'Business Clothing', y: 85 },
        { x: 'Office Supplies', y: 68 },
        { x: 'Food', y: 45 }
    ];
    public title?: string;
    public cornerRadius?: Object;
    public chartArea?: Object;
    public getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    ngOnInit(): void {
        this.primaryXAxis = {
            valueType: 'Category',
            majorGridLines: { width: 0 },
            labelStyle: { size: '12px' },
            labelIntersectAction: 'Rotate90'
        };
        this.primaryYAxis = {
            title: 'Sales (in percentage)',
            labelFormat: '{value}%',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            interval: 5,
            minimum: 0,
            maximum: 100
        };
        this.title = 'Sales by product';
        this.cornerRadius = { topLeft: 15, topRight: 15 };
        this.chartArea = {
            border: { width: 0 }
        };
    }
    click() {
        if (this.chart && this.chart.series && this.chart.series.length > 0 && this.chart.series[0].dataSource) {
            const newData = (
                this.chart.series[0].dataSource as { x: string; y: number }[]
            ).map((item) => {
                const value: number = this.getRandomInt(10, 90);
                return { x: item.x, y: value };
            });
            if (typeof this.chart.series[0].setData === 'function') {
                this.chart.series[0].setData(newData, 500);
            }
        }
    }
    public axisRangeCalculated (args: IAxisRangeCalculatedEventArgs): void {
        if (args.axis.name === 'primaryYAxis') {
            args.maximum = args.maximum as number > 100 ? 100 : args.maximum;
            if (args.maximum > 80) {
                args.interval = 20;
            } else if(args.maximum > 40){
                args.interval = 10;
            }
        }
    }
}
