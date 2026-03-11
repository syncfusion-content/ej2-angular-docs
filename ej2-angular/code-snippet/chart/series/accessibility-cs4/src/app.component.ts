import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, ColumnSeriesService, ChartAnnotationService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { columnData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [CategoryService, ColumnSeriesService, ChartAnnotationService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title'>
        <e-annotations>
            <e-annotation  content='<div style="border: 1px solid #000; background-color: #f8f8f8; padding: 5px; border-radius: 4px; font-size: 12px; font-weight: bold;">70 Gold Medals</div>' coordinateUnits='Point' x='France' y=55 [accessibility]='accessibility'>
            </e-annotation>
        </e-annotations>
        <e-series-collection>
            <e-series [dataSource]='columnData' type='Column' xName='country' yName='gold'></e-series>
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
            title: 'Medals'
        };
        this.title = 'Olympic Medals';
        this.accessibility = {
            accessibilityDescription: 'Annotation indicating that France has won 70 Gold Medals.',
            accessibilityRole: 'note',
            focusable: true
        };
    }

}
