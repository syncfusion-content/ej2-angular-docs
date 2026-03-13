import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts'
import { PieSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationAnnotationService,
  AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';
import { StatisticsDetails } from './datasource';
@Component({
imports: [
         AccumulationChartModule
    ],
providers: [PieSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationDataLabelService,
     AccumulationAnnotationService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" [title]='title' [legendSettings]='legendSettings' 
        [tooltip]='tooltip' (legendRender)='legendRender($event)'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='Browser' yName='Users' type='Pie' 
                pointColorMapping='Color' [dataLabel]='dataLabel'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata?: Object[];
    public title?: string;
    public legendSettings?: Object;
    public tooltip?: Object;
    public dataLabel?: Object;
    
    ngOnInit(): void {
        this.piedata = StatisticsDetails;
        this.title = 'Mobile Browser Statistics';
        this.legendSettings = {
            visible: true,
            template: `<div style="display:flex; align-items:center; gap:8px; padding:4px 0; line-height:1.1;">
        <div style="display:flex; flex-direction:column;">
            <span class="browser-name" style="font-weight:800; font-size:14px; color:;"></span>
            <span class="browser-info" style="font-size:12px; opacity:0.85;"></span>
        </div>
     </div>`
        };
        this.tooltip = {
            enable: true
        };
        this.dataLabel = {
            visible: true,
            format: '{value}M',
            position: 'Outside'
        };
    }

    public legendRender(args: any): void {
        const pt: any = StatisticsDetails.find((item: any) => item.Browser === args.text);
        const browser = args.text;
        const users = pt?.Users;
        const color = args.fill;
        args.template = (args.template as string)
            .replace('color:;', `color:${color};`)
            .replace('<span class="browser-name"', `<span class="browser-name">${browser}`)
            .replace('<span class="browser-info"', `<span class="browser-info"><b>${users} million</b> people use ${browser}`);
    }
}
