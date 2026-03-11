import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { ISeriesRenderEventArgs } from '@syncfusion/ej2-charts'
import { ScatterSeriesService, LegendService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';
import { scatterData } from './datasource';
@Component({
imports: [
         ChartModule
    ],

providers: [ ScatterSeriesService, LegendService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" (seriesRender)='seriesRender($event)' [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Scatter' xName='x' yName='y' name='Male'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public emptyPointSettings?: Object;
    public marker?: Object;
    ngOnInit(): void {
        this.primaryXAxis = {
            title: 'Height (cm)',
            edgeLabelPlacement: 'Shift',
            labelFormat: '{value}cm'
        };
        this.primaryYAxis = {
            title: 'Weight (kg)',
            labelFormat: '{value}kg',
            rangePadding: 'None'
        };
        this.title = 'Height Vs Weight';
        this.marker = {  width: 10, height: 10 };
        this.chartData = scatterData;
    }
    public seriesRender(args: ISeriesRenderEventArgs)  {

            args.fill = '#ff6347';
    }

}
