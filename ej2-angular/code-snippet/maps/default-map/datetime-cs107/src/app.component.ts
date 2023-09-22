


import { Component, OnInit } from '@angular/core';
import { Maps, Zoom } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';
Maps.Inject(Zoom);
@Component({
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