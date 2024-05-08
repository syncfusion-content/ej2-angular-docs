import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HeatMapModule} from '@syncfusion/ej2-angular-heatmap'
import { LegendService, TooltipService} from '@syncfusion/ej2-angular-heatmap'




import { Component, ViewEncapsulation } from '@angular/core';

@Component({
imports: [
         HeatMapModule
    ],

providers: [ LegendService, TooltipService],
standalone: true,
    selector: 'my-app',
    template:
        `<ejs-heatmap id='container' style="display:block;" [dataSource]='dataSource' [xAxis]='xAxis' [yAxis]='yAxis'>
        </ejs-heatmap>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

    dataSource: Object[] = [
        [1, 76],
        [19, 3]
    ];

    xAxis: Object = {
        labels: ['Actual<br>Accept', 'Actual<br>Reject'],
        opposedPosition: true
    };
    yAxis: Object = {
        labels: ['Actual<br>Accept', 'Actual<br>Reject'],
        maxLabelLength: 50
    };
}



