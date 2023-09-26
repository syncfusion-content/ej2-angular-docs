

import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-container',
    template: `<div class="col-md-8">
    <button ej-button id='print' (click)='print()'>Print</button>
    <ejs-chart #chart id='chart-container' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
            [title]='title' >
            <e-series-collection>
                <e-series [dataSource]='data' type='Radar' xName='x' yName='y' drawType='Line'> </e-series>
            </e-series-collection>
    </ejs-chart>
    </div> `
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public primaryYAxis?: Object;
    public data?: Object[];
    @ViewChild('chart')
    public chartObj?: ChartComponent;

    ngOnInit(): void {
        this.data = [
            { x: 2005, y: 28 }, { x: 2006, y: 25 },{ x: 2007, y: 26 }, { x: 2008, y: 27 },
            { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 30 }
        ];
        this.primaryXAxis = {
            title: 'Year', coefficient: 90,
            minimum: 2004, maximum: 2012, interval: 1
            };
        this.primaryYAxis = {
            minimum: 20, maximum: 40, interval: 5,
            title: 'Efficiency',
            labelFormat: '{value}%'
            };

        this.title = 'Efficiency of oil-fired power production';
    }
     print() {
        this.chartObj?.print();
    }
}



