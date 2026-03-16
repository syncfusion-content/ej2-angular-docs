import { ViewChild } from '@angular/core'
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts'
import { PieSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationAnnotationService,
  AccumulationDataLabelService, AccumulationChartComponent } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';
import { pieData } from './datasource';
@Component({
imports: [
         AccumulationChartModule
    ],
providers: [PieSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationDataLabelService,
     AccumulationAnnotationService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" [noDataTemplate]='noDataTemplate' [legendSettings]='legendSettings'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y' type='Pie'></e-accumulation-series>
        </e-accumulation-series-collection>
        <ng-template #noDataTemplate>
                <div id="noDataTemplateContainer">
                    <div class="template-align">
                        <img src="./no-data.png" alt="No Data"/>
                    </div>
                    <div class="template-align">
                        <p style="font-size: 15px; margin: 10px 0 0;"><strong>No data available to display.</strong></p>
                    </div>
                    <div class="template-align" style="margin-top: 15px;">
                        <button ejs-button class="load-data-btn" (click)="loadData()" iconCss="e-icons e-refresh">Load Data</button>
                    </div>
                </div>
            </ng-template>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata?: Object[];
    public legendSettings?: Object;
    ngOnInit(): void {
        this.piedata = [];
        this.legendSettings = {
            visible: false
        };
    }

    public loadData(): void {
        this.piedata = pieData;
    }
}
