


import { Component, OnInit, ViewChild } from '@angular/core';
import { datasrc } from './datasource';
import {
    DateTime, AreaSeries, IChangedEventArgs, Chart
} from '@syncfusion/ej2-charts';

@Component({
    selector: 'app-container',
    template: `<ejs-rangenavigator id="rn-container" valueType='DateTime' [value]='value' [tooltip]='tooltip'
    [labelFormat]='labelFormat' (changed)='changed($event)'>
            <e-rangenavigator-series-collection>
                <e-rangenavigator-series [dataSource]='chartData' type='Area' xName='x' yName='y' width=2>
                </e-rangenavigator-series>
            </e-rangenavigator-series-collection>
        </ejs-rangenavigator>
        <div align="center">
    <ejs-chart #chart style='display:block;' id='chart' [primaryXAxis]='primaryXAxis'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Area' xName='x' yName='y' width='2'>
            </e-series>
        </e-series-collection>
        </ejs-chart>
    </div>`
})
export class AppComponent implements OnInit {
    public value?: Object[];
    public chartData?: Object[];
    public tooltip?: Object[];
    public labelFormat?: string;
    public primaryXAxis?: Object;
    @ViewChild('chart')
    public Chart?: Chart;
    public changed(args: IChangedEventArgs): void {
        (this.Chart as Chart).primaryXAxis.zoomFactor = args.zoomFactor;
        (this.Chart as Chart).primaryXAxis.zoomPosition = args.zoomPosition;
        (this.Chart as Chart).dataBind();
    }
    ngOnInit(): void {
        this.value = [new Date('2017-09-01'), new Date('2018-02-01')];
        this.chartData = datasrc;
        this.tooltip = [{ enable: true, displayMode: 'Always' }];
        this.labelFormat = 'MMM-yy';
        this.primaryXAxis = {
          valueType: 'DateTime',
        };
    }
}



