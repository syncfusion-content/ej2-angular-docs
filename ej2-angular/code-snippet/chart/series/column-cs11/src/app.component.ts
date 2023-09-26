

import { Component, OnInit } from '@angular/core';
import { columnData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-annotations>
            <e-annotation content='<div id="text" style="transform: rotate(-90deg);">Speed</div>'
           verticalAlignment='Top' horizontalAlignment='Near' x=18 y=180 coordinateUnits='Pixel'>
            </e-annotation>
        </e-annotations>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='country' yName='gold' name='Gold'></e-series>
        </e-series-collection>
    </ejs-chart>
    <style></style>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public border?: Object;
    public margin?: Object;
    ngOnInit(): void {
        this.chartData = columnData;
        this.primaryXAxis = {
           valueType: 'Category',
           title: 'Countries'
        };
        this.primaryYAxis = {
            minimum: 0, maximum: 80,
            interval: 20, title: 'm3/min'
        };
        this.title = 'Olympic Medals';
    }

}


