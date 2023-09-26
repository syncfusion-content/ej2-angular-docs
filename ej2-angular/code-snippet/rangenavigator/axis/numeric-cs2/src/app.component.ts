


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-rangenavigator id="rn-container" [value]='value' [minimum]='minimum' [maximum]='maximum' [interval]='interval'>
            <e-rangenavigator-series-collection>
                <e-rangenavigator-series [dataSource]='chartData' type='StepLine' xName='xData' yName='yData' width=2>
                </e-rangenavigator-series>
            </e-rangenavigator-series-collection>
        </ejs-rangenavigator>`
})
export class AppComponent implements OnInit {
    public value?: Object[];
    public chartData?: Object[];
    public minimum?: number;
    public maximum?: number;
    public interval?: number;
    ngOnInit(): void {
        this.value = [60,100];
        this.chartData = [
                            { xData: 10, yData: 35 }, { xData: 20, yData: 28 },
                            { xData: 30, yData: 34 }, { xData: 40, yData: 32 },
                            { xData: 50, yData: 40 }, { xData: 60, yData: 30 },
                            { xData: 70, yData: 4 }, { xData: 80, yData: 22 },
                            { xData: 90, yData: 30 }, { xData: 100, yData: 43 },
                            { xData: 110, yData: 60 }, { xData: 120, yData: 33 },
                            { xData: 130, yData: 40 }, { xData: 140, yData: 29 },
                            { xData: 150, yData: 10 }, { xData: 160, yData: 16 },
                         ];
        this.minimum= 10;
        this.maximum= 160;
        this.interval= 10;
    }
}



