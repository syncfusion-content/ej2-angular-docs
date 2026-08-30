import { ChartModule, CategoryService, ColumnSeriesService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';

@Component({
    imports: [ChartModule],
    providers: [CategoryService, ColumnSeriesService, LegendService, TooltipService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title'
    [tooltip]='tooltip' [legendSettings]='legendSettings' [accessibility]='accessibility'
    focusBorderColor='#0066FF' focusBorderWidth=2 focusBorderMargin=3>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='month' yName='sales' name='Sales'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public tooltip?: Object;
    public legendSettings?: Object;
    public accessibility?: Object;

    ngOnInit(): void {
        this.chartData = [
            { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
            { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
            { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
            { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
            { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
            { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
        ];
        this.primaryXAxis = { valueType: 'Category' };
        this.primaryYAxis = { labelFormat: '${value}K' };
        this.title = 'Monthly Sales';
        this.tooltip = { enable: true };
        this.legendSettings = { visible: true };
        // Customize the chart's accessibility attributes and visible focus border.
        this.accessibility = {
            accessibilityDescription: 'A column chart showing monthly sales in thousands of units for the year.',
            accessibilityRole: 'chart'
        };
    }
}
