import { ChartModule, CategoryService, HiloOpenCloseSeriesService } from '@syncfusion/ej2-angular-charts';
import { IPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { Component, OnInit } from '@angular/core';

@Component({
    imports: [ChartModule],
    providers: [CategoryService, HiloOpenCloseSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" (pointRender)='pointRender($event)' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='HiloOpenClose' xName='x' high='high' low='low' open='open' close='close' name='SHIRPUR-G'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public chartData?: Object[];
    public title?: string;

    ngOnInit(): void {
        this.chartData = [
            { x: 'Jan', open: 120, high: 160, low: 100, close: 140 },
            { x: 'Feb', open: 150, high: 190, low: 130, close: 170 },
            { x: 'Mar', open: 130, high: 170, low: 110, close: 150 },
            { x: 'Apr', open: 160, high: 180, low: 120, close: 140 },
            { x: 'May', open: 150, high: 170, low: 110, close: 130 }
        ];
        this.primaryXAxis = {
            title: 'Date',
            valueType: 'Category'
        };
        this.primaryYAxis = {
            title: 'Price in Dollar',
            minimum: 100,
            maximum: 200,
            interval: 20
        };
        this.title = 'Financial Analysis';
    }

    public pointRender(args: IPointRenderEventArgs): void {
        if (args.point.index % 2 !== 0) {
            args.fill = '#ff6347';
        } else {
            args.fill = '#009cb8';
        }
    }
}
