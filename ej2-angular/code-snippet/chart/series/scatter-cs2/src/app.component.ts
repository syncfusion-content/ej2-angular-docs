import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { ScatterSeriesService, LegendService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';
@Component({
imports: [
         ChartModule
    ],

providers: [ ScatterSeriesService, LegendService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='series1' type='Scatter' xName='x' yName='y' name='Male' [marker]='marker'></e-series>
            <e-series [dataSource]='series2' type='Scatter' xName='x' yName='y' name='Female' [marker]='marker1'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public series1?: Object;
    public series2?: Object;
    public marker?: Object;
    public marker1?: Object;
    getScatterData(): any {
        let series1: Object[] = [];
        let series2: Object[] = [];
        let point1: Object;
        let value: number = 80;
        let value1: number = 70;
        let i: number;
        for (i = 1; i < 120; i++) {
            if (Math.random() > 0.5) {
                value += Math.random();
            } else {
                value -= Math.random();
            }
            value = value < 60 ? 60 : value > 90 ? 90 : value;
            point1 = { x: 120 + (i / 2), y: value.toFixed(1) };
            series1.push(point1);
        }
        for (i = 1; i < 120; i++) {
            if (Math.random() > 0.5) {
                value1 += Math.random();
            } else {
                value1 -= Math.random();
            }
            value1 = value1 < 60 ? 60 : value1 > 90 ? 90 : value1;
            point1 = { x: 120 + (i / 2), y: value1.toFixed(1) };
            series2.push(point1);
        }
        return { 'series1':series1, 'series2': series2};
    };
    ngOnInit(): void {
        this.primaryXAxis = {
            title: 'Height (cm)',
            minimum: 120, maximum: 180,
            edgeLabelPlacement: 'Shift',
            labelFormat: '{value}cm'
        };
        this.primaryYAxis = {
            title: 'Weight (kg)',
            minimum: 60, maximum: 90,
            labelFormat: '{value}kg',
            rangePadding: 'None'
        };
        this.title = 'Height Vs Weight';
        this.marker = {  width: 10, height: 10 };
        this.marker1 = {  width: 10, height: 10, shape: 'Rectangle' };
        this.series1 = this.getScatterData().series1;
        this.series2 = this.getScatterData().series2;
    }

}
