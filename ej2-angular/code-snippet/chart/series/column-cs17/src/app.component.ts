

import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, ILoadedEventArgs } from '@syncfusion/ej2-angular-charts';
@Component({
    selector: 'app-container',
    template: `<ejs-chart #roundcol id="column-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title' (loaded)='loaded($event)'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='x' yName='y' name='Tiger' width='2' [cornerRadius]='radius'> </e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public border?: Object;
    public radius?: Object;
    public execute: boolean = false;
    public count: number = 0;
    @ViewChild('roundcol')
    public chart?: ChartComponent;
    public loaded(args: ILoadedEventArgs): void {
        if (this.execute) {
            return;
        }
        let columninterval = setInterval(
            () => {
                if (document.getElementById('column-container')) {
                    if (this.count === 0) {
                        (this.chart as ChartComponent).series[0].dataSource = [
                            { x: 'Egg', y: 206, text: 'Bangaladesh' },
                            { x: 'Fish', y: 123, text: 'Bhutn' },
                            { x: 'Misc', y: 48, text: 'Nepal' },
                            { x: 'Tea', y: 240, text: 'Thiland' },
                            { x: 'Fruits', y: 170, text: 'Malaysia' }
                        ];
                        this.execute = true;
                        (this.chart as ChartComponent).animate();
                        this.count++;
                    } else if (this.count === 1) {
                        (this.chart as ChartComponent).series[0].dataSource = [
                            { x: 'Egg', y: 86, text: 'Bangaladesh' },
                            { x: 'Fish', y: 173, text: 'Bhutn' },
                            { x: 'Misc', y: 188, text: 'Nepal' },
                            { x: 'Tea', y: 109, text: 'Thiland' },
                            { x: 'Fruits', y: 100, text: 'Malaysia' }
                        ];
                        this.execute = true;
                        (this.chart as ChartComponent).animate();
                        this.count++;
                    } else if (this.count === 2) {
                        (this.chart as ChartComponent).series[0].dataSource = [
                            { x: 'Egg', y: 156, text: 'Bangaladesh' },
                            { x: 'Fish', y: 33, text: 'Bhutn' },
                            { x: 'Misc', y: 260, text: 'Nepal' },
                            { x: 'Tea', y: 200, text: 'Thiland' },
                            { x: 'Fruits', y: 30, text: 'Malaysia' }
                        ];
                        this.execute = true;
                        (this.chart as ChartComponent).animate();
                        this.count = 0;
                    }
                } else {
                    clearInterval(columninterval);
                }
            },
            2000
        );
    }
    ngOnInit(): void {
        this.chartData = [
        { x: 'Egg', y: 106, text: 'Bangaladesh' },
        { x: 'Fish', y: 103, text: 'Bhutn' },
        { x: 'Misc', y: 198, text: 'Nepal' },
        { x: 'Tea', y: 189, text: 'Thiland' },
        { x: 'Fruits', y: 250, text: 'Malaysia' }

        ];
        this.primaryXAxis = {
        valueType: 'Category', interval: 1, majorGridLines: { width: 0 }, tickPosition: 'Inside',
        labelPosition: 'Inside', labelStyle: { color: '#ffffff' }
        };
        this.primaryYAxis = {
        minimum: 0, maximum: 300, interval: 50, majorGridLines: { width: 0 },
        majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }

        };
        this.title = 'Trade in Food Groups';
        this.radius = { bottomLeft: 10, bottomRight: 10, topLeft: 10, topRight: 10 };
        }
        }


