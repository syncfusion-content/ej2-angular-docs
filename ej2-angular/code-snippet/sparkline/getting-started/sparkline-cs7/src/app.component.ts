

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-sparkline id='container' width='130px' height='150px' type='Column' valueType= 'Numeric'[dataSource]="data" xName="xval" yName="yval">
    </ejs-sparkline>`
})
export class AppComponent {
    public data: object[] = [
            { x: 1, xval: 2010, yval: 190 },
            { x: 2, xval: 2011, yval: 165 },
            { x: 3, xval: 2012, yval: 158 },
            { x: 4, xval: 2013, yval: 175 },
            { x: 5, xval: 2014, yval: 200 },
            { x: 6, xval: 2015, yval: 180 },
            { x: 7, xval: 2016, yval: 210 }
    ];
};


