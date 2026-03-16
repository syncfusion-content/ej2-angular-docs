import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { IPointRenderEventArgs } from '@syncfusion/ej2-charts'
import { CategoryService, WaterfallSeriesService, DataLabelService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';
import { waterfallData } from './datasource';
@Component({
imports: [
         ChartModule
    ],

providers: [CategoryService,WaterfallSeriesService,DataLabelService],
standalone: true,
    selector: 'app-container',
    template: ` <ejs-chart style='display:block;' id='chart-container' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
                [title]='title' >
                <e-series-collection>
                    <e-series [dataSource]='data' type='Waterfall' xName='x' yName='y' name='USA' [columnWidth]='columnWidth' summaryFillColor='#e56590' negativeFillColor='#f8b883'
                [connector]='connector' [intermediateSumIndexes]='intermediate' [sumIndexes]='sum' [marker]='marker' (pointRender)='pointRender($event)'> </e-series>
                </e-series-collection>
     </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public primaryYAxis?: Object;
    public data?: Object[];
    public marker?: Object;
    public connector?: Object;
    public sum: number[] = [8];
    public intermediate: number[] = [4, 7];
    public columnWidth: number = 0.6;
    ngOnInit(): void {
        this.data = waterfallData;
        this.primaryXAxis = {
            valueType: 'Category',
            };
        this.primaryYAxis = {
            labelFormat: '${value}M',
            minimum: 0, maximum: 5500, interval: 500,
            };
        this.marker = {
            dataLabel: { visible: true, position: 'Outer' }
            };
        this.connector = { color: '#5F6A6A', width: 1.5 };
        this.title = 'Company Revenue and Profit';
    }
    public pointRender(args: IPointRenderEventArgs) {
        if (args.point.index === 0) {
            args.cornerRadius = { topLeft: 10, bottomLeft: 0, topRight: 10, bottomRight: 0 };
        }
        if (args.point.index === 3 ) {
            args.cornerRadius = { topLeft: 10, bottomLeft: 0, topRight: 10, bottomRight: 0 };
        }
        if (args.point.index === 4 ) {
            args.cornerRadius = { topLeft: 10, bottomLeft: 0, topRight: 10, bottomRight: 0 };
        }
        if (args.point.index === 6 ) {
            args.cornerRadius = { topLeft: 10, bottomLeft: 0, topRight: 10, bottomRight: 0 };
        }
    }
}
