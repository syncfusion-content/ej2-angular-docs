

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ILoadedEventArgs, Series, ChartTheme, ChartComponent } from '@syncfusion/ej2-angular-charts';
import { getElement } from '@syncfusion/ej2-charts';

@Component({
    selector: 'app-container',
    template: `<ejs-chart #chart id='chart-container' [chartArea]='chartArea' [width]='width' align='center'  [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title' (loaded)='loaded($event)'>
        <e-series-collection>
            <e-series [dataSource]='series1' type='Line' xName='x' yName='y' width=2 [animation]='animation1'>
            </e-series>
        </e-series-collection>
    </ejs-chart>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public series1: Object[] = [];
    public value: number = 10;
    public intervalId?: any;
    public setTimeoutValue?: number;
    public i: number = 0;
    //Initializing Primary Y Axis
    public primaryYAxis: Object = {
        minimum:0,
        maximum: 50
    };
    @ViewChild('chart')
    public chart?: ChartComponent;

    public marker: Object = {
        visible: true
    };
    public animation1: Object = {
        enable: false
    };
    chartArea: any;
    width: any;
primaryXAxis: any;
title: any;
    public loaded(args: ILoadedEventArgs): void {
        this.setTimeoutValue = 100;
        this.intervalId = setInterval(
            () => {
                let i: number;
                if (getElement('chart-container') === null) {
                    clearInterval(this.intervalId);
                } else {
                    if (Math.random() > .5) {
                        if (this.value < 25) {
                            this.value += Math.random() * 2.0;
                        } else {
                            this.value -= 2.0;
                        }
                    }
                    this.i++;
                    this.series1.push({ x: this.i, y: this.value });
                    this.series1.shift();
                    args.chart.series[0].dataSource = this.series1;

                    args.chart.refresh();
                }
            },
            this.setTimeoutValue);
    }
    constructor() {
        for (; this.i < 100; this.i++) {
            if (Math.random() > .5) {
                if (this.value < 25) {
                    this.value += Math.random() * 2.0;
                } else {
                    this.value -= 2.0;
                }
            }
            this.series1[this.i] = { x: this.i, y: this.value };

        }

    };

}


