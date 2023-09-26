

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-axes>
            <e-axis rowIndex=1 name='yAxis1' opposedPosition='true' title='Temperature (Celsius)' [majorGridLines]='majorGridLines' labelFormat='{value}°C'
                   [minimum]='24' [maximum]='36' [interval]='2' [lineStyle]='lineStyle'>
            </e-axis>
        </e-axes>
        <e-rows>
             <e-row height=50%></e-row>
             <e-row height=50%></e-row>
        </e-rows>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='x' yName='y' name='Germany'></e-series>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y1' name='Japan' yAxisName='yAxis1' [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public majorGridLines?: Object;
    public primaryYAxis?: Object;
    public lineStyle?: Object;
    public marker?: Object;
    public rows?: Object;
    ngOnInit(): void {
        this.chartData = [
                { x: 'Jan', y: 15, y1: 33 }, { x: 'Feb', y: 20, y1: 31 }, { x: 'Mar', y: 35, y1: 30 },
                { x: 'Apr', y: 40, y1: 28 }, { x: 'May', y: 80, y1: 29 }, { x: 'Jun', y: 70, y1: 30 },
                { x: 'Jul', y: 65, y1: 33 }, { x: 'Aug', y: 55, y1: 32 }, { x: 'Sep', y: 50, y1: 34 },
                { x: 'Oct', y: 30, y1: 32 }, { x: 'Nov', y: 35, y1: 32 }, { x: 'Dec', y: 35, y1: 31 }
        ];
        this.primaryXAxis = {
            title: 'Months',
            valueType: 'Category',
            interval: 1
        };
        this.primaryYAxis = {
            minimum: 0, maximum: 90, interval: 20,
            lineStyle: { width: 0 },
            title: 'Temperature (Fahrenheit)',
            labelFormat: '{value}°F'
        };
        this.majorGridLines = { width: 0};
        this.lineStyle = { width: 0};
        this.marker = {
            visible: true, width: 10, height: 10, border: { width: 2, color: '#F8AB1D' }
        }
        this.title = 'Weather Condition';
    }

}


