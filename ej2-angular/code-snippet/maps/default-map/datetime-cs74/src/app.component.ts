import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule } from '@syncfusion/ej2-angular-maps'
import { MarkerService, MapsTooltipService } from '@syncfusion/ej2-angular-maps'



import { Component, OnInit } from '@angular/core';
import { usa_map } from './usa';
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
    <e-layer  [shapeData]= 'shapeData' [markerSettings] = 'markerSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    public shapeData?: object;
    public markerSettings?: object;
    ngOnInit(): void {
        this.shapeData = usa_map;
        this.markerSettings = [{
            dataSource: [
                { latitude: 40.7424509, longitude: -74.0081468, city: 'New York' }
            ],
            visible:true,
            shape:'Circle',
            fill:'white',
            width:3,
            animationDuration:0,
            border: { width:2, color:'green'},
            tooltipSettings: {
                visible: true,
                valuePath:'city'
            }
        }]
   }
}


