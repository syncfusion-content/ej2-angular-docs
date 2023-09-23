


import { Component, Inject, OnInit } from '@angular/core';
import { Maps, Zoom, Marker, NavigationLine } from '@syncfusion/ej2-angular-maps';
Maps.Inject(Zoom, Marker, NavigationLine);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' style='display:block' [zoomSettings]='zoomSettings' [centerPosition]='centerPosition'>
     <e-layers>
    <e-layer [urlTemplate]= 'urlTemplate' [markerSettings]='markerSettings' [navigationLineSettings]='navigationLineSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})
export class AppComponent implements OnInit {
    public zoomSettings?: object;
    public centerPosition?: object;
    public markerSettings?: object;
    public navigationLineSettings?: object;
    public urlTemplate?: string;
    ngOnInit(): void {
           this.urlTemplate = 'https://tile.openstreetmap.org/level/tileX/tileY.png';
           this.zoomSettings = {
               zoomFactor: 4
           };
           this.centerPosition = {
               latitude: 29.394708,
                longitude: -94.954653
           };
            this.markerSettings = [{
                visible: true,
                height: 25,
                width: 15,
                dataSource: [
                    {
                        latitude: 34.060620,
                        longitude: -118.330491,
                        name: "California"
                    },
                    {
                        latitude: 40.724546,
                        longitude: -73.850344,
                        name: "New York"
                    }
                ]
            }];
            this.navigationLineSettings = [{
                visible: true,
                color: "blue",
                width: 5,
                angle: 0.1,
                latitude: [34.060620, 40.724546],
                longitude: [-118.330491,-73.850344]
            }];
    }
}



