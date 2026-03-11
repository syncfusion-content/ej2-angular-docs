import { ChartModule, ChartAllModule, AccumulationChartModule } from '@syncfusion/ej2-angular-charts'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { AreaSeriesService, LineSeriesService, ExportService, ColumnSeriesService, StackingColumnSeriesService, StackingAreaSeriesService, RangeColumnSeriesService, ScatterSeriesService, PolarSeriesService, CategoryService, RadarSeriesService, ILoadedEventArgs, SplineSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from '@syncfusion/ej2-angular-charts';
import { Chart } from '@syncfusion/ej2-charts';

@Component({
imports: [
         ChartModule, ButtonModule, ChartAllModule, AccumulationChartModule
    ],

providers: [ AreaSeriesService, LineSeriesService, ExportService, ColumnSeriesService, StackingColumnSeriesService, StackingAreaSeriesService, RangeColumnSeriesService, ScatterSeriesService, PolarSeriesService, CategoryService, RadarSeriesService, SplineSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationDataLabelService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart #chart id='chart-container1' [primaryXAxis]='primaryXAxis1' [primaryYAxis]='primaryYAxis1'
            [title]='title1' >
            <e-series-collection>
                <e-series [dataSource]='data1' type='Line' xName='x' yName='y' width=2 name='Germany' [marker]='marker'> </e-series>
                <e-series [dataSource]='data1' type='Line' xName='x' yName='y1' width=2 name='England' [marker]='marker'> </e-series>
            </e-series-collection>
    </ejs-chart>
    <ejs-chart #chart1 id='chart-container2' [primaryXAxis]='primaryXAxis2' [primaryYAxis]='primaryYAxis2'
            [title]='title2' >
            <e-series-collection>
                <e-series [dataSource]='data2' type='Column' xName='x' yName='y' width=2> </e-series>
            </e-series-collection>
    </ejs-chart>
    <ejs-accumulationchart #chart2 id="chart-container3" [legendSettings]='legendSettings' [tooltip]='tooltip'  [enableSmartLabels]='true'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='data3' xName='x' yName='y' [dataLabel]='datalabel' radius='70%' startAngle=0 endAngle=360 name='Project'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>

    <button ej-button id='print' (click)='export()'>Export</button>`
})
export class AppComponent implements OnInit {
    public primaryXAxis1?: Object;
    public primaryXAxis2?: Object;
    public primaryXAxis3?: Object;
    public primaryYAxis1?: Object;
    public primaryYAxis2?: Object;
    public primaryYAxis3?: Object;
    public title1?: string;
    public title2?: string;
    public title3?: string;
    public data1?: Object[];
    public data2?: Object[];
    public data3?: Object[];
    public marker?: Object;
    public legendSettings?: Object;
    public tooltip?: Object;
    public datalabel?: Object;
    @ViewChild('chart')
    public chart?: ChartComponent;
    @ViewChild('chart1')
    public chart1?: ChartComponent;
    @ViewChild('chart2')
    public chart2?: ChartComponent;
    ngOnInit(): void {
        this.data1 = [
            { x: new Date(2005, 0, 1), y: 21, y1: 28 }, { x: new Date(2006, 0, 1), y: 24, y1: 44 },
            { x: new Date(2007, 0, 1), y: 36, y1: 48 }, { x: new Date(2008, 0, 1), y: 38, y1: 50 },
            { x: new Date(2009, 0, 1), y: 54, y1: 66 }, { x: new Date(2010, 0, 1), y: 57, y1: 78 },
            { x: new Date(2011, 0, 1), y: 70, y1: 84 }
        ];
        this.data2 = [
            { x: 'John', y: 10000 }, { x: 'Jake', y: 12000 }, { x: 'Peter', y: 18000 },
            { x: 'James', y: 11000 }, { x: 'Mary', y: 9700 }
        ];
        this.data3 = [
            { x: 'Labour', y: 18, text: '18%' }, { x: 'Legal', y: 8, text: '8%' },
            { x: 'Production', y: 15, text: '15%' }, { x: 'License', y: 11, text: '11%' },
            { x: 'Facilities', y: 18, text: '18%' }, { x: 'Taxes', y: 14, text: '14%' },
            { x: 'Insurance', y: 16, text: '16%' }
        ];
        this.primaryXAxis1 = {
            valueType: 'DateTime',
            labelFormat: 'y',
            intervalType: 'Years',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 }
        };
        this.primaryYAxis1 = {
            labelFormat: '{value}%',
            rangePadding: 'None',
            minimum: 0,
            maximum: 100,
            interval: 20,
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        };
        this.title1 = 'Medal Count';
        this.marker = { visible: true, width: 10, height: 10 };
        this.primaryXAxis2 = {
            title: 'Manager',
            valueType: 'Category',
            majorGridLines: { width: 0 }
        };
        this.primaryYAxis2 = {
            title: 'Sales',
            minimum: 0,
            maximum: 20000,
            majorGridLines: { width: 0 }
        };
        this.title2 = 'Sales Comparision';
        this.title3 = 'Project Cost Breakdown';
        this.legendSettings = {
            visible: true
        };
        this.tooltip = {
            enable: false
        };
        this.datalabel = { visible: true, name: 'text', position: 'Inside', font: { fontWeight: '600', color: '#ffffff' } };
    }
    export() {
        this.chart?.exportModule.export('PDF', 'Chart', undefined, [this.chart as Chart, this.chart1 as Chart, this.chart2 as Chart], undefined, undefined, true, undefined, undefined, true);
    }
}
