import { Component, OnInit } from '@angular/core';
import { AccumulationChartModule, PieSeriesService, AccumulationLegendService } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [AccumulationChartModule],
    providers: [PieSeriesService, AccumulationLegendService],
    template: `
        <ejs-accumulationchart 
            id="pie-container" 
            [legendSettings]='legendSettings'
        >
            <e-accumulation-series-collection>
                <e-accumulation-series
                    [dataSource]='piedata'
                    type='Pie'
                    xName='x'
                    yName='y'
                >
                </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    `
})
export class App implements OnInit {
    public piedata?: Object[];
    public legendSettings?: Object;
    ngOnInit(): void {
        this.piedata = [
            { x: 'Jan', y: 3 }, { x: 'Feb', y: 3.5 },
            { x: 'Mar', y: 7 }, { x: 'Apr', y: 13.5 },
            { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 },
            { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
            { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 },
            { x: 'Nov', y: 9 }, { x: 'Dec', y: 3.5 }
        ];
        this.legendSettings = {
            visible: false
        };
    }
}