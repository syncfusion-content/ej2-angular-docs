

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-sparkline id='container'width='130px' height='150px' type='Column'  valueType='Category' [dataSource]="data" xName="xval" yName="yval">
    </ejs-sparkline>`
})
export class AppComponent {
    public data: object[] = [
            { x: 0, xval: 'Robert', yval: 60 },
            { x: 1, xval: 'Andrew', yval: 65 },
            { x: 2, xval: 'Suyama', yval: 70 },
            { x: 3, xval: 'Michael', yval: 80 },
            { x: 4, xval: 'Janet', yval: 55 },
            { x: 5, xval: 'Davolio', yval: 90 },
            { x: 6, xval: 'Fuller', yval: 75 },
            { x: 7, xval: 'Nancy', yval: 85 }
    ];
};


