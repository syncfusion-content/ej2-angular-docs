

import { Component, OnInit } from '@angular/core';
import { Maps, Marker, Legend } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';
Maps.Inject(Marker, Legend);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container'  [legendSettings] ='legendSettings'>
    <e-layers>
    <e-layer  [shapeData]= 'shapeData' [markerSettings] = 'markerSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    public shapeData?: object;
    public markerSettings?: object;
    public legendSettings?: object;
    ngOnInit(): void {
        this.shapeData = world_map;
        this.markerSettings = [{
            visible: true,
            legendText: 'city',
            dataSource: [
                { latitude: 37.0000, longitude: -120.0000, city: 'California' },
                { latitude: 40.7127, longitude: -74.0059, city: 'New York' },
                { latitude: 42, longitude: -93, city: 'Iowa' }
            ]
        }];
        this.legendSettings = {
            visible: true,
            type: 'Markers'
        }
    }
}


