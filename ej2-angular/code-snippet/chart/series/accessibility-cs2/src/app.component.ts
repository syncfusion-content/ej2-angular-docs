import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, ColumnSeriesService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { columnData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [CategoryService, ColumnSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='columnData' type='Column' xName='country' yName='gold' [accessibility]='accessibility'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public columnData?: Object[];
    public title?: string;
    public accessibility?: Object;
    ngOnInit(): void {
        this.columnData = columnData;
        this.primaryXAxis = {
            valueType: 'Category',
            title: 'Countries'
        };
        this.primaryYAxis = {
            minimum: 0,
            maximum: 80,
            interval: 20,
            title: 'Medals'
        };
        this.title = 'Olympic Medals';
        this.accessibility = {
            accessibilityDescription: 'This series displays the number of gold medals won by each country in the Olympics.',
            accessibilityRole: 'series',
            accessibilityDescriptionFormat: 'The country ${point.x} won ${point.y} gold medals.'
        };
    }

}
