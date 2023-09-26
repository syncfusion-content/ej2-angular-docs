


import { Component, OnInit } from '@angular/core';
import { imageData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y' name='India' width=2 [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public marker?: Object;
    primaryYAxis: any;
    ngOnInit(): void {
        this.chartData = imageData;
        this.primaryXAxis = {
            valueType: 'Category'
        };
        this.marker = { visible: true,
                        width: 10, height: 10, shape: 'Image',
                        imageUrl:'./sun_annotation.png'
        };
        this.title = 'Temperature flow over months';
    }

}


