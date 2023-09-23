


import { Component, ViewEncapsulation } from '@angular/core';

@Component({
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



