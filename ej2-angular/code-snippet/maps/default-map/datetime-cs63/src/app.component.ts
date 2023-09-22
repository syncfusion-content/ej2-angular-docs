

import { Component, OnInit } from '@angular/core';
import { Maps, Marker } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';
Maps.Inject(Marker);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container'  >
    <e-layers>
    <e-layer  [shapeData]= 'shapeData' [markerSettings] = 'markerSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    public shapeData?: object;
    public markerSettings?: object;
    ngOnInit(): void {
        this.shapeData = world_map;
        this.markerSettings = [{
            visible: true,
            height: 20,
            width: 20,
            dataSource: [
                { latitude: 49.95121990866204, longitude: 18.468749999999998 },
                { latitude: 59.88893689676585, longitude: -109.3359375 },
                { latitude: -6.64607562172573, longitude: -55.54687499999999 }
            ],
            animationDuration: 0,
        }]
   }
}


