


import { Component, Inject, OnInit } from '@angular/core';
import { Maps, Zoom } from '@syncfusion/ej2-angular-maps';
Maps.Inject(Zoom);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' style='display:block' [zoomSettings]='zoomSettings'>
     <e-layers>
    <e-layer [urlTemplate]= 'urlTemplate'></e-layer>
    </e-layers>
    </ejs-maps>`
})
export class AppComponent implements OnInit {
    public zoomSettings?: object;
    public urlTemplate?: string;
    ngOnInit(): void {
           this.urlTemplate = 'https://tile.openstreetmap.org/level/tileX/tileY.png';
           this.zoomSettings = {
              enable: true,
              toolbars: ["Zoom", "ZoomIn", "ZoomOut", "Pan", "Reset"]
           }
    }
}



