import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HeatMapModule} from '@syncfusion/ej2-angular-heatmap'
import { TooltipService, LegendService } from '@syncfusion/ej2-angular-heatmap'




import { Component, ViewEncapsulation } from '@angular/core';

@Component({
imports: [
         HeatMapModule
    ],

providers: [TooltipService, LegendService],
standalone: true,
    selector: 'my-app',
    template:
        `<ejs-heatmap id='container' style="display:block;" [dataSource]='dataSource' [xAxis]='xAxis' [yAxis]='yAxis'
       [titleSettings]='titleSettings' [cellSettings]='cellSettings'>
        </ejs-heatmap>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

    dataSource: Object[] = [
        [[4, 39], [3, 8], [1, 3], [1, 10], [4, 4], [2, 15]],
        [[4, 28], [5, 92], [5, 73], [3, 1], [3, 4], [4, 126]],
        [[4, 45], [5, 152], [0, 44], [4, 54], [5, 243], [2, 45]]];

    titleSettings: Object = {
        text: 'Commercial Aviation Accidents and Fatalities by year 2015 - 2017',
        textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'inherit',
        },
    };
    xAxis: Object = {
        labels: ['2015', '2016', '2017']
    };
    yAxis: Object = {
        labels: ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec']
    };
    cellSettings: Object = {
        labelTemplate:
            '<div style="width:25px;height:20px;text-align:center;padding-top:2px;background-color:#5BBB9C; border: 1px solid #000000; border-radius:50%;font-weight:bold;">${value}</div>'
    };
}



