

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-sparkline id='container' width='130px' height='150px' endPointColor='green' negativePointColor='red' startPointColor='green' lowPointColor='orange' highPointColor='blue' valueType= 'Category' type='Column' [dataSource]="data" xName="xval" yName="yval">
    </ejs-sparkline>`
})
export class AppComponent {
    public data: object[] = [
            { x: 0, xval: 'AUDI', yval: 1 },
            { x: 1, xval: 'BMW', yval: 5 },
            { x: 2, xval: 'BUICK', yval: -1 },
            { x: 3, xval: 'CETROEN', yval: -6 },
            { x: 4, xval: 'CHEVROLET', yval: 0 },
            { x: 5, xval: 'FIAT', yval: 1 },
            { x: 6, xval: 'FORD', yval: -2 },
            { x: 7, xval: 'HONDA', yval: 7 },
            { x: 8, xval: 'HYUNDAI', yval: -9 },
            { x: 9, xval: 'JEEP', yval: 0 },
            { x: 10, xval: 'KIA', yval: -10 },
            { x: 11, xval: 'MAZDA', yval: 3 }
    ];
};


