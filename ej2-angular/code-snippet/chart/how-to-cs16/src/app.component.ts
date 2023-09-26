

import { Component, OnInit } from '@angular/core';
import { ITextRenderEventArgs } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' (textRender)='textRender($event)'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y' name='India' width=2 [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public marker?: Object;
    public primaryYAxis?: Object;
    public textRender(args: ITextRenderEventArgs): void {
        if (args.text === '0') {
          args.cancel = args.point.y === 0;
        }
    };
    ngOnInit(): void {
        this.chartData = [
             { x: new Date(2005, 0, 1), y: 21 }, { x: new Date(2006, 0, 1), y: 24 },
             { x: new Date(2007, 0, 1), y: 0 }, { x: new Date(2008, 0, 1), y: 38 },
             { x: new Date(2009, 0, 1), y: 54 }, { x: new Date(2010, 0, 1), y: 57 },
        ];
        this.primaryXAxis = {
           title: 'Year',
           valueType: 'DateTime'
        };
        this.primaryYAxis = {
           title: 'Efficiency',
        };
        this.marker = { visible: true, width: 10, height: 10, dataLabel: { visible: true}};
        this.title = 'Inflation - Consumer Price';
    }

}


