import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { IPointRenderEventArgs } from '@syncfusion/ej2-charts'
import { CategoryService, DateTimeService, ScrollBarService, ColumnSeriesService, LineSeriesService,
    ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService,LegendService, TooltipService
 } from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';
import { data1 } from './datasource';
import { data2 } from './datasource';
@Component({
imports: [
         ChartModule
    ],

providers: [ CategoryService, DateTimeService, ScrollBarService, LineSeriesService, ColumnSeriesService,
        ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService, LegendService, TooltipService,],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" (pointRender)='pointRender($event)' [primaryXAxis]='primaryXAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='data1' type='RangeColumn' xName='x' low='low' high='high'  ></e-series>
            <e-series [dataSource]='data2' type='RangeColumn' xName='x' low='low' high='high'  ></e-series>
        </e-series-collection>
    </ejs-chart>`
})

export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public data1?: Object[];
    public data2?: Object[];
    ngOnInit(): void {
        this.data1 = data1;
        this.data2 = data2;
        this.primaryXAxis = {
            title: 'month',
            valueType: 'Category'
        };
        this.title = 'Maximum and minimum Temperature';
    }
    public pointRender(args: IPointRenderEventArgs) {
        if (args.point.index === 1) {
            args.cornerRadius = { topLeft: 10, bottomLeft: 10, topRight: 10, bottomRight: 10 };
        }
        if (args.point.index === 4) {
            args.cornerRadius = { topLeft: 10, bottomLeft: 10, topRight: 10, bottomRight: 10 };
        }
    }
}
