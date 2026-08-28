import { ChartModule, ChartComponent, ColumnSeriesService, LegendService, CategoryService } from '@syncfusion/ej2-angular-charts';
import { IMouseEventArgs } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-container',
    standalone: true,
    imports: [ChartModule],
    providers: [ColumnSeriesService, CategoryService, LegendService],
    template: `
    <ejs-chart #chart id='chartcontainer' align='center' [width]='width' [chartArea]='chartArea'
               [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
               [title]='title' [tooltip]='tooltip'
               (chartMouseClick)='chartMouseClick($event)'>
        <e-series-collection>
            <e-series [dataSource]='data'  type='Column' xName='x' yName='y' name='Gold'   fill='red'    width='2' opacity='0.7'></e-series>
            <e-series [dataSource]='data1' type='Column' xName='x' yName='y' name='Silver' fill='orange' width='2' opacity='0.7'></e-series>
            <e-series [dataSource]='data2' type='Column' xName='x' yName='y' name='Bronze' fill='grey'   width='2' opacity='0.7'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public width = '80%';
    public chartArea = { border: { width: 0 } };
    public previousTarget: string | null = null;
    public data: Object[] = [
        { x: 'USA', y: 46 }, { x: 'GBR', y: 27 }, { x: 'CHN', y: 26 }
    ];
    public data1: Object[] = [
        { x: 'USA', y: 37 }, { x: 'GBR', y: 23 }, { x: 'CHN', y: 18 }
    ];
    public data2: Object[] = [
        { x: 'USA', y: 38 }, { x: 'GBR', y: 17 }, { x: 'CHN', y: 26 }
    ];
    public primaryXAxis: Object = { valueType: 'Category', interval: 1 };
    public primaryYAxis: Object = { title: 'Medals' };
    public title: string = 'Olympic Medal Counts - RIO';
    public tooltip: Object = { enable: true };

    @ViewChild('chart')
    public chart?: ChartComponent;

    ngOnInit(): void { }

    public chartMouseClick(args: IMouseEventArgs): void {
        const target: string = (args.target as string) || '';
        const isLegend =
            target.includes('chart_legend_text') ||
            (target.includes('chart_legend_shape') && !target.includes('chart_legend_element'));
        if (!isLegend || !this.chart) return;

        const ids =
            target.includes('chart_legend_text') ? target.split('chart_legend_text_')[1]
            : target.includes('chart_legend_shape_marker_') ? target.split('chart_legend_shape_marker_')[1]
            : target.split('chart_legend_shape_')[1];
        const index: string = ids ?? '';
        const series = this.chart.series as any[];

        if (index === this.previousTarget) {
            series.forEach((s, i) => s.visible = i !== Number(index));
            this.previousTarget = null;
            return;
        }
        series.forEach((s, i) => s.visible = i === Number(index));
        this.previousTarget = index;
    }
}
