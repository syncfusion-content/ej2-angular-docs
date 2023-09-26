


import { Component, OnInit } from '@angular/core';
import { series1 } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-chart style='display:block' align='center' id='chartcontainer' [title]='title' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
            [tooltip]='tooltip'  [chartArea]='chartArea' [width]='width'>
            <e-series-collection>
                <e-series [dataSource]='series1' type='Line' xName='x' yName='y' name='Germany' width=2 > </e-series>
            </e-series-collection>
        </ejs-chart>`
})
export class AppComponent implements OnInit {
    public series1: Object[] = series1;
    //Initializing Primary X Axis
    public primaryXAxis: Object = {
        title: 'Years',
           edgeLabelPlacement: 'Shift',
            majorGridLines : { width : 0 },
           maximumLabels:1,
    };
    //Initializing Primary Y Axis
    public primaryYAxis: Object = {
     title: 'Profit ($)',
            rangePadding: 'None',
            lineStyle : { width: 0 },
            majorTickLines : {width : 0}
    };
    public chartArea: Object = {
        border: {
            width: 0
        }
    };
    public width: string ='60%';
    public tooltip: Object = {
        enable: true
    };
    // custom code end
    public title: string = 'Inflation - Consumer Price';
    constructor() {
       //code
    }ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}


