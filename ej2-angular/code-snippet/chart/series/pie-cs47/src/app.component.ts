import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AccumulationChartModule, AccumulationChartComponent } from '@syncfusion/ej2-angular-charts'
import { PieSeriesService, AccumulationLegendService, ILoadedEventArgs, AccumulationTooltipService, AccumulationAnnotationService,
  AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts'



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
    template: `<ejs-accumulationchart id="chart-container" #chart [legendSettings]='legendSettings' [noDataTemplate]='noDataTemplate' (load)='load($event)'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y' radius="100%"></e-accumulation-series>
        </e-accumulation-series-collection>
        <ng-template #noDataTemplate>
                <div id="noDataTemplateContainer" [ngClass]="theme">
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
    @ViewChild('chart')
    public chart: AccumulationChartComponent;
    public hasData: boolean = false;

    public load(args: ILoadedEventArgs): void {
        this.piedata = this.hasData ? [
            { x: 'January', y: 19173 },
            { x: 'February', y: 17726 },
            { x: 'March', y: 19874 },
            { x: 'April', y: 19391 },
            { x: 'May', y: 20072 },
            { x: 'June', y: 19233 }
        ] : [];
    };


    public loadData(): void {
        this.piedata = [
            { x: 'January', y: 19173 },
            { x: 'February', y: 17726 },
            { x: 'March', y: 19874 },
            { x: 'April', y: 19391 },
            { x: 'May', y: 20072 },
            { x: 'June', y: 19233 }
        ];
        this.hasData = true;
        this.chart!.refresh();
    }
    
    ngOnInit(): void {
        this.piedata = pieData;
        this.legendSettings = {
            visible: false
        };
    }

}


