import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, BoxAndWhiskerSeriesService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { ISeriesRenderEventArgs } from '@syncfusion/ej2-charts';
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [CategoryService, BoxAndWhiskerSeriesService, TooltipService],
    standalone: true,
    selector: 'app-container',
    template: ` <ejs-chart id='chart-container' (seriesRender)='seriesRender($event)' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title' [tooltip]='tooltip'>
            <e-series-collection>
                <e-series [dataSource]='data' type='BoxAndWhisker' xName='x' yName='y' [marker]='marker'> </e-series>
            </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public title?: string;
    public data?: Object[];
    public marker?: Object;
    public tooltip?: Object;
    ngOnInit(): void {
        this.data = data;
        this.primaryXAxis = { valueType: 'Category' };
        this.primaryYAxis = { title: 'Age', maximum: 60 };
        this.title = 'Employee Age Group in Various Departments';
        this.marker = { visible: true };
        this.tooltip = { enable: true };
    }
    public seriesRender(args: ISeriesRenderEventArgs) {
        args.fill = '#ff6347';
    };
}
