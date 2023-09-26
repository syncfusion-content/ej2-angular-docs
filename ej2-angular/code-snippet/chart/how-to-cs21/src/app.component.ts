

import { Component, OnInit } from '@angular/core';
import { ITextRenderEventArgs, ITooltipRenderEventArgs } from '@syncfusion/ej2-angular-charts';
import { Internationalization } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [tooltip]='tooltip' (tooltipRender) = 'tooltipRender($event)'>
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
    public tooltip?: Object;
    public primaryYAxis?: Object;
    public tooltipRender(args: ITooltipRenderEventArgs | any): void {
        let intl: Internationalization = new Internationalization();
        let formattedString: string = intl.formatDate(new Date((args.point.x).toString()), { skeleton: 'MMMEd'});
        args.textCollections = formattedString;
    };
    ngOnInit(): void {
        this.chartData = [
             { x: new Date(2005, 0, 1), y: 21 }, { x: new Date(2006, 0, 1), y: 24 },
             { x: new Date(2007, 0, 1), y: 30 }, { x: new Date(2008, 0, 1), y: 38 },
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
        this.tooltip = {enable: true}
    }
}


