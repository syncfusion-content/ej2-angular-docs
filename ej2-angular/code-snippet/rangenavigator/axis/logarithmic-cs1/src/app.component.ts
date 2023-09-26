


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-rangenavigator id="rn-container" [value]='value' valueType='Logarithmic' [interval]='interval'>
            <e-rangenavigator-series-collection>
                <e-rangenavigator-series [dataSource]='chartData' type='StepLine' xName='x' yName='y' width=2>
                </e-rangenavigator-series>
            </e-rangenavigator-series-collection>
        </ejs-rangenavigator>`
})

export class AppComponent implements OnInit {

    public value?: Object[];
    public chartData?: Object[];
    public interval?: number;
    ngOnInit(): void {
        this.value = [4,6];
        this.chartData = [];
        for (let i = 0; i < 100; i++) {
            this.chartData.push({
                x: Math.pow(10, i * 0.1),
                y: Math.floor(Math.random() * (80 - 30 + 1)) + 30
            });
        }
        this.interval = 1;
    }
}



