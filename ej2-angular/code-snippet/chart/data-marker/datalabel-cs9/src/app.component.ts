

import { Component, OnInit } from '@angular/core';
import { IPointRenderEventArgs, ITextRenderEventArgs } from '@syncfusion/ej2-angular-charts';
import { columnData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' (pointRender)='pointRender($event)' (textRender)='textRender($event)'[title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='x' yName='y' name='Warmest' width=2 [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public marker?: Object;
    primaryYAxis: any;
    public pointRender(args: IPointRenderEventArgs): void {
        if(args.point.index === 6) {
                args.fill = 'red'
        }
    };
    public textRender(args: ITextRenderEventArgs): void {
            if(args.point.index === 6){
                args.text = 'Maximum Temperature';
                args.color = 'red';
            }
    };
    ngOnInit(): void {
        this.chartData = columnData;
        this.primaryXAxis = {
            title: 'Months',
            valueType: 'Category', labelFormat: 'yMMM',
            edgeLabelPlacement: 'Shift'
        };
        this.marker = { dataLabel: { visible: true }
        };
        this.title = 'Alaska Weather Statistics - 2016';
    }

}


