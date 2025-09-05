import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule, ChartAllModule, StockChartAllModule, StockChartChartComponent, IStockChartEventArgs } from '@syncfusion/ej2-angular-charts'
import { DateTimeService, LineSeriesService, DateTimeCategoryService, StripLineService} from '@syncfusion/ej2-angular-charts'



import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
imports: [
         ChartModule, StockChartAllModule, ChartAllModule
    ],

providers: [ DateTimeService, LineSeriesService, DateTimeCategoryService, StripLineService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-stockchart id="chart-container" #chart [noDataTemplate]='noDataTemplate' (load)='load($event)' [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [crosshair]='crosshair'>
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]='stockchartData' type='Candle' xName='date' yName='open' name='India' width=2 ></e-stockchart-series>
        </e-stockchart-series-collection>
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
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
  @ViewChild('chart')
    public chart: StockChartChartComponent;
    public hasData: boolean = false;
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public stockchartData?: Object[];
    public title?: string;
    public crosshair?: Object;
    public load(args: IStockChartEventArgs): void {
        this.stockchartData = this.hasData ? chartData : [];
    };


    public loadData(): void {
        this.stockchartData = chartData;
        this.hasData = true;
        this.chart!.refresh();
    }

    ngOnInit(): void {
        
        this.title = 'Efficiency of oil-fired power production';
        this.primaryXAxis = {
           valueType: 'DateTime',
           crosshairTooltip: {enable:true}
        };
        this.primaryYAxis = {
           majorTickLines: { color: 'transparent', width: 0 },
           crosshairTooltip: {enable:true}
        };
        this.crosshair= {
            enable: true
        };
    }

}


