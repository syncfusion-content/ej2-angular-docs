import { ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { AreaSeriesService, LineSeriesService, ExportService, ColumnSeriesService, StackingColumnSeriesService, StackingAreaSeriesService, RangeColumnSeriesService, ScatterSeriesService, PolarSeriesService, CategoryService, RadarSeriesService, ILoadedEventArgs, SplineSeriesService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';
import { columnData } from './datasource';

@Component({
imports: [
         ChartModule, ButtonModule, ChartAllModule
    ],

providers: [ AreaSeriesService, LineSeriesService, ExportService, ColumnSeriesService, StackingColumnSeriesService, StackingAreaSeriesService, RangeColumnSeriesService, ScatterSeriesService, PolarSeriesService, CategoryService, RadarSeriesService, SplineSeriesService],
standalone: true,
    selector: 'app-container',
    template: ` <ejs-chart id='chartcontainer' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
            [title]='title' >
            <e-annotations>
            <e-annotation  content='<div>Highest Medal Count</div>' coordinateUnits='Pixel' x=250 y=160>
            </e-annotation>
            </e-annotations>
            <e-series-collection>
                <e-series [dataSource]='data' type='Polar' xName='country' yName='gold' drawType='Column' name='Gold'> </e-series>
            </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public data?: Object[];
    ngOnInit(): void {
        this.data = columnData;
        this.primaryXAxis = {
            valueType: 'Category',
            title: 'Countries'
        };
        this.title = 'Olympic Medals';

    }
}
