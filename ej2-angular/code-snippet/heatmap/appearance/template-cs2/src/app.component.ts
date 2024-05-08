import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HeatMapModule} from '@syncfusion/ej2-angular-heatmap'
import { TooltipService, AdaptorService, LegendService} from '@syncfusion/ej2-angular-heatmap'




import { Component, ViewEncapsulation } from '@angular/core';

@Component({
imports: [
         HeatMapModule
    ],

providers: [TooltipService, AdaptorService, LegendService],
standalone: true,
    selector: 'my-app',
    template:
        `<ejs-heatmap id='container' style="display:block;" [dataSource]='dataSource' [xAxis]='xAxis' [yAxis]='yAxis'
       [titleSettings]='titleSettings' [cellSettings]='cellSettings' [dataSourceSettings]='dataSourceSettings' >
        </ejs-heatmap>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

    dataSource: Object[] = [
        [0, 0, [4, 39]], [0, 1, [3, 8]], [0, 2, [1, 3]], [0, 3, [1, 10]], [0, 4, [4, 4]], [0, 5, [2, 15]],
        [1, 0, [4, 28]], [1, 1, [5, 92]], [1, 2, [5, 73]], [1, 3, [3, 1]], [1, 4, [3, 4]], [1, 5, [4, 126]],
        [2, 0, [4, 45]], [2, 1, [5, 152]], [2, 2, [0, 44]], [2, 3, [4, 54]], [2, 4, [5, 243]], [2, 5, [2, 45]]
    ];

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
    dataSourceSettings: Object = {
        isJsonData: false,
        adaptorType: 'Cell'
    };
}



