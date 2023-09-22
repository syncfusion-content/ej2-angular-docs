

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-sparkline id='container' width='130px' height='150px' type='Column' valueType= 'DateTime' [dataSource]="data" xName="xDate" yName="yval">
    </ejs-sparkline>`
})
export class AppComponent {
    public data: object[] = [
            { xDate: new Date(2018, 0, 1), x: 0, yval: 4 },
            { xDate: new Date(2018, 0, 2), x: 1, yval: 4.5 },
            { xDate: new Date(2018, 0, 3), x: 2, yval: 8 },
            { xDate: new Date(2018, 0, 4), x: 3, yval: 7 },
            { xDate: new Date(2018, 0, 5), x: 4, yval: 6 },
            { xDate: new Date(2018, 0, 8), x: 5, yval: 8 },
            { xDate: new Date(2018, 0, 9), x: 6, yval: 8 },
            { xDate: new Date(2018, 0, 10), x: 7, yval: 6.5 },
            { xDate: new Date(2018, 0, 11), x: 8, yval: 4 },
            { xDate: new Date(2018, 0, 12), x: 9, yval: 5.5 }
    ];
};


