import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule } from '@syncfusion/ej2-angular-maps'
import { MarkerService, MapsTooltipService } from '@syncfusion/ej2-angular-maps'

import { Component, OnInit } from '@angular/core';
import { world_map } from './world-map';
@Component({
imports: [
         MapsModule
    ],

providers: [MarkerService, MapsTooltipService],
standalone: true,
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container'>
    <e-layers>
    <e-layer [shapeSettings] = 'shapeSettings'  [shapeData]= 'shapeData' [markerSettings] = 'markerSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    public shapeData?: object;
    public markerSettings?: object;
    public shapeSettings?: object;
    ngOnInit(): void {
        this.shapeData = world_map;
        this.shapeSettings = {
            fill: '#C3E6ED'
        };
        this.markerSettings = [{
            enableDrag: true,
            dataSource: [
                 { latitude: 49.95121990866204, longitude: 18.468749999999998, name:'MarkerOne' },
                 { latitude: 59.88893689676585, longitude: -109.3359375, name:'MarkerTwo'},
                 { latitude: -6.64607562172573, longitude: -55.54687499999999 , name:'MarkerThree'},
                 { latitude: 23.644385824912135, longitude: 77.83189239539234  , name:'MarkerFour'},
                 { latitude: 63.66569332894224, longitude: 98.2225173953924 , name:'MarkerFive'}
            ],
            visible: true,
            animationDuration: 0,
            shape: 'Balloon',
            width: 20,
            height: 20,
            border: { width: 2, color: '#285255' },
            tooltipSettings: {
                visible: true,
                valuePath: 'name',
            }
        }]
   }
}


