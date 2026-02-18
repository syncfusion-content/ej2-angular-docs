import { Component, OnInit } from '@angular/core';
import { ChartModule, RangeNavigatorModule, AreaSeriesService, DateTimeService, RangeTooltipService } from '@syncfusion/ej2-angular-charts';
import { datasrc } from './data';

@Component({
    imports: [ChartModule, RangeNavigatorModule],
    providers: [AreaSeriesService, DateTimeService, RangeTooltipService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-rangenavigator id="rn-container" valueType='DateTime' [value]='value' [tooltip]='tooltip'>
        <e-rangenavigator-series-collection>
            <e-rangenavigator-series [dataSource]='chartData' type='Area' xName='x' yName='y' width=2>
            </e-rangenavigator-series>
        </e-rangenavigator-series-collection>
    </ejs-rangenavigator>`
})
export class AppComponent implements OnInit {
    public value?: Object[];
    public chartData?: Object[];
    public tooltip?: Object;

    ngOnInit(): void {
        this.value = [new Date('2017-09-01'), new Date('2018-02-01')];
        this.chartData = datasrc;
        this.tooltip = { enable: true, displayMode: 'Always' };
    }
}



