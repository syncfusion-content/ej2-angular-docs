import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule } from '@syncfusion/ej2-angular-maps'




import { Component, OnInit } from '@angular/core';
import { usa_map } from './usa';
import { world_map } from './world-map';

@Component({
imports: [
         MapsModule
    ],
standalone: true,
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' [baseLayerIndex] ='baseLayerIndex'>
     <e-layers>
    <e-layer [shapeData] = 'shapeData'></e-layer>
    <e-layer [shapeData] = 'shapeData1'></e-layer>
    </e-layers>
    </ejs-maps>`
})
export class AppComponent implements OnInit {
    public shapeData?: object;
    public shapeData1?: object;
    public baseLayerIndex?: number;
    ngOnInit(): void {
        this.shapeData = world_map;
        this.shapeData1 = usa_map;
        this.baseLayerIndex = 1;
    }
}



