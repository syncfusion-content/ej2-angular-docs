import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import { PieSeriesService, AccumulationLegendService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { pieData } from './datasource';

@Component({
    imports: [AccumulationChartModule],
    providers: [PieSeriesService, AccumulationLegendService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" [legendSettings]='legendSettings' [accessibility]='accessibility' focusBorderColor='#FF0000' focusBorderWidth='3' focusBorderMargin='5'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y' type='Pie'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata?: Object[];
    public legendSettings?: Object;
    public accessibility?: Object;
    ngOnInit(): void {
        this.piedata = pieData;
        this.legendSettings = {
            visible: true
        };
        this.accessibility = {
            accessibilityDescription: 'Pie chart representing the distribution of data across months.',
            accessibilityRole: 'chart'
        };
    }

}
