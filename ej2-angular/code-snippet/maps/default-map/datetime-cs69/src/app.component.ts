import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule } from '@syncfusion/ej2-angular-maps'
import { MarkerService } from '@syncfusion/ej2-angular-maps'



import { Component, OnInit } from '@angular/core';
import { world_map } from './world-map';
@Component({
imports: [
         MapsModule
    ],

providers: [MarkerService],
standalone: true,
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
            latitudeValuePath: 'latitude',
            longitudeValuePath: 'longitude',
            dataSource: [
                { latitude: 49.95121990866204, longitude: 18.468749999999998 },
                { latitude: 59.88893689676585, longitude: -109.3359375},
                { latitude: -6.64607562172573, longitude: -55.54687499999999 }
            ]
        }]
   }
}


