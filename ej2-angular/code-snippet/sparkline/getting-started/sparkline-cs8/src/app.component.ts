

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-sparkline id='container'width='130px' height='150px' type='Column' valueType= 'Numeric' [axisSettings] = 'axisSettings' [dataSource]="data" xName="x" yName="yval">
    </ejs-sparkline>`
})
export class AppComponent {
    public data: object[] = [
       { x: 0, yval: 50 },
            { x: 1, yval: 30 },
            { x: 2, yval: 20 },
            { x: 3, yval: 30 },
            { x: 4, yval: 50 },
            { x: 5, yval: 40 },
            { x: 6, yval: 20 },
            { x: 7, yval: 10 },
            { x: 8, yval: 30 },
            { x: 9, yval: 10 },
            { x: 10, yval: 40 }
    ];
    public axisSettings: object = {
            minY: 0, maxY: 150
    };
};


