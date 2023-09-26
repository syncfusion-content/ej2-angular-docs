


import { Component, OnInit } from '@angular/core';
import { selectionData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'
       [legendSettings]='legendSettings'  selectionMode='Point'>
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
    public legendSettings?: Object;
    ngOnInit(): void {
        this.chartData = selectionData;
        this.primaryXAxis = {
           valueType: 'Category',
           title: 'Countries'
        };
        this.animation = { enable: false};
        this.legendSettings = { visible: true,  toggleVisibility: false, enableHighlight: true };
        this.title = 'Olympic Medals';
    }

}



