


import { Component, OnInit, ViewChild } from '@angular/core';
import { bitCoinData } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { RangeNavigatorComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-container',
    template: `<button ej-button id='print' (click)='export()'>Export</button>
    <ejs-rangenavigator #range id="range" valueType='DateTime' [value]='value'>
            <e-rangenavigator-series-collection>
                <e-rangenavigator-series [dataSource]='chartData' type='Area' xName='x' yName='y' width=2>
                </e-rangenavigator-series>
            </e-rangenavigator-series-collection>
        </ejs-rangenavigator>`
})
export class AppComponent implements OnInit {
    @ViewChild('range')
    public RangeObj?: RangeNavigatorComponent;

    public periodsValue?: Object[];
    public chartData?: Object[];
    public value?: Object[];
    ngOnInit(): void {
        this.chartData = bitCoinData;
        this.value=[new Date(2017, 8, 1), new Date(2018, 1, 1)];
    }
    export() {
         (this.RangeObj as RangeNavigatorComponent ).export('PNG', 'result',  null as any, [this.RangeObj as RangeNavigatorComponent ]);
    }
}



