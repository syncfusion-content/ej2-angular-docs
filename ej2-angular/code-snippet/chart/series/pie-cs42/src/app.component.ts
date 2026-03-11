import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import { PyramidSeriesService, AccumulationDataLabelService, AccumulationLegendService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { pyramidData } from './datasource';

@Component({
    imports: [AccumulationChartModule],
    providers: [PyramidSeriesService, AccumulationDataLabelService, AccumulationLegendService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" [title]='title' [legendSettings]='legendSettings'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='pyramidData' xName='x' yName='y' type='Pyramid' [accessibility]='accessibility'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public pyramidData?: Object[];
    public title?: string;
    public accessibility?: Object;
    public legendSettings?: Object;
    ngOnInit(): void {
        this.pyramidData = pyramidData;
        this.title = 'Sales Distribution of Car by Region';
        this.accessibility =  {
            accessibilityDescription: 'This pyramid chart represents the sales distribution of cars by region, with each section representing a different region and its respective sales percentage.',
            accessibilityRole: 'presentation'
        };
        this.legendSettings = { visible: false };
    }

}
