import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts'
import { PieSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationAnnotationService,
  AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';
import { pieData } from './datasource';
import { IAccTooltipRenderEventArgs } from '@syncfusion/ej2-charts';
import { FontModel } from '@syncfusion/ej2-angular-charts';
@Component({
imports: [
         AccumulationChartModule
    ],

providers: [PieSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationDataLabelService,
     AccumulationAnnotationService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" [tooltip]='tooltip' (tooltipRender)="ontooltipRender($event)">
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata?: Object[];
    public tooltip?: Object;
    public ontooltipRender?: Function;
    ngOnInit(): void {
        this.piedata = pieData;
        this.tooltip = {
            enable: true
        }
        this.ontooltipRender = (args: IAccTooltipRenderEventArgs) => {
            if (args.point.index === 3) {
                args.text = args.point.x + '' + ':' + args.point.y + '' + ' ' +'customtext';
                (args.textStyle as FontModel).color = '#f48042';
            }
        }
    };
}
