import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, GroupService  } from '@syncfusion/ej2-angular-grids'
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { PieSeriesService, AccumulationTooltipService, AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts'
import { LineSeriesService, DateTimeService, DataLabelService,StackingColumnSeriesService,CategoryService, ChartShape,
       StepAreaSeriesService,SplineSeriesService, ChartAnnotationService, LegendService, TooltipService, StripLineService,
       SelectionService,ScatterSeriesService
    } from '@syncfusion/ej2-angular-charts'

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from '@syncfusion/ej2-angular-charts';
import { GridComponent, ActionEventArgs, PageService, PrintEventArgs } from '@syncfusion/ej2-angular-grids';
import { Query, DataManager } from '@syncfusion/ej2-data';
import { orderData } from './datasource';

@Component({
imports: [
         ChartModule, AccumulationChartModule, GridModule,ButtonModule
    ],

providers: [ LineSeriesService, DateTimeService, DataLabelService, StackingColumnSeriesService,CategoryService,
               StepAreaSeriesService, SplineSeriesService, ChartAnnotationService, LegendService, TooltipService, StripLineService,
               PieSeriesService, AccumulationTooltipService, AccumulationDataLabelService, SelectionService,ScatterSeriesService
               ,PageService],
standalone: true,
    selector: 'app-root',
    template: `
        <button class ='printbtn' ejs-button cssClass="e-danger" (click)="onClick()"> Print </button>
        <ejs-grid #grid
            [dataSource]="data"
            [allowPaging]="true"
            [pageSettings]="pageSettings"
            printMode="CurrentPage"
            (dataBound)="dataBound()"
            (actionComplete)="actionComplete($event)"
            (beforePrint)="beforePrint($event)">
            <e-columns>
                <e-column field="OrderDate" headerText="Order Date" width="130" format="yMd" textAlign="right"></e-column>
                <e-column field="Freight" width="120" format="C2" textAlign="right"></e-column>
            </e-columns>
        </ejs-grid>
        <h4>Chart</h4>
        <div #chartContainer >
            <ejs-chart #chart id="chart-container"
                [primaryXAxis]="primaryXAxis"
                [primaryYAxis]="primaryYAxis"
                [title]="title">
                width="60%"
                <e-series-collection>
                    <e-series type="Line" xName="OrderDate" yName="Freight"  width="1" columnWidth="0.4" name="dataview" [marker]="marker"></e-series>
                </e-series-collection>
            </ejs-chart>
        </div>
    `,
    providers: [PageService]
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public data?: Object[];
    public title?: string;
    public marker?: Object;
    public primaryYAxis?: Object;
    public pageSettings?: Object;

    @ViewChild('chart') public chart?: ChartComponent;
    @ViewChild('grid') public grid?: GridComponent;
    @ViewChild('chartContainer') public chartContainer?: ElementRef;

    ngOnInit(): void {
        this.data = new DataManager(orderData as JSON[]).executeLocal(new Query().take(100));
        this.pageSettings = { pageSize: 10 };
    }

    dataBound() {
        this.chart!.primaryXAxis = {
            valueType: 'DateTime',
        };
        this.chart!.series[0].marker = { visible: true };
        this.chart!.series[0].xName = 'OrderDate';
        this.chart!.series[0].yName = 'Freight';
        this.chart!.series[0].dataSource = (this.grid as GridComponent).getCurrentViewRecords();
    }

    onClick() {
        (this.grid as GridComponent).print();
    }
    beforePrint(args: PrintEventArgs) {
        if (this.chartContainer) {
            const clonedChartContainer = this.chartContainer.nativeElement.cloneNode(true);
            (args.element as Element).appendChild(clonedChartContainer);
        }
    }
    public actionComplete(args: ActionEventArgs): void {
        if (args.requestType === 'paging') {
            this.chart!.series[0].dataSource = (this.grid as GridComponent).getCurrentViewRecords();
            this.chart?.refresh();
        }
    }
}
