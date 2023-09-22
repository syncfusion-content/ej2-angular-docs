

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-sparkline id='container' width='650px' height='350px' [dataSource]="data" xName="xval" yName="yval">
    </ejs-sparkline>`
})
export class AppComponent {
    public data: object[] = [
                   { x: 0, xval: '2005', yval: 20090440 },
                   { x: 1, xval: '2006', yval: 20264080 },
                   { x: 2, xval: '2007', yval: 20434180 },
                   { x: 3, xval: '2008', yval: 21007310 },
                   { x: 4, xval: '2009', yval: 21262640 },
                   { x: 5, xval: '2010', yval: 21515750 },
                   { x: 6, xval: '2011', yval: 21766710 },
                   { x: 7, xval: '2012', yval: 22015580 },
                   { x: 8, xval: '2013', yval: 22262500 },
                   { x: 9, xval: '2014', yval: 22507620 },
    ];
};


