import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts'
import { PyramidSeriesService, CategoryService, AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';
import { pyramidData } from './datasource';
@Component({
imports: [
         AccumulationChartModule
    ],

providers: [PyramidSeriesService,CategoryService, AccumulationDataLabelService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container">
        <e-accumulation-series-collection>
            <e-accumulation-series width='60%' height='80%' type='Pyramid' [dataSource]='pyramidData' xName='x' yName='y'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public pyramidData?: Object[];
    ngOnInit(): void {
        this.pyramidData = pyramidData;
    }

}
