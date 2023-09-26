

import { Component, OnInit } from '@angular/core';
import { categoryData } from './datasource';
import { IAxisLabelRenderEventArgs } from '@syncfusion/ej2-angular-charts';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' (axisLabelRender) = 'axisLabelRender($event)'
    [legendSettings]='legendSettings'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='country' yName='gold' name='Gold' ></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public legendSettings: Object = { visible: false};
    primaryYAxis: any;
    public axisLabelRender(args : IAxisLabelRenderEventArgs ): void {
        if(args.text === 'France') {
            args.labelStyle.color = 'Red';
        }
    };
    ngOnInit(): void {
        this.chartData = categoryData;
        this.primaryXAxis = {
           valueType: 'Category',
           title: 'Countries'
        };
        this.title = 'Olympic Medals';
    }

}


