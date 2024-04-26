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
                tooltipSettings:{
                    visible:true,
                    borderWidth:2,
                    borderColor:'green',
                    fontColor:'black',
                    fill:'violet',
                    fontFamily:'Times New Roman',
                    fontWeight:200,
                    fontSize:'22px',
                    fontOpacity:1
                },
                buttonSettings: {
                   toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset']
                }
            }
        };
        this.shapeSettings = {
            fill: '#C1DFF5'
        }
        this.shapeData = world_map;
    }
}