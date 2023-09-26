

import { Component, OnInit } from '@angular/core';
import { IPointRenderEventArgs } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'  [tooltip]='tooltip'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y' name='Female' width=2 [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public marker?: Object;
    public tooltip?: Object;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.chartData =[
                    { x: 2010, y: 990 }, { x: 2011, y: 1010 },
                    { x: 2012, y: 1030 }, { x: 2013, y: 1070 },
                    { x: 2014, y: 1105 }, { x: 2015, y: 1138 },
                    { x: 2016, y: 1155 }
                ];
        this.primaryXAxis = {
           minimum: 2010, maximum: 2016,
          edgeLabelPlacement: 'Shift',
        };
        this.primaryYAxis = {
            minimum: 900, maximum: 1300,
            labelFormat: '{value}M',
        };
        this.marker = { visible: true, width: 10, height: 10, shape: 'Rectangle'};
        this.tooltip = {
            enable: true,
            template:'#Female-Material'
            }
        this.title = 'Population of India ( 2010 - 2016 )';
    }
}


