

import { Component, OnInit } from '@angular/core';
import { data0, data1, data2, data3} from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis'>
        <e-series-collection>
            <e-series [dataSource]='chartData1' type='StackingLine100' xName='x' yName='y' name='John' width='2' [marker]='marker' dashArray='5,1' fill='red'> </e-series>
            <e-series [dataSource]='chartData2' type='StackingLine100' xName='x' yName='y' name='Peter' width='2' [marker]='marker' dashArray='5,1' fill='yellow'> </e-series>
            <e-series [dataSource]='chartData3' type='StackingLine100' xName='x' yName='y' name='Steve' width='2' [marker]='marker' dashArray='5,1' fill='blue'> </e-series>
            <e-series [dataSource]='chartData4' type='StackingLine100' xName='x' yName='y' name='Charle' width='2' [marker]='marker' dashArray='5,1' fill='orange'> </e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public primaryYAxis?: Object;
    public marker?: Object;
    public series?: Object;
    public chartData1?: Object[]; public chartData2?: Object[]; public chartData3?: Object[];
    public chartData4?: Object[];
    ngOnInit(): void {
        this.primaryXAxis = {
            interval: 1, valueType: 'Category'
        };
        this.primaryYAxis =
        {
            title: 'Expense',
            interval: 100,
            labelFormat: '${value}',
        },
        this.chartData1 = data0;
        this.chartData2 = data1;
        this.chartData3 = data2;
        this.chartData4 = data3;
        this.marker = { visible: true };
    }

}


