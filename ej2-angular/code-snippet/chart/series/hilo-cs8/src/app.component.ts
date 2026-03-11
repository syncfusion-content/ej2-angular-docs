import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { IPointRenderEventArgs } from '@syncfusion/ej2-charts'
import { CategoryService, HiloSeriesService } from '@syncfusion/ej2-angular-charts'
import { chartData } from './datasource'
import { Component, OnInit } from '@angular/core';

@Component({
imports: [
         ChartModule
    ],

providers: [CategoryService,HiloSeriesService],
standalone: true,
    selector: 'app-container',
    template: ` <ejs-chart style='display:block;' id='chart-container' (pointRender)='pointRender($event)' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
                [title]='title' >
                <e-series-collection>
                    <e-series [dataSource]='data' type='Hilo' xName='x' high='high' low='low' name='India'> </e-series>
                </e-series-collection>
     </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public primaryYAxis?: Object;
    public data?: Object[];

    ngOnInit(): void {
        this.data = chartData;
        this.primaryXAxis = {
            valueType: 'Category',
            title: 'Months'
            };
        this.primaryYAxis = {
            labelFormat: '{value}mm',
            edgeLabelPlacement: 'Shift',
            title: 'Rainfall',
            };
        this.title = 'Maximum and Minimum Rainfall';
    }
    public pointRender(args: IPointRenderEventArgs) {
        if (args.point.index % 2 !== 0) {
            args.fill = '#ff6347';
        }
        else {
            args.fill = '#009cb8';
        }
    }
}
