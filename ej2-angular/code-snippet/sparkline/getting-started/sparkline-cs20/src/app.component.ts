

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-sparkline id='container' width='350px' height='200px' [axisSettings]='axisSettings' [markerSettings]='markerSettings' lowPointColor= 'red' highPointColor= 'blue' [dataSource]="data" >
    </ejs-sparkline>`
})
export class AppComponent {
    public data: object[] = [3, 6, 4, 1, 3, 2, 5] as any;
    public axisSettings: object ={
        minX: -1, maxX: 7, maxY: 7, minY: -1
    };
    public markerSettings: object ={
        visible: ['High', 'Low']
    };
};


