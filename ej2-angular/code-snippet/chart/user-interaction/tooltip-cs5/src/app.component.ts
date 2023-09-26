

import { Component, OnInit } from '@angular/core';
import { toolData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [title]='title' [tooltip]='tooltip'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='x' yName='y' width=2 tooltipMappingName='country'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public tooltip?: Object;
    ngOnInit(): void {
        this.chartData =  [
                    { x: 'Germany', y: 72, country: 'GER: 72'},
                    { x: 'Russia', y: 103.1, country: 'RUS: 103.1'},
                    { x: 'Brazil', y: 139.1, country: 'BRZ: 139.1'},
                    { x: 'India', y: 462.1, country: 'IND: 462.1'},
                    { x: 'China', y: 721.4, country: 'CHN: 721.4'},
                    { x: 'United States Of America', y: 286.9, country: 'USA: 286.9'},
                    { x: 'Great Britain', y: 115.1, country: 'GBR: 115.1'},
                    { x: 'Nigeria', y: 97.2, country: 'NGR: 97.2'},
        ];
        this.primaryXAxis = {
             valueType: 'Category',
        };
        this.tooltip = {
               enable: true, format: '${point.tooltip}'
        };
        this.title = 'Internet Users in Million – 2016';

}


}