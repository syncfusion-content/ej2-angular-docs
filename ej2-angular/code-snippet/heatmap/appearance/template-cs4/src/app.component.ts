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
       [titleSettings]='titleSettings' [cellSettings]='cellSettings' [dataSourceSettings]='dataSourceSettings'>
        </ejs-heatmap>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

    dataSource: Object[] = [
        { Year: '2017', Months: 'Jan-Feb', Accidents: 4, Fatalities: 39 },
        { Year: '2017', Months: 'Mar-Apr', Accidents: 3, Fatalities: 8 },
        { Year: '2017', Months: 'May-Jun', Accidents: 1, Fatalities: 3 },
        { Year: '2017', Months: 'Jul-Aug', Accidents: 1, Fatalities: 10 },
        { Year: '2017', Months: 'Sep-Oct', Accidents: 4, Fatalities: 4 },
        { Year: '2017', Months: 'Nov-Dec', Accidents: 2, Fatalities: 15 },
        { Year: '2016', Months: 'Jan-Feb', Accidents: 4, Fatalities: 28 },
        { Year: '2016', Months: 'Mar-Apr', Accidents: 5, Fatalities: 92 },
        { Year: '2016', Months: 'May-Jun', Accidents: 5, Fatalities: 73 },
        { Year: '2016', Months: 'Jul-Aug', Accidents: 3, Fatalities: 1 },
        { Year: '2016', Months: 'Sep-Oct', Accidents: 3, Fatalities: 4 },
        { Year: '2016', Months: 'Nov-Dec', Accidents: 4, Fatalities: 126 },
        { Year: '2015', Months: 'Jan-Feb', Accidents: 4, Fatalities: 45 },
        { Year: '2015', Months: 'Mar-Apr', Accidents: 5, Fatalities: 152 },
        { Year: '2015', Months: 'May-Jun', Accidents: 0, Fatalities: 0 },
        { Year: '2015', Months: 'Jul-Aug', Accidents: 4, Fatalities: 54 },
        { Year: '2015', Months: 'Sep-Oct', Accidents: 5, Fatalities: 243 },
        { Year: '2015', Months: 'Nov-Dec', Accidents: 2, Fatalities: 45 }
    ];

    titleSettings: Object = {
        text: 'Commercial Aviation Accidents and Fatalities by year 2015 - 2017',
        textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'inherit'
        },
    };
    xAxis: Object = {
        labels: ['2015', '2016', '2017']
    };
    yAxis: Object = {
        labels: ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec']
    };
    cellSettings: Object = {
        labelTemplate: '<div> Accidents - ${Accidents}</div>'
    };
    dataSourceSettings: Object = {
        isJsonData: true,
        adaptorType: 'Cell',
        xDataMapping: 'Year',
        yDataMapping: 'Months',
        valueMapping: 'Fatalities'
    };
}



