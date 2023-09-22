

import { Component, OnInit } from '@angular/core';
import { Maps, Marker, Zoom } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';
Maps.Inject(Marker, Zoom);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container'  [zoomSettings] ='zoomSettings'>
    <e-layers>
    <e-layer  [shapeData]= 'shapeData' [markerSettings] = 'markerSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    public shapeData?: object;
    public markerSettings?: object;
    public zoomSettings?: object
    ngOnInit(): void {
        this.shapeData = world_map;
        this.markerSettings = [
        {
            visible: true,
            dataSource: [
                { latitude: 49.95121990866204, longitude: 18.468749999999998, name:'Europe' },
                { latitude: 59.88893689676585, longitude: -109.3359375, name:'North America' },
                { latitude: -6.64607562172573, longitude: -55.54687499999999, name:'South America'}
            ],
        },
        ];
        this.zoomSettings = {
            enable: true,
            horizontalAlignment:'Near',
            shouldZoomInitially: true
    }
   }
}


