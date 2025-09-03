import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule, ChartComponent } from '@syncfusion/ej2-angular-charts'
import { CategoryService, ILoadedEventArgs, DateTimeService, ScrollBarService, ColumnSeriesService, LineSeriesService, 
    ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService,LegendService, TooltipService
 } from '@syncfusion/ej2-angular-charts'



import { Component, OnInit } from '@angular/core';

@Component({
imports: [
         ChartModule
    ],

providers: [ CategoryService, DateTimeService, ScrollBarService, LineSeriesService, ColumnSeriesService, 
        ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService, LegendService, TooltipService,],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart style='display:block;' #chart [width]='width' align='center' id='chartcontainer'
            [noDataTemplate]='noDataTemplate' [chartArea]='chartArea' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
            [tooltip]='tooltip' [title]='title' [subTitle]='subTitle' (load)='load($event)'>
            <e-series-collection>
                <e-series [dataSource]='data' type='Line' xName='x' yName='y' [marker]='marker' [width]='2'> </e-series>
            </e-series-collection>
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
        </ejs-chart>`
})
export class AppComponent implements OnInit {
    @ViewChild('chart')
    public chart: ChartComponent;
    public hasData: boolean = false;

    public data: Object[] = [];
    //Initializing Primary X Axis
    public primaryXAxis: Object = {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0}
    };
    //Initializing Primary X Axis
    public primaryYAxis: Object = {
        title: 'Production (in million pounds)',
        titleStyle: {
            fontWeight: '600'
        },
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 }
    };
    public chartArea: Object= {
            border:{width:0}
    };
    public marker: Object = {
        visible: true,
        width: 7,
        height: 7
    };
    public tooltip: Object = {
        enable: true, format: '${point.x} : <b>${point.y}M</b>', header: 'Milk Production',
    };
    public width: string = '100%';

    // custom code start
    public load(args: ILoadedEventArgs): void {
        this.data = this.hasData ? [
            { x: 'January', y: 19173 },
            { x: 'February', y: 17726 },
            { x: 'March', y: 19874 },
            { x: 'April', y: 19391 },
            { x: 'May', y: 20072 },
            { x: 'June', y: 19233 }
        ] : [];
    };


    public loadData(): void {
        this.data = [
            { x: 'January', y: 19173 },
            { x: 'February', y: 17726 },
            { x: 'March', y: 19874 },
            { x: 'April', y: 19391 },
            { x: 'May', y: 20072 },
            { x: 'June', y: 19233 }
        ];
        this.hasData = true;
        this.chart.series[0].animation.enable = true;
        this.chart!.refresh();
    }

    // custom code end
    public title: string = 'Milk Production in US - 2025';
    public subTitle: string = 'Source: nass.usda.gov';

    constructor() {
    };

}


