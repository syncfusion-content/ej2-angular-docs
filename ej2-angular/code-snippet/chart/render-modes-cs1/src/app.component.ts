import { ChartModule, CategoryService, ColumnSeriesService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { Component } from '@angular/core';

@Component({
    imports: [ChartModule],
    providers: [CategoryService, ColumnSeriesService, LegendService, TooltipService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title' [enableCanvas]='enableCanvas'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='month' yName='revenue' name='Revenue'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent {
    public primaryXAxis: Object = { valueType: 'Category', title: 'Month' };
    public primaryYAxis: Object = { title: 'Revenue (in USD)' };
    public chartData: Object[] = [
        { month: 'Jan', revenue: 35 },
        { month: 'Feb', revenue: 28 },
        { month: 'Mar', revenue: 34 },
        { month: 'Apr', revenue: 32 },
        { month: 'May', revenue: 40 },
        { month: 'Jun', revenue: 38 }
    ];
    public title: string = 'Monthly Revenue (Canvas Rendering)';
    // Toggle this to switch between SVG (false) and Canvas (true) rendering.
    public enableCanvas: boolean = true;
}