

import { Component, OnInit } from '@angular/core';
import { markerData } from './datasource';
import { IPointRenderEventArgs, ITextRenderEventArgs } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' (pointRender)='pointRender($event)' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y' name='December 2007' width=2 [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public marker?: Object;
    primaryYAxis: any;
    public pointRender(args: IPointRenderEventArgs): void {
        if(args.point.index === 3) {
                args.fill = 'red'
        }
    };
    ngOnInit(): void {
        this.chartData = markerData;
        this.primaryXAxis = {
            valueType: 'Category'
        };
        this.marker = {  visible: true,
                    height: 10, width: 10 };
        this.title = 'FB Penetration of Internet Audience';
    }

}


