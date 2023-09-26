


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'
            [chartArea]="chartArea">
        <e-series-collection>
            <e-series [dataSource]='columnData' type='Column' xName='x' yName='y' width="2" [marker]="marker" [dragSettings]="dragSettings"></e-series>
            <e-series [dataSource]='lineData' type='Line' xName='x' yName='y' width="2" [marker]="marker" [dragSettings]="dragSettings"></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public columnData?: Object[];
    public lineData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public chartArea?: Object;
    public marker?: Object;
    public dragSettings?: Object;
    ngOnInit(): void {
        this.columnData = [
                 { x: '2005', y: 21 }, { x: '2006', y: 60 },
                 { x: '2007', y: 45 }, { x: '2008', y: 50 },
                { x: '2009', y: 74 }, { x: '2010', y: 65 },
                { x: '2011', y: 85 }
        ];
        this.lineData = [
                 { x: '2005', y: 21 }, { x: '2006', y: 22 },
                    { x: '2007', y: 36 }, { x: '2008', y: 34 },
                    { x: '2009', y: 54 }, { x: '2010', y: 55 },
                    { x: '2011', y: 60 }
        ];
        this.primaryXAxis = {
            valueType: 'Category',
            minimum: -0.5,
            maximum: 6.5,
            labelPlacement: 'OnTicks',
            majorGridLines: { width: 0 },
        };
        this.primaryYAxis = {
           rangePadding: 'None',
            minimum: 0,
            title : 'Sales',
            labelFormat: '{value}%',
            maximum: 100,
            interval: 20,
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        };
        this.chartArea= {
            border: {
                width: 0
            }
        };
        this.title = 'Inflation - Consumer Price';
        this.marker = {
             visible: true,
             width: 10,
             height: 10
        };
        this.dragSettings = {
            enable: true
        };
    }
}



