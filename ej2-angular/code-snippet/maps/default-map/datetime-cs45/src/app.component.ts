

import { Component, ViewEncapsulation } from '@angular/core';
import { world_map } from './world-map';

@Component({
    selector: 'app-container',
    // specifies the template string for the maps component
    template:`<ejs-maps id='rn-container' [zoomSettings]='zoomSettings' [centerPosition]='centerPosition' style="display:block;">
    <e-layers>
    <e-layer [shapeData]='worldmap'></e-layer>
    </e-layers>
    </ejs-maps>`,
    encapsulation: ViewEncapsulation.None
  })
export class AppComponent {
    public worldmap:object = world_map;
    public zoomSettings:object = {
        enable:true,
        zoomFactor:13,
        maxZoom: 25
    };
    public centerPosition:object = {
        latitude: 25.54244147012483,
        longitude: -89.62646484375
    }
}


 