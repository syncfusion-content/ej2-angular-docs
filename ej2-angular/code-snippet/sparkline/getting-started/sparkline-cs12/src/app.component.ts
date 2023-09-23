

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-sparkline id='container' width='350px' height='200px' [dataLabelSettings]='dataLabelSettings' [axisSettings] = 'axisSettings' fill= 'blue'[dataSource]="data" >
    </ejs-sparkline>`
})
export class AppComponent {
    public data: object[] = [0, 6, 4, 1, 3, 2, 5] as any;
    public axisSettings: object ={
        minX: -1, maxX: 7, maxY: 8, minY: -1
    };
    // To customize data label fill, border, and text color
    public dataLabelSettings: object = {
        visible: ['All'],
        border: { color: 'blue', width: 1},
        fill: 'blue', opacity: 0.4,
        textStyle: {
            color: 'white'
        }
    };
};


