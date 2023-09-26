


import { Component, OnInit } from '@angular/core';
import { selectionData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'
            selectionMode='Point' isMultiSelect='true' [selectedDataIndexes]='selectedData'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='country' yName='gold' name='Gold' selectionStyle='chartSelection1' [animation]='animation'></e-series>
            <e-series [dataSource]='chartData' type='Column' xName='country' yName='silver' name='Silver' selectionStyle='chartSelection2' [animation]='animation'></e-series>
            <e-series [dataSource]='chartData' type='Column' xName='country' yName='bronze' name='Bronze' selectionStyle='chartSelection3' [animation]='animation'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public animation?: Object;
    public selectedData?: Object[];
    ngOnInit(): void {
        this.chartData = selectionData;
        this.primaryXAxis = {
           valueType: 'Category',
           title: 'Countries'
        };
        this.animation = { enable: false};
        this.selectedData = [
        { series: 0, point: 1}, { series: 2, point: 3}
    ];
        this.title = 'Olympic Medals';
    }

}



