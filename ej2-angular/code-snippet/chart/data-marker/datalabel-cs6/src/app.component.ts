

import { Component, OnInit } from '@angular/core';
import { columnData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='x' yName='y' name='Warmest' width=2 [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public marker?: Object;
    ngOnInit(): void {
        this.chartData = columnData;
        this.primaryXAxis = {
            valueType: 'Category'
        };
        this.marker = { dataLabel: { visible: true,border:{width: 1, color : 'red'},
                        margin:{
                            left:5,
                            right:5,
                            top:5,
                            bottom:5
                        } }
        };
        this.title = 'Alaska Weather Statistics - 2016';
    }

}


