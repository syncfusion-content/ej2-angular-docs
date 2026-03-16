import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts'
import { PyramidSeriesService, CategoryService, AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';
import { pyramidData } from './datasource';
import {
    IAccPointRenderEventArgs,
} from '@syncfusion/ej2-charts';
@Component({
imports: [
         AccumulationChartModule
    ],

providers: [PyramidSeriesService,CategoryService, AccumulationDataLabelService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container"  (pointRender)="onPointRender($event)">
        <e-accumulation-series-collection>
            <e-accumulation-series  type='Pyramid' [dataSource]='pyramidData' xName='x' yName='y' [gapRatio]="gapRatio"
            ></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`,
})
export class AppComponent implements OnInit {
    public gapRatio: number = 0.2;
    public onPointRender = (args: IAccPointRenderEventArgs) => {
        if ((args.point.x as string).indexOf('Downloaded') > -1) {
            args.fill = '#D3D3D3';
        } else {
            args.fill = '#597cf9';
        }
    };
    public pyramidData = pyramidData;
    ngOnInit(): void { }
}
