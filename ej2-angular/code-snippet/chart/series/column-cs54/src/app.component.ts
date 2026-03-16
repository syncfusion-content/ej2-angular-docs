import { ViewChild } from '@angular/core'
import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { CategoryService, DateTimeService, ScrollBarService, ColumnSeriesService, LineSeriesService,
    ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService,LegendService, TooltipService
 } from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';
import { ChartComponent } from '@syncfusion/ej2-angular-charts'

@Component({
imports: [
         ChartModule
    ],

providers: [ CategoryService, DateTimeService, ScrollBarService, LineSeriesService, ColumnSeriesService,
        ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService, LegendService, TooltipService,],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [noDataTemplate]='noDataTemplate' #chart [primaryXAxis]='primaryXAxis'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='x' yName='y' name='Sales'></e-series>
        </e-series-collection>
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
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    @ViewChild('chart')
    public chart?: ChartComponent;
    public primaryXAxis?: Object;
    public data: Object[] = [];
    public chartData?: Object[];

    ngOnInit(): void {
        this.chartData = [];
        this.primaryXAxis = {
            valueType: 'Category'
        };
    }

    public loadData(): void {
        this.chartData = [
            { x: 'January', y: 19173 },
            { x: 'February', y: 17726 },
            { x: 'March', y: 19874 },
            { x: 'April', y: 19391 },
            { x: 'May', y: 20072 },
            { x: 'June', y: 19233 }
        ];
        this.chart?.refresh();
    }
}
