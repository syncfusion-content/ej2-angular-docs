

import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from '@syncfusion/ej2-angular-charts';
@Component({
    selector: 'app-container',
    template: `<ejs-chart #chart id='chartcontainer'
            [title]='title' (loaded)='loaded($event)'>
            <e-series-collection>
                <e-series [dataSource]='data' type='Column' xName='x' yName='y' > </e-series>
            </e-series-collection>
    </ejs-chart>
    <ejs-chart #chart1 id='chartcontainer1'
            [title]='title'>
            <e-series-collection>
                <e-series [dataSource]='data1' type='Column' xName='x' yName='y' > </e-series>
            </e-series-collection>
    </ejs-chart>
    <button ej-button id='print' (click)='export()'>Export</button>`
})
export class AppComponent implements OnInit {
    public title?: string;
    public data?: Object[];
    public data1?: Object[];
    @ViewChild('chart')
    public chart?: ChartComponent;
    @ViewChild('chart1')
    public chart1?: ChartComponent;
    ngOnInit(): void {
        this.data =  [
              { x: 1, y: 20 }, { x: 2, y: 5 },
              { x: 3, y: 10 }, { x: 4, y: 40 }
              ];
        this.data1 =  [
              { x: 1, y: 20 }, { x: 2, y: 5 },
              { x: 3, y: 10 }, { x: 4, y: 40 }
              ];
        this.title = 'Chart 1';
    }
    export() {
        this.chart?.exportModule.export('PNG', 'chart','Landscape' as any ,[this.chart, this.chart1 as ChartComponent]);
    }
    loaded(args: any) {
    }
}


