import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { CategoryService, BoxAndWhiskerSeriesService, DataLabelService, IPointRenderEventArgs} from '@syncfusion/ej2-angular-charts'



import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
@Component({
imports: [
         ChartModule
    ],

providers: [CategoryService, BoxAndWhiskerSeriesService, DataLabelService],
standalone: true,
    selector: 'app-container',
    template: ` <ejs-chart id='chart-container' (pointRender)='pointRender($event)' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
            [title]='title' >
            <e-series-collection>
                <e-series [dataSource]='data' type='BoxAndWhisker' xName='x' yName='y' [marker]='marker'> </e-series>
            </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public data?: Object[];
    public marker?: Object;
    public tooltip?: Object;
    primaryYAxis: any;
    ngOnInit(): void {
        this.data = data;
        this.primaryXAxis = {
            valueType: 'Category',
            };
        this.title = 'Company Revenue and Profit';
        this.marker = { visible: true }

    }
    public pointRender (args: IPointRenderEventArgs) {
        if (args.point.maximum < 38) {
            args.fill = '#ff6347';
        } else {
            args.fill = '#009cb8';
        }
    }
}



