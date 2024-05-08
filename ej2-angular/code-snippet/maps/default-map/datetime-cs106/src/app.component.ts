import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule } from '@syncfusion/ej2-angular-maps'
import { ZoomService } from '@syncfusion/ej2-angular-maps'




import { Component, OnInit } from '@angular/core';
import { world_map } from './world-map';

@Component({
imports: [
         MapsModule
    ],

providers: [ZoomService],
standalone: true,
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' [zoomSettings] = 'zoomSettings'>
     <e-layers>
    <e-layer [shapeData] = 'shapeData' [shapeSettings]="shapeSettings"></e-layer>
    </e-layers>
    </ejs-maps>`
})
export class AppComponent implements OnInit {
    public zoomSettings?: object;
    public shapeSettings?: object;
    public shapeData?: object;
    ngOnInit(): void {
        this.zoomSettings = {
            enable: true,
            toolbarSettings:{
                buttonSettings: {
                   fill:'pink',
                   padding: 10,
                   toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'],
                   color: 'red',
                   borderColor:'green',
                   radius:35,
                   selectionColor:'#d55e5e',
                   hightlightColor:'#5ed59a',
                   opacity:0.6,
                   borderWidth: 2
                }
            }
        };
        this.shapeSettings = {
            fill: '#C1DFF5'
        }
        this.shapeData = world_map;
    }
}



