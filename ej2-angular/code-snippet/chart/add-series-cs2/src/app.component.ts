

import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from '@syncfusion/ej2-angular-charts';
@Component({
    selector: 'app-container',
    template: `<ejs-chart #chart id='chartcontainer' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
            [title]='title' >
            <e-series-collection>
                <e-series [dataSource]='data' type='Column' xName='x' yName='y' > </e-series>
            </e-series-collection>
    </ejs-chart>
    <button ejs-button class='e-flat' (click)='add()'>add </button>
    <button ejs-button class='e-flat' (click)='remove()'>remove </button>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public primaryYAxis?: Object;
    public data?: Object[];
    @ViewChild('chart')
    public chart?: ChartComponent;
    ngOnInit(): void {
        this.data =  [{ x: 'John', y: 10000 }, { x: 'Jake', y: 12000 }, { x: 'Peter', y: 18000 },
                { x: 'James', y: 11000 }, { x: 'Mary', y: 9700 }];
        this.primaryXAxis = {
           title: 'Manager',
            valueType: 'Category'
            };
        this.primaryYAxis = {
            title: 'Sales',
            minimum: 0,
            maximum: 20000
            };

        this.title = 'Sales Comparision';
    }
    add() {
        (this.chart as ChartComponent ).addSeries([{
        type: 'Column',
        dataSource: [
            { x: 'John', y: 11000 }, { x: 'Jake', y: 16000 }, { x: 'Peter', y: 19000 },
            { x: 'James', y: 12000 }, { x: 'Mary', y: 10700 }],
            xName: 'x', width: 2,
            yName: 'y'
        }]);
    }
    remove() {
        (this.chart as ChartComponent ).removeSeries(1);
    }
}


