

import { Component, OnInit } from '@angular/core';
import { ChartData } from './chartdata.service';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='series1' type='Scatter' xName='x' yName='y' name='Male' opacity=0.7 [marker]='marker'></e-series>
            <e-series [dataSource]='series2' type='Scatter' xName='x' yName='y' name='Female' opacity=0.7 [marker]='marker'></e-series>
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
        this.series1 = ChartData.prototype.getScatterData().series1;
        this.series2 = ChartData.prototype.getScatterData().series2;
    }

}


