import { IPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { ChartModule, RadarSeriesService, LineSeriesService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { radarData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [RadarSeriesService, LineSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" (pointRender)='pointRender($event)' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='data' type='Radar' xName='x' yName='y' [marker]='marker' drawType='Line'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public title?: string;
    public data?: Object[];
    public marker?: object;
    ngOnInit(): void {
        this.data = radarData;
        this.primaryXAxis = {
            title: 'Year',
            startAngle: 90,
            minimum: 2004,
            maximum: 2012,
            interval: 1
        };
        this.primaryYAxis = {
            minimum: 20,
            maximum: 40,
            interval: 5,
            title: 'Efficiency',
            labelFormat: '{value}%'
        };
        this.marker = {visible: true};
        this.title = 'Efficiency of oil-fired power production';
    }

    public pointRender(args: IPointRenderEventArgs): void {
        args.fill = '#ff6347';
    }
}
