

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-sparkline id='container' width='500px' height='200px' [axisSettings]='axisSettings' fill= 'blue' [dataLabelSettings]='dataLabelSettings' valueType= 'Category' [dataSource]="data"  xName= 'x' yName= 'y'>
    </ejs-sparkline>`
})
export class AppComponent {
    public data: object[] = [{x: 'Mon', y: 3 },{x: 'Tue', y: 5 },{x: 'Wed', y: 2 },{x: 'Thu', y: 4 },{x: 'Fri', y: 6 },];
    public dataLabelSettings: object = {
        format: '${x} : ${y}',
        visible: ['All'],
        border: { color: 'blue', width: 1},
        fill: 'blue', opacity: 0.4,
        textStyle: {
            color: 'white'
        }
    };
    public axisSettings: object = {
        minX: -1, maxX: 7, maxY: 8, minY: -1
    };
};


