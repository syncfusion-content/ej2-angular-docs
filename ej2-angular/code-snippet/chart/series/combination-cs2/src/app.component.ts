import { ChartModule, CategoryService, ColumnSeriesService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';

@Component({
    imports: [ChartModule],
    providers: [CategoryService, ColumnSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" align='center' [primaryXAxis]='primaryXAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='data' type='Column' xName='group.x' yName='group.y' name='Gold' width='2' [enableComplexProperty]='true'></e-series>
            <e-series [dataSource]='data' type='Column' xName='group.x' yName='y' name='Silver' width='2' [enableComplexProperty]='true'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public data: Object[] = [
        { group: { x: 'USA', y: 10 }, y: 20 },
        { group: { x: 'China', y: 30 }, y: 10 }
    ];
    public primaryXAxis: Object = {
        valueType: 'Category'
    };
    public title: string = 'Olympic Medal Counts - RIO';

    ngOnInit(): void {
    }
}
