import { ChartModule, ChartAllModule, AccumulationChartAllModule } from '@syncfusion/ej2-angular-charts'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService } from '@syncfusion/ej2-angular-grids'
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts'
import { DialogModule } from '@syncfusion/ej2-angular-popups'
import { PieSeriesService, AccumulationTooltipService, AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts'
import {
    LineSeriesService, DateTimeService, DataLabelService, StackingColumnSeriesService, CategoryService,
    StepAreaSeriesService, SplineSeriesService, ScrollBarService, ChartAnnotationService, LegendService, TooltipService, StripLineService,
    SelectionService, ScatterSeriesService, ZoomService, ColumnSeriesService, AreaSeriesService, RangeAreaSeriesService
} from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';
import { ILegendRenderEventArgs } from '@syncfusion/ej2-angular-charts';

@Component({
imports: [
         ChartModule, ChartAllModule, AccumulationChartAllModule, AccumulationChartModule, GridModule, DialogModule
    ],

providers: [LineSeriesService, DateTimeService, ColumnSeriesService, DataLabelService, ZoomService, StackingColumnSeriesService, CategoryService,
        StepAreaSeriesService, SplineSeriesService, ChartAnnotationService, LegendService, TooltipService, StripLineService,
        PieSeriesService, AccumulationTooltipService, ScrollBarService, AccumulationDataLabelService, SelectionService, ScatterSeriesService,
        PageService, AreaSeriesService, RangeAreaSeriesService ],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' (legendRender)='legendRender($event)'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StepArea' xName='x' yName='y' name='Renewable' width=2 [marker]='marker'></e-series>
             <e-series [dataSource]='chartData1' type='StepArea' xName='x' yName='y' name='Non-Renewable' width=2 [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public chartData1?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    marker: any;
    public legendRender(args: ILegendRenderEventArgs): void {
    if (args.text === 'Renewable') {
    args.shape = 'Circle';
    } else if (args.text === 'Non-Renewable') {
    args.shape = 'Triangle';
    }
    };
    ngOnInit(): void {
        this.chartData = [{ x: 2000, y: 416 }, { x: 2001, y: 490 }, { x: 2002, y: 470 }, { x: 2003, y: 500 },
                { x: 2004, y: 449 }, { x: 2005, y: 470 }, { x: 2006, y: 437 }, { x: 2007, y: 458 }];
        this.chartData1 = [{ x: 2000, y: 180 }, { x: 2001, y: 240 }, { x: 2002, y: 370 }, { x: 2003, y: 200 },
                { x: 2004, y: 229 }, { x: 2005, y: 210 }, { x: 2006, y: 337 }, { x: 2007, y: 258 }];
        this.primaryXAxis = {
           title: 'Year',
           valueType: 'Double'
        };
        this.primaryYAxis = {
           title:'Production (Billion as kWh)',
        };
        this.title = 'Electricity- Production';
    }

}
