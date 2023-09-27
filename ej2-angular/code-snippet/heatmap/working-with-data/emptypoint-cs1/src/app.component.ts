


import { Component, ViewEncapsulation } from '@angular/core';
@Component({
    selector: 'my-app',
    template:
       `<ejs-heatmap id='container' style="display:block;" [dataSource]='dataSource' [xAxis]='xAxis' [yAxis]='yAxis'
        [legendSettings]='legendSettings'>
        </ejs-heatmap>`
})
export class AppComponent{

        xAxis: Object = {
            valueType:"DateTime",
            minimum: new Date(2007,0,1),
            intervalType:"Years",
            labelFormat:"yyyy",
        };
        yAxis: Object = {
           valueType:"Numeric"
        };
        legendSettings: Object = {
            visible: false,
        };
        dataSource: Object[] = [
        [73, 39, 26, 39, 94, 0],
        [93, 58, 53, 38, 26, 68],
        [99, 28, null, 4, 66, 90],
        [14, 26, 97, 69, 69, 3],
        [7, 46, 47, 47, 88, 6],
        [41, 55, 73, 23, "", 79],
        [56, 69, 21, 86, 3, 33],
        [45, 7, undefined, 81, 95, 79],
        [60, 77, 74, 68, 88, 51],
        [25, 25, 10, 12, 78, 14],
        [25, 56, 55, 58, 12, 82],
        [74, 33, 88, 23, 86, 59]
    ];
}



