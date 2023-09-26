

import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
    AccumulationChart, AccumulationChartComponent,
     IAccLoadedEventArgs, Selection
} from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-container',
    template:
      `<ejs-accumulationchart id="donut-container" #pie [title]="title"  (loaded)='loaded($event)'>
            <e-accumulation-series-collection>
                <e-accumulation-series name='Revenue' [dataSource]='data' xName='x' yName='y' [startAngle]="startAngle" [endAngle]="endAngle" innerRadius="40%" [dataLabel]="dataLabel"> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public data: any;
    public dataLabel?: Object[];
    public count?: number ;
    public startAngle?: number ;
    public endAngle?: number ;
    public title?: string ;
    public pie?: AccumulationChartComponent | AccumulationChart;
    public loaded?: Function;
    execute: any;
    ngOnInit(): void {
        this.data = [
            { 'x': 'Net-tution and Fees', y: 21, text: '21%' },
            { 'x': 'Self-supporting Operations', y: 21, text: '21%' },
            { 'x': 'Private Gifts', y: 8, text: '8%' },
            { 'x': 'All Other', y: 8, text: '8%' },
            { 'x': 'Local Revenue', y: 4, text: '4%' },
            { 'x': 'State Revenue', y: 21, text: '21%' },
            { 'x': 'Federal Revenue', y: 16, text: '16%' }
        ];
        this.dataLabel = {
            visible: true,
            position: 'Inside',
            name: '${point.y}',
            font: {
                color: 'white',
                fontWeight: 'Bold',
                size: '14px'
            }
        } as any;
        this.loaded = (args: IAccLoadedEventArgs) => {
            if (this.execute) {
                return;
            }
        }
        let pieinterval = setInterval( () => {
            if (document.getElementById('donut-container')) {
                if (this.count === 0) {
                    this.pie!.series[0].dataSource = [{ 'x': 'Net-tution and Fees', y: 10 },
                    { 'x': 'Self-supporting Operations', y: 10 },
                    { 'x': 'Private Gifts', y: 13 }, { 'x': 'All Other', y: 14 },
                    { 'x': 'Local Revenue', y: 9 }, { 'x': 'State Revenue', y: 13 },
                    { 'x': 'Federal Revenue', y: 8 }
                    ];
                    this.execute = true;
                    this.pie?.animate();
                    this.count++;
                } else if (this.count === 1) {
                    this.pie!.series[0].dataSource = [
                        { 'x': 'Net-tution and Fees', y: 120 }, { 'x': 'Self-supporting Operations', y: 31 },
                        { 'x': 'Private Gifts', y: 6 }, { 'x': 'All Other', y: 12 },
                        { 'x': 'Local Revenue', y: 25 }, { 'x': 'State Revenue', y: 11 },
                        { 'x': 'Federal Revenue', y: 12 }
                    ];
                    this.execute = true;
                    this.pie?.animate();
                    this.count++;
                } else if (this.count === 2) {
                    this.pie!.series[0].dataSource = [
                        { 'x': 'Net-tution and Fees', y: 6 }, { 'x': 'Self-supporting Operations', y: 22 },
                        { 'x': 'Private Gifts', y: 11 }, { 'x': 'All Other', y: 15 },
                        { 'x': 'Local Revenue', y: 13 }, { 'x': 'State Revenue', y: 10 },
                        { 'x': 'Federal Revenue', y: 8 }
                    ];
                    this.execute = true;
                    this.pie?.animate();
                    this.count++;
                } else if (this.count === 3) {
                    this.pie!.series[0].dataSource = [
                        { 'x': 'Net-tution and Fees', y: 15 }, { 'x': 'Self-supporting Operations', y: 10 },
                        { 'x': 'Private Gifts', y: 18 }, { 'x': 'All Other', y: 20 },
                        { 'x': 'Local Revenue', y: 30 }, { 'x': 'State Revenue', y: 20 },
                        { 'x': 'Federal Revenue', y: 25 }
                    ];
                    this.execute = true;
                    this.pie?.animate();
                    this.count++;
                } else if (this.count === 4) {
                    this.pie!.series[0].dataSource = [
                        { 'x': 'Net-tution and Fees', y: 21 }, { 'x': 'Self-supporting Operations', y: 10 },
                        { 'x': 'Private Gifts', y: 15 }, { 'x': 'All Other', y: 15 },
                        { 'x': 'Local Revenue', y: 11 }, { 'x': 'State Revenue', y: 20 },
                        { 'x': 'Federal Revenue', y: 60 }
                    ];
                    this.execute = true;
                    this.pie?.animate();
                    this.count = 0;
                }
            } else {
                clearInterval(pieinterval);
            }
        }, 3000);
        this.count = 0;
        this.startAngle = 0;
        this.endAngle = 360;
        this.title = 'Education Institutional Revenue';
    }
}



